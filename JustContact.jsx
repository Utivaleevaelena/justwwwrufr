/* Just a Website — Final CTA + minimal contact form with success animation.
   Submissions go to a Google Sheet via a Google Apps Script Web App.
   Paste your deployed Web App URL into SHEET_ENDPOINT (see GOOGLE_SHEET_SETUP.md). */
const T = window.JAW_T, JustButton = window.JustButton;

// ⬇️ Paste your Google Apps Script Web App URL here (…/exec) — used by BOTH forms.
//    See GOOGLE_SHEET_SETUP.md for the 4 setup steps.
const SHEET_ENDPOINT = 'https://script.google.com/macros/s/AKfycbznyZ5vm2cFCrIKjITgssvlNMVtii_zYc8-N59bSf_ibpJPSGHDEwKTqqyLIf36KtlOkg/exec';
window.JAW_SHEET_ENDPOINT = SHEET_ENDPOINT;

function Field({ label, name, type = 'text', required, textarea, value, onChange }) {
  const common = { name, value, onChange, required, placeholder: label,
    style: { width: '100%', fontFamily: T.body, fontSize: 15, color: T.ink, background: '#fff', border: '1px solid ' + T.line, borderRadius: 12, padding: textarea ? '14px 15px' : '0 15px', height: textarea ? 'auto' : 52, outline: 'none', boxSizing: 'border-box', resize: 'vertical' } };
  const [f, setF] = React.useState(false);
  const styled = { ...common.style, borderColor: f ? T.blue : T.line, boxShadow: f ? '0 0 0 3px ' + T.blueSoft : 'none', transition: 'border-color .15s, box-shadow .15s' };
  return textarea
    ? <textarea {...common} rows={3} style={styled} onFocus={() => setF(true)} onBlur={() => setF(false)} />
    : <input {...common} type={type} style={styled} onFocus={() => setF(true)} onBlur={() => setF(false)} />;
}

function JustContact({ formRef, plan }) {
  const [, t] = window.jawUseLang();
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });
  const mob = window.jawUseMobile(560);
  const [data, setData] = React.useState({ name: '', email: '', phone: '', business: '', message: '', promo: '' });
  const [sent, setSent] = React.useState(false);
  const set = (e) => setData((d) => ({ ...d, [e.target.name]: e.target.value }));
  const submit = (e) => {
    e.preventDefault();
    const payload = { ...data, plan: plan || '', _subject: 'New enquiry — Just a Website Landing Page', source: 'Just a Website Landing Page' };
    if (SHEET_ENDPOINT && !SHEET_ENDPOINT.startsWith('PASTE_')) { try { fetch(SHEET_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(payload) }); } catch (err) {} }
    window.jawTrack && window.jawTrack('generate_lead', { form_type: 'contact_form', plan: plan || '' });
    setSent(true);
  };
  return (
    <section ref={formRef} style={{ background: T.bgAlt, borderTop: '1px solid ' + T.line, padding: '96px 0' }}>
      <div style={{ ...T.wrap, maxWidth: 720, textAlign: 'center' }}>
        <h2 style={{ fontFamily: T.display, fontSize: 'clamp(44px, 13vw, 88px)', lineHeight: 0.95, color: T.ink, margin: 0 }}>{t('contact.title')}</h2>
        <p style={{ fontFamily: T.body, fontSize: 21, color: T.ink2, margin: '20px 0 0' }}>{t('contact.sub')}</p>

        <div style={{ position: 'relative', marginTop: 44, background: '#fff', border: '1px solid ' + T.line, borderRadius: 22, padding: 32, boxShadow: '0 24px 60px rgba(16,24,40,0.08)', textAlign: 'left', minHeight: 340 }}>
          {plan && !sent && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: T.blueSoft, border: '1px solid ' + T.blueBorder, borderRadius: 12, padding: '12px 16px', marginBottom: 18 }}>
              <i data-lucide="check-circle-2" style={{ width: 18, height: 18, color: T.blue, flexShrink: 0 }}></i>
              <span style={{ fontFamily: T.body, fontSize: 14.5, color: T.ink }}>{t('contact.planPrefix')} <strong>{plan}</strong></span>
            </div>
          )}
          {!sent ? (
            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <input type="hidden" name="source" value="Just a Website Landing Page" />
              <input type="hidden" name="plan" value={plan || ''} />
              <div style={{ display: 'grid', gridTemplateColumns: mob ? '1fr' : '1fr 1fr', gap: 14 }}>
                <Field label={t('contact.name')} name="name" required value={data.name} onChange={set} />
                <Field label={t('contact.email')} name="email" type="email" required value={data.email} onChange={set} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: mob ? '1fr' : '1fr 1fr', gap: 14 }}>
                <Field label={t('contact.phone')} name="phone" type="tel" value={data.phone} onChange={set} />
                <Field label={t('contact.business')} name="business" value={data.business} onChange={set} />
              </div>
              <Field label={t('contact.promo')} name="promo" value={data.promo} onChange={set} />
              <Field label={t('contact.message')} name="message" textarea value={data.message} onChange={set} />
              <JustButton variant="primary" size="lg" icon="arrow-right" style={{ justifyContent: 'center', marginTop: 4 }}>{t('contact.cta')}</JustButton>
              <p style={{ fontFamily: T.body, fontSize: 12.5, color: T.muted, textAlign: 'center', margin: '2px 0 0' }}>{t('contact.note')}</p>
            </form>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 300, textAlign: 'center' }}>
              <div style={{ width: 84, height: 84, borderRadius: 999, background: T.blueSoft, display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'jawPop .5s cubic-bezier(.16,1.4,.3,1)' }}>
                <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#5B6AC4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path className="jaw-check" d="M20 6 9 17l-5-5" style={{ strokeDasharray: 40, strokeDashoffset: 40, animation: 'jawDraw .5s .2s forwards' }} /></svg>
              </div>
              <h3 style={{ fontFamily: T.display, fontSize: 34, color: T.ink, margin: '22px 0 0' }}>{t('contact.okTitle')}</h3>
              <p style={{ fontFamily: T.body, fontSize: 16, color: T.muted, margin: '10px 0 0', maxWidth: 380 }}>{t('contact.okHi')}{data.name ? ', ' + data.name.split(' ')[0] : ''} {t('contact.ok')}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function JustFooter() {
  const [, t] = window.jawUseLang();
  return (
    <footer style={{ background: '#fff', borderTop: '1px solid ' + T.line, padding: '40px 0' }}>
      <div style={{ ...T.wrap, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
          <span style={{ width: 12, height: 12, background: T.gold, borderRadius: 2 }} />
          <span style={{ fontFamily: T.display, fontSize: 22, color: T.ink }}>PIXEL</span>
          <span style={{ fontFamily: T.body, fontSize: 13, color: T.muted }}>{t('footer.tag')}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
          <a href="privacy.html" style={{ fontFamily: T.body, fontSize: 13, color: T.muted, textDecoration: 'none' }}>{t('footer.privacy')}</a>
          <div style={{ fontFamily: T.body, fontSize: 13, color: T.muted }}>{t('footer.rights')}</div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { JustContact, JustFooter });
