// Profile & Documents — the account screen reached from the user chip ("under
// your name"). Everything collected during setup lives here so it can be
// reviewed and edited: personal details, the credit report on file, and the
// three identity documents. Reuses DGDocSlot / DGSectionHead / DG_US_STATES
// exported by upload.jsx so the document slots behave identically.
const { Icon: AIcon, Button: AButton, Card: ACard, Input: AInput, Select: ASelect } = window.DisputeGatorDesignSystem_dde977;

function AccountScreen() {
  const DocSlot = window.DGDocSlot;
  const US_STATES = window.DG_US_STATES;
  const [profile, setProfile] = React.useState({ first: 'Chad', last: 'Nicely', email: 'chad@chadnicely.com', phone: '(813) 555-0142', dob: '04/12/1985', ssn: '••• •• 4417', address: '2847 Bayshore Blvd', city: 'Tampa', state: 'FL', zip: '33629' });
  const [saved, setSaved] = React.useState(false);
  const [report, setReport] = React.useState({ name: '3-Bureau Credit Report & Scores _ SmartCredit.pdf', when: 'Uploaded Apr 18, 2026' });
  const reportRef = React.useRef(null);
  const [docs, setDocs] = React.useState({
    license: { name: "Chad-Nicely-Drivers-License.jpg", status: 'verified', detail: 'Name matches · Valid through 2027' },
    ssn: { name: 'SSA-1099-2025.pdf', status: 'verified', detail: 'Name & SSN match your profile' },
    address: { name: 'TECO-Utility-Bill-Apr.pdf', status: 'verified', detail: 'Address matches · Dated 12 days ago' },
  });
  const setP = (k) => (e) => { setProfile((p) => ({ ...p, [k]: e.target.value })); setSaved(false); };
  const setDoc = (k) => (v) => setDocs((d) => ({ ...d, [k]: v }));
  const save = () => { setSaved(true); };

  return (
    <div style={{ padding: 'clamp(24px,3.5vw,40px) clamp(20px,3vw,40px) 48px', maxWidth: 1000, margin: '0 auto' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 26 }}>
        <span style={{ width: 60, height: 60, borderRadius: '50%', flex: 'none', background: 'var(--green-100)', color: 'var(--green-700)', display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: 21, letterSpacing: '.02em' }}>CN</span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <h1 style={{ margin: 0, fontSize: 'clamp(26px,3.2vw,34px)', fontWeight: 800, letterSpacing: '-.02em', color: 'var(--ink)' }}>Profile &amp; Documents</h1>
          <p style={{ margin: '6px 0 0', color: 'var(--ink-2)', fontSize: 14.5, lineHeight: 1.5 }}>Review and update your details and the documents we have on file.</p>
        </div>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, flex: 'none', background: 'var(--green-50)', border: '1px solid var(--green-200)', color: 'var(--green-700)', fontWeight: 700, fontSize: 12.5, padding: '7px 13px', borderRadius: 999 }}>
          <AIcon name="gem" size={15} /> Premium Member
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        {/* Personal information */}
        <ACard pad={28}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
            <window.DGSectionHead icon="user" n="1" title="Personal Information" />
            <span style={{ fontSize: 12.5, color: 'var(--ink-3)', fontWeight: 600 }}>Used to personalize every dispute letter.</span>
          </div>
          <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            <AInput label="First Name" placeholder="First Name" value={profile.first} onChange={setP('first')} />
            <AInput label="Last Name" placeholder="Last Name" value={profile.last} onChange={setP('last')} />
            <AInput label="Date of Birth" icon="calendar" placeholder="MM/DD/YYYY" value={profile.dob} onChange={setP('dob')} />
            <AInput label="Last 4 of SSN" icon="lock" placeholder="••• •• 1234" value={profile.ssn} onChange={setP('ssn')} />
          </div>
          <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <AInput label="Email Address" icon="mail" placeholder="you@example.com" value={profile.email} onChange={setP('email')} />
            <AInput label="Phone Number" icon="phone" placeholder="(555) 123-4567" value={profile.phone} onChange={setP('phone')} />
          </div>
          <div style={{ marginTop: 16 }}><AInput label="Address" placeholder="Street Address" value={profile.address} onChange={setP('address')} /></div>
          <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
            <AInput label="City" placeholder="City" value={profile.city} onChange={setP('city')} />
            <ASelect label="State" placeholder="Select State" options={US_STATES} value={profile.state} onChange={setP('state')} />
            <AInput label="Zip Code" placeholder="Zip Code" value={profile.zip} onChange={setP('zip')} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 14, marginTop: 20 }}>
            {saved && <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 700, color: 'var(--green-700)' }}><AIcon name="checkCircle" size={16} /> Changes saved</span>}
            <AButton variant="primary" onClick={save}>Save Changes</AButton>
          </div>
        </ACard>

        {/* Credit report on file */}
        <ACard pad={28}>
          <window.DGSectionHead icon="fileText" n="2" title="Credit Report on File" sub="The tri-bureau report we analyze for disputable items. Upload a fresh copy any time your report updates." />
          <div style={{ marginTop: 18, display: 'flex', alignItems: 'center', gap: 14, padding: '16px 18px', border: '1px solid #cfe0d6', background: '#f3faf5', borderRadius: 14 }}>
            <span style={{ width: 44, height: 44, borderRadius: 11, flex: 'none', display: 'grid', placeItems: 'center', background: '#dcf3e4', color: 'var(--green)' }}><AIcon name="fileText" size={22} /></span>
            <div style={{ minWidth: 0, flex: 1 }}>
              <div style={{ fontWeight: 600, fontSize: 14.5, color: 'var(--ink)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{report ? report.name : 'No report on file'}</div>
              <div style={{ fontSize: 12.5, color: 'var(--ink-3)', marginTop: 2 }}>{report ? report.when : 'Upload your latest 3-bureau report to refresh your plan.'}</div>
            </div>
            <input ref={reportRef} type="file" accept="application/pdf,.pdf" hidden onChange={(e) => { const f = e.target.files[0]; if (f) setReport({ name: f.name, when: 'Uploaded just now' }); }} />
            <AButton variant="ghost" size="sm" icon="uploadCloud" onClick={() => reportRef.current && reportRef.current.click()}>Replace</AButton>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 14, color: 'var(--ink-3)', fontSize: 12.8 }}>
            <AIcon name="info" size={14} /> Don't have a recent report? Get your free tri-bureau report at <a href="https://www.smartcredit.com" target="_blank" rel="noopener" style={{ color: 'var(--green-600)', fontWeight: 600, textDecoration: 'none' }}>SmartCredit</a>.
          </div>
        </ACard>

        {/* Identity documents */}
        <ACard pad={28}>
          <window.DGSectionHead icon="shield" n="3" title="Identity Documents" sub="The three documents the bureaus require to process a dispute. Replace any of them if they expire or your details change." />
          <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: 16 }}>
            <DocSlot icon="user" kind="license" label="Driver's License" hint="Photo or PDF" accept="image/*,.pdf" check="Name matches · Valid through 2027" tips={["Driver's license", 'State or government photo ID', 'Passport', 'Military or tribal ID']} value={docs.license} onChange={setDoc('license')} />
            <DocSlot icon="lock" kind="ssn" label="Social Security Card" hint="Photo or PDF" accept="image/*,.pdf" check="Name & SSN match your profile" tips={['Social Security card', 'SSA-1099 benefits statement', 'W-2 or 1099 showing full SSN', 'Pay stub with full SSN']} value={docs.ssn} onChange={setDoc('ssn')} />
            <DocSlot icon="home" kind="address" label="Proof of Address" hint="Utility bill, lease" accept="image/*,.pdf" check="Address matches · Dated 12 days ago" tips={['Utility bill (dated within 60 days)', 'Bank or credit card statement', 'Signed lease or mortgage', 'Insurance statement']} value={docs.address} onChange={setDoc('address')} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 16, color: 'var(--ink-3)', fontSize: 12.8 }}>
            <AIcon name="lock" size={14} /> Your documents are encrypted and only used to verify your identity with the bureaus.
          </div>
        </ACard>
      </div>
    </div>
  );
}

window.AccountScreen = AccountScreen;
