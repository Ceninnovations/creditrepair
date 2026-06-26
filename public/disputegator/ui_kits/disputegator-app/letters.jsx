// Dispute Letters screen — three bureau columns of disputable items, each opening
// a letter modal (copy / download / print / mark-as-sent). Composes DS Icon,
// BureauMark, Badge, Button.
const { Icon: LIcon, Button: LButton, BureauMark: LMark, BUREAUS: LBUREAUS } = window.DisputeGatorDesignSystem_dde977;

const BUREAU_ADDR = {
  experian: 'P.O. Box 4500\nAllen, TX 75013',
  equifax: 'P.O. Box 740256\nAtlanta, GA 30374',
  transunion: 'P.O. Box 2000\nChester, PA 19016',
};
const STRENGTH_TONE = { Strong: 'strong', Moderate: 'moderate', Weak: 'weak' };

function buildLetter(bureauKey, item) {
  const b = LBUREAUS[bureauKey];
  const today = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  return `${today}

${b.name}
${BUREAU_ADDR[bureauKey]}

RE: Formal Dispute of Inaccurate Information
Consumer: Jordan Miles
SSN (last 4): XXXX   ·   DOB: XX/XX/XXXX

To Whom It May Concern,

I am writing to dispute the following information in my file. This letter was written and sent by me personally — not by any credit repair organization.

DISPUTED ITEM
  Creditor:        ${item.creditor}
  Account #:       ${item.accountNumber}
  Type:            ${item.type}
  Reported status: ${item.status} (${item.dateReported})
  Dispute basis:   ${item.disputeCategory}

The information above is inaccurate for the following reason(s):
${item.reasons.map((r) => '  • ' + r).join('\n')}

Under ${item.laws.join(' and ')}, you are required to conduct a reasonable
reinvestigation of this item. Per CFPB Circular 2022-07, mechanically re-verifying
against the same record that produced the error does not satisfy this duty.

REQUESTED REMEDY
${item.recommendedAction}

Please complete your reinvestigation within 30 days as required by FCRA § 1681i and
send me written confirmation of the results. If the disputed information cannot be
verified with original source documentation, it must be deleted.

Sincerely,
Jordan Miles`;
}

function buildAllLetters(data) {
  return data.negativeItems.map((it) => {
    const bk = LBUREAUS[it.primaryBureau] ? it.primaryBureau : 'experian';
    const b = LBUREAUS[bk];
    return `${'='.repeat(64)}\nLETTER TO ${b.name.toUpperCase()}  —  ${it.creditor}\n${'='.repeat(64)}\n\n` + buildLetter(bk, it);
  }).join('\n\n\n');
}

function downloadText(filename, text) {
  const blob = new Blob([text], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename; document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}

function AutoMailModal({ data, sentKeys, onClose, onMailAll }) {
  const [stage, setStage] = React.useState('confirm'); // confirm | sending | done
  const items = data.negativeItems;
  const [removed, setRemoved] = React.useState(() => new Set());
  const keyOf = (it) => (LBUREAUS[it.primaryBureau] ? it.primaryBureau : 'experian') + '|' + it.creditor + '|' + it.accountNumber + '|' + it.dateReported;
  const unsent = items.filter((it) => !sentKeys.has(keyOf(it)) && !removed.has(keyOf(it)));
  const count = unsent.length;
  const price = (count * 8.49).toFixed(2);
  const send = () => {
    setStage('sending');
    setTimeout(() => { onMailAll(unsent); setStage('done'); }, 1700);
  };
  return (
    <div onClick={stage === 'sending' ? undefined : onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(5,46,22,.38)', backdropFilter: 'blur(3px)', display: 'grid', placeItems: 'center', padding: 24, zIndex: 60 }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: '#fff', borderRadius: 18, width: 'min(520px,100%)', boxShadow: 'var(--sh-pop)', overflow: 'hidden' }}>
        <div style={{ padding: '26px 28px 22px', background: 'linear-gradient(160deg, var(--green-700), var(--green-800))', color: '#fff' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
            <span style={{ width: 40, height: 40, borderRadius: 11, background: 'rgba(255,255,255,.16)', display: 'grid', placeItems: 'center', flex: 'none' }}><LIcon name="send" size={20} /></span>
            <div>
              <div style={{ fontWeight: 800, fontSize: 18, letterSpacing: '-.01em' }}>Auto-Mail All Letters</div>
              <div style={{ fontSize: 12.5, opacity: .85, marginTop: 1 }}>Certified mail, handled end-to-end</div>
            </div>
          </div>
        </div>
        {stage === 'done' ? (
          <div style={{ padding: '30px 28px', textAlign: 'center' }}>
            <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--green-50)', border: '2px solid var(--green-200)', display: 'grid', placeItems: 'center', margin: '0 auto 14px', color: '#16a34a' }}><LIcon name="checkCircle" size={28} /></div>
            <div style={{ fontWeight: 800, fontSize: 19, color: 'var(--ink)' }}>{count} letters on their way</div>
            <div style={{ fontSize: 13.5, color: 'var(--ink-3)', marginTop: 6, lineHeight: 1.55, maxWidth: 360, marginInline: 'auto' }}>Each is printed, certified-mailed with USPS tracking, and a return receipt is filed. We'll log responses as they arrive — expect results within 30 days.</div>
            <LButton variant="primary" onClick={onClose} style={{ marginTop: 20 }}>Done</LButton>
          </div>
        ) : (
          <div style={{ padding: '22px 28px 26px' }}>
            <p style={{ margin: '0 0 14px', fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.55 }}>We'll print, stamp, and <strong>certified-mail</strong> each letter below to the right bureau. Remove any you don't want to send before mailing.</p>
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 11.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.05em', color: 'var(--ink-3)', marginBottom: 8 }}>{count} letter{count !== 1 ? 's' : ''} in your queue</div>
              <div style={{ maxHeight: 230, overflowY: 'auto', border: '1px solid var(--border-2)', borderRadius: 11 }}>
                {unsent.map((it, i) => {
                  const bk = keyOf(it).split('|')[0];
                  const bb = LBUREAUS[bk];
                  const label = it.creditor.split(':')[0];
                  return (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 13px', borderBottom: i === unsent.length - 1 ? 'none' : '1px solid var(--border-2)' }}>
                      <LMark bureau={bk} size={20} />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{label}</div>
                        <div style={{ fontSize: 11.5, color: 'var(--ink-3)' }}>{bb.name} · {it.disputeCategory}</div>
                      </div>
                      <button onClick={() => setRemoved((p) => new Set(p).add(keyOf(it)))} title="Remove from queue" style={{ width: 26, height: 26, borderRadius: 7, border: '1px solid var(--border)', background: '#fff', color: 'var(--ink-3)', cursor: 'pointer', display: 'grid', placeItems: 'center', flex: 'none' }}><LIcon name="close" size={14} /></button>
                    </div>
                  );
                })}
                {count === 0 && <div style={{ padding: '20px', textAlign: 'center', fontSize: 13, color: 'var(--ink-3)' }}>No letters in the queue.</div>}
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '13px 16px', background: 'var(--bg-2, #f6f8f6)', borderRadius: 11, marginBottom: 18 }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--ink)' }}>{count} letter{count !== 1 ? 's' : ''} ready to mail</div>
                <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 1 }}>${'8.49'} per certified letter</div>
              </div>
              <div style={{ fontWeight: 800, fontSize: 20, color: 'var(--green-800)' }}>${price}</div>
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <LButton variant="outline" onClick={onClose} style={{ flex: 1 }}>Cancel</LButton>
              <LButton variant="primary" icon={stage === 'sending' ? undefined : 'send'} onClick={send} disabled={stage === 'sending' || count === 0} style={{ flex: 2 }}>{stage === 'sending' ? 'Sending…' : `Mail All ${count} Letters`}</LButton>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ItemRow({ item, bureauKey, onView, last, excluded, itemKey, onToggle }) {
  const dot = item.disputeStrength === 'Strong' ? '#15803d' : item.disputeStrength === 'Moderate' ? '#b45309' : '#64748b';
  const skipped = excluded && excluded.has(itemKey(item));
  const b = LBUREAUS[bureauKey];
  // Split "Label: VALUE" titles (e.g. "Unrecognized Address: 4340 ...") into a clean label + detail line.
  const splitIdx = item.creditor.indexOf(': ');
  const hasSplit = splitIdx > 0 && splitIdx < 40;
  const titleText = hasSplit ? item.creditor.slice(0, splitIdx) : item.creditor;
  const rawDetail = hasSplit ? item.creditor.slice(splitIdx + 2) : '';
  const titleCase = (s) => s.replace(/\b([A-Z])([A-Z]+)\b/g, (m, a, b2) => a + b2.toLowerCase());
  // Title-case street + city, keep 2-letter state code and ZIP uppercase.
  const detailText = rawDetail.replace(/^(.*?),\s*([^,]+),\s*([A-Z]{2})\s+(\d{5})/, (m, street, city, st, zip) => `${titleCase(street)}, ${titleCase(city)}, ${st} ${zip}`);
  return (
    <div onClick={() => onView(item, bureauKey)} style={{ padding: '13px 18px', borderBottom: last ? 'none' : '1px solid var(--border-2)', background: skipped ? 'var(--card-soft,#f7f9f8)' : 'transparent', cursor: 'pointer' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
        <button onClick={(e) => { e.stopPropagation(); onToggle && onToggle(item); }} title={skipped ? 'Include this letter' : 'Skip this letter'} style={{ width: 20, height: 20, flex: 'none', marginTop: 1, borderRadius: 6, cursor: 'pointer', padding: 0, display: 'grid', placeItems: 'center', border: `2px solid ${skipped ? 'var(--border)' : '#16a34a'}`, background: skipped ? '#fff' : 'linear-gradient(150deg,#22c55e,#16a34a)', color: '#fff' }}>{!skipped && <LIcon name="check" size={13} stroke={3} />}</button>
        <div style={{ flex: 1, minWidth: 0, opacity: skipped ? 0.5 : 1 }}>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--ink)', lineHeight: 1.35 }}>{hasSplit ? titleText.toUpperCase() : titleText}</div>
          {hasSplit
            ? <div style={{ fontSize: 12.5, color: 'var(--ink-2)', marginTop: 2, lineHeight: 1.4 }}>{detailText}</div>
            : <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 3 }}>{item.type} · #{item.accountNumber}{item.balance !== '$0' ? ' · ' + item.balance : ''}</div>}
        </div>
        <button onClick={() => onView(item, bureauKey)} title="View dispute letter"
          style={{ width: 32, height: 32, borderRadius: 8, flex: 'none', display: 'grid', placeItems: 'center', background: 'var(--bg-2, #f1f5f9)', border: '1px solid var(--border-2)', color: 'var(--ink-3)', cursor: 'pointer' }}>
          <LIcon name="eye" size={15} />
        </button>
      </div>
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 8, paddingLeft: 18 }}>
        <span style={{ fontSize: 11, fontWeight: 600, padding: '3px 8px', borderRadius: 6, background: 'var(--bg-2, #f1f5f9)', color: 'var(--ink-3)' }}>{item.disputeCategory}</span>
        <span style={{ fontSize: 11, fontWeight: 700, padding: '3px 9px', borderRadius: 20, background: item.disputeStrength === 'Strong' ? '#dcfce7' : item.disputeStrength === 'Moderate' ? '#fdf0d5' : '#f1f5f9', color: item.disputeStrength === 'Strong' ? '#15803d' : item.disputeStrength === 'Moderate' ? '#b45309' : '#64748b' }}>{item.disputeStrength}</span>
      </div>
    </div>
  );
}

function BureauTab({ bureauKey, items, active, onClick, excluded, itemKey }) {
  const b = LBUREAUS[bureauKey];
  const cued = items.filter((i) => !(excluded && excluded.has(itemKey(i)))).length;
  return (
    <button onClick={onClick} style={{
      flex: 1, minWidth: 180, textAlign: 'left', cursor: 'pointer',
      background: active ? '#fff' : 'var(--green-50, #f6f8f6)',
      border: `1px solid ${active ? b.color : 'var(--border)'}`,
      borderTop: `3px solid ${active ? b.color : 'transparent'}`,
      borderRadius: 12, padding: '13px 15px',
      boxShadow: active ? '0 2px 10px rgba(0,0,0,.05)' : 'none',
      opacity: active ? 1 : 0.78, transition: 'all .15s',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
        <LMark bureau={bureauKey} size={30} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontWeight: 800, fontSize: 14.5, color: 'var(--ink)' }}>{b.name}</div>
          <div style={{ fontSize: 11.5, color: 'var(--ink-3)', marginTop: 1 }}>
            {cued} of {items.length} cued
          </div>
        </div>
      </div>
    </button>
  );
}

function BureauPanel({ bureauKey, items, onView, excluded, itemKey, onToggle }) {
  const b = LBUREAUS[bureauKey];
  const high = items.filter((i) => i.priority === 'High').length;
  const strong = items.filter((i) => i.disputeStrength === 'Strong').length;
  return (
    <div style={{ border: '1px solid var(--border)', borderTop: `4px solid ${b.color}`, borderRadius: 14, overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '16px 20px 14px', background: b.color + '0d', borderBottom: '1px solid var(--border-2)' }}>
        <LMark bureau={bureauKey} size={38} />
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 800, fontSize: 17, color: 'var(--ink)' }}>{b.name}</div>
          <div style={{ fontSize: 12.5, color: 'var(--ink-3)', marginTop: 1 }}>{items.filter((i) => !(excluded && excluded.has(itemKey(i)))).length}/{items.length} disputes cued{high > 0 ? ` · ${high} high priority` : ''}</div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          {high > 0 && <span style={{ fontSize: 11, fontWeight: 700, padding: '4px 10px', borderRadius: 20, background: '#fde8e8', color: '#dc2626' }}>{high} High Priority</span>}
          {strong > 0 && <span style={{ fontSize: 11, fontWeight: 700, padding: '4px 10px', borderRadius: 20, background: '#dcfce7', color: '#15803d' }}>{strong} Strong</span>}
        </div>
      </div>
      <div>
        {items.length === 0
          ? <div style={{ padding: '40px 18px', textAlign: 'center', color: 'var(--ink-4)', fontSize: 13.5 }}>No negative items reported to {b.name}</div>
          : items.map((item, idx) => <ItemRow key={idx} item={item} bureauKey={bureauKey} onView={onView} last={idx === items.length - 1} excluded={excluded} itemKey={itemKey} onToggle={onToggle} />)}
      </div>
    </div>
  );
}

function LetterModal({ bureauKey, item, onClose, onMarkSent, alreadySent }) {
  const b = LBUREAUS[bureauKey];
  const body = buildLetter(bureauKey, item);
  const [copied, setCopied] = React.useState(false);
  const [sent, setSent] = React.useState(alreadySent);
  const [editing, setEditing] = React.useState(false);
  const [text, setText] = React.useState(body);
  const copy = () => { navigator.clipboard && navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 1600); };
  const markSent = () => {
    setSent(true);
    onMarkSent && onMarkSent({
      key: bureauKey + '|' + item.creditor + '|' + item.accountNumber + '|' + item.dateReported,
      creditor: item.creditor, bureauKey, disputeCategory: item.disputeCategory,
      sentDate: new Date().toISOString().slice(0, 10),
    });
  };
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(5,46,22,.38)', backdropFilter: 'blur(3px)', display: 'grid', placeItems: 'center', padding: 24, zIndex: 50 }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: '#fff', borderRadius: 18, width: 'min(740px,100%)', maxHeight: '90vh', display: 'flex', flexDirection: 'column', boxShadow: 'var(--sh-pop)', overflow: 'hidden' }}>
        <div style={{ height: 5, background: b.color }} />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 22px', borderBottom: '1px solid var(--border-2)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <LMark bureau={bureauKey} size={36} />
            <div>
              <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--ink)' }}>{b.name} — {item.creditor}</div>
              <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 1 }}>{item.disputeCategory} · targeted dispute letter</div>
            </div>
          </div>
          <LButton variant="ghost" size="sm" icon="close" onClick={onClose} style={{ padding: 8 }}>{''}</LButton>
        </div>
        <div style={{ padding: '22px 26px', overflowY: 'auto', background: '#fafcf9', flex: 1 }}>
          {editing ? (
            <div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, background: '#fef3f2', border: '1px solid #fecaca', borderRadius: 10, padding: '10px 13px', marginBottom: 14, color: '#b42318', fontSize: 12.5, lineHeight: 1.5 }}>
                <span style={{ flex: 'none', marginTop: 1 }}><LIcon name="alert" size={15} /></span>
                <span><strong>Editing isn’t recommended.</strong> These letters are written with the exact FCRA language bureaus respond to. Changing the wording can weaken your dispute.</span>
              </div>
              <textarea value={text} onChange={(e) => setText(e.target.value)} style={{ width: '100%', minHeight: 360, resize: 'vertical', border: '1px solid var(--border)', borderRadius: 10, padding: '14px 16px', fontFamily: "'Plus Jakarta Sans', Georgia, serif", fontSize: 13.5, lineHeight: 1.75, color: '#1e293b', boxSizing: 'border-box' }} />
            </div>
          ) : (
            <pre style={{ margin: 0, whiteSpace: 'pre-wrap', fontFamily: "'Plus Jakarta Sans', Georgia, serif", fontSize: 13.5, lineHeight: 1.75, color: '#1e293b' }}>{text}</pre>
          )}
        </div>
        <div style={{ borderTop: '1px solid var(--border-2)', padding: '14px 22px', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <LButton variant="primary" icon={copied ? 'check' : 'copy'} onClick={copy}>{copied ? 'Copied!' : 'Copy'}</LButton>
            <LButton variant="outline" icon="print">Print</LButton>
            <LButton variant={editing ? 'primary' : 'ghost'} icon={editing ? 'check' : 'edit'} onClick={() => setEditing((v) => !v)}>{editing ? 'Done editing' : 'Edit letter'}</LButton>
          </div>
        </div>
      </div>
    </div>
  );
}

function DisputeLetters({ data, sentLetters = [], onMarkSent }) {
  const [modal, setModal] = React.useState(null);
  const [autoMail, setAutoMail] = React.useState(false);
  const [approve, setApprove] = React.useState(false);
  const [tab, setTab] = React.useState('experian');
  const [excluded, setExcluded] = React.useState(() => new Set());
  const itemKey = (it) => (LBUREAUS[it.primaryBureau] ? it.primaryBureau : 'experian') + '|' + it.creditor + '|' + it.accountNumber + '|' + it.dateReported;
  const toggleExcl = (it) => setExcluded((prev) => { const n = new Set(prev); const k = itemKey(it); n.has(k) ? n.delete(k) : n.add(k); return n; });
  const sentKeys = new Set(sentLetters.map((s) => s.key));
  const byBureau = { experian: [], equifax: [], transunion: [] };
  data.negativeItems.forEach((it) => { (byBureau[it.primaryBureau] || byBureau.experian).push(it); });
  // Surface highest score-impact disputes first: balance/status & late payments above inquiries/personal info.
  const prioRank = { High: 0, Medium: 1, Low: 2 };
  Object.keys(byBureau).forEach((k) => byBureau[k].sort((a, b) => (prioRank[a.priority] ?? 3) - (prioRank[b.priority] ?? 3)));
  const total = data.negativeItems.length;
  const includedItems = data.negativeItems.filter((it) => !excluded.has(itemKey(it)));
  const includedCount = includedItems.length;
  const includedData = { ...data, negativeItems: includedItems };
  const affected = Object.values(byBureau).filter((a) => a.length > 0).length;
  const mailAll = (items) => {
    items.forEach((it) => {
      const bk = LBUREAUS[it.primaryBureau] ? it.primaryBureau : 'experian';
      onMarkSent && onMarkSent({
        key: bk + '|' + it.creditor + '|' + it.accountNumber + '|' + it.dateReported,
        creditor: it.creditor, bureauKey: bk, disputeCategory: it.disputeCategory,
        sentDate: new Date().toISOString().slice(0, 10),
      });
    });
  };
  return (
    <div style={{ padding: 'clamp(24px,3vw,40px) clamp(20px,3vw,44px) 48px', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 'clamp(24px,3vw,40px)', right: 'clamp(20px,3vw,44px)', maxWidth: 250, display: 'flex', alignItems: 'flex-start', gap: 8, zIndex: 1 }}>
        <span style={{ color: 'var(--muted)', flex: 'none', marginTop: 1 }}><LIcon name="scale" size={15} /></span>
        <div style={{ fontSize: 11.5, color: 'var(--muted)', lineHeight: 1.5 }}><strong style={{ color: 'var(--ink-3)' }}>FCRA §1681i:</strong> Bureaus have <strong>30 days</strong> to investigate and respond after receipt.</div>
      </div>
      <div style={{ marginBottom: 24, maxWidth: 640 }}>
        <h1 style={{ margin: 0, fontSize: 'clamp(28px,3.4vw,36px)', fontWeight: 800, letterSpacing: '-.02em', color: 'var(--ink)' }}>Dispute Letters</h1>
        <p style={{ margin: '8px 0 0', color: 'var(--ink-3)', fontSize: 14.5, lineHeight: 1.5 }}>Review all {total} letters below and uncheck any you don’t want to send. When you’re ready, mail them all at once — no need to send one at a time.</p>
      </div>
      <div style={{ display: 'flex', gap: 10, marginBottom: 14 }}>
        {['experian', 'equifax', 'transunion'].map((k) => <BureauTab key={k} bureauKey={k} items={byBureau[k]} active={tab === k} onClick={() => setTab(k)} excluded={excluded} itemKey={itemKey} />)}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 14px', background: 'var(--bg-2,#f4f6f8)', border: '1px solid var(--border-2)', borderRadius: 10, marginBottom: 16, fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.5 }}>
        <span style={{ color: 'var(--green-700)', flex: 'none' }}><LIcon name="check" size={15} stroke={3} /></span>
        Every letter is <strong>checked to send</strong> by default. Uncheck the box on any you don't want to dispute — across all three bureaus.
      </div>
      <BureauPanel bureauKey={tab} items={byBureau[tab]} excluded={excluded} itemKey={itemKey} onToggle={toggleExcl} onView={(item, bk) => setModal({ item, bureauKey: bk })} />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, marginTop: 24 }}>
        <LButton variant="primary" icon="check" onClick={() => setApprove(true)} disabled={includedCount === 0} style={{ fontSize: 15, padding: '13px 30px' }}>{`I Approve These ${includedCount} ${includedCount === 1 ? 'Letter' : 'Letters'}`}</LButton>
        <span style={{ fontSize: 12.5, color: 'var(--ink-3)' }}>{includedCount}/{total} letters selected{excluded.size ? ` \u00b7 ${excluded.size} skipped` : ''}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 32, color: 'var(--muted)', fontSize: 12.5 }}>
        <LIcon name="lock" size={13} /> Each letter is addressed to the specific bureau that reported the item.
      </div>
      {modal && <LetterModal bureauKey={modal.bureauKey} item={modal.item} onClose={() => setModal(null)} onMarkSent={onMarkSent}
        alreadySent={sentKeys.has(modal.bureauKey + '|' + modal.item.creditor + '|' + modal.item.accountNumber + '|' + modal.item.dateReported)} />}
      {autoMail && <AutoMailModal data={includedData} sentKeys={sentKeys} onClose={() => setAutoMail(false)} onMailAll={mailAll} />}
      {approve && (
        <div onClick={() => setApprove(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(5,46,22,.38)', backdropFilter: 'blur(3px)', display: 'grid', placeItems: 'center', padding: 24, zIndex: 55 }}>
          <div onClick={(e) => e.stopPropagation()} style={{ background: '#fff', borderRadius: 18, width: 'min(460px,100%)', boxShadow: 'var(--sh-pop)', overflow: 'hidden' }}>
            <div style={{ padding: '24px 26px 18px' }}>
              <div style={{ fontWeight: 800, fontSize: 18, color: 'var(--ink)' }}>{`Send your ${includedCount} ${includedCount === 1 ? 'letter' : 'letters'}`}</div>
              <p style={{ margin: '6px 0 0', fontSize: 13.5, color: 'var(--ink-3)', lineHeight: 1.55 }}>How would you like to send your {includedCount} dispute letter{includedCount === 1 ? '' : 's'}? We recommend letting our mailing partner send them for you. Otherwise, mail each one yourself by <strong>certified mail</strong> so you have proof of delivery.</p>
            </div>
            <div style={{ padding: '0 26px 24px', display: 'flex', flexDirection: 'column', gap: 10 }}>
              <LButton variant="primary" icon="send" onClick={() => { setApprove(false); setAutoMail(true); }}>Have our partner mail them (preferred)</LButton>
              <LButton variant="outline" icon="download" onClick={() => { downloadText('DisputeGator-All-Letters.txt', buildAllLetters(includedData)); setApprove(false); }}>Download &amp; mail certified myself</LButton>
              <LButton variant="ghost" onClick={() => setApprove(false)}>Keep reviewing</LButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

window.DisputeLetters = DisputeLetters;
window.buildLetter = buildLetter;
