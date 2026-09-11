/* Just a Website — Portfolio (big browser windows) + Process timeline + FAQ. */
const T = window.JAW_T, Reveal = window.JAWReveal, Eyebrow = window.JAWEyebrow, PreviewCard = window.JAWPreviewCard, PROJECTS = window.JAW_PROJECTS;

function JustPortfolio() {
  const [, t] = window.jawUseLang();
  return (
    <section style={{ ...T.wrap, padding: '96px 28px' }}>
      <Reveal><Eyebrow center>{t('portfolio.eyebrow')}</Eyebrow>
        <h2 style={{ fontFamily: T.display, fontSize: 'clamp(32px, 8vw, 56px)', color: T.ink, textAlign: 'center', margin: '14px 0 0' }}>{t('portfolio.title')}</h2>
      </Reveal>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 26, marginTop: 52 }}>
        {PROJECTS.map((p, i) => (
          <Reveal key={p.id} delay={(i % 2) * 90}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <PreviewCard p={p} big slotSuffix="full" />
              <div style={{ fontFamily: T.body, fontSize: 13, color: T.muted, paddingLeft: 4 }}>{t('projects.' + p.id + '.type')}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const PROCESS_ICONS = ['compass', 'pen-tool', 'palette', 'code-2', 'bug', 'rocket', 'life-buoy'];

function JustProcess() {
  const [, t] = window.jawUseLang();
  const mob = window.jawUseMobile(880);
  const PROCESS = t('process.items');
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });
  return (
    <section style={{ background: T.ink, padding: '90px 0' }}>
      <div style={T.wrap}>
        <Eyebrow center>{t('process.eyebrow')}</Eyebrow>
        <h2 style={{ fontFamily: T.display, fontSize: 'clamp(28px, 7vw, 46px)', color: '#fff', textAlign: 'center', margin: '14px 0 0' }}>{t('process.title')}</h2>
        <div style={{ position: 'relative', marginTop: 56, display: 'grid', gridTemplateColumns: mob ? 'repeat(auto-fit, minmax(120px, 1fr))' : 'repeat(7,1fr)', gap: 12 }}>
          {!mob && <div style={{ position: 'absolute', top: 26, left: '7%', right: '7%', height: 2, background: 'linear-gradient(90deg,#5B6AC4,#C9A0A8)' }} />}
          {PROCESS.map(([icon, title, line], i) => (
            <div key={title} style={{ position: 'relative', textAlign: 'center' }}>
              <div style={{ width: 54, height: 54, margin: '0 auto', borderRadius: 14, background: '#151A24', border: '1px solid #2A3140', display: 'flex', alignItems: 'center', justifyContent: 'center', color: T.blue, position: 'relative', zIndex: 1 }}>
                <i data-lucide={icon} style={{ width: 24, height: 24 }}></i>
              </div>
              <div style={{ fontFamily: T.body, fontWeight: 700, fontSize: 15, color: '#fff', marginTop: 14 }}>{title}</div>
              <div style={{ fontFamily: T.body, fontSize: 12.5, color: '#9AA0AA', marginTop: 6, lineHeight: 1.45 }}>{line}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQ_COUNT = 5;

function FaqItem({ q, a }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ borderBottom: '1px solid ' + T.line }}>
      <button onClick={() => setOpen(!open)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '22px 4px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
        <span style={{ fontFamily: T.body, fontWeight: 700, fontSize: 18, color: T.ink }}>{q}</span>
        <span style={{ fontSize: 24, color: T.blue, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform .25s', flex: 'none' }}>+</span>
      </button>
      <div style={{ overflow: 'hidden', maxHeight: open ? 200 : 0, transition: 'max-height .35s cubic-bezier(.16,1,.3,1)' }}>
        <p style={{ fontFamily: T.body, fontSize: 15.5, lineHeight: 1.6, color: T.muted, margin: '0 4px 22px', maxWidth: 720 }}>{a}</p>
      </div>
    </div>
  );
}

function JustFaq() {
  const [, t] = window.jawUseLang();
  const FAQS = t('faq.items');
  return (
    <section style={{ ...T.wrap, padding: '96px 28px', maxWidth: 860 }}>
      <Reveal><h2 style={{ fontFamily: T.display, fontSize: 'clamp(28px, 7vw, 46px)', color: T.ink, textAlign: 'center', margin: '0 0 40px' }}>{t('faq.title')}</h2></Reveal>
      <div>{FAQS.map(([q, a]) => <FaqItem key={q} q={q} a={a} />)}</div>
    </section>
  );
}

Object.assign(window, { JustPortfolio, JustProcess, JustFaq });
