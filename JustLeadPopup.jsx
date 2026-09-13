/* Just a Website — lead-capture popup: free mini-consultation + website sketch.
   Appears once per browser after a short delay OR 35% scroll (dismissal remembered).
   Posts to the same Google Sheet endpoint with a distinct source tag. */
const T = window.JAW_T, JustButton = window.JustButton;

const LEAD_KEY = 'jaw_lead_seen';

function LeadField({ label, name, type, value, onChange }) {
  const [f, setF] = React.useState(false);
  return (
    <input name={name} type={type} value={value} onChange={onChange} placeholder={label}
      onFocus={() => setF(true)} onBlur={() => setF(false)}
      style={{ width: '100%', fontFamily: T.body, fontSize: 15, color: T.ink, background: '#fff',
        border: '1px solid ' + (f ? T.blue : T.line), borderRadius: 12, padding: '0 15px', height: 52,
        outline: 'none', boxSizing: 'border-box', boxShadow: f ? '0 0 0 3px ' + T.blueSoft : 'none',
        transition: 'border-color .15s, box-shadow .15s' }} />
  );
}

function JustLeadPopup() {
  const [, t] = window.jawUseLang();
  const mob = window.jawUseMobile();
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState({ email: '', phone: '' });
  const [sent, setSent] = React.useState(false);
  const seen = React.useRef(false);

  React.useEffect(() => {
    try { if (localStorage.getItem(LEAD_KEY)) return; } catch (e) {}
    const trigger = () => {
      if (seen.current) return;
      seen.current = true;
      setOpen(true);
      try { localStorage.setItem(LEAD_KEY, '1'); } catch (e) {}
      window.removeEventListener('scroll', onScroll);
      window.jawTrack && window.jawTrack('lead_popup_shown');
    };
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (h > 0 && window.scrollY / h > 0.35) trigger();
    };
    const timer = setTimeout(trigger, 10000);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { clearTimeout(timer); window.removeEventListener('scroll', onScroll); };
  }, []);

  React.useEffect(() => { if (open) window.lucide && window.lucide.createIcons(); });

  const close = () => setOpen(false);
  const set = (e) => setData((d) => ({ ...d, [e.target.name]: e.target.value }));
  const submit = (e) => {
    e.preventDefault();
    if (!data.email && !data.phone) return;
    const payload = { ...data, _subject: 'New lead — Free mini-consultation (Just a Website)', source: 'Just a Website — Free Mini Consultation' };
    const LEAD_ENDPOINT = window.JAW_SHEET_ENDPOINT || '';
    if (LEAD_ENDPOINT && !LEAD_ENDPOINT.startsWith('PASTE_')) { try { fetch(LEAD_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(payload) }); } catch (err) {} }
    window.jawTrack && window.jawTrack('generate_lead', { form_type: 'popup' });
    setSent(true);
    setTimeout(() => setOpen(false), 2600);
  };
  if (!open) return null;

  return (
    <div onClick={close} style={{ position: 'fixed', inset: 0, zIndex: 1200, background: 'rgba(10,15,30,0.5)', backdropFilter: 'blur(6px)',
      display: 'flex', alignItems: mob ? 'flex-end' : 'center', justifyContent: 'center', padding: mob ? 0 : 20, animation: 'jawFade .3s ease' }}>
      <div onClick={(e) => e.stopPropagation()} style={{ width: '100%', maxWidth: 460, background: '#fff',
        borderRadius: mob ? '24px 24px 0 0' : 24, padding: 'clamp(24px, 6vw, 36px)', position: 'relative',
        boxShadow: '0 40px 100px rgba(10,15,30,0.4)', animation: mob ? 'jawSlideUp .4s cubic-bezier(.16,1,.3,1)' : 'jawPop .4s cubic-bezier(.16,1.4,.3,1)' }}>
        <button onClick={close} aria-label="Close" style={{ position: 'absolute', top: 16, right: 16, width: 34, height: 34, borderRadius: 999,
          border: '1px solid ' + T.line, background: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: T.muted }}>
          <i data-lucide="x" style={{ width: 17, height: 17 }}></i>
        </button>

        {!sent ? (
          <React.Fragment>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '6px 12px', borderRadius: 999, background: T.blueSoft, color: T.blueDark, fontFamily: T.body, fontWeight: 700, fontSize: 12, letterSpacing: '0.02em', border: '1px solid ' + T.blueBorder }}>
              <i data-lucide="gift" style={{ width: 14, height: 14 }}></i>{t('lead.eyebrow')}
            </div>
            <div style={{ fontFamily: T.display, fontSize: 'clamp(30px, 8vw, 38px)', color: T.ink, lineHeight: 1.02, margin: '16px 0 0' }}>{t('lead.title')}</div>
            <p style={{ fontFamily: T.body, fontSize: 15, color: T.muted, lineHeight: 1.55, margin: '12px 0 22px' }}>{t('lead.desc')}</p>
            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <LeadField label={t('lead.email')} name="email" type="email" value={data.email} onChange={set} />
              <LeadField label={t('lead.phone')} name="phone" type="tel" value={data.phone} onChange={set} />
              <JustButton variant="primary" size="lg" icon="arrow-right" style={{ justifyContent: 'center', marginTop: 4 }}>{t('lead.cta')}</JustButton>
              <p style={{ fontFamily: T.body, fontSize: 12.5, color: T.muted, textAlign: 'center', margin: '2px 0 0' }}>☕ {t('lead.note')}</p>
              <button type="button" onClick={close} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: T.body, fontSize: 13, color: T.muted, marginTop: 2 }}>{t('lead.later')}</button>
            </form>
          </React.Fragment>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '14px 0 6px' }}>
            <div style={{ width: 80, height: 80, borderRadius: 999, background: T.blueSoft, display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'jawPop .5s cubic-bezier(.16,1.4,.3,1)' }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#5B6AC4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" style={{ strokeDasharray: 40, strokeDashoffset: 40, animation: 'jawDraw .5s .2s forwards' }} /></svg>
            </div>
            <h3 style={{ fontFamily: T.display, fontSize: 32, color: T.ink, margin: '20px 0 0' }}>{t('lead.okTitle')}</h3>
            <p style={{ fontFamily: T.body, fontSize: 15, color: T.muted, margin: '10px 0 0', maxWidth: 340 }}>{t('lead.ok')}</p>
          </div>
        )}
      </div>
    </div>
  );
}

Object.assign(window, { JustLeadPopup });
