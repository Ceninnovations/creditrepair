// Wake Up Call — multi-step "complete the details" wizard. Step 1 lists the
// accounts with balances. Clicking a row opens a popup where the user picks ONE
// of two ways to add details (upload a statement, or enter manually); saving
// marks the account complete and advances the progress bar.
const { Icon: WIcon, Button: WButton } = window.DisputeGatorDesignSystem_dde977;

const WAKEUP_ACCOUNTS = [
  { last4: '1407', creditor: 'Capital One', acct: '414709', kind: 'Revolving', sub: 'Credit Card', balance: '$4,656' },
  { last4: '0899', creditor: 'Venmo', acct: '400899', kind: 'Revolving', sub: 'Charge Card', balance: '$2,143' },
  { last4: '2023', creditor: 'LendClub Bank', acct: '202231', kind: 'Installment', sub: 'Personal Loan', balance: '$435' },
];
const WAKEUP_STEPS = ['Accounts with Balances', 'Additional Accounts', 'See Your Impact'];
const GRID = '1.7fr 1.25fr 1.15fr .85fr 1.35fr 64px';

function Stepper({ current, onJump }) {
  return (
    <div style={{ display: 'flex', alignItems: 'stretch', gap: 'clamp(16px,2vw,30px)', margin: '0 0 26px', borderBottom: '1px solid var(--border)', overflowX: 'auto' }}>
      {WAKEUP_STEPS.map((label, i) => {
        const active = i === current, done = i < current;
        return (
            <div key={label} onClick={() => onJump && onJump(i)} style={{ display: 'flex', alignItems: 'center', gap: 9, flex: 'none', padding: '0 2px 13px', borderBottom: `2.5px solid ${active ? 'var(--green-600)' : 'transparent'}`, marginBottom: -1, cursor: onJump ? 'pointer' : 'default' }}>
              <span style={{
                width: 24, height: 24, borderRadius: '50%', flex: 'none', display: 'grid', placeItems: 'center',
                fontSize: 12.5, fontWeight: 800,
                background: (active || done) ? 'var(--green-600)' : '#eef1f6',
                color: (active || done) ? '#fff' : 'var(--ink-3)',
              }}>{done ? <WIcon name="check" size={13} stroke={3} /> : i + 1}</span>
              <span style={{ fontSize: 14, fontWeight: active ? 700 : 600, color: active ? 'var(--ink)' : 'var(--ink-3)', whiteSpace: 'nowrap' }}>{label}</span>
            </div>
        );
      })}
    </div>
  );
}

function Field({ label, placeholder, icon, value, onChange, hint }) {
  return (
    <label style={{ display: 'block' }}>
      <span style={{ display: 'block', fontSize: 12.5, fontWeight: 600, color: 'var(--ink-2)', marginBottom: 6 }}>{label}</span>
      <span style={{ position: 'relative', display: 'block' }}>
        <input placeholder={placeholder} value={value} onChange={onChange} style={{
          width: '100%', boxSizing: 'border-box', padding: icon ? '10px 38px 10px 13px' : '10px 13px',
          fontSize: 13.5, fontFamily: 'inherit', color: 'var(--ink)', background: '#fff',
          border: '1px solid var(--border)', borderRadius: 10, outline: 'none',
        }}
          onFocus={(e) => { e.target.style.borderColor = 'var(--green-600)'; e.target.style.boxShadow = '0 0 0 3px var(--focus-ring)'; }}
          onBlur={(e) => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none'; }}
        />
        {icon && <span style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)', pointerEvents: 'none' }}><WIcon name={icon} size={16} /></span>}
      </span>
      {hint && <span style={{ display: 'block', fontSize: 11.5, color: 'var(--ink-3)', marginTop: 5, lineHeight: 1.4 }}>{hint}</span>}
    </label>
  );
}

function OptionTile({ active, badge, title, desc, onClick }) {
  return (
    <button onClick={onClick} style={{
      flex: 1, minWidth: 0, textAlign: 'left', cursor: 'pointer', borderRadius: 13, padding: '14px 16px',
      background: active ? 'var(--green-50)' : '#fff',
      border: `1.5px solid ${active ? 'var(--green-600)' : 'var(--border)'}`,
      boxShadow: active ? '0 0 0 3px var(--focus-ring)' : 'none', transition: '.14s',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, marginBottom: 5 }}>
        {badge && <span style={{ fontSize: 11, fontWeight: 700, color: active ? 'var(--green-700)' : 'var(--ink-3)' }}>{badge}</span>}
        <span style={{ width: 18, height: 18, borderRadius: '50%', flex: 'none', marginLeft: 'auto', display: 'grid', placeItems: 'center', border: `2px solid ${active ? 'var(--green-600)' : 'var(--border)'}`, background: active ? 'var(--green-600)' : '#fff', color: '#fff' }}>{active && <WIcon name="check" size={11} stroke={3} />}</span>
      </div>
      <div style={{ fontSize: 14.5, fontWeight: 700, color: 'var(--ink)' }}>{title}</div>
      <div style={{ fontSize: 12.3, color: 'var(--ink-3)', marginTop: 3, lineHeight: 1.45 }}>{desc}</div>
    </button>
  );
}

function AccountDetailModal({ a, initial, onClose, onSave }) {
  const [opt, setOpt] = React.useState(initial?.method || 'manual');
  const [step, setStep] = React.useState(1);
  const [drag, setDrag] = React.useState(false);
  const [file, setFile] = React.useState(initial?.method === 'upload' ? initial.file : null);
  const [form, setForm] = React.useState(initial?.method === 'manual'
    ? { apr: initial.apr || '', min: initial.min || '', interest: initial.interest || '', due: initial.due || '' }
    : { apr: '', min: '', interest: '', due: '' });
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const balNum = a.balance.replace(/[$,]/g, '');
  const [useReport, setUseReport] = React.useState(true);
  const [curBalance, setCurBalance] = React.useState(balNum);
  const effectiveBalance = useReport ? balNum : curBalance;
  const canSave = opt === 'upload' ? !!file : (form.apr && form.min);
  const handleSave = () => {
    const bal = parseFloat(effectiveBalance.replace(/[$,]/g, '')) || 0;
    const data = opt === 'upload'
      ? { method: 'upload', file, currentBalance: '$' + effectiveBalance, apr: '24.99', min: String(Math.max(25, Math.round(bal * 0.03))), interest: String(Math.round(bal * 0.2499 / 12)), due: '—' }
      : { method: 'manual', currentBalance: '$' + effectiveBalance, apr: form.apr, min: form.min, interest: form.interest, due: form.due };
    onSave(data);
  };
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(5,46,22,.38)', backdropFilter: 'blur(3px)', display: 'grid', placeItems: 'center', padding: 24, zIndex: 50 }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: '#fff', borderRadius: 18, width: 'min(640px,100%)', maxHeight: '90vh', display: 'flex', flexDirection: 'column', boxShadow: 'var(--sh-pop)', overflow: 'hidden' }}>
        <div style={{ height: 5, background: 'var(--green-600)' }} />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 22px', borderBottom: '1px solid var(--border-2)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ width: 38, height: 38, borderRadius: '50%', flex: 'none', background: 'var(--green-50)', color: 'var(--green-600)', display: 'grid', placeItems: 'center' }}><WIcon name="creditCard" size={18} /></span>
            <div>
              <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--ink)' }}>{a.creditor} <span className="tnum" style={{ color: 'var(--ink-3)', fontWeight: 600 }}>****{a.last4}</span></div>
              <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 1 }}>{a.kind} · {a.sub}</div>
            </div>
          </div>
          <button onClick={onClose} style={{ width: 32, height: 32, borderRadius: 8, border: '1px solid var(--border)', background: '#fff', color: 'var(--ink-3)', cursor: 'pointer', display: 'grid', placeItems: 'center' }}><WIcon name="close" size={16} /></button>
        </div>

        <div style={{ padding: '18px 22px', overflowY: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 15 }}>
            <span style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--green-600)', color: '#fff', display: 'grid', placeItems: 'center', fontSize: 12, fontWeight: 800, flex: 'none' }}>{step}</span>
            <span style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--ink)' }}>{step === 1 ? 'Confirm the balance' : 'Add payment details'}</span>
            <span style={{ marginLeft: 'auto', fontSize: 11.5, color: 'var(--ink-3)', fontWeight: 600 }}>Step {step} of 2</span>
          </div>
          {step === 1 && (
          <div style={{ border: '1px solid var(--border)', borderRadius: 12, padding: '16px', marginBottom: 0 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 18, alignItems: 'start' }}>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.03em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: 5 }}>Balance from credit report</div>
                <div className="tnum" style={{ fontSize: 22, fontWeight: 900, color: 'var(--green-700)', letterSpacing: '-.02em' }}>{a.balance}</div>
                <label style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 12, cursor: 'pointer', fontSize: 13, color: 'var(--ink-2)', fontWeight: 600 }}>
                  <input type="checkbox" checked={useReport} onChange={(e) => setUseReport(e.target.checked)} style={{ width: 16, height: 16, accentColor: 'var(--green-600)', cursor: 'pointer' }} />
                  Use this balance
                </label>
              </div>
              <div style={{ alignSelf: 'center', fontSize: 12.5, fontWeight: 600, color: 'var(--muted)' }}>or</div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.03em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: 6 }}>Current balance</div>
                <span style={{ position: 'relative', display: 'block' }}>
                  <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--ink-2)', fontWeight: 700, fontSize: 13.5 }}>$</span>
                  <input value={effectiveBalance} onChange={(e) => { setCurBalance(e.target.value); setUseReport(false); }} style={{
                    width: '100%', boxSizing: 'border-box', padding: '10px 13px 10px 24px', fontSize: 13.5, fontFamily: 'inherit',
                    color: 'var(--ink)', background: '#fff',
                    border: '1px solid var(--border)', borderRadius: 10, outline: 'none',
                  }}
                    onFocus={(e) => { e.target.style.borderColor = 'var(--green-600)'; e.target.style.boxShadow = '0 0 0 3px var(--focus-ring)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none'; }} />
                </span>
                <div style={{ display: 'flex', gap: 6, marginTop: 7, fontSize: 11.5, color: 'var(--ink-3)', lineHeight: 1.4 }}>
                  <span style={{ color: 'var(--muted)', flex: 'none', marginTop: 1 }}><WIcon name="info" size={13} /></span>
                  <span>Your report may be 30–60 days old — update this if your balance has changed.</span>
                </div>
              </div>
            </div>
          </div>
          )}

          {step === 2 && (<>
          {opt === 'upload' ? (
            <div>
              {file ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: 13, padding: '14px 16px', border: '1px solid var(--green-200)', background: 'var(--green-50)', borderRadius: 12 }}>
                  <span style={{ width: 40, height: 40, borderRadius: 10, flex: 'none', display: 'grid', placeItems: 'center', background: '#dcf3e4', color: 'var(--green-700)' }}><WIcon name="fileText" size={20} /></span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontWeight: 600, fontSize: 13.5, color: 'var(--ink)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{file}</div>
                    <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 1 }}>Ready to process</div>
                  </div>
                  <button onClick={() => setFile(null)} style={{ border: 'none', background: 'none', color: 'var(--ink-3)', cursor: 'pointer', display: 'grid', placeItems: 'center' }}><WIcon name="close" size={16} /></button>
                </div>
              ) : (
                <div
                  onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
                  onDragLeave={() => setDrag(false)}
                  onDrop={(e) => { e.preventDefault(); setDrag(false); setFile('Capital_One_Statement.pdf'); }}
                  onClick={() => setFile('Capital_One_Statement.pdf')}
                  style={{ border: `1.6px dashed ${drag ? 'var(--green-600)' : '#bcd9c6'}`, background: drag ? '#e7f7ec' : '#f7faf8', borderRadius: 12, padding: '30px 18px', textAlign: 'center', cursor: 'pointer', transition: '.15s' }}
                >
                  <span style={{ color: 'var(--green-600)', display: 'inline-grid', placeItems: 'center' }}><WIcon name="uploadCloud" size={40} stroke={1.7} /></span>
                  <div style={{ fontSize: 14.5, fontWeight: 700, color: 'var(--ink)', marginTop: 8 }}>Drag &amp; drop your PDF here</div>
                  <div style={{ fontSize: 12.5, color: 'var(--green-700)', fontWeight: 600, marginTop: 3 }}>or click to browse</div>
                  <div style={{ fontSize: 11.5, color: 'var(--ink-3)', marginTop: 9 }}>We support PDF files up to 25MB</div>
                </div>
              )}
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              <Field label="Interest Rate (APR %)" placeholder="e.g. 29.99" value={form.apr} onChange={set('apr')} hint="Look for “APR” on your statement." />
              <Field label="Minimum Payment ($)" placeholder="e.g. 175.00" value={form.min} onChange={set('min')} hint="The smallest amount due each month." />
              <Field label="Interest Charged Last Month ($)" placeholder="e.g. 45.00" value={form.interest} onChange={set('interest')} hint="The “interest charge” line on your latest statement." />
              <Field label="Payment Due Date" placeholder="MM/DD/YYYY" icon="calendar" value={form.due} onChange={set('due')} hint="When this month’s payment is due." />
            </div>
          )}
          <button onClick={() => setOpt(opt === 'upload' ? 'manual' : 'upload')} style={{ marginTop: 16, background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: 'var(--green-700)', fontSize: 13, fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <WIcon name={opt === 'upload' ? 'fileText' : 'uploadCloud'} size={15} />
            {opt === 'upload' ? 'Enter the numbers manually instead' : 'Have your statement? Upload it instead'}
          </button>
          </>)}
        </div>

        <div style={{ borderTop: '1px solid var(--border-2)', padding: '14px 22px', display: 'flex', justifyContent: 'space-between', gap: 10 }}>
          {step === 1
            ? <WButton variant="ghost" onClick={onClose}>Cancel</WButton>
            : <WButton variant="ghost" onClick={() => setStep(1)}>Back</WButton>}
          {step === 1
            ? <WButton variant="primary" icon="arrowRight" iconRight onClick={() => setStep(2)}>Continue</WButton>
            : <WButton variant="primary" icon="check" disabled={!canSave} onClick={handleSave}>Save Account Details</WButton>}
        </div>
      </div>
    </div>
  );
}

function AccountRow({ a, d, onOpen, last }) {
  const done = !!d;
  return (
    <div onClick={onOpen} style={{ display: 'grid', gridTemplateColumns: GRID, gap: 12, alignItems: 'center', padding: '15px 22px', cursor: 'pointer', borderBottom: last ? 'none' : '1px solid var(--border-2)' }}
      onMouseEnter={(e) => e.currentTarget.style.background = '#fafdfb'}
      onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span style={{ width: 38, height: 38, borderRadius: '50%', flex: 'none', background: done ? 'var(--green-100)' : 'var(--green-50)', color: 'var(--green-600)', display: 'grid', placeItems: 'center' }}><WIcon name="creditCard" size={18} /></span>
        <div>
          <div className="tnum" style={{ fontWeight: 700, fontSize: 14, color: 'var(--ink)' }}>****{a.last4}</div>
          <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 1 }}>Last 4 digits</div>
        </div>
      </div>
      <div>
        <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--ink)' }}>{a.creditor}</div>
        <div className="tnum" style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 1 }}>#{a.acct}</div>
      </div>
      <div>
        <div style={{ fontSize: 13.5, color: 'var(--ink-2)' }}>{a.kind}</div>
        <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 1 }}>{a.sub}</div>
      </div>
      <div className="tnum" style={{ fontSize: 15, fontWeight: 800, color: 'var(--ink)' }}>{a.balance}</div>
      <div>
        {done ? (
          <>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '3px 10px', borderRadius: 999, background: 'var(--green-100)', color: 'var(--green-700)', fontSize: 12, fontWeight: 700 }}><WIcon name="check" size={12} stroke={3} /> Complete</span>
            <div className="tnum" style={{ fontSize: 12.5, color: 'var(--ink-2)', marginTop: 4, fontWeight: 600 }}>{d.apr}% APR · ${d.min}/mo</div>
            <div style={{ fontSize: 11, color: 'var(--ink-3)', marginTop: 1 }}>{d.method === 'upload' ? 'From statement' : 'Entered manually'}</div>
          </>
        ) : (
          <>
            <span style={{ display: 'inline-block', padding: '3px 10px', borderRadius: 999, background: 'var(--amber-bg)', color: 'var(--amber)', fontSize: 12, fontWeight: 700 }}>Missing Info</span>
            <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 4 }}>APR &amp; payment needed</div>
          </>
        )}
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', color: done ? 'var(--green-600)' : 'var(--muted)' }}>
        <WIcon name={done ? 'check' : 'chevronRight'} size={18} stroke={done ? 2.6 : 2} />
      </div>
    </div>
  );
}

function AddAccountModal({ onClose, onSave }) {
  const TYPES = ['Credit Card', 'Auto Loan', 'Student Loan', 'Personal Loan', 'Medical', 'Buy Now Pay Later', 'Other'];
  const [type, setType] = React.useState('Credit Card');
  const [form, setForm] = React.useState({ name: '', balance: '', apr: '', min: '' });
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const canSave = form.name && form.balance;
  const handleSave = () => onSave({ name: form.name, type, balance: form.balance, apr: form.apr, min: form.min });
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(5,46,22,.38)', backdropFilter: 'blur(3px)', display: 'grid', placeItems: 'center', padding: 24, zIndex: 50 }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: '#fff', borderRadius: 18, width: 'min(560px,100%)', maxHeight: '90vh', display: 'flex', flexDirection: 'column', boxShadow: 'var(--sh-pop)', overflow: 'hidden' }}>
        <div style={{ height: 5, background: 'var(--green-600)' }} />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 22px', borderBottom: '1px solid var(--border-2)' }}>
          <div style={{ fontWeight: 800, fontSize: 16, color: 'var(--ink)' }}>Add an account</div>
          <button onClick={onClose} style={{ width: 32, height: 32, borderRadius: 8, border: '1px solid var(--border)', background: '#fff', color: 'var(--ink-3)', cursor: 'pointer', display: 'grid', placeItems: 'center' }}><WIcon name="close" size={16} /></button>
        </div>
        <div style={{ padding: '18px 22px', overflowY: 'auto' }}>
          <div style={{ marginBottom: 16 }}>
            <Field label="Who do you owe?" placeholder="e.g. Discover, Toyota Financial, Mercy Hospital" value={form.name} onChange={set('name')} />
          </div>
          <div style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--ink-2)', marginBottom: 8 }}>What kind of account?</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 18 }}>
            {TYPES.map((t) => (
              <button key={t} onClick={() => setType(t)} style={{ padding: '7px 13px', borderRadius: 999, cursor: 'pointer', fontSize: 12.5, fontWeight: 600, border: `1.5px solid ${type === t ? 'var(--green-600)' : 'var(--border)'}`, background: type === t ? 'var(--green-50)' : '#fff', color: type === t ? 'var(--green-700)' : 'var(--ink-2)' }}>{t}</button>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            <Field label="Balance ($)" placeholder="e.g. 1,200" value={form.balance} onChange={set('balance')} hint="How much you still owe." />
            <Field label="Minimum Payment ($)" placeholder="e.g. 75" value={form.min} onChange={set('min')} hint="What you pay each month." />
            <Field label="Interest Rate (APR %)" placeholder="e.g. 0" value={form.apr} onChange={set('apr')} hint="Leave 0 if it's interest-free." />
          </div>
        </div>
        <div style={{ borderTop: '1px solid var(--border-2)', padding: '14px 22px', display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
          <WButton variant="ghost" onClick={onClose}>Cancel</WButton>
          <WButton variant="primary" icon="check" disabled={!canSave} onClick={handleSave}>Add Account</WButton>
        </div>
      </div>
    </div>
  );
}

function Cell({ value, onChange, placeholder, prefix, onBlur }) {
  return (
    <span style={{ position: 'relative', display: 'block' }}>
      {prefix && <span style={{ position: 'absolute', left: 11, top: '50%', transform: 'translateY(-50%)', color: 'var(--ink-3)', fontSize: 13.5, pointerEvents: 'none' }}>{prefix}</span>}
      <input value={value} onChange={onChange} placeholder={placeholder} style={{ width: '100%', boxSizing: 'border-box', padding: prefix ? '9px 11px 9px 21px' : '9px 11px', fontSize: 13.5, fontFamily: 'inherit', color: 'var(--ink)', background: '#fff', border: '1px solid var(--border)', borderRadius: 9, outline: 'none' }}
        onFocus={(e) => { e.target.style.borderColor = 'var(--green-600)'; e.target.style.boxShadow = '0 0 0 3px var(--focus-ring)'; }}
        onBlur={(e) => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none'; onBlur && onBlur(); }} />
    </span>
  );
}

const MORE_GRID = '1.7fr 1.15fr .8fr 1fr .65fr 40px';
const ACCT_TYPES = ['Credit Card', 'Auto Loan', 'Student Loan', 'Personal Loan', 'Medical', 'Buy Now Pay Later', 'Other'];
function AdditionalAccounts({ items, setItems, onBack, onContinue }) {
  const update = (i, k, v) => setItems((rows) => rows.map((r, idx) => idx === i ? { ...r, [k]: v } : r));
  const maybeAppend = () => setItems((rows) => {
    const last = rows[rows.length - 1];
    return (last.name || last.balance) ? [...rows, { name: '', type: 'Credit Card', balance: '', min: '', apr: '' }] : rows;
  });
  const filled = items.filter((r) => r.name && r.balance);
  const totalBal = filled.reduce((s, r) => s + (parseFloat(String(r.balance).replace(/[$,]/g, '')) || 0), 0);
  const addRow = () => setItems((rows) => [...rows, { name: '', type: 'Credit Card', balance: '', min: '', apr: '' }]);
  const removeRow = (i) => setItems((rows) => rows.length === 1 ? [{ name: '', type: 'Credit Card', balance: '', min: '', apr: '' }] : rows.filter((_, idx) => idx !== i));
  const cols = ['Account', 'Type', 'Balance', 'Monthly Payment', 'APR %', ''];
  return (
    <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 18, boxShadow: 'var(--sh-card)', overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', padding: '22px 24px 18px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 13 }}>
          <span style={{ width: 42, height: 42, borderRadius: 12, flex: 'none', background: 'var(--green-50)', color: 'var(--green-600)', display: 'grid', placeItems: 'center' }}><WIcon name="creditCard" size={22} /></span>
          <div>
            <div style={{ fontSize: 18, fontWeight: 800, color: 'var(--ink)', letterSpacing: '-.01em' }}>Accounts Not on Your Credit Report</div>
            <div style={{ fontSize: 13.5, color: 'var(--ink-3)', marginTop: 3 }}>Type in any other accounts you're paying on — one per line. Skip the rows you don't need.</div>
          </div>
        </div>
        <div style={{ flex: 'none', textAlign: 'right', border: '1px solid var(--border)', borderRadius: 12, padding: '10px 16px' }}>
          <div className="tnum" style={{ fontSize: 15, fontWeight: 800, color: 'var(--ink)' }}>{filled.length} account{filled.length !== 1 ? 's' : ''}</div>
          <div className="tnum" style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--green-700)', marginTop: 1 }}>${totalBal.toLocaleString()} <span style={{ color: 'var(--ink-3)', fontWeight: 500 }}>total balance</span></div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: MORE_GRID, gap: 12, padding: '10px 24px', background: '#f8fafc', borderTop: '1px solid var(--border-2)', borderBottom: '1px solid var(--border-2)' }}>
        {cols.map((c, i) => <div key={i} style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.06em', color: 'var(--ink-3)', textTransform: 'uppercase' }}>{c}</div>)}
      </div>

      {items.map((r, i) => (
        <div key={i} style={{ display: 'grid', gridTemplateColumns: MORE_GRID, gap: 12, alignItems: 'center', padding: '10px 24px', borderBottom: '1px solid var(--border-2)' }}>
          <Cell value={r.name} onChange={(e) => update(i, 'name', e.target.value)} placeholder="e.g. Discover, Affirm, Mercy Hospital" />
          <select value={r.type} onChange={(e) => update(i, 'type', e.target.value)} style={{ width: '100%', boxSizing: 'border-box', padding: '9px 11px', fontSize: 13.5, fontFamily: 'inherit', color: 'var(--ink)', background: '#fff', border: '1px solid var(--border)', borderRadius: 9, outline: 'none', cursor: 'pointer' }}
            onFocus={(e) => { e.target.style.borderColor = 'var(--green-600)'; e.target.style.boxShadow = '0 0 0 3px var(--focus-ring)'; }}
            onBlur={(e) => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none'; }}>
            {ACCT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
          <Cell value={r.balance} onChange={(e) => update(i, 'balance', e.target.value)} placeholder="0" prefix="$" />
          <Cell value={r.min} onChange={(e) => update(i, 'min', e.target.value)} placeholder="0" prefix="$" />
          <Cell value={r.apr} onChange={(e) => update(i, 'apr', e.target.value)} onBlur={maybeAppend} placeholder="0" />
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button onClick={() => removeRow(i)} title="Remove" style={{ width: 30, height: 30, borderRadius: 8, border: 'none', background: 'none', color: 'var(--muted)', cursor: 'pointer', display: 'grid', placeItems: 'center' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--red)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--muted)'}><WIcon name="trash" size={15} /></button>
          </div>
        </div>
      ))}

      <div style={{ padding: '14px 24px' }}>
        <button onClick={addRow} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: 'var(--green-700)', fontSize: 13.5, fontWeight: 700 }}>
          <span style={{ width: 22, height: 22, borderRadius: 7, background: 'var(--green-50)', display: 'grid', placeItems: 'center' }}><WIcon name="plus" size={15} /></span>
          Add another account
        </button>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', padding: '18px 24px', background: '#fafbfd', borderTop: '1px solid var(--border-2)' }}>
        <WButton variant="ghost" onClick={onBack}>Back</WButton>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 12.5, color: 'var(--ink-3)' }}>These are optional — add what you can.</span>
          <WButton variant="primary" icon="arrowRight" iconRight onClick={onContinue}>Continue to Your Impact</WButton>
        </div>
      </div>
    </div>
  );
}

function payoffMonths(balance, annualRate, payment) {
  const r = annualRate / 100 / 12;
  if (balance <= 0) return 0;
  if (payment <= 0) return Infinity;
  if (r === 0) return Math.ceil(balance / payment);
  if (payment <= balance * r) return Infinity;
  return Math.ceil(-Math.log(1 - (balance * r) / payment) / Math.log(1 + r));
}
function fmtDur(m) {
  if (!isFinite(m)) return '30+ yrs';
  const y = Math.floor(m / 12), mo = m % 12;
  if (y && mo) return `${y} yr, ${mo} mo`;
  if (y) return `${y} yr`;
  return `${mo} mo`;
}
function freedomDate(m) {
  if (!isFinite(m)) return '—';
  const d = new Date(); d.setMonth(d.getMonth() + m);
  return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}
function money(n) { return '$' + Math.round(n).toLocaleString(); }

function Scenario({ label, date, dur, interest, accent }) {
  return (
    <div style={{ flex: 1, minWidth: 220, background: 'var(--card)', border: `1px solid ${accent ? 'var(--green-200)' : 'var(--border)'}`, borderRadius: 16, boxShadow: 'var(--sh-card)', borderTop: `4px solid ${accent ? 'var(--green-600)' : '#cbd5e1'}`, padding: '18px 22px 20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: accent ? 'var(--green-600)' : '#94a3b8' }} />
        <span style={{ fontSize: 13, fontWeight: 700, color: accent ? 'var(--green-700)' : 'var(--ink-3)' }}>{label}</span>
      </div>
      <div style={{ fontSize: 12, color: 'var(--ink-3)' }}>Debt-free by</div>
      <div className="tnum" style={{ fontSize: 26, fontWeight: 900, color: accent ? 'var(--ink)' : 'var(--ink-2)', letterSpacing: '-.01em', marginTop: 1 }}>{date}</div>
      <div style={{ display: 'flex', gap: 28, marginTop: 16 }}>
        <div><div style={{ fontSize: 12, color: 'var(--ink-3)' }}>Takes</div><div className="tnum" style={{ fontSize: 16, fontWeight: 700, color: 'var(--ink)', marginTop: 2 }}>{dur}</div></div>
        <div><div style={{ fontSize: 12, color: 'var(--ink-3)' }}>Interest paid</div><div className="tnum" style={{ fontSize: 16, fontWeight: 700, color: accent ? 'var(--green-700)' : 'var(--red)', marginTop: 2 }}>{interest}</div></div>
      </div>
    </div>
  );
}

function Impact({ accounts, details, items, onBack, onNavigate }) {
  const reportDebts = accounts.map((a, i) => {
    const reportBal = parseFloat(a.balance.replace(/[$,]/g, '')) || 0;
    const d = details[i] || {};
    const cur = d.currentBalance ? (parseFloat(String(d.currentBalance).replace(/[$,]/g, '')) || reportBal) : reportBal;
    return { name: a.creditor, type: a.sub, bal: cur, reportBal, apr: parseFloat(d.apr) || 22.99, min: parseFloat(d.min) || Math.max(25, Math.round(cur * 0.03)), source: 'report' };
  });
  const extraDebts = items.filter((r) => r.name && r.balance).map((r) => {
    const bal = parseFloat(String(r.balance).replace(/[$,]/g, '')) || 0;
    return { name: r.name, type: r.type, bal, reportBal: null, apr: parseFloat(r.apr) || 0, min: parseFloat(r.min) || Math.max(25, Math.round(bal * 0.03)), source: 'added' };
  });
  const debts = [...reportDebts, ...extraDebts];
  const totalBal = debts.reduce((s, d) => s + d.bal, 0);
  const totalMin = debts.reduce((s, d) => s + d.min, 0);
  const wApr = totalBal ? debts.reduce((s, d) => s + d.bal * d.apr, 0) / totalBal : 0;
  debts.forEach((d) => { d.int = Math.round(d.bal * d.apr / 100); });
  const monthlyInt = debts.reduce((s, d) => s + Math.round(d.int / 12), 0);
  const yearlyInt = monthlyInt * 12;

  // Affordable extra: +50% of their current minimums — always proportional to
  // what they already pay, never a forced sprint. The new payoff date is the OUTPUT.
  const extra = Math.max(25, Math.round(totalMin * 0.5 / 25) * 25);
  const minMonths = payoffMonths(totalBal, wApr, totalMin);
  const planMonths = payoffMonths(totalBal, wApr, totalMin + extra);
  const minInt = isFinite(minMonths) ? Math.max(0, totalMin * minMonths - totalBal) : totalBal * 1.8;
  const planInt = isFinite(planMonths) ? Math.max(0, (totalMin + extra) * planMonths - totalBal) : 0;
  const intSaved = Math.max(0, minInt - planInt);
  const monthsSaved = Math.max(0, (isFinite(minMonths) ? minMonths : 480) - (isFinite(planMonths) ? planMonths : 0));
  const currentDate = freedomDate(minMonths);
  const newDate = freedomDate(planMonths);
  const [openIdx, setOpenIdx] = React.useState(null);
  debts.sort((a, b) => b.int - a.int);
  const sumPay = debts.reduce((s, d) => s + d.min, 0);
  const sumInt = debts.reduce((s, d) => s + Math.round(d.int / 12), 0);
  const sumToBal = debts.reduce((s, d) => s + Math.max(0, d.min - Math.round(d.int / 12)), 0);
  const balPct = sumPay > 0 ? Math.round(sumToBal / sumPay * 100) : 0;
  const intPct = 100 - balPct;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {/* THE SHOCK */}
      <div style={{ background: 'var(--grad-deep-green)', borderRadius: 18, padding: 'clamp(34px,5vw,60px) clamp(24px,3vw,40px)', color: '#fff', textAlign: 'center', border: '1px solid #15803d' }}>
        <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.6)', marginBottom: 16 }}>If you stay at this pace, you'll pay</div>
        <div className="tnum" style={{ fontSize: 'clamp(58px,12vw,128px)', fontWeight: 900, letterSpacing: '-.03em', lineHeight: .88 }}>{money(yearlyInt)}</div>
        <div style={{ fontSize: 'clamp(17px,2.4vw,24px)', fontWeight: 800, color: '#fca5a5', marginTop: 14 }}>in interest this year alone</div>
        <div style={{ fontSize: 14.5, color: 'rgba(255,255,255,.8)', maxWidth: 540, margin: '20px auto 0', lineHeight: 1.6 }}>
          That's about <strong style={{ color: '#fff' }}>{money(monthlyInt)}</strong> in monthly interest, based on your current balances, APRs, and monthly payments.
        </div>
        <div style={{ marginTop: 26, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,.15)', display: 'flex', justifyContent: 'center', gap: 'clamp(24px,6vw,64px)', flexWrap: 'wrap', textAlign: 'center' }}>
          <div style={{ maxWidth: 140 }}>
            <div className="tnum" style={{ fontSize: 'clamp(26px,4vw,36px)', fontWeight: 900, lineHeight: 1 }}>{balPct}%</div>
            <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,.7)', marginTop: 8, lineHeight: 1.4 }}>of your payments go to your overall balance</div>
          </div>
          <div style={{ maxWidth: 140 }}>
            <div className="tnum" style={{ fontSize: 'clamp(26px,4vw,36px)', fontWeight: 900, lineHeight: 1, whiteSpace: 'nowrap' }}>{fmtDur(minMonths)}</div>
            <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,.7)', marginTop: 8, lineHeight: 1.4 }}>is how long it'll take you to be debt-free</div>
          </div>
          <div style={{ maxWidth: 150 }}>
            <div className="tnum" style={{ fontSize: 'clamp(26px,4vw,36px)', fontWeight: 900, color: '#fca5a5', lineHeight: 1 }}>{money(minInt)}</div>
            <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,.7)', marginTop: 8, lineHeight: 1.4 }}>total interest you will pay — {totalBal ? Math.round(minInt / totalBal * 100) : 0}% of your debt</div>
          </div>
        </div>
      </div>

      {/* THE WAY OUT */}
      <div style={{ background: 'var(--card)', border: '1px solid var(--green-200)', borderRadius: 18, boxShadow: 'var(--sh-card)', padding: 'clamp(22px,3vw,30px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
        <div style={{ minWidth: 230, flex: 1 }}>
          <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--green-700)', marginBottom: 9 }}>The good news</div>
          <div style={{ fontSize: 'clamp(18px,2.3vw,23px)', fontWeight: 800, color: 'var(--ink)', lineHeight: 1.35 }}>Pay just <span style={{ color: 'var(--green-700)' }}>{money(extra)} more a month</span> and be debt-free by <span style={{ color: 'var(--green-700)' }}>{newDate}</span>.</div>
          <div style={{ fontSize: 12.5, color: 'var(--ink-3)', marginTop: 8 }}>Without it, you won't be debt-free until <strong style={{ color: 'var(--ink-2)' }}>{currentDate}</strong>.</div>
          <div style={{ marginTop: 16 }}><WButton variant="primary" icon="arrowRight" iconRight onClick={() => onNavigate && onNavigate('budget')}>Build My Payoff Plan</WButton></div>
        </div>
        <div style={{ display: 'flex', gap: 'clamp(22px,4vw,48px)' }}>
          <div>
            <div className="tnum" style={{ fontSize: 'clamp(28px,4vw,40px)', fontWeight: 900, color: 'var(--green-700)', lineHeight: 1, whiteSpace: 'nowrap' }}>{money(intSaved)}</div>
            <div style={{ fontSize: 12.5, color: 'var(--ink-3)', marginTop: 6 }}>Kept in your pocket</div>
          </div>
          <div>
            <div className="tnum" style={{ fontSize: 'clamp(28px,4vw,40px)', fontWeight: 900, color: 'var(--ink)', lineHeight: 1, whiteSpace: 'nowrap' }}>{fmtDur(monthsSaved)}</div>
            <div style={{ fontSize: 12.5, color: 'var(--ink-3)', marginTop: 6 }}>Sooner than minimums</div>
          </div>
        </div>
      </div>

      {/* per-account details */}
      <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 18, boxShadow: 'var(--sh-card)', overflow: 'hidden' }}>
        <div style={{ padding: '16px 22px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <span style={{ fontSize: 14.5, fontWeight: 800, color: 'var(--ink)' }}>What each account is costing you</span>
            <div style={{ fontSize: 12.5, color: 'var(--ink-3)', marginTop: 3, lineHeight: 1.5, maxWidth: 520 }}>A large part of every payment goes to interest instead of paying down what you owe.</div>
          </div>
        </div>
        {debts.map((d, i) => {
          if (openIdx !== null && openIdx !== i) return null;
          const open = openIdx === i;
          const mInt = Math.round(d.int / 12);
          const toBal = Math.max(0, d.min - mInt);
          const pct = d.min > 0 ? Math.round(toBal / d.min * 100) : 0;
          return (
            <div key={i} style={{ borderTop: '1px solid var(--border-2)' }}>
              <div onClick={() => setOpenIdx(open ? null : i)} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '13px 22px', cursor: 'pointer' }}>
                <span style={{ width: 30, height: 30, borderRadius: 8, flex: 'none', background: 'var(--green-50)', color: 'var(--green-600)', display: 'grid', placeItems: 'center' }}><WIcon name="creditCard" size={15} /></span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--ink)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{d.name}</div>
                  <div style={{ fontSize: 12, color: 'var(--ink-3)' }}>{money(d.bal)} · {d.apr.toFixed(2)}% APR</div>
                </div>
                <div style={{ textAlign: 'right', flex: 'none' }}>
                  <div className="tnum" style={{ fontSize: 22, fontWeight: 900, color: 'var(--red)', lineHeight: 1 }}>{money(Math.round(d.int / 12))}</div>
                  <div style={{ fontSize: 11, color: 'var(--ink-3)', marginTop: 2 }}>a month in interest</div>
                </div>
                <span style={{ color: 'var(--muted)', flex: 'none', transition: 'transform .2s', transform: open ? 'rotate(180deg)' : 'none' }}><WIcon name="chevronDown" size={16} /></span>
              </div>
              {open && (
                <div style={{ padding: '4px 22px 20px 64px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: 'clamp(14px,3vw,28px)', flexWrap: 'wrap' }}>
                    <div>
                      <div style={{ fontSize: 11.5, color: 'var(--ink-3)', marginBottom: 4 }}>Your payment</div>
                      <div className="tnum" style={{ fontSize: 'clamp(22px,3vw,30px)', fontWeight: 800, color: 'var(--ink)', lineHeight: 1 }}>{money(d.min)}</div>
                    </div>
                    <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--muted)', paddingBottom: 3 }}>−</div>
                    <div>
                      <div style={{ fontSize: 11.5, color: 'var(--ink-3)', marginBottom: 4 }}>Interest added</div>
                      <div className="tnum" style={{ fontSize: 'clamp(22px,3vw,30px)', fontWeight: 800, color: 'var(--red)', lineHeight: 1 }}>{money(mInt)}</div>
                    </div>
                    <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--muted)', paddingBottom: 3 }}>=</div>
                    <div>
                      <div style={{ fontSize: 11.5, color: 'var(--ink-3)', marginBottom: 4 }}>Goes to your balance</div>
                      <div className="tnum" style={{ fontSize: 'clamp(22px,3vw,30px)', fontWeight: 800, color: 'var(--green-700)', lineHeight: 1 }}>{money(toBal)}</div>
                    </div>
                  </div>
                  <div style={{ fontSize: 12.5, color: 'var(--ink-3)', marginTop: 14 }}>Only <strong style={{ color: 'var(--ink-2)' }}>{pct}%</strong> of this month's payment actually reduces what you owe.</div>
                  <button onClick={() => setOpenIdx(null)} style={{ marginTop: 14, background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: 'var(--green-700)', fontSize: 13, fontWeight: 700 }}>← Back to all accounts</button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* footer */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <WButton variant="ghost" onClick={onBack}>Back</WButton>
        <WButton variant="primary" icon="arrowRight" iconRight onClick={() => onNavigate && onNavigate('budget')}>Build My Payoff Plan</WButton>
      </div>
    </div>
  );
}

function WakeUpCall({ onNavigate }) {
  const [details, setDetails] = React.useState({});
  const [modal, setModal] = React.useState(null); // account index
  const [stage, setStage] = React.useState('impact'); // 'accounts' | 'more' | 'impact'
  const [items, setItems] = React.useState([{ name: '', type: 'Credit Card', balance: '', min: '', apr: '' }]); // additional accounts (inline rows)
  const cols = ['Account', 'Creditor', 'Account Type', 'Balance', 'Status', 'Details'];
  const total = WAKEUP_ACCOUNTS.length;
  const doneCount = Object.keys(details).length;
  const allDone = doneCount === total;
  const save = (data) => { setDetails((d) => ({ ...d, [modal]: data })); setModal(null); };
  return (
    <div style={{ padding: 'clamp(24px,3vw,40px) clamp(20px,3vw,44px) 48px', maxWidth: 1280 }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', marginBottom: 24 }}>
        <div>
          <h1 style={{ margin: 0, fontSize: 'clamp(28px,3.4vw,36px)', fontWeight: 800, letterSpacing: '-.02em', color: 'var(--ink)' }}>Payoff Plan</h1>
          <p style={{ margin: '8px 0 0', color: 'var(--ink-3)', fontSize: 14.5, lineHeight: 1.5 }}>{stage === 'accounts' ? "Let's complete the details for the accounts we found with balances." : stage === 'more' ? "Add any accounts with balances that aren't on your credit report." : "Here's your full debt picture — and how fast you can be free of it."}</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9, background: '#fff', border: '1px solid var(--green-200)', borderRadius: 12, padding: '9px 15px' }}>
          <span style={{ color: 'var(--green-600)', display: 'grid', placeItems: 'center' }}><WIcon name="checkCircle" size={18} /></span>
          <div>
            <div style={{ fontWeight: 700, fontSize: 13, color: 'var(--green-700)' }}>Analysis completed</div>
            <div style={{ fontSize: 12, color: 'var(--ink-3)' }}>June 20, 2026 • 9:42 AM</div>
          </div>
        </div>
      </div>

      <Stepper current={stage === 'accounts' ? 0 : stage === 'more' ? 1 : 2} onJump={(i) => { setStage(i === 0 ? 'accounts' : i === 1 ? 'more' : 'impact'); window.scrollTo(0, 0); }} />

      {stage === 'accounts' && (
      <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 18, boxShadow: 'var(--sh-card)', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', padding: '22px 24px 18px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 13 }}>
            <span style={{ width: 42, height: 42, borderRadius: 12, flex: 'none', background: 'var(--green-50)', color: 'var(--green-600)', display: 'grid', placeItems: 'center' }}><WIcon name="briefcase" size={22} /></span>
            <div>
              <div style={{ fontSize: 18, fontWeight: 800, color: 'var(--ink)', letterSpacing: '-.01em' }}>Accounts We Identified That Have Balances</div>
              <div style={{ fontSize: 13.5, color: 'var(--ink-3)', marginTop: 3 }}>We found {total} accounts with reported balances on your credit report.</div>
            </div>
          </div>
          <div style={{ flex: 'none', textAlign: 'right', border: '1px solid var(--border)', borderRadius: 12, padding: '10px 16px' }}>
            <div className="tnum" style={{ fontSize: 15, fontWeight: 800, color: 'var(--ink)' }}>{total} accounts</div>
            <div className="tnum" style={{ fontSize: 13.5, fontWeight: 700, color: 'var(--green-700)', marginTop: 1 }}>$7,234 <span style={{ color: 'var(--ink-3)', fontWeight: 500 }}>total balance</span></div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: GRID, gap: 12, padding: '10px 22px', background: '#f8fafc', borderTop: '1px solid var(--border-2)', borderBottom: '1px solid var(--border-2)' }}>
          {cols.map((c, i) => <div key={c} style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.06em', color: 'var(--ink-3)', textTransform: 'uppercase', textAlign: i === 5 ? 'right' : 'left' }}>{c}</div>)}
        </div>

        {WAKEUP_ACCOUNTS.map((a, i) => (
          <AccountRow key={a.last4} a={a} d={details[i]} onOpen={() => setModal(i)} last={i === total - 1} />
        ))}

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 16, flexWrap: 'wrap', padding: '18px 24px', background: '#fafbfd', borderTop: '1px solid var(--border-2)' }}>
          <span style={{ fontSize: 12.5, color: 'var(--ink-3)' }}>{allDone ? 'Next: Add accounts not on your credit report' : `${total - doneCount} account${total - doneCount !== 1 ? 's' : ''} still missing details — you can add them later`}</span>
          <WButton variant="primary" icon="arrowRight" iconRight onClick={() => setStage('more')}>Continue to Additional Accounts</WButton>
        </div>
      </div>
      )}

      {stage === 'more' && <AdditionalAccounts items={items} setItems={setItems} onBack={() => setStage('accounts')} onContinue={() => setStage('impact')} />}

      {stage === 'impact' && <Impact accounts={WAKEUP_ACCOUNTS} details={details} items={items} onBack={() => setStage('more')} onNavigate={onNavigate} />}

      {modal !== null && <AccountDetailModal a={WAKEUP_ACCOUNTS[modal]} initial={details[modal]} onClose={() => setModal(null)} onSave={save} />}
    </div>
  );
}

window.WakeUpCall = WakeUpCall;
