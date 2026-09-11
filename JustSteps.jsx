/* Just a Website — "Simple" 4-step section + floating feature cards. */
const T = window.JAW_T, Reveal = window.JAWReveal, Eyebrow = window.JAWEyebrow;

function StepCard({ s, n }) {
  return (
    <div style={{ position: 'relative', background: '#fff', borderRadius: 20, border: '1px solid ' + T.line,
      padding: 30, boxShadow: '0 12px 34px rgba(16,24,40,0.06)', minHeight: 210, display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ width: 48, height: 48, borderRadius: 12, background: T.blueSoft, display: 'flex', alignItems: 'center', justifyContent: 'center', color: T.blue }}>
          <i data-lucide={s.emoji} style={{ width: 22, height: 22 }}></i>
        </div>
        <div style={{ fontFamily: T.display, fontSize: 30, color: T.line }}>0{n + 1}</div>
      </div>
      <div style={{ fontFamily: T.body, fontWeight: 700, fontSize: 20, color: T.ink, marginTop: 20, lineHeight: 1.25 }}>{s.title}</div>
      <div style={{ fontFamily: T.body, fontSize: 14.5, color: T.muted, marginTop: 8, lineHeight: 1.5 }}>{s.sub}</div>
    </div>
  );
}

function FeatureCard({ f, delay }) {
  const [h, setH] = React.useState(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ background: '#fff', borderRadius: 16, border: '1px solid ' + (h ? T.blueBorder : T.line), padding: 20,
        boxShadow: h ? '0 20px 40px rgba(91,106,196,0.14)' : '0 6px 18px rgba(16,24,40,0.05)',
        transform: h ? 'translateY(-6px)' : `translateY(0)`, transition: 'all .3s cubic-bezier(.16,1,.3,1)',
        animation: `jawFloat 6s ease-in-out ${delay}ms infinite`, cursor: 'default' }}>
      <div style={{ width: 42, height: 42, borderRadius: 11, background: T.blueSoft, display: 'flex', alignItems: 'center', justifyContent: 'center', color: T.blue }}>
        <i data-lucide={f.emoji} style={{ width: 20, height: 20 }}></i>
      </div>
      <div style={{ fontFamily: T.body, fontWeight: 700, fontSize: 18, color: T.ink, marginTop: 12 }}>{f.title}</div>
      <div style={{ overflow: 'hidden', maxHeight: h ? 44 : 0, opacity: h ? 1 : 0, transition: 'all .3s' }}>
        <div style={{ fontFamily: T.body, fontSize: 13.5, color: T.muted, marginTop: 6, lineHeight: 1.4 }}>{f.line}</div>
      </div>
    </div>
  );
}

function JustSteps() {
  const [, t] = window.jawUseLang();
  const mob = window.jawUseMobile(980);
  const STEPS = t('steps.items');
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });
  return (
    <section style={{ ...T.wrap, padding: '96px 28px' }}>
      <Reveal><h2 style={{ fontFamily: T.display, fontSize: 'clamp(30px, 8vw, 52px)', color: T.ink, textAlign: 'center', margin: 0 }}>{t('steps.title')}</h2></Reveal>
      <div style={{ position: 'relative', marginTop: 56 }}>
        {!mob && <div className="jaw-steps-line" style={{ position: 'absolute', top: 105, left: '12%', right: '12%', height: 2, background: `linear-gradient(90deg, ${T.blueBorder}, ${T.blue}, ${T.blueBorder})`, backgroundSize: '200% 100%', animation: 'jawFlow 3s linear infinite', zIndex: 0 }} />}
        <div style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 22 }}>
          {STEPS.map((s, n) => <Reveal key={n} delay={n * 90}><StepCard s={s} n={n} /></Reveal>)}
        </div>
      </div>
    </section>
  );
}

function JustFeatures() {
  const [, t] = window.jawUseLang();
  const FEATURES = t('features.items');
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });
  return (
    <section style={{ background: T.bgAlt, borderTop: '1px solid ' + T.line, borderBottom: '1px solid ' + T.line, padding: '90px 0' }}>
      <div style={T.wrap}>
        <Reveal><Eyebrow center>{t('features.eyebrow')}</Eyebrow>
          <h2 style={{ fontFamily: T.display, fontSize: 'clamp(28px, 7vw, 46px)', color: T.ink, textAlign: 'center', margin: '14px 0 0' }}>{t('features.title')}</h2>
          <p style={{ fontFamily: T.body, fontSize: 16, color: T.muted, textAlign: 'center', margin: '12px auto 0', maxWidth: 480 }}>{t('features.hint')}</p>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 18, marginTop: 48 }}>
          {FEATURES.map((f, n) => <FeatureCard key={f.title} f={f} delay={n * 240} />)}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { JustSteps, JustFeatures });
