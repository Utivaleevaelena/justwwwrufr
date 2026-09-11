/* Just a Website — Hero. Starts on a finished-looking site; the sketch→live
   process animation plays once, explicitly labelled, after it enters view. */
const T = window.JAW_T, JustButton = window.JustButton;

function useInView(ref, once = true) {
  const [seen, setSeen] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') { setSeen(true); return; }
    const io = new IntersectionObserver((es) => {
      if (es.some((e) => e.isIntersecting)) { setSeen(true); if (once) io.disconnect(); }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return seen;
}

/* --- the finished site rendered inside the browser frame --- */
function LiveFrame({ stage }) {
  const [, t] = window.jawUseLang();
  const sketch = stage === 'sketch';
  const wire = stage === 'wireframe';
  const narrow = stage === 'responsive';
  const flat = sketch || wire;

  const block = flat ? (sketch ? '#EDEFF3' : '#E2E7EE') : T.blueSoft;
  const accent = flat ? (sketch ? '#D8DCE3' : '#C3CBD6') : T.blue;
  const inkBar = flat ? (sketch ? '#DFE3E9' : '#CFD6DF') : T.ink;

  const bar = (bg, w, h, r = 5) => ({ width: w, height: h, borderRadius: r, background: bg, flexShrink: 0 });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, height: '100%', alignItems: narrow ? 'center' : 'stretch' }}>
      {/* top nav row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: narrow ? '60%' : '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
          <div style={{ width: 20, height: 20, borderRadius: 5, background: flat ? block : T.gradient }} />
          <div style={bar(inkBar, 54, 9)} />
        </div>
        <div style={{ display: 'flex', gap: 6 }}>{[0, 1, 2].map((n) => <div key={n} style={bar(block, 18, 7)} />)}</div>
      </div>

      {/* headline area */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: narrow ? '60%' : '100%', marginTop: 4 }}>
        <div style={bar(inkBar, narrow ? '100%' : '78%', 20, 6)} />
        <div style={bar(inkBar, narrow ? '76%' : '52%', 20, 6)} />
        <div style={bar(block, narrow ? '92%' : '62%', 9)} />
        <div style={{ ...bar(accent, 84, 26, 7), marginTop: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {!flat && <span style={{ fontFamily: T.body, fontWeight: 700, fontSize: 9.5, color: '#fff' }}>{t('hero.frameCta')}</span>}
        </div>
      </div>

      {/* content cells */}
      <div style={{ display: 'grid', gridTemplateColumns: narrow ? '1fr' : '1fr 1fr 1fr', gap: 9, width: narrow ? '60%' : '100%', flex: 1, minHeight: 62 }}>
        {(narrow ? [0, 1] : [0, 1, 2]).map((n) => (
          <div key={n} style={{ borderRadius: 9, background: flat ? block : 'linear-gradient(150deg, #E7E9F7 0%, #FBF6EE 55%, #EFE2D2 100%)',
            display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 8, gap: 5 }}>
            <div style={bar(flat ? '#fff' : 'rgba(255,255,255,0.9)', '80%', 6, 3)} />
            <div style={bar(flat ? '#fff' : 'rgba(255,255,255,0.7)', '55%', 6, 3)} />
          </div>
        ))}
      </div>
    </div>
  );
}

function ProcessStage() {
  const [, t] = window.jawUseLang();
  const ref = React.useRef(null);
  const inView = useInView(ref);
  const order = ['sketch', 'wireframe', 'responsive', 'live'];
  const [step, setStep] = React.useState(3); // start finished
  const [playing, setPlaying] = React.useState(false);

  const play = React.useCallback(() => {
    setPlaying(true);
    let i = 0;
    setStep(0);
    const id = setInterval(() => {
      i += 1;
      setStep(i);
      if (i >= order.length - 1) { clearInterval(id); setPlaying(false); }
    }, 1250);
    return id;
  }, []);

  React.useEffect(() => {
    if (!inView) return;
    const to = setTimeout(() => { play(); }, 700);
    return () => clearTimeout(to);
  }, [inView]);

  const stage = order[step];
  const isLive = stage === 'live';

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', inset: -40, background: 'radial-gradient(circle at 60% 40%, rgba(91,106,196,0.16), transparent 60%)', pointerEvents: 'none' }} />

      {/* explicit process caption — makes clear this is an illustration, not loading */}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginBottom: 14, flexWrap: 'wrap' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 9, padding: '7px 13px', borderRadius: 999, background: '#fff', border: '1px solid ' + T.line, boxShadow: '0 4px 14px rgba(16,24,40,0.06)' }}>
          <span style={{ fontFamily: T.display, fontSize: 17, color: T.blue, lineHeight: 1 }}>{'0' + (step + 1)}</span>
          <span style={{ fontFamily: T.body, fontWeight: 700, fontSize: 13.5, color: T.ink }}>{t('hero.morph.' + stage)}</span>
          <span style={{ fontFamily: T.body, fontSize: 12.5, color: T.muted }}>· {t('hero.proc.' + stage)}</span>
        </div>
        {!playing && (
          <button onClick={play} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'none', border: 'none', cursor: 'pointer', padding: 0,
            fontFamily: T.body, fontWeight: 600, fontSize: 13, color: T.blue }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></svg>{t('hero.proc.replay')}
          </button>
        )}
      </div>

      <div style={{ position: 'relative', width: '100%', maxWidth: 560, aspectRatio: '4/3', margin: '0 auto', background: '#fff',
        borderRadius: 18, border: '1px solid ' + (isLive ? T.blueBorder : T.line), boxShadow: isLive ? '0 34px 80px rgba(47,107,255,0.18)' : '0 24px 60px rgba(16,24,40,0.10)',
        overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'box-shadow .6s, border-color .6s' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '11px 14px', borderBottom: '1px solid ' + T.line }}>
          <span style={{ width: 10, height: 10, borderRadius: 999, background: '#FF5F57' }} />
          <span style={{ width: 10, height: 10, borderRadius: 999, background: '#FEBC2E' }} />
          <span style={{ width: 10, height: 10, borderRadius: 999, background: '#28C840' }} />
          <span style={{ marginLeft: 10, fontFamily: T.body, fontSize: 11, color: T.muted }}>yourbusiness.com</span>
        </div>
        <div key={stage} style={{ flex: 1, padding: 18, animation: 'jawFade .5s ease' }}><LiveFrame stage={stage} /></div>
      </div>

      {/* day rail */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, marginTop: 18, maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}>
        {order.map((k, n) => (
          <div key={k} style={{ padding: '9px 10px', borderRadius: 10, background: n === step ? T.blueSoft : '#fff',
            border: '1px solid ' + (n === step ? T.blueBorder : T.line), transition: 'all .4s' }}>
            <div style={{ fontFamily: T.body, fontWeight: 700, fontSize: 11.5, color: n === step ? T.blueDark : T.muted, letterSpacing: '0.02em' }}>{t('hero.days.' + k)}</div>
            <div style={{ fontFamily: T.body, fontSize: 11.5, color: n === step ? T.ink : T.muted, marginTop: 2, lineHeight: 1.25 }}>{t('hero.morph.' + k)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function JustHero({ onBuild, onEstimate }) {
  const [, t] = window.jawUseLang();
  const mob = window.jawUseMobile(900);
  const flow = ['flow1', 'flow2', 'flow3', 'flow4'];
  return (
    <section style={{ position: 'relative', width: '100%', overflow: 'hidden', minHeight: mob ? 560 : 'clamp(560px, 62vw, 760px)', display: 'flex', alignItems: 'center' }}>
      <img src="./assets/hero-photo.png" alt="" width={1448} height={1086}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: mob ? 'center' : 'left center', zIndex: 0 }} />
      <div style={{ position: 'absolute', inset: 0, background: mob
        ? 'linear-gradient(180deg, rgba(15,16,24,0.45) 0%, rgba(15,16,24,0.8) 60%, rgba(15,16,24,0.9) 100%)'
        : 'linear-gradient(105deg, rgba(15,16,24,0.35) 0%, rgba(15,16,24,0.15) 46%, transparent 62%)', zIndex: 1 }} />
      <div style={{ ...T.wrap, position: 'relative', zIndex: 2, paddingTop: mob ? 100 : 64, paddingBottom: mob ? 48 : 64 }}>
        <div style={{ maxWidth: 560, background: 'rgba(15,16,24,0.58)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', borderRadius: 24, border: '1px solid rgba(255,255,255,0.1)', padding: mob ? '28px 22px' : '40px 38px', boxShadow: '0 30px 70px rgba(0,0,0,0.35)' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '7px 14px', borderRadius: 999, background: 'rgba(255,255,255,0.12)', color: '#fff', fontFamily: T.body, fontWeight: 600, fontSize: 13, border: '1px solid rgba(255,255,255,0.25)', backdropFilter: 'blur(6px)' }}>
            <span style={{ width: 7, height: 7, borderRadius: 999, background: '#8FA0FF' }} /> {t('hero.badge')}
          </div>
          <h1 style={{ fontFamily: T.display, fontSize: 'clamp(38px, 8vw, 64px)', lineHeight: 0.98, letterSpacing: '0.01em', color: '#fff', margin: '22px 0 0' }}>
            {t('hero.t1')}<br /><span style={{ color: '#8FA0FF' }}>{t('hero.t2')}</span>
          </h1>
          <p style={{ fontFamily: T.body, fontSize: 'clamp(16px, 3.6vw, 19px)', lineHeight: 1.5, color: 'rgba(255,255,255,0.82)', maxWidth: 480, margin: '20px 0 0' }}>
            {t('hero.sub')}
          </p>

          {/* four-step flow, spelled out */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 24, maxWidth: 480 }}>
            {flow.map((k, n) => (
              <div key={k} style={{ display: 'flex', alignItems: 'flex-start', gap: 11 }}>
                <span style={{ flexShrink: 0, width: 22, height: 22, borderRadius: 999, background: 'rgba(255,255,255,0.14)', border: '1px solid rgba(255,255,255,0.28)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: T.body, fontWeight: 700, fontSize: 11.5, color: '#fff' }}>{n + 1}</span>
                <span style={{ fontFamily: T.body, fontSize: 15, lineHeight: 1.4, color: 'rgba(255,255,255,0.82)' }}>{t('hero.' + k)}</span>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 14, marginTop: 30, flexWrap: 'wrap' }}>
            <JustButton variant="primary" size="lg" icon="arrow-right" onClick={onBuild}>{t('hero.build')}</JustButton>
            <JustButton variant="ghost" size="lg" icon="calculator" onClick={onEstimate}
              style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.35)' }}>{t('hero.estimate')}</JustButton>
          </div>
          <div style={{ display: 'flex', gap: 26, marginTop: 24, fontFamily: T.body, color: 'rgba(255,255,255,0.7)', fontSize: 14, flexWrap: 'wrap' }}>
            <span>{t('hero.chip1')}</span>
            <span>{t('hero.chip2')}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { JustHero });
