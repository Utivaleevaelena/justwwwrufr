/* Just a Website — Case study page (Dr Mahdi Siala). Copy lives in i18n
   under `cs.*`; only `en` is filled for now, so pl/fr fall back to English
   until the multi-language rollout. */
const T = window.JAW_T, JustButton = window.JustButton, Reveal = window.JAWReveal, Eyebrow = window.JAWEyebrow;

const CS_SHOTS = [
  { n: 1, file: './assets/cs-01', w: 1440, h: 1363 },
  { n: 2, file: './assets/cs-02', w: 1440, h: 549 },
  { n: 3, file: './assets/cs-03', w: 1440, h: 749 },
  { n: 4, file: './assets/cs-04', w: 1440, h: 719 },
  { n: 5, file: './assets/cs-05', w: 1440, h: 532 },
  { n: 6, file: './assets/cs-06', w: 1440, h: 1257 },
  { n: 7, file: './assets/cs-07', w: 1440, h: 717 },
];
const CS_URL = 'https://mahdi-siala.vercel.app';

function Shot({ shot }) {
  const [loaded, setLoaded] = React.useState(false);
  const base = (window.__resources && window.__resources['cs_' + shot.n]) || shot.file;
  const isData = base.indexOf('data:') === 0;
  return (
    <div style={{ background: '#fff', border: '1px solid ' + T.line, borderRadius: 16, overflow: 'hidden', boxShadow: '0 20px 50px rgba(16,24,40,0.10)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 13px', borderBottom: '1px solid ' + T.line, background: '#FCFCFD' }}>
        <span style={{ width: 9, height: 9, borderRadius: 999, background: '#FF5F57' }} />
        <span style={{ width: 9, height: 9, borderRadius: 999, background: '#FEBC2E' }} />
        <span style={{ width: 9, height: 9, borderRadius: 999, background: '#28C840' }} />
        <span style={{ marginLeft: 8, fontFamily: T.body, fontSize: 11, color: T.muted, letterSpacing: '0.02em' }}>mahdi-siala.vercel.app</span>
      </div>
      <div style={{ background: 'linear-gradient(135deg,#EFEDE6 0%,#F8F8F5 60%,#EDE9E0 100%)' }}>
        <picture>
          {!isData && <source srcSet={base + '.webp'} type="image/webp" />}
          <img src={isData ? base : base + '.jpg'} alt="" width={shot.w} height={shot.h} loading="lazy" decoding="async"
            onLoad={() => setLoaded(true)}
            style={{ width: '100%', height: 'auto', display: 'block', opacity: loaded ? 1 : 0, filter: loaded ? 'none' : 'blur(14px)', transition: 'opacity .45s ease, filter .45s ease' }} />
        </picture>
      </div>
    </div>
  );
}

function CsBlock({ shot, i }) {
  const [, t] = window.jawUseLang();
  const k = 'cs.blocks.' + i;
  const points = t(k + '.points');
  return (
    <Reveal>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 22, paddingTop: 52, borderTop: '1px solid ' + T.line }}>
        <div>
          <div style={{ fontFamily: T.display, fontSize: 20, color: T.blue, letterSpacing: '0.04em' }}>{t(k + '.step')}</div>
          <h3 style={{ fontFamily: T.display, fontSize: 'clamp(26px, 6vw, 40px)', lineHeight: 1.06, color: T.ink, margin: '8px 0 0', maxWidth: 780 }}>{t(k + '.title')}</h3>
        </div>
        <Shot shot={shot} />
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 13, maxWidth: 820 }}>
          {(Array.isArray(points) ? points : []).map((p, n) => (
            <li key={n} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <span style={{ flexShrink: 0, width: 6, height: 6, borderRadius: 999, background: T.blue, marginTop: 9 }} />
              <span style={{ fontFamily: T.body, fontSize: 16.5, lineHeight: 1.55, color: T.ink2, textWrap: 'pretty' }}>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

function JustCaseStudy({ onContact }) {
  const [, t] = window.jawUseLang();
  const mob = window.jawUseMobile(860);
  const facts = t('cs.facts');
  const principles = t('cs.principles');
  const ctaBullets = t('cs.cta.bullets');

  return (
    <React.Fragment>
      {/* ---------- hero ---------- */}
      <section style={{ ...T.wrap, paddingTop: mob ? 40 : 74, paddingBottom: mob ? 44 : 64 }}>
        <a href="index.html" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: T.body, fontSize: 14, fontWeight: 600, color: T.muted, textDecoration: 'none' }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
          {t('cs.back')}
        </a>
        <div style={{ marginTop: 26 }}><Eyebrow>{t('cs.eyebrow')}</Eyebrow></div>
        <h1 style={{ fontFamily: T.display, fontSize: 'clamp(40px, 9vw, 74px)', lineHeight: 0.99, letterSpacing: '0.01em', color: T.ink, margin: '16px 0 0', maxWidth: 940 }}>
          {t('cs.h1')}
        </h1>
        <p style={{ fontFamily: T.body, fontSize: 'clamp(17px, 4.2vw, 20px)', lineHeight: 1.55, color: T.ink2, margin: '22px 0 0', maxWidth: 720, textWrap: 'pretty' }}>
          {t('cs.subhead')}
        </p>
        <div style={{ display: 'flex', gap: 14, marginTop: 32, flexWrap: 'wrap', alignItems: 'center' }}>
          <JustButton variant="primary" size="lg" icon="arrow-right" onClick={onContact}>{t('cs.cta.button')}</JustButton>
          <a href={CS_URL} target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: T.body, fontWeight: 600, fontSize: 15.5, color: T.blue, textDecoration: 'none' }}>
            {t('cs.sourceLink')}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7" /><path d="M7 7h10v10" /></svg>
          </a>
        </div>
      </section>

      {/* ---------- what this site is ---------- */}
      <section style={{ background: T.bgAlt, borderTop: '1px solid ' + T.line, borderBottom: '1px solid ' + T.line, padding: mob ? '56px 0' : '84px 0' }}>
        <div style={T.wrap}>
          <div style={{ display: 'grid', gridTemplateColumns: mob ? '1fr' : '1fr 1fr', gap: mob ? 36 : 60, alignItems: 'start' }}>
            <Reveal>
              <h2 style={{ fontFamily: T.display, fontSize: 'clamp(30px, 7vw, 46px)', lineHeight: 1.05, color: T.ink, margin: 0 }}>{t('cs.about.title')}</h2>
              <p style={{ fontFamily: T.body, fontSize: 16.5, lineHeight: 1.6, color: T.ink2, margin: '20px 0 0', textWrap: 'pretty' }}>{t('cs.about.body')}</p>
            </Reveal>
            <Reveal delay={110}>
              <div style={{ background: '#fff', border: '1px solid ' + T.line, borderRadius: 16, overflow: 'hidden' }}>
                {(Array.isArray(facts) ? facts : []).map((f, n) => (
                  <div key={n} style={{ display: 'grid', gridTemplateColumns: mob ? '1fr' : '150px 1fr', gap: mob ? 4 : 16, padding: '15px 18px', borderTop: n ? '1px solid ' + T.line : 'none' }}>
                    <div style={{ fontFamily: T.body, fontSize: 12, fontWeight: 700, letterSpacing: '0.09em', textTransform: 'uppercase', color: T.muted, paddingTop: 2 }}>{f[0]}</div>
                    <div style={{ fontFamily: T.body, fontSize: 15, lineHeight: 1.45, color: T.ink }}>{f[1]}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- block by block ---------- */}
      <section style={{ ...T.wrap, paddingTop: mob ? 56 : 88, paddingBottom: mob ? 40 : 60 }}>
        <Reveal>
          <h2 style={{ fontFamily: T.display, fontSize: 'clamp(32px, 8vw, 54px)', lineHeight: 1.02, color: T.ink, margin: 0 }}>{t('cs.breakdown.title')}</h2>
          <p style={{ fontFamily: T.body, fontSize: 17, color: T.muted, fontStyle: 'italic', margin: '14px 0 0' }}>{t('cs.breakdown.intro')}</p>
        </Reveal>
        <div style={{ display: 'flex', flexDirection: 'column', gap: mob ? 52 : 72, marginTop: mob ? 48 : 64 }}>
          {CS_SHOTS.map((s, i) => <CsBlock key={s.n} shot={s} i={i} />)}
        </div>
      </section>

      {/* ---------- principles ---------- */}
      <section style={{ background: T.ink, padding: mob ? '60px 0' : '96px 0' }}>
        <div style={T.wrap}>
          <Reveal>
            <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#7FA6FF' }}>{t('cs.principlesEyebrow')}</div>
            <h2 style={{ fontFamily: T.display, fontSize: 'clamp(32px, 8vw, 54px)', lineHeight: 1.02, color: '#fff', margin: '14px 0 0' }}>{t('cs.principlesTitle')}</h2>
            <p style={{ fontFamily: T.body, fontSize: 17, color: 'rgba(255,255,255,0.6)', fontStyle: 'italic', margin: '12px 0 0' }}>{t('cs.principlesIntro')}</p>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 18, marginTop: 44 }}>
            {(Array.isArray(principles) ? principles : []).map((p, n) => (
              <Reveal key={n} delay={n * 70}>
                <div style={{ height: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 14, padding: 24 }}>
                  <div style={{ fontFamily: T.display, fontSize: 30, color: T.blue, lineHeight: 1 }}>{p[0]}</div>
                  <div style={{ fontFamily: T.body, fontWeight: 700, fontSize: 17, color: '#fff', margin: '14px 0 0' }}>{p[1]}</div>
                  <div style={{ fontFamily: T.body, fontSize: 15, lineHeight: 1.5, color: 'rgba(255,255,255,0.66)', margin: '8px 0 0', textWrap: 'pretty' }}>{p[2]}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- final CTA ---------- */}
      <section style={{ ...T.wrap, paddingTop: mob ? 60 : 92, paddingBottom: mob ? 60 : 92 }}>
        <div style={{ display: 'grid', gridTemplateColumns: mob ? '1fr' : '1fr 1fr', gap: mob ? 34 : 56, alignItems: 'start' }}>
          <Reveal>
            <Eyebrow>{t('cs.cta.eyebrow')}</Eyebrow>
            <h2 style={{ fontFamily: T.display, fontSize: 'clamp(32px, 8vw, 54px)', lineHeight: 1.02, color: T.ink, margin: '14px 0 0' }}>{t('cs.cta.title')}</h2>
            <p style={{ fontFamily: T.body, fontSize: 17, lineHeight: 1.6, color: T.ink2, margin: '18px 0 0', textWrap: 'pretty' }}>{t('cs.cta.lead')}</p>
            <div style={{ marginTop: 30 }}>
              <JustButton variant="primary" size="lg" icon="arrow-right" onClick={onContact}>{t('cs.cta.button')}</JustButton>
            </div>
          </Reveal>
          <Reveal delay={110}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {(Array.isArray(ctaBullets) ? ctaBullets : []).map((b, n) => (
                <div key={n} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', background: T.bgAlt, border: '1px solid ' + T.line, borderRadius: 12, padding: '16px 18px' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={T.blue} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}><path d="M20 6 9 17l-5-5" /></svg>
                  <span style={{ fontFamily: T.body, fontSize: 15.5, lineHeight: 1.45, color: T.ink2 }}>{b}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </React.Fragment>
  );
}

Object.assign(window, { JustCaseStudy });
