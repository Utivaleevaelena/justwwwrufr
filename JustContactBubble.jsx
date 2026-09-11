/* Just a Website — floating contact bubble. Submits through the same Google
   Apps Script endpoint, field names and success state as the main forms. */
const T = window.JAW_T, JustButton = window.JustButton;

function BubbleField({ label, name, type = 'text', required, textarea, value, onChange }) {
  const [f, setF] = React.useState(false);
  const common = { name, value, onChange, required, placeholder: label,
    onFocus: () => setF(true), onBlur: () => setF(false),
    style: { width: '100%', fontFamily: T.body, fontSize: 14.5, color: T.ink, background: '#fff',
      border: '1px solid ' + (f ? T.blue : T.line), borderRadius: 11, padding: textarea ? '11px 13px' : '0 13px',
      height: textarea ? 'auto' : 46, outline: 'none', boxSizing: 'border-box', resize: 'vertical',
      boxShadow: f ? '0 0 0 3px ' + T.blueSoft : 'none', transition: 'border-color .15s, box-shadow .15s' } };
  return textarea ? <textarea {...common} rows={3} /> : <input {...common} type={type} />;
}

function JustContactBubble({ source = 'Case Study page — floating bubble' }) {
  const [lang, t] = window.jawUseLang();
  const [shown, setShown] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const [data, setData] = React.useState({ name: '', email: '', phone: '', business: '', message: '' });
  const set = (e) => {
    if (e.target.name === 'message') setTouched(true);
    setData((d) => ({ ...d, [e.target.name]: e.target.value }));
  };

  // keep the prefilled message in the current language until the visitor edits it
  const [touched, setTouched] = React.useState(false);
  React.useEffect(() => {
    if (!touched) setData((d) => ({ ...d, message: t('bubble.prefill') }));
  }, [lang, touched]);

  React.useEffect(() => {
    window.jawOpenBubble = () => { setShown(true); setOpen(true); };
    return () => { delete window.jawOpenBubble; };
  }, []);

  React.useEffect(() => {
    if (shown) return;
    const to = setTimeout(() => setShown(true), 5000);
    const onScroll = () => { if (window.scrollY > window.innerHeight * 0.6) setShown(true); };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { clearTimeout(to); window.removeEventListener('scroll', onScroll); };
  }, [shown]);

  const submit = (e) => {
    e.preventDefault();
    const endpoint = window.JAW_SHEET_ENDPOINT;
    const payload = { ...data, _subject: 'New enquiry — Just a Website Case Study', source };
    if (endpoint && !endpoint.startsWith('PASTE_')) {
      try { fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(payload) }); } catch (err) {}
    }
    setSent(true);
  };

  if (!shown) return null;

  const shell = { position: 'fixed', right: 'clamp(12px, 3vw, 26px)', bottom: 'clamp(12px, 3vw, 26px)', zIndex: 300,
    animation: 'jawPop .4s cubic-bezier(.16,1.4,.3,1)' };

  if (!open) {
    return (
      <div style={shell}>
        <button onClick={() => setOpen(true)}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 20px', borderRadius: 999,
            background: T.blue, color: '#fff', border: '1px solid ' + T.blue, cursor: 'pointer',
            fontFamily: T.body, fontWeight: 600, fontSize: 15, lineHeight: 1,
            boxShadow: '0 14px 34px rgba(91,106,196,0.38)' }}>
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
          {t('bubble.label')}
        </button>
      </div>
    );
  }

  return (
    <div style={{ ...shell, width: 'min(360px, calc(100vw - 24px))', background: '#fff', border: '1px solid ' + T.line,
      borderRadius: 18, boxShadow: '0 30px 70px rgba(16,24,40,0.22)', overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 10, padding: '16px 18px', borderBottom: '1px solid ' + T.line, background: T.bgAlt }}>
        <div>
          <div style={{ fontFamily: T.body, fontWeight: 700, fontSize: 15, color: T.ink }}>{t('bubble.title')}</div>
          <div style={{ fontFamily: T.body, fontSize: 12.5, color: T.muted, marginTop: 3 }}>{t('bubble.note')}</div>
        </div>
        <button onClick={() => setOpen(false)} aria-label="Close"
          style={{ flexShrink: 0, width: 28, height: 28, borderRadius: 8, background: '#fff', border: '1px solid ' + T.line, color: T.muted, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
        </button>
      </div>

      {!sent ? (
        <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: 18 }}>
          <input type="hidden" name="source" value={source} />
          <BubbleField label={t('contact.name')} name="name" required value={data.name} onChange={set} />
          <BubbleField label={t('contact.email')} name="email" type="email" required value={data.email} onChange={set} />
          <BubbleField label={t('contact.message')} name="message" textarea value={data.message} onChange={set} />
          <JustButton variant="primary" icon="arrow-right" style={{ justifyContent: 'center', marginTop: 2 }}>{t('contact.cta')}</JustButton>
        </form>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '30px 22px 34px' }}>
          <div style={{ width: 56, height: 56, borderRadius: 999, background: T.blueSoft, display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'jawPop .5s cubic-bezier(.16,1.4,.3,1)' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5B6AC4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" style={{ strokeDasharray: 40, strokeDashoffset: 40, animation: 'jawDraw .5s .2s forwards' }} /></svg>
          </div>
          <div style={{ fontFamily: T.display, fontSize: 26, color: T.ink, marginTop: 16 }}>{t('contact.okTitle')}</div>
          <div style={{ fontFamily: T.body, fontSize: 14, color: T.muted, marginTop: 8, lineHeight: 1.45 }}>
            {t('contact.okHi')}{data.name ? ', ' + data.name.split(' ')[0] : ''} {t('contact.ok')}
          </div>
        </div>
      )}
    </div>
  );
}

Object.assign(window, { JustContactBubble });
