// Letter Tracking + History screens. Letter Tracking reflects letters the user
// marked "sent" (lifted state from App) with 30-day FCRA deadlines; empty until
// then. History lists every generated letter grouped by the analysis that made it.
const { Icon: TIcon, Button: TButton, BureauMark: TMark, BUREAUS: TBUREAUS } = window.DisputeGatorDesignSystem_dde977;

function fmtDate(d) { return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }); }
function addDays(d, n) { const x = new Date(d); x.setDate(x.getDate() + n); return x; }
function daysBetween(a, b) { return Math.round((b - a) / 86400000); }

// Split "Label: VALUE" creditor strings (e.g. "Unrecognized Address: 770 LANNI CT...") into a
// clean uppercased label + a title-cased detail line (matches the Dispute Letters formatting).
function splitCreditor(creditor) {
  const idx = creditor.indexOf(': ');
  if (!(idx > 0 && idx < 40)) return { title: creditor, detail: '' };
  const title = creditor.slice(0, idx).toUpperCase();
  const raw = creditor.slice(idx + 2);
  const tc = (s) => s.replace(/\b([A-Z])([A-Z]+)\b/g, (m, a, b) => a + b.toLowerCase());
  const detail = raw.replace(/^(.*?),\s*([^,]+),\s*([A-Z]{2})\s+(\d{5})/, (m, street, city, st, zip) => `${tc(street)}, ${tc(city)}, ${st} ${zip}`);
  return { title, detail };
}

function PageHead({ title, sub }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <h1 style={{ margin: 0, fontSize: 'clamp(28px,3.4vw,36px)', fontWeight: 800, letterSpacing: '-.02em', color: 'var(--ink)' }}>{title}</h1>
      <p style={{ margin: '8px 0 0', color: 'var(--ink-3)', fontSize: 14.5, lineHeight: 1.5 }}>{sub}</p>
    </div>
  );
}

/* ============================ Letter Tracking ============================ */
function SentLetterRow({ s, last }) {
  const sent = new Date(s.sentDate);
  const due = addDays(sent, 30);
  const left = Math.max(0, daysBetween(new Date(), due));
  const b = TBUREAUS[s.bureauKey];
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '15px 18px', borderBottom: last ? 'none' : '1px solid var(--border-2)' }}>
      <TMark bureau={s.bureauKey} size={34} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--ink)' }}>{s.creditor}</div>
        <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 2 }}>{b.name} · {s.disputeCategory}</div>
      </div>
      <div style={{ textAlign: 'right', flex: 'none' }}>
        <div style={{ fontSize: 12.5, color: 'var(--ink-2)' }}>Sent {fmtDate(sent)}</div>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 4, fontSize: 11.5, fontWeight: 700, padding: '3px 9px', borderRadius: 999, background: left <= 5 ? '#fdf0d5' : 'var(--green-100)', color: left <= 5 ? '#b45309' : 'var(--green-700)' }}>
          <TIcon name="clock" size={12} /> {left} days left · due {fmtDate(due)}
        </div>
      </div>
    </div>
  );
}

function LetterTracking({ sent, onNavigate }) {
  // group by sent date
  const groups = {};
  sent.forEach((s) => { (groups[s.sentDate] = groups[s.sentDate] || []).push(s); });
  const dates = Object.keys(groups).sort((a, b) => new Date(b) - new Date(a));
  return (
    <div style={{ padding: 'clamp(24px,3vw,40px) clamp(20px,3vw,44px) 48px', maxWidth: 1080 }}>
      <PageHead title="Letter Tracking" sub="Every batch of dispute letters you've sent, grouped by date, with FCRA response deadlines." />
      {sent.length === 0 ? (
        <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 18, boxShadow: 'var(--sh-card)', padding: 'clamp(40px,6vw,72px) 24px', textAlign: 'center' }}>
          <div style={{ fontSize: 52, lineHeight: 1, marginBottom: 14 }}>📫</div>
          <div style={{ fontWeight: 800, fontSize: 20, color: 'var(--ink)', marginBottom: 8 }}>No letters sent yet</div>
          <p style={{ color: 'var(--ink-3)', fontSize: 14.5, maxWidth: 380, margin: '0 auto 20px', lineHeight: 1.6 }}>Open your dispute letters and click “Mark as Sent” to start tracking the 30-day FCRA deadline.</p>
          <TButton variant="primary" onClick={() => onNavigate('letters')}>Go to Dispute Letters</TButton>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {dates.map((d) => (
            <div key={d} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, boxShadow: 'var(--sh-card)', overflow: 'hidden' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 18px', borderBottom: '1px solid var(--border-2)', background: '#f8fafc' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                  <span style={{ color: 'var(--green-600)' }}><TIcon name="calendar" size={16} /></span>
                  <span style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--ink)' }}>Sent {fmtDate(new Date(d))}</span>
                </div>
                <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--green-700)', background: 'var(--green-100)', borderRadius: 999, padding: '3px 11px' }}>{groups[d].length} letter{groups[d].length !== 1 ? 's' : ''}</span>
              </div>
              {groups[d].map((s, i) => <SentLetterRow key={i} s={s} last={i === groups[d].length - 1} />)}
            </div>
          ))}
        </div>
      )}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 28, color: 'var(--muted)', fontSize: 12.5 }}>
        <TIcon name="lock" size={13} /> Dispute records are stored securely and tied to your account only.
      </div>
    </div>
  );
}

/* ================================ History ================================ */
const BUREAU_ADDR = {
  experian:   ['Experian', 'P.O. Box 4500', 'Allen, TX 75013'],
  equifax:    ['Equifax Information Services LLC', 'P.O. Box 740256', 'Atlanta, GA 30374'],
  transunion: ['TransUnion LLC Consumer Dispute Center', 'P.O. Box 2000', 'Chester, PA 19016'],
};

function MailInstructionsModal({ item, onClose, onSent }) {
  const b = TBUREAUS[item.primaryBureau];
  const addr = BUREAU_ADDR[item.primaryBureau] || [b.name];
  const steps = [
    { t: 'Print the dispute letter', d: 'Use the Print button on the letter. It already includes your digital signature plus a copy of your driver’s license and proof of address — nothing to sign or attach.' },
    { t: 'Print the envelope', d: `Print the pre-addressed envelope (to ${b.name}) at home or at an office/print store, and add your return address in the top-left corner.` },
    { t: 'Send by certified mail', d: 'Take it to USPS and send Certified Mail with Return Receipt. Keep the green slip and tracking number — this is your proof the bureau received it.' },
    { t: 'Mark it as sent here', d: 'Once it’s in the mail, mark this letter as sent so we can start the 30-day FCRA response clock.' },
  ];
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(15,23,42,.5)', zIndex: 60, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '5vh 16px', overflowY: 'auto' }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: '#fff', borderRadius: 18, width: 'min(560px,100%)', boxShadow: '0 24px 60px rgba(15,23,42,.28)', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '18px 22px', borderBottom: '1px solid var(--border-2)' }}>
          <TMark bureau={item.primaryBureau} size={36} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--ink)' }}>Mail this letter yourself</div>
            <div style={{ fontSize: 12.5, color: 'var(--ink-3)', marginTop: 1 }}>{item.creditor} · {b.name} · {item.disputeCategory}</div>
          </div>
          <button onClick={onClose} style={{ width: 34, height: 34, borderRadius: 9, border: '1px solid var(--border)', background: '#fff', color: 'var(--ink-3)', display: 'grid', placeItems: 'center', cursor: 'pointer', flex: 'none' }}><TIcon name="close" size={17} /></button>
        </div>
        <div style={{ padding: '20px 22px', display: 'flex', flexDirection: 'column', gap: 14 }}>
          {steps.map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: 13 }}>
              <span style={{ flex: 'none', width: 26, height: 26, borderRadius: '50%', background: 'var(--green-50)', border: '1px solid var(--green-200)', color: 'var(--green-700)', display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: 13 }}>{i + 1}</span>
              <div><div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--ink)' }}>{s.t}</div><div style={{ fontSize: 12.5, color: 'var(--ink-3)', marginTop: 2, lineHeight: 1.5 }}>{s.d}</div></div>
            </div>
          ))}
          <div style={{ background: 'var(--card-soft)', border: '1px solid var(--border-2)', borderRadius: 12, padding: '13px 16px' }}>
            <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '.05em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 6 }}>Mail to</div>
            {addr.map((l, i) => <div key={i} style={{ fontSize: 13.5, fontWeight: i === 0 ? 700 : 500, color: 'var(--ink)', lineHeight: 1.45 }}>{l}</div>)}
          </div>
        </div>
        <div style={{ display: 'flex', gap: 10, padding: '0 22px 22px' }}>
          <TButton variant="ghost" onClick={() => window.print()}><TIcon name="print" size={15} /> Print letter &amp; envelope</TButton>
          <TButton variant="primary" onClick={onSent}><TIcon name="check" size={15} /> I’ve mailed it — mark sent</TButton>
        </div>
      </div>
    </div>
  );
}

function LetterViewModal({ item, onClose }) {
  const b = TBUREAUS[item.primaryBureau];
  const bk = b ? item.primaryBureau : 'experian';
  const text = (window.buildLetter ? window.buildLetter(bk, item) : '');
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(15,23,42,.5)', zIndex: 60, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '5vh 16px', overflowY: 'auto' }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: '#fff', borderRadius: 18, width: 'min(680px,100%)', boxShadow: '0 24px 60px rgba(15,23,42,.28)', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '18px 22px', borderBottom: '1px solid var(--border-2)' }}>
          <TMark bureau={item.primaryBureau} size={36} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--ink)' }}>{item.creditor}</div>
            <div style={{ fontSize: 12.5, color: 'var(--ink-3)', marginTop: 1 }}>{b ? b.name : ''} · {item.disputeCategory}</div>
          </div>
          <button onClick={onClose} style={{ width: 34, height: 34, borderRadius: 9, border: '1px solid var(--border)', background: '#fff', color: 'var(--ink-3)', display: 'grid', placeItems: 'center', cursor: 'pointer', flex: 'none' }}><TIcon name="close" size={17} /></button>
        </div>
        <div style={{ padding: '20px 24px', maxHeight: '60vh', overflowY: 'auto' }}>
          <pre style={{ margin: 0, fontFamily: '"SF Mono", ui-monospace, Menlo, monospace', fontSize: 12, lineHeight: 1.6, color: 'var(--ink)', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{text}</pre>
        </div>
        <div style={{ display: 'flex', gap: 10, padding: '0 22px 22px' }}>
          <TButton variant="primary" onClick={() => window.print()}><TIcon name="print" size={15} /> Print letter</TButton>
          <TButton variant="ghost" onClick={onClose}>Close</TButton>
        </div>
      </div>
    </div>
  );
}

const OUTCOME = {
  removed: { label: 'Removed', tone: 'var(--green-700)', bg: 'var(--green-50)', bd: 'var(--green-300, #bbf7d0)', icon: 'checkCircle' },
  updated: { label: 'Updated', tone: '#1d4ed8', bg: '#eff6ff', bd: '#bfdbfe', icon: 'refresh' },
  nochange: { label: 'Still there', tone: '#b45309', bg: '#fffbeb', bd: '#fde68a', icon: 'alert' },
};

function AnalysisLetters({ items, autoMailed, onRemove, sent, setSent, outcome, setOutcome, canMark }) {
  const [view, setView] = React.useState(null);
  const [hover, setHover] = React.useState(null);
  return (
    <div style={{ borderTop: '1px solid var(--border-2)' }}>
      {items.map((it, i) => {
        const b = TBUREAUS[it.primaryBureau];
        const isSent = autoMailed || sent[i];
        const when = autoMailed ? 'by partner' : sent[i];
        return (
          <div key={i} onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover((h) => (h === i ? null : h))} style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 12, padding: '11px 18px 11px 46px', borderBottom: i === items.length - 1 ? 'none' : '1px solid var(--border-2)', background: hover === i ? 'var(--card-soft)' : 'transparent' }}>
            <TMark bureau={it.primaryBureau} size={26} />
            <div style={{ flex: 1, minWidth: 0 }}>
              {(() => { const { title, detail } = splitCreditor(it.creditor); return (<>
                <div style={{ fontWeight: 600, fontSize: 13, color: 'var(--ink)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', textDecoration: outcome[i] ? 'line-through' : 'none' }}>{title}</div>
                <div style={{ fontSize: 11.5, color: 'var(--ink-3)', marginTop: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{detail ? `${detail} · ${b.name}` : `${b.name} · ${it.disputeCategory}`}</div>
              </>); })()}
            </div>
            {isSent && outcome[i] && (
              <button onClick={() => setOutcome((o) => { const n = { ...o }; delete n[i]; return n; })} title="Undo" style={{ flex: 'none', height: 26, padding: '0 10px', borderRadius: 999, border: '1px solid var(--green-300, #bbf7d0)', background: 'var(--green-50)', color: 'var(--green-700)', fontWeight: 700, fontSize: 11.5, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 5 }}><TIcon name="checkCircle" size={12} /> Removed</button>
            )}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, flex: 'none', visibility: hover === i ? 'visible' : 'hidden' }}>
              {isSent && canMark && !outcome[i] && (
                <button onClick={() => setOutcome((o) => ({ ...o, [i]: 'removed' }))} title="Mark this item removed from the report" style={{ height: 26, padding: '0 10px', borderRadius: 999, border: '1px dashed var(--border)', background: '#fff', color: 'var(--ink-3)', fontWeight: 600, fontSize: 11.5, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 5 }}><TIcon name="check" size={12} /> Mark removed</button>
              )}
              <button onClick={() => setView(i)} title="View letter" style={{ width: 32, height: 32, borderRadius: 9, border: '1px solid var(--border)', background: '#fff', color: 'var(--ink-2)', cursor: 'pointer', display: 'grid', placeItems: 'center' }}><TIcon name="eye" size={15} /></button>
              <button onClick={() => window.print()} title="Print letter" style={{ width: 32, height: 32, borderRadius: 9, border: '1px solid var(--border)', background: '#fff', color: 'var(--ink-2)', cursor: 'pointer', display: 'grid', placeItems: 'center' }}><TIcon name="print" size={15} /></button>
            </div>
          </div>
        );
      })}
      {view != null && items[view] && <LetterViewModal item={items[view]} onClose={() => setView(null)} />}
    </div>
  );
}

function BatchRemovedRow({ it, onRestore, last }) {
  const b = TBUREAUS[it.primaryBureau];
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 18px 12px 46px', borderBottom: last ? 'none' : '1px solid var(--border-2)', opacity: 0.85 }}>
      <TMark bureau={it.primaryBureau} size={26} />
      <div style={{ flex: 1, minWidth: 0 }}>
        {(() => { const { title, detail } = splitCreditor(it.creditor); return (<>
          <div style={{ fontWeight: 600, fontSize: 13, color: 'var(--ink)', textDecoration: 'line-through', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{title}</div>
          <div style={{ fontSize: 11.5, color: 'var(--ink-3)', marginTop: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{detail ? `${detail} · ${b.name}` : `${b.name} · ${it.disputeCategory}`}</div>
        </>); })()}
      </div>
      <button onClick={onRestore} style={{ flex: 'none', height: 32, padding: '0 13px', borderRadius: 9, border: '1px solid var(--green-300, #bbf7d0)', background: 'var(--green-50)', color: 'var(--green-700)', fontWeight: 700, fontSize: 12.5, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6 }}><TIcon name="check" size={13} /> Restore</button>
    </div>
  );
}

function BatchDeletedRow({ it, last }) {
  const b = TBUREAUS[it.primaryBureau];
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 18px 12px 46px', borderBottom: last ? 'none' : '1px solid var(--border-2)' }}>
      <TMark bureau={it.primaryBureau} size={26} />
      <div style={{ flex: 1, minWidth: 0 }}>
        {(() => { const { title, detail } = splitCreditor(it.creditor); return (<>
          <div style={{ fontWeight: 600, fontSize: 13, color: 'var(--ink)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{title}</div>
          <div style={{ fontSize: 11.5, color: 'var(--ink-3)', marginTop: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{detail ? `${detail} · ${b.name}` : `${b.name} · ${it.disputeCategory}`}</div>
        </>); })()}
      </div>
      <span style={{ flex: 'none', height: 28, padding: '0 11px', borderRadius: 999, border: '1px solid var(--green-300, #bbf7d0)', background: 'var(--green-50)', color: 'var(--green-700)', fontWeight: 700, fontSize: 12, display: 'inline-flex', alignItems: 'center', gap: 6 }}><TIcon name="checkCircle" size={13} /> Deleted</span>
    </div>
  );
}

function GeneralMailModal({ onClose }) {
  const sections = [
    { name: 'Printing', tag: 'Do it at home or any office/print store', icon: 'print', steps: [
      { t: 'Print your letters', d: 'Use Download All and print every letter. Each one already includes your digital signature plus a copy of your driver’s license and proof of address — nothing to sign or attach.' },
      { t: 'Print the envelopes', d: 'Use Download Envelopes — they come pre-addressed to each bureau. Just add your return address in the top-left corner.' },
    ] },
    { name: 'Mailing', tag: null, icon: 'mail', steps: [
      { t: 'Match each letter to its envelope', d: 'Each letter’s header shows which bureau it’s for — put it in the envelope addressed to that same bureau before you seal it.' },
      { t: 'Send by certified mail', d: 'Take them to USPS and send each Certified Mail with Return Receipt. Keep the green slips and tracking numbers — that’s your proof the bureaus received them.' },
    ] },
    { name: 'Updating', tag: null, icon: 'check', steps: [
      { t: 'Mark them as sent here', d: 'Once they’re in the mail, hit “Mark All as Sent” so we can start the 30-day FCRA response clock and track each bureau’s deadline.' },
    ] },
  ];
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(15,23,42,.5)', zIndex: 60, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '5vh 16px', overflowY: 'auto' }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: '#fff', borderRadius: 18, width: 'min(720px,100%)', boxShadow: '0 24px 60px rgba(15,23,42,.28)', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '18px 22px', borderBottom: '1px solid var(--border-2)' }}>
          <span style={{ width: 36, height: 36, borderRadius: 10, flex: 'none', background: 'var(--green-50)', color: 'var(--green-600)', display: 'grid', placeItems: 'center' }}><TIcon name="mail" size={19} /></span>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontWeight: 800, fontSize: 15, color: 'var(--ink)' }}>How to mail these letters yourself</div>
            <div style={{ fontSize: 12.5, color: 'var(--ink-3)', marginTop: 1 }}>Three quick parts — printing, mailing, then updating us.</div>
          </div>
          <button onClick={onClose} style={{ width: 34, height: 34, borderRadius: 9, border: '1px solid var(--border)', background: '#fff', color: 'var(--ink-3)', display: 'grid', placeItems: 'center', cursor: 'pointer', flex: 'none' }}><TIcon name="close" size={17} /></button>
        </div>
        <div style={{ padding: '8px 22px 20px', display: 'flex', flexDirection: 'column' }}>
          {sections.map((sec, si) => (
            <div key={si} style={{ paddingTop: 18, paddingBottom: si === sections.length - 1 ? 0 : 18, borderBottom: si === sections.length - 1 ? 'none' : '1px solid var(--border-2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 13 }}>
                <span style={{ width: 28, height: 28, borderRadius: 8, flex: 'none', background: 'var(--green-50)', color: 'var(--green-600)', display: 'grid', placeItems: 'center' }}><TIcon name={sec.icon} size={15} /></span>
                <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--green-700)' }}>{si + 1}. {sec.name}</span>
                {sec.tag && <span style={{ fontSize: 11.5, color: 'var(--ink-3)', fontStyle: 'italic' }}>· {sec.tag}</span>}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, paddingLeft: 37 }}>
                {sec.steps.map((s, i) => (
                  <div key={i}>
                    <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--ink)' }}>{s.t}</div>
                    <div style={{ fontSize: 12.5, color: 'var(--ink-3)', marginTop: 2, lineHeight: 1.5 }}>{s.d}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div style={{ background: 'var(--card-soft)', border: '1px solid var(--border-2)', borderRadius: 12, padding: '13px 16px', marginTop: 18 }}>
            <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '.05em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 8 }}>Bureau mailing addresses</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
              {Object.values(BUREAU_ADDR).map((addr, i) => (
                <div key={i}>{addr.map((l, j) => <div key={j} style={{ fontSize: 11.5, fontWeight: j === 0 ? 700 : 500, color: 'var(--ink)', lineHeight: 1.4 }}>{l}</div>)}</div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 10, padding: '0 22px 22px' }}>
          <TButton variant="primary" onClick={onClose}><TIcon name="check" size={15} /> Got it</TButton>
        </div>
      </div>
    </div>
  );
}

function BatchCard({ batch, defaultOpen, canMark }) {
  const [open, setOpen] = React.useState(!!defaultOpen);
  const [subtab, setSubtab] = React.useState('letters');
  const [removedKeys, setRemovedKeys] = React.useState(() => new Set(batch.removedInit || []));
  const [sent, setSent] = React.useState(() => batch.sentInit || {});
  const [outcome, setOutcome] = React.useState(() => { const o = {}; (batch.deletedInit || []).forEach((i) => { o[i] = 'removed'; }); return o; });
  const [instrOpen, setInstrOpen] = React.useState(false);
  const active = batch.items.filter((_, i) => !removedKeys.has(i));
  const removed = batch.items.map((it, i) => ({ it, i })).filter(({ i }) => removedKeys.has(i));
  const deleted = active.map((it, i) => ({ it, i })).filter(({ i }) => outcome[i]);
  const restore = (i) => setRemovedKeys((s) => { const n = new Set(s); n.delete(i); return n; });
  const removeItem = (it) => setRemovedKeys((s) => { const n = new Set(s); const idx = batch.items.indexOf(it); if (idx >= 0) n.add(idx); return n; });
  const [methodOverride, setMethodOverride] = React.useState(null);
  const autoMailed = (methodOverride || batch.method) === 'partner';
  const fmtNow = () => new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  const sentCount = autoMailed ? active.length : active.filter((_, i) => sent[i]).length;
  const allSent = sentCount === active.length;
  const complete = active.length > 0 && (autoMailed || allSent);
  const done = complete; // any sent batch (auto or self-mailed) is closed → grey it out
  const inReview = complete && canMark; // sent, latest round still awaiting bureau response → active
  const markAll = () => { const now = fmtNow(); setSent(() => { const n = {}; active.forEach((_, i) => { n[i] = now; }); return n; }); };
  const subtabs = [
    { key: 'letters', label: `Dispute Letters (${active.length})` },
    ...(removed.length ? [{ key: 'removed', label: `Removed From Batch (${removed.length})` }] : []),
    ...(deleted.length ? [{ key: 'deleted', label: `Deleted From Report (${deleted.length})` }] : []),
  ];
  const curSubtab = subtabs.some((t) => t.key === subtab) ? subtab : 'letters';
  return (
    <div style={{ background: done ? 'var(--card-soft)' : 'var(--card)', border: `1px solid ${done ? 'var(--green-200)' : 'var(--border)'}`, borderRadius: 14, boxShadow: done ? 'none' : 'var(--sh-card)', overflow: 'hidden', opacity: done ? 0.92 : 1 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '16px 18px' }}>
        <button onClick={() => setOpen((v) => !v)} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 12, flex: 1, textAlign: 'left', padding: 0 }}>
          <span style={{ color: 'var(--muted)', transition: 'transform .2s', transform: open ? 'rotate(90deg)' : 'none', flex: 'none' }}><TIcon name="chevronRight" size={16} /></span>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontWeight: 800, fontSize: 14.5, color: done ? 'var(--ink-2)' : 'var(--ink)' }}>{batch.label} — {active.length} Letters</span>
              {!done && <span style={{ fontSize: 10.5, fontWeight: 800, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--green-700)', background: 'var(--green-50)', border: '1px solid var(--green-200)', borderRadius: 999, padding: '2px 8px' }}>Active</span>}
            </div>
            <div style={{ fontSize: 12.5, color: 'var(--ink-3)', marginTop: 3 }}>{batch.date} · {batch.time}</div>
          </div>
        </button>
        {complete ? (
          <div style={{ flex: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 11.5, fontWeight: 700, padding: '4px 11px', borderRadius: 999, background: autoMailed ? 'var(--green-100)' : '#dbeafe', color: autoMailed ? 'var(--green-700)' : '#1d4ed8' }}>
              <TIcon name={autoMailed ? 'send' : 'check'} size={12} /> {autoMailed ? 'Auto-Mailed' : 'Self-Mailed'}
            </span>
            <span style={{ width: 28, height: 28, borderRadius: '50%', flex: 'none', background: autoMailed ? 'var(--green-600)' : '#2563eb', color: '#fff', display: 'grid', placeItems: 'center', boxShadow: autoMailed ? '0 2px 6px rgba(22,163,74,.35)' : '0 2px 6px rgba(37,99,235,.35)' }}><TIcon name="check" size={16} stroke={3} /></span>
          </div>
        ) : (
          <div style={{ flex: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 11.5, fontWeight: 700, padding: '4px 11px', borderRadius: 999, background: 'var(--card-soft)', color: 'var(--ink-2)', border: '1px solid var(--border-2)' }}>
              <TIcon name="mail" size={12} /> Not Sent
            </span>
            <span style={{ width: 28, height: 28, borderRadius: '50%', flex: 'none', background: '#fff', border: '1.5px solid var(--border)', color: '#cbd5e1', display: 'grid', placeItems: 'center' }}><TIcon name="check" size={16} stroke={3} /></span>
          </div>
        )}
      </div>
      {open && (
        <>
          {autoMailed && <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '0 18px 10px' }}><span style={{ fontSize: 11.5, color: 'var(--ink-3)' }}>Order #<span style={{ fontWeight: 700, color: 'var(--ink-2)' }}>{batch.order}</span></span></div>}
          {!complete && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', padding: '0 18px 14px 46px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 2, background: 'var(--card-soft)', border: '1px solid var(--border-2)', borderRadius: 10, padding: 3 }}>
              <button onClick={() => setInstrOpen(true)} title="How to mail these letters" style={{ width: 32, height: 30, borderRadius: 7, border: 'none', background: 'none', color: 'var(--ink-2)', cursor: 'pointer', display: 'grid', placeItems: 'center' }}><TIcon name="helpCircle" size={15} /></button>
              <button onClick={() => window.print()} title="Print all letters" style={{ width: 32, height: 30, borderRadius: 7, border: 'none', background: 'none', color: 'var(--ink-2)', cursor: 'pointer', display: 'grid', placeItems: 'center' }}><TIcon name="print" size={15} /></button>
              <button onClick={() => window.print()} title="Print all envelopes" style={{ width: 32, height: 30, borderRadius: 7, border: 'none', background: 'none', color: 'var(--ink-2)', cursor: 'pointer', display: 'grid', placeItems: 'center' }}><TIcon name="mail" size={15} /></button>
            </div>
            <div style={{ flex: 1 }} />
            <button onClick={() => setMethodOverride('partner')} style={{ height: 34, padding: '0 14px', borderRadius: 9, border: '1px solid var(--green-300, #bbf7d0)', background: 'var(--green-50)', color: 'var(--green-700)', fontWeight: 700, fontSize: 12.5, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 7, whiteSpace: 'nowrap' }}><TIcon name="send" size={14} /> <span>{`Auto-Mail All ${active.length}`}</span></button>
            <button onClick={markAll} style={{ height: 34, padding: '0 16px', borderRadius: 9, border: 'none', background: 'var(--green-600)', color: '#fff', fontWeight: 700, fontSize: 12.5, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 7, whiteSpace: 'nowrap', boxShadow: '0 3px 10px rgba(22,163,74,.30)' }}><TIcon name="check" size={14} /> <span>{`Mark All ${active.length} as Sent`}</span></button>
          </div>
          )}
          <div style={{ display: 'flex', gap: 20, padding: '0 18px 0 46px', borderBottom: '1px solid var(--border-2)' }}>
            {subtabs.map((t) => (
              <button key={t.key} onClick={() => setSubtab(t.key)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0 0 10px', fontSize: 13, fontWeight: 700, color: curSubtab === t.key ? 'var(--green-700)' : 'var(--ink-3)', borderBottom: `2px solid ${curSubtab === t.key ? 'var(--green-600)' : 'transparent'}`, marginBottom: -1 }}>{t.label}</button>
            ))}
          </div>
          {curSubtab === 'letters'
            ? <AnalysisLetters items={active} autoMailed={autoMailed} onRemove={autoMailed ? undefined : removeItem} sent={sent} setSent={setSent} outcome={outcome} setOutcome={setOutcome} canMark={canMark} />
            : curSubtab === 'removed'
            ? (removed.length === 0
              ? <div style={{ padding: '22px 18px 22px 46px', fontSize: 13, color: 'var(--ink-3)' }}>Nothing removed from this batch.</div>
              : (<div><div style={{ padding: '12px 18px 12px 46px', fontSize: 12.5, color: 'var(--ink-3)', borderBottom: '1px solid var(--border-2)' }}>Removed from this batch — won’t be mailed. Restore any to add it back.</div>{removed.map(({ it, i }, idx) => <BatchRemovedRow key={i} it={it} onRestore={() => restore(i)} last={idx === removed.length - 1} />)}</div>))
            : (deleted.length === 0
              ? <div style={{ padding: '22px 18px 22px 46px', fontSize: 13, color: 'var(--ink-3)' }}>No items deleted from your report yet. Mark a sent letter as “Removed” once a bureau confirms deletion.</div>
              : (<div><div style={{ padding: '12px 18px 12px 46px', fontSize: 12.5, color: 'var(--ink-3)', borderBottom: '1px solid var(--border-2)' }}>Confirmed deleted from your credit report — these disputes worked. 🎉</div>{deleted.map(({ it, i }, idx) => <BatchDeletedRow key={i} it={it} last={idx === deleted.length - 1} />)}</div>))}
        </>
      )}
      {instrOpen && <GeneralMailModal onClose={() => setInstrOpen(false)} />}
    </div>
  );
}

function RoundLaunchBanner({ stillReporting }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      onClick={() => window.dispatchEvent(new Event('dg-start-round'))}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 18, width: '100%', textAlign: 'left', cursor: 'pointer', border: 'none', borderRadius: 16, padding: '20px 22px', overflow: 'hidden', color: '#fff', background: 'linear-gradient(115deg,#15803d,#16a34a 55%,#22c55e)', boxShadow: hover ? '0 16px 40px rgba(22,163,74,.45)' : '0 10px 28px rgba(22,163,74,.32)', transform: hover ? 'translateY(-1px)' : 'none', transition: 'box-shadow .2s, transform .2s' }}>
      <style>{`@keyframes dgring{0%{transform:scale(.8);opacity:.6}100%{transform:scale(2.4);opacity:0}}@keyframes dgsheen{0%{transform:translateX(-120%)}60%,100%{transform:translateX(220%)}}`}</style>
      <span style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: 90, background: 'linear-gradient(100deg,transparent,rgba(255,255,255,.28),transparent)', animation: 'dgsheen 3.2s ease-in-out infinite', pointerEvents: 'none' }} />
      <span style={{ position: 'relative', flex: 'none', width: 52, height: 52, display: 'grid', placeItems: 'center' }}>
        <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '2px solid rgba(255,255,255,.7)', animation: 'dgring 2s ease-out infinite' }} />
        <span style={{ width: 52, height: 52, borderRadius: '50%', background: 'rgba(255,255,255,.18)', border: '1px solid rgba(255,255,255,.35)', display: 'grid', placeItems: 'center' }}><TIcon name="refresh" size={24} /></span>
      </span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 11, fontWeight: 800, letterSpacing: '.08em', textTransform: 'uppercase', background: 'rgba(255,255,255,.2)', borderRadius: 999, padding: '3px 10px' }}>Round 2 ready</div>
        <div style={{ fontSize: 19, fontWeight: 800, letterSpacing: '-.02em', marginTop: 8 }}>Your 45-day wait is over, Chad</div>
        <div style={{ fontSize: 13.5, color: 'rgba(255,255,255,.9)', marginTop: 3, lineHeight: 1.5 }}>{stillReporting} items are still reporting. Launch your next round of escalated disputes now.</div>
      </div>
      <span style={{ flex: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap', fontWeight: 800, fontSize: 14.5, background: '#fff', color: 'var(--green-700)', borderRadius: 12, padding: '12px 18px', boxShadow: '0 4px 14px rgba(0,0,0,.12)' }}>Start Round 2 <TIcon name="chevronRight" size={17} /></span>
    </button>
  );
}

function History({ data }) {
  const [tab, setTab] = React.useState('letters');
  const all = data.negativeItems;
  const n = all.length;
  const a = Math.ceil(n / 3), b = Math.ceil((n - a) / 2);
  const g1 = all.slice(0, a), g2 = all.slice(a, a + b), g3 = all.slice(a + b);
  const allSentMap = (items) => { const o = {}; items.forEach((_, i) => { o[i] = 'May 9, 2026'; }); return o; };
  const batches = [
    { id: 3, label: 'Batch #3', date: 'Jun 18, 2026', time: data.completedTime, method: 'self', order: '42770380', items: g1, removedInit: [g1.length - 1] },
    { id: 2, label: 'Batch #2', date: 'May 9, 2026', time: '2:48 PM', method: 'self', order: '42698115', items: g2, removedInit: [0], deletedInit: [0, 1], sentInit: allSentMap(g2) },
    { id: 1, label: 'Batch #1', date: 'Mar 30, 2026', time: '9:14 AM', method: 'partner', order: '42551207', items: g3, removedInit: [g3.length - 1] },
  ];
  const tabs = [
    { key: 'letters', label: 'Dispute Letters' },
    { key: 'reports', label: 'Past Reports' },
  ];
  const nextDays = Math.max(0, daysBetween(new Date(), addDays(new Date('Jun 18, 2026'), 45)));
  const sentBatchIds = batches.filter((b) => b.method === 'partner' || b.sentInit).map((b) => b.id);
  const latestSentId = sentBatchIds.length ? Math.max(...sentBatchIds) : null;
  return (
    <div style={{ position: 'relative', padding: 'clamp(24px,3vw,40px) clamp(20px,3vw,44px) 48px', maxWidth: 1080 }}>
      <PageHead title="Dispute Management" sub={`Every dispute letter you've generated, grouped into the batches that created them.`} />
      <div style={{ position: 'absolute', top: 'clamp(24px,3vw,40px)', right: 'clamp(20px,3vw,44px)', display: 'flex', alignItems: 'center', gap: 9, background: 'var(--green-50)', border: '1px solid var(--green-200)', borderRadius: 11, padding: '8px 12px', maxWidth: 250 }}>
        <span style={{ flex: 'none', width: 28, height: 28, borderRadius: '50%', background: '#fff', border: '1px solid var(--green-200)', color: 'var(--green-700)', display: 'grid', placeItems: 'center' }}><TIcon name="clock" size={14} /></span>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: 10.5, fontWeight: 700, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '.04em' }}>Next dispute</div>
          <div style={{ fontWeight: 800, fontSize: 13.5, color: 'var(--green-700)', lineHeight: 1.15 }}>{nextDays} days <span style={{ fontWeight: 600, color: 'var(--ink-3)' }}>· Aug 2, 2026</span></div>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 24, borderBottom: '1px solid var(--border-2)', marginBottom: 20 }}>
        {tabs.map((t) => (
          <button key={t.key} onClick={() => setTab(t.key)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0 0 12px', fontSize: 14.5, fontWeight: 700, color: tab === t.key ? 'var(--green-700)' : 'var(--ink-3)', borderBottom: `2px solid ${tab === t.key ? 'var(--green-600)' : 'transparent'}`, marginBottom: -1 }}>{t.label}</button>
        ))}
      </div>

      {tab === 'letters' ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <RoundLaunchBanner stillReporting={13} />
          {batches.map((bt) => <BatchCard key={bt.id} batch={bt} defaultOpen={false} canMark={bt.id === latestSentId} />)}
        </div>
      ) : (
        <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 14, boxShadow: 'var(--sh-card)', overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 13, padding: '16px 18px' }}>
            <span style={{ width: 38, height: 38, borderRadius: 10, flex: 'none', background: 'var(--green-50)', color: 'var(--green-600)', display: 'grid', placeItems: 'center' }}><TIcon name="fileText" size={19} /></span>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 800, fontSize: 14.5, color: 'var(--ink)' }}>3-Bureau Credit Report &amp; Scores — SmartCredit.pdf</div>
              <div style={{ fontSize: 12.5, color: 'var(--ink-3)', marginTop: 2 }}>Analyzed {data.completedDate} · {data.negativeItems.length} items found</div>
            </div>
            <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--green-700)', background: 'var(--green-100)', borderRadius: 999, padding: '4px 11px', flex: 'none' }}>Complete</span>
          </div>
        </div>
      )}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 28, color: 'var(--muted)', fontSize: 12.5 }}>
        <TIcon name="lock" size={13} /> Every generated letter is saved here, whether or not you've sent it.
      </div>
    </div>
  );
}

Object.assign(window, { LetterTracking, History });
