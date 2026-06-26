// Setup screen — the foundation the whole journey builds on. Collects profile,
// credit report, and the three identity documents bureaus require to process a
// dispute (driver's license, SSN proof, proof of address). Composes DS Card,
// Input, Select, Button, Icon.
const { Icon: UIcon, Button: UButton, Card: UCard, Input: UInput, Select: USelect } = window.DisputeGatorDesignSystem_dde977;

const US_STATES = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'];

function SectionHead({ icon, n, title, sub }) {
  return (
    <div style={{ marginBottom: sub ? 14 : 4 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
        <span style={{ color: 'var(--green-600)', display: 'grid', placeItems: 'center' }}><UIcon name={icon} size={22} /></span>
        <h2 style={{ margin: 0, fontSize: 17, fontWeight: 700, color: 'var(--ink)' }}>{n}. {title}</h2>
      </div>
      {sub && <p style={{ margin: '8px 0 0 33px', color: 'var(--ink-3)', fontSize: 13.5, lineHeight: 1.5, maxWidth: 620 }}>{sub}</p>}
    </div>
  );
}

// Modal to straighten/rotate a dropped photo before it's submitted.
function AdjustModal({ url, name, onCancel, onConfirm }) {
  const [rot, setRot] = React.useState(0);
  const [zoom, setZoom] = React.useState(1);
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onCancel(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onCancel]);
  const ctrlBtn = { width: 40, height: 40, borderRadius: 10, border: '1px solid var(--border)', background: '#fff', cursor: 'pointer', display: 'grid', placeItems: 'center', color: 'var(--ink-2)' };
  const bake = () => {
    const img = new Image();
    img.onload = () => {
      try {
        const r = ((rot % 360) + 360) % 360;
        const swap = r === 90 || r === 270;
        const w = img.naturalWidth, h = img.naturalHeight;
        const cw = swap ? h : w, ch = swap ? w : h;
        const c = document.createElement('canvas'); c.width = cw; c.height = ch;
        const ctx = c.getContext('2d');
        ctx.translate(cw / 2, ch / 2); ctx.rotate(r * Math.PI / 180); ctx.drawImage(img, -w / 2, -h / 2);
        onConfirm(c.toDataURL('image/jpeg', 0.85));
      } catch (e) { onConfirm(url); }
    };
    img.onerror = () => onConfirm(url);
    img.src = url;
  };
  return (
    <div onClick={onCancel} style={{ position: 'fixed', inset: 0, zIndex: 60, background: 'rgba(15,23,32,.55)', display: 'grid', placeItems: 'center', padding: 24 }}>
      <div onClick={(e) => e.stopPropagation()} style={{ width: 'min(520px, 94vw)', background: '#fff', borderRadius: 18, boxShadow: '0 24px 60px rgba(0,0,0,.3)', overflow: 'hidden' }}>
        <div style={{ padding: '18px 22px', borderBottom: '1px solid var(--border)' }}>
          <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--ink)' }}>Straighten your document</div>
          <div style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 4 }}>Rotate so the text is upright and all four corners are visible.</div>
        </div>
        <div style={{ background: '#eef1f6', padding: 20, display: 'grid', placeItems: 'center', minHeight: 240, overflow: 'hidden' }}>
          <img src={url} alt={name} style={{ maxWidth: '100%', maxHeight: 260, transform: `rotate(${rot}deg) scale(${zoom})`, transition: 'transform .18s ease', borderRadius: 6, boxShadow: '0 6px 20px rgba(0,0,0,.18)' }} />
        </div>
        <div style={{ padding: '16px 22px', display: 'flex', alignItems: 'center', gap: 14 }}>
          <button onClick={() => setRot((r) => r - 90)} title="Rotate left" style={ctrlBtn}><span style={{ display: 'grid', transform: 'scaleX(-1)' }}><UIcon name="refresh" size={18} /></span></button>
          <button onClick={() => setRot((r) => r + 90)} title="Rotate right" style={ctrlBtn}><UIcon name="refresh" size={18} /></button>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 10 }}>
            <UIcon name="scale" size={15} />
            <input type="range" min="1" max="2" step="0.01" value={zoom} onChange={(e) => setZoom(parseFloat(e.target.value))} style={{ flex: 1, accentColor: 'var(--green-600)' }} />
          </div>
        </div>
        <div style={{ padding: '14px 22px 20px', display: 'flex', justifyContent: 'flex-end', gap: 10, borderTop: '1px solid var(--border)' }}>
          <UButton variant="ghost" onClick={onCancel}>Cancel</UButton>
          <UButton variant="primary" onClick={bake}>Looks good</UButton>
        </div>
      </div>
    </div>
  );
}

// Simulated document classifier. In production this is OCR + document
// classification on the server reading the actual content; here we infer the
// document type from the filename so the slot can reject an obvious mismatch.
const DOC_KINDS = {
  license: { match: /licen|driver|dmv|state[\W_]?id|\bid[\W_]?card|govt[\W_]?id|government[\W_]?id|passport|permit/i, label: 'a photo ID' },
  ssn: { match: /ssn|social[\W_]?sec|ss[\W_]?card|\bssa|tax[\W_]?id|itin/i, label: 'a Social Security card' },
  address: { match: /util|bill|lease|invoice|electric|\bwater\b|\bgas\b|mortgage|bank[\W_]?statement|statement|address|residen/i, label: 'a utility bill or statement' },
};
function classifyDoc(name) {
  const n = name || '';
  for (const k of Object.keys(DOC_KINDS)) if (DOC_KINDS[k].match.test(n)) return k;
  return null; // unrecognized — give benefit of the doubt (OCR would read content)
}

// Compact identity-document upload slot with a verifying → verified pass.
function DocSlot({ icon, label, hint, accept, check, tips, kind, value, onChange }) {
  const doc = value;
  const setDoc = onChange;
  const [drag, setDrag] = React.useState(false);
  const [tip, setTip] = React.useState(false);
  const [pending, setPending] = React.useState(null); // { name, url } awaiting adjust
  const ref = React.useRef(null);
  const verify = (name, thumb) => {
    setDoc({ name, thumb, status: 'checking' });
    setTimeout(() => {
      const detected = classifyDoc(name);
      if (kind && detected && detected !== kind) {
        setDoc({ name, thumb, status: 'rejected', detail: `This looks like ${DOC_KINDS[detected].label}. We need your ${label}.` });
      } else {
        setDoc({ name, thumb, status: 'verified', detail: check });
      }
    }, 1400);
  };
  const pick = (f) => {
    if (!f) return;
    const isImage = (f.type || '').startsWith('image/') || /\.(jpe?g|png|heic|webp)$/i.test(f.name || '');
    if (isImage) {
      let url = '';
      try { url = URL.createObjectURL(f); } catch (e) { url = ''; }
      if (url) { setPending({ name: f.name, url }); return; }
    }
    verify(f.name, null); // PDFs (or no preview) skip the adjust step
  };
  const checking = doc && doc.status === 'checking';
  const rejected = doc && doc.status === 'rejected';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
      {pending && (
        <AdjustModal
          url={pending.url}
          name={pending.name}
          onCancel={() => { try { URL.revokeObjectURL(pending.url); } catch (e) {} setPending(null); }}
          onConfirm={(baked) => { const n = pending.name; const u = baked || pending.url; setPending(null); verify(n, u); }}
        />
      )}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
        <span style={{ color: 'var(--green-600)', display: 'grid', placeItems: 'center' }}><UIcon name={icon} size={17} /></span>
        <span style={{ fontWeight: 700, fontSize: 14, color: 'var(--ink)' }}>{label}</span>
        {tips && tips.length > 0 && (
          <span
            onMouseEnter={() => setTip(true)}
            onMouseLeave={() => setTip(false)}
            style={{ position: 'relative', display: 'grid', placeItems: 'center', width: 16, height: 16, borderRadius: '50%', border: '1.4px solid var(--ink-3)', color: 'var(--ink-3)', fontSize: 11, fontWeight: 800, cursor: 'help', flex: 'none', lineHeight: 1 }}
          >?
            {tip && (
              <div style={{ position: 'absolute', bottom: 'calc(100% + 9px)', left: '50%', transform: 'translateX(-50%)', width: 230, background: '#fff', color: 'var(--ink)', borderRadius: 10, padding: '11px 13px', border: '1px solid var(--border)', boxShadow: '0 12px 30px rgba(15,23,32,.14)', zIndex: 40, textAlign: 'left', cursor: 'default' }}>
                <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: 6 }}>Accepted</div>
                {tips.map((t) => (
                  <div key={t} style={{ display: 'flex', gap: 7, alignItems: 'flex-start', fontSize: 12.5, lineHeight: 1.4, fontWeight: 500, color: 'var(--ink-2)', padding: '2px 0' }}>
                    <span style={{ color: 'var(--green-600)', flex: 'none', marginTop: 1 }}><UIcon name="check" size={13} /></span>{t}
                  </div>
                ))}
                <span style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', width: 0, height: 0, borderLeft: '7px solid transparent', borderRight: '7px solid transparent', borderTop: '7px solid #fff', filter: 'drop-shadow(0 1px 0 var(--border))' }} />
              </div>
            )}
          </span>
        )}
      </div>
      {doc ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '13px 14px', border: `1px solid ${checking ? '#dbe6f2' : rejected ? '#f3cdcd' : '#cfe0d6'}`, background: checking ? '#f6f9fd' : rejected ? '#fdf3f3' : '#f3faf5', borderRadius: 12, flex: 1 }}>
          {doc.thumb ? (
            <span style={{ width: 56, height: 56, borderRadius: 10, flex: 'none', overflow: 'hidden', display: 'grid', placeItems: 'center', background: '#fff', border: '1px solid var(--border)', position: 'relative' }}>
              <img src={doc.thumb} alt={doc.name} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: checking ? 'grayscale(.4) brightness(.92)' : rejected ? 'grayscale(.5)' : 'none' }} />
              {checking ? (
                <span className="spin" style={{ position: 'absolute', borderColor: 'rgba(255,255,255,.55)', borderTopColor: '#fff' }} />
              ) : rejected ? (
                <span style={{ position: 'absolute', right: -5, bottom: -5, width: 22, height: 22, borderRadius: '50%', background: '#d93b3b', border: '2px solid #fff', display: 'grid', placeItems: 'center', color: '#fff', fontWeight: 800, fontSize: 14, lineHeight: 1, boxShadow: '0 1px 4px rgba(0,0,0,.18)' }}>!</span>
              ) : (
                <span style={{ position: 'absolute', right: -5, bottom: -5, width: 22, height: 22, borderRadius: '50%', background: 'var(--green-600)', border: '2px solid #fff', display: 'grid', placeItems: 'center', color: '#fff', boxShadow: '0 1px 4px rgba(0,0,0,.18)' }}><UIcon name="check" size={12} stroke={3} /></span>
              )}
            </span>
          ) : (
            <span style={{ width: 34, height: 34, borderRadius: 9, flex: 'none', display: 'grid', placeItems: 'center', background: checking ? '#e7eef7' : rejected ? '#fbe2e2' : '#dcf3e4', color: rejected ? '#d93b3b' : 'var(--green)' }}>
              {checking ? <span className="spin" style={{ borderColor: 'rgba(22,163,74,.30)', borderTopColor: 'var(--green-600)' }} /> : rejected ? <span style={{ fontWeight: 800, fontSize: 17 }}>!</span> : <UIcon name="checkCircle" size={18} />}
            </span>
          )}
          <div style={{ minWidth: 0, flex: 1 }}>
            <div style={{ fontWeight: 600, fontSize: 13, color: 'var(--ink)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{doc.name}</div>
            <div style={{ fontSize: 11.5, color: checking ? 'var(--ink-3)' : rejected ? '#c43030' : 'var(--green-700)', marginTop: 1, fontWeight: 600, lineHeight: 1.35, whiteSpace: rejected ? 'normal' : 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{checking ? 'Reading document…' : (doc.detail || 'Verified')}</div>
            {rejected && <button onClick={() => { setDoc(null); setTimeout(() => ref.current && ref.current.click(), 0); }} style={{ marginTop: 6, background: '#d93b3b', border: 'none', color: '#fff', fontSize: 11.5, fontWeight: 700, padding: '5px 11px', borderRadius: 7, cursor: 'pointer' }}>Re-upload</button>}
          </div>
          {!checking && <button onClick={() => setDoc(null)} style={{ background: 'none', border: 'none', padding: 4, cursor: 'pointer', color: 'var(--muted)', display: 'grid', placeItems: 'center', alignSelf: rejected ? 'flex-start' : 'center' }} title="Remove"><UIcon name="close" size={15} /></button>}
        </div>
      ) : (
        <div
          onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
          onDragLeave={() => setDrag(false)}
          onDrop={(e) => { e.preventDefault(); setDrag(false); pick(e.dataTransfer.files[0]); }}
          onClick={() => ref.current && ref.current.click()}
          style={{ border: `1.5px dashed ${drag ? 'var(--green-600)' : '#c5d3ea'}`, background: drag ? 'var(--green-50)' : '#f7f9fd', borderRadius: 12, padding: '20px 14px', textAlign: 'center', cursor: 'pointer', transition: '.15s ease', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        >
          <input ref={ref} type="file" accept={accept} hidden onChange={(e) => pick(e.target.files[0])} />
          <span style={{ color: 'var(--green-600)', display: 'inline-grid', placeItems: 'center' }}><UIcon name="uploadCloud" size={26} stroke={1.7} /></span>
          <div style={{ fontWeight: 600, fontSize: 12.5, color: 'var(--green-700)', marginTop: 7 }}>Upload or drop file</div>
          <div style={{ color: 'var(--muted)', fontSize: 11.5, marginTop: 3 }}>{hint}</div>
        </div>
      )}
    </div>
  );
}

function UploadScreen({ onAnalyze, controlledTab, onTabChange, embedded, hideAside }) {
  const [file, setFile] = React.useState({ name: '3-Bureau Credit Report & Scores _ SmartCredit.pdf', size: 1258291 });
  const [drag, setDrag] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [elapsed, setElapsed] = React.useState(0);
  const [tabState, setTabState] = React.useState('profile');
  const tab = controlledTab || tabState;
  const setTab = onTabChange || setTabState;
  const [showAll, setShowAll] = React.useState(false);
  const [profile, setProfile] = React.useState({ first: 'Chad', last: 'Nicely', email: 'chad@chadnicely.com', phone: '(813) 555-0142', dob: '04/12/1985', ssn: '••• •• 4417', address: '2847 Bayshore Blvd', city: 'Tampa', state: 'FL', zip: '33629' });
  const [docs, setDocs] = React.useState({ license: null, ssn: null, address: null });
  const inputRef = React.useRef(null);
  const TABS = [
    { key: 'profile', label: 'Profile', icon: 'user', title: 'Complete Profile', sub: 'Tell us who you are — this personalizes every dispute letter.' },
    { key: 'report', label: 'Credit Report', icon: 'fileText', title: 'Pull Credit Report', sub: 'Upload your 3-bureau report so we can find every disputable item.' },
    { key: 'identity', label: 'Verify Identity', icon: 'shield', title: 'Verify Identity', sub: 'Add the ID documents the bureaus require to process a dispute.' },
  ];
  const setP = (k) => (e) => setProfile((p) => ({ ...p, [k]: e.target.value }));
  const setDoc = (k) => (v) => setDocs((d) => ({ ...d, [k]: v }));
  const profileDone = Object.values(profile).every((v) => String(v).trim());
  const identityDone = [docs.license, docs.ssn, docs.address].every((d) => d && d.status === 'verified');
  const tabDone = tab === 'profile' ? profileDone : tab === 'report' ? !!file : identityDone;

  const pick = (f) => { if (f) setFile({ name: f.name, size: f.size }); };
  // The analysis progress now runs inside the Congrats popup window, so just open it.
  const run = () => { onAnalyze(); };

  return (
    <div style={{ padding: embedded ? '0' : 'clamp(24px,3.5vw,40px) clamp(20px,3vw,40px) 40px' }}>
      {!embedded && (() => { const at = TABS.find((t) => t.key === tab) || TABS[0]; return (
      <div style={{ marginBottom: 26 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 12.5, fontWeight: 600, color: 'var(--ink-3)', marginBottom: 14 }}>
          <span onClick={() => setTab('profile')} style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 5, color: 'var(--ink-3)' }}><UIcon name="home" size={13} />Setup</span>
          <span style={{ color: 'var(--border)' }}><UIcon name="chevronRight" size={13} /></span>
          <span style={{ color: 'var(--ink)', fontWeight: 700 }}>{at.title}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'stretch', gap: 30, marginBottom: 22, borderBottom: '1px solid var(--border)' }}>
          {TABS.map((t, i) => {
            const on = tab === t.key;
            return (
              <div key={t.key} onClick={() => setTab(t.key)} style={{ display: 'flex', alignItems: 'center', gap: 9, flex: 'none', cursor: 'pointer', padding: '0 2px 13px', borderBottom: `2.5px solid ${on ? 'var(--green-600)' : 'transparent'}`, marginBottom: -1 }}>
                <span style={{ width: 24, height: 24, borderRadius: '50%', flex: 'none', display: 'grid', placeItems: 'center', fontSize: 12.5, fontWeight: 800, background: on ? 'var(--green-600)' : '#eef1f6', color: on ? '#fff' : 'var(--ink-3)' }}>{i + 1}</span>
                <span style={{ fontSize: 14, fontWeight: on ? 700 : 600, color: on ? 'var(--ink)' : 'var(--ink-3)', whiteSpace: 'nowrap' }}>{t.label}</span>
              </div>
            );
          })}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
          <div style={{ maxWidth: 600 }}>
            <h1 style={{ margin: 0, fontSize: 'clamp(28px,3.6vw,38px)', fontWeight: 800, letterSpacing: '-.02em', color: 'var(--ink)' }}>{at.title}</h1>
            <p style={{ margin: '10px 0 0', color: 'var(--ink-2)', fontSize: 15, lineHeight: 1.6, maxWidth: 560 }}>{at.sub}</p>
          </div>
          {!hideAside && (
          <div style={{ background: 'var(--green-50)', border: '1px solid var(--green-200)', borderRadius: 14, padding: '16px 18px', maxWidth: 290, color: 'var(--ink-2)', fontSize: 13.2, lineHeight: 1.55 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--green-800)', fontWeight: 700, marginBottom: 6 }}>
              <UIcon name="shield" size={17} /> We respect your privacy.
            </div>
            Your information is only used to personalize your dispute letters.
          </div>
          )}
        </div>
      </div>
      ); })()}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        {tab === 'profile' && (
        <UCard pad={28}>
          <SectionHead icon="user" n="1" title="Personal Information" />
          <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            <UInput label="First Name" placeholder="First Name" value={profile.first} onChange={setP('first')} />
            <UInput label="Last Name" placeholder="Last Name" value={profile.last} onChange={setP('last')} />
            <UInput label="Date of Birth" icon="calendar" placeholder="MM/DD/YYYY" value={profile.dob} onChange={setP('dob')} />
            <UInput label="Last 4 of SSN" icon="lock" placeholder="••• •• 1234" value={profile.ssn} onChange={setP('ssn')} />
          </div>
          <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <UInput label="Email Address" icon="mail" placeholder="you@example.com" value={profile.email} onChange={setP('email')} />
            <UInput label="Phone Number" icon="phone" placeholder="(555) 123-4567" value={profile.phone} onChange={setP('phone')} />
          </div>
          <div style={{ marginTop: 16 }}><UInput label="Address" placeholder="Street Address" value={profile.address} onChange={setP('address')} /></div>
          <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
            <UInput label="City" placeholder="City" value={profile.city} onChange={setP('city')} />
            <USelect label="State" placeholder="Select State" options={US_STATES} value={profile.state} onChange={setP('state')} />
            <UInput label="Zip Code" placeholder="Zip Code" value={profile.zip} onChange={setP('zip')} />
          </div>
        </UCard>
        )}

        {tab === 'report' && (<>
        <div style={{ background: 'var(--green-50)', border: '1px solid var(--green-200)', borderRadius: 14, padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 18, flexWrap: 'wrap' }}>
          <div style={{ minWidth: 240, flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--green-800)', fontWeight: 700, fontSize: 14.5, marginBottom: 4 }}>
              <UIcon name="fileText" size={17} /> Don't have your credit report yet?
            </div>
            <div style={{ fontSize: 13.2, color: 'var(--ink-2)', lineHeight: 1.55 }}>Get your free tri-bureau report from SmartCredit — download the PDF, then upload it below. Takes under 5 minutes.</div>
          </div>
          <a href="https://www.smartcredit.com" target="_blank" rel="noopener" style={{ textDecoration: 'none', flex: 'none' }}>
            <UButton variant="primary" iconRight="arrowRight">Get Free Report at SmartCredit</UButton>
          </a>
        </div>

        <UCard pad={28}>
          <SectionHead icon="file" n="2" title="Upload Credit Report" />
          <p style={{ margin: '6px 0 16px', color: 'var(--ink-3)', fontSize: 13.5 }}>
            Upload your credit report PDF from SmartCredit or <a href="https://www.annualcreditreport.com" target="_blank" rel="noopener" style={{ color: 'var(--green-600)', fontWeight: 600, textDecoration: 'none' }}>AnnualCreditReport.com</a>.
          </p>
          {file ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 18px', border: '1px solid #cfe0d6', background: '#f3faf5', borderRadius: 14 }}>
              <span style={{ width: 44, height: 44, borderRadius: 11, flex: 'none', display: 'grid', placeItems: 'center', background: '#dcf3e4', color: 'var(--green)' }}><UIcon name="fileText" size={22} /></span>
              <div style={{ minWidth: 0, flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: 14.5, color: 'var(--ink)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{file.name}</div>
                <div style={{ fontSize: 12.5, color: 'var(--ink-3)', marginTop: 2 }}>Ready to analyze</div>
              </div>
              <UButton variant="ghost" size="sm" icon="close" onClick={() => setFile(null)}>Remove</UButton>
            </div>
          ) : (
            <div
              onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
              onDragLeave={() => setDrag(false)}
              onDrop={(e) => { e.preventDefault(); setDrag(false); pick(e.dataTransfer.files[0]); }}
              onClick={() => inputRef.current && inputRef.current.click()}
              style={{ border: `1.6px dashed ${drag ? 'var(--green-600)' : '#c5d3ea'}`, background: drag ? 'var(--green-50)' : '#f7f9fd', borderRadius: 14, padding: '36px 20px', textAlign: 'center', cursor: 'pointer', transition: '.15s ease' }}
            >
              <input ref={inputRef} type="file" accept="application/pdf,.pdf" hidden onChange={(e) => pick(e.target.files[0])} />
              <span style={{ color: 'var(--green-600)', display: 'inline-grid', placeItems: 'center' }}><UIcon name="uploadCloud" size={46} stroke={1.7} /></span>
              <div style={{ fontWeight: 700, fontSize: 16, color: 'var(--ink)', marginTop: 10 }}>Drag &amp; drop your PDF file here</div>
              <div style={{ color: 'var(--muted)', fontSize: 13.5, margin: '8px 0 14px' }}>or</div>
              <UButton variant="primary" onClick={(e) => { e.stopPropagation(); pick({ name: 'TransUnion_Credit_Report.pdf', size: 482000 }); }}>Choose File</UButton>
            </div>
          )}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 14, color: 'var(--ink-3)', fontSize: 12.8 }}>
            <UIcon name="file" size={14} /> Accepted: PDF · Max size: 25 MB
          </div>
        </UCard>
        </>)}

        {tab === 'identity' && (
        <UCard pad={28}>
          <SectionHead icon="shield" n="3" title="Verify Your Identity" sub="The credit bureaus won't process a dispute without proof of who you are. Add these three — a clear photo or scan of each is fine." />
          <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: 16 }}>
            <DocSlot icon="user" kind="license" label="Driver's License" hint="Photo or PDF" accept="image/*,.pdf" check="Name matches · Valid through 2027" tips={["Driver's license", 'State or government photo ID', 'Passport', 'Military or tribal ID']} value={docs.license} onChange={setDoc('license')} />
            <DocSlot icon="lock" kind="ssn" label="Social Security Card" hint="Photo or PDF" accept="image/*,.pdf" check="Name & SSN match your profile" tips={['Social Security card', 'SSA-1099 benefits statement', 'W-2 or 1099 showing full SSN', 'Pay stub with full SSN']} value={docs.ssn} onChange={setDoc('ssn')} />
            <DocSlot icon="home" kind="address" label="Proof of Address" hint="Utility bill, lease" accept="image/*,.pdf" check="Address matches · Dated 12 days ago" tips={['Utility bill (dated within 60 days)', 'Bank or credit card statement', 'Signed lease or mortgage', 'Insurance statement']} value={docs.address} onChange={setDoc('address')} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 16, color: 'var(--ink-3)', fontSize: 12.8 }}>
            <UIcon name="info" size={14} /> Make sure every line of text is sharp and readable. Proof of address must show your name and match the address above (dated within 60 days).
          </div>

          <div style={{ marginTop: 16, borderTop: '1px solid var(--border)', paddingTop: 14 }}>
            <button onClick={() => setShowAll((v) => !v)} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 7, color: 'var(--green-700)', fontWeight: 700, fontSize: 13.5 }}>
              <UIcon name={showAll ? 'chevronDown' : 'chevronRight'} size={16} /> See all accepted documents
            </button>
            {showAll && (
              <div style={{ marginTop: 14 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1.1fr .7fr', gap: 24 }}>
                  {[
                    { t: 'Proof of Identification', c: 'var(--ink)', items: ["Valid driver's license", 'Social Security card', 'Pay stub', 'W2 / 1099 form', 'Court name-change documents', 'Birth certificate', 'Passport', 'Marriage certificate / divorce decree', 'State or military ID'] },
                    { t: 'Proof of Address', c: 'var(--ink)', items: ['Utility bill — gas, water, cable, phone', "Valid driver's license", 'Pay stub', 'W2 / 1099 form', 'Lease agreement / house deed', 'Mortgage statement', 'Bank statement', 'State ID'] },
                    { t: 'Other', c: 'var(--ink)', items: ['Social Security Number'] },
                  ].map((col) => (
                    <div key={col.t}>
                      <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: '.03em', textTransform: 'uppercase', color: col.c, marginBottom: 9 }}>{col.t}</div>
                      {col.items.map((it) => (
                        <div key={it} style={{ display: 'flex', gap: 7, fontSize: 12.8, color: 'var(--ink-2)', lineHeight: 1.4, padding: '3px 0' }}>
                          <span style={{ color: 'var(--muted)', flex: 'none' }}>•</span><span>{it}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 12, color: 'var(--ink-3)', fontSize: 12.5 }}>
                  <UIcon name="info" size={14} /> For best results the name and address should match across every document, and nothing should be older than 90 days.
                </div>
              </div>
            )}
          </div>
        </UCard>
        )}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 14, marginTop: 22 }}>
        {!tabDone && <span style={{ fontSize: 12.5, color: 'var(--ink-3)' }}>{tab === 'identity' ? 'Add all three documents to continue.' : 'Fill in every field to continue.'}</span>}
        <UButton variant="primary" icon={tab === 'identity' ? 'sparkle' : undefined} iconRight={tab !== 'identity' ? 'arrowRight' : undefined} disabled={!tabDone} onClick={tab === 'identity' ? run : () => { setTab(tab === 'profile' ? 'report' : 'identity'); window.scrollTo(0, 0); }} style={!tabDone ? { opacity: 0.45, cursor: 'not-allowed' } : undefined}>
          {tab === 'identity' ? 'Finish Setup & Analyze' : 'Continue'}
        </UButton>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 16, color: 'var(--muted)', fontSize: 12.8 }}>
        <UIcon name="lock" size={14} /> Your information is secure and never stored. We value your privacy.
      </div>
    </div>
  );
}

window.UploadScreen = UploadScreen;
// Reusable building blocks for the Profile & Documents (account) screen.
Object.assign(window, { DGDocSlot: DocSlot, DGSectionHead: SectionHead, DG_US_STATES: US_STATES });
