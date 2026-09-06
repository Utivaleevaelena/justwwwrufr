/* Just a Website — shared project data + Trust section with floating previews. */
const T = window.JAW_T, JustButton = window.JustButton, Reveal = window.JAWReveal, Eyebrow = window.JAWEyebrow;

const JAW_PROJECTS = [
  { id: 'herbaczar', name: 'HERBACZAR', industry: 'Hospitality · Tea', type: 'B2B Business', time: '3 weeks', url: 'https://herbaczar.vercel.app', tech: ['Next.js', 'Tailwind', 'i18n'], img: './assets/case-herbaczar', w: 1600, h: 994, tint: '#E6EDF7' },
  { id: 'sacred', name: 'Sacred Sound & Spirit', industry: 'Wellness · Healing', type: 'Business · Booking', time: '4 weeks', url: 'https://sacredsound32.vercel.app/', tech: ['Next.js', 'Forms', 'Media'], img: './assets/case-sacred', w: 1600, h: 1007, tint: '#EFEAF6' },
  { id: 'budrysowka', name: 'Budrysówka', industry: 'Hospitality · Cabin rental', type: 'Booking · Multilingual', time: '4 weeks', url: 'https://budrysowka-ug2n.vercel.app', tech: ['Next.js', 'i18n', 'Calendar'], img: './assets/case-budrysowka', w: 1600, h: 1022, tint: '#E8EFE9' },
  { id: 'pixel', name: 'Pixel', industry: 'Creative · Agency', type: 'Portfolio', time: '2 weeks', url: 'https://pixel-liart-seven.vercel.app', tech: ['Next.js', 'Motion'], img: './assets/case-pixel', w: 1600, h: 1227, tint: '#E9EDF6' },
];
window.JAW_PROJECTS = JAW_PROJECTS;

/* Lazy, weight-optimised case screenshot: WebP with JPEG fallback, brand-tinted
   placeholder while loading, explicit dimensions so nothing shifts. */
function CaseImage({ p, height }) {
  const [loaded, setLoaded] = React.useState(false);
  const base = (window.__resources && window.__resources['case_' + p.id]) || p.img;
  const isData = base.indexOf('data:') === 0;
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden',
      background: 'linear-gradient(135deg, ' + p.tint + ' 0%, #F7F9FC 60%, ' + p.tint + ' 100%)' }}>
      <picture>
        {!isData && <source srcSet={base + '.webp'} type="image/webp" />}
        <img src={isData ? base : base + '.jpg'} alt={p.name} width={p.w} height={p.h}
          loading="lazy" decoding="async" onLoad={() => setLoaded(true)}
          style={{ width: '100%', height: height, objectFit: 'cover', objectPosition: 'top',
            display: 'block', opacity: loaded ? 1 : 0, filter: loaded ? 'none' : 'blur(12px)',
            transition: 'opacity .45s ease, filter .45s ease' }} />
      </picture>
    </div>
  );
}

function PreviewCard({ p, big, slotSuffix }) {
  const [, t] = window.jawUseLang();
  const [h, setH] = React.useState(false);
  const time = t('projects.' + p.id + '.time');
  const industry = t('projects.' + p.id + '.industry');
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ background: '#fff', borderRadius: 16, border: '1px solid ' + T.line, overflow: 'hidden',
        boxShadow: h ? '0 34px 70px rgba(16,24,40,0.18)' : '0 12px 30px rgba(16,24,40,0.08)',
        transform: h ? 'translateY(-8px)' : 'none', transition: 'all .35s cubic-bezier(.16,1,.3,1)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 12px', borderBottom: '1px solid ' + T.line }}>
        <span style={{ width: 9, height: 9, borderRadius: 999, background: '#FF5F57' }} />
        <span style={{ width: 9, height: 9, borderRadius: 999, background: '#FEBC2E' }} />
        <span style={{ width: 9, height: 9, borderRadius: 999, background: '#28C840' }} />
        <span style={{ marginLeft: 8, fontFamily: T.body, fontSize: 11, color: T.muted, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.url.replace('https://', '').replace('/', '')}</span>
      </div>
      <div style={{ position: 'relative', height: big ? 260 : 150, transform: h ? 'scale(1.02)' : 'scale(1)', transition: 'transform .4s', transformOrigin: 'top' }}>
        <CaseImage p={p} height={big ? 260 : 150} />
      </div>
      <div style={{ padding: big ? '18px 20px' : '13px 15px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
          <div style={{ fontFamily: T.body, fontWeight: 700, fontSize: big ? 18 : 15, color: T.ink }}>{p.name}</div>
          <span style={{ fontFamily: T.body, fontSize: 12, color: T.blueDark, background: T.blueSoft, padding: '3px 9px', borderRadius: 999, whiteSpace: 'nowrap' }}>⏱ {time}</span>
        </div>
        <div style={{ fontFamily: T.body, fontSize: 13, color: T.muted, marginTop: 4 }}>{industry}</div>
        {big && <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 12 }}>{p.tech.map((t) => <span key={t} style={{ fontFamily: T.body, fontSize: 12, color: T.ink2, border: '1px solid ' + T.line, padding: '3px 9px', borderRadius: 7 }}>{t}</span>)}</div>}
        <a href={p.url} target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: big ? 16 : 11, fontFamily: T.body, fontWeight: 600, fontSize: 14, color: T.blue, textDecoration: 'none' }}>
          {big ? t('card.visit') : t('card.view')} <i data-lucide="arrow-up-right" style={{ width: 16, height: 16 }}></i>
        </a>
      </div>
    </div>
  );
}

/* Featured case study — same card language as the project previews, marked as
   a case study and opening the full breakdown page. */
function CaseStudyCard() {
  const [, t] = window.jawUseLang();
  const [h, setH] = React.useState(false);
  const mob = window.jawUseMobile(820);
  const [loaded, setLoaded] = React.useState(false);
  const base = (window.__resources && window.__resources.cs_1) || './assets/cs-01';
  const isData = base.indexOf('data:') === 0;
  const meta = t('trust.csMeta');
  return (
    <a href="case-study.html" onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ display: 'block', textDecoration: 'none', background: '#fff', borderRadius: 18, border: '1px solid ' + (h ? T.blueBorder : T.line),
        overflow: 'hidden', boxShadow: h ? '0 34px 70px rgba(16,24,40,0.18)' : '0 12px 30px rgba(16,24,40,0.08)',
        transform: h ? 'translateY(-6px)' : 'none', transition: 'all .35s cubic-bezier(.16,1,.3,1)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: mob ? '1fr' : '1.05fr 1fr' }}>
        {/* framed screenshot */}
        <div style={{ borderRight: mob ? 'none' : '1px solid ' + T.line, borderBottom: mob ? '1px solid ' + T.line : 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '11px 13px', borderBottom: '1px solid ' + T.line, background: '#FCFCFD' }}>
            <span style={{ width: 9, height: 9, borderRadius: 999, background: '#FF5F57' }} />
            <span style={{ width: 9, height: 9, borderRadius: 999, background: '#FEBC2E' }} />
            <span style={{ width: 9, height: 9, borderRadius: 999, background: '#28C840' }} />
            <span style={{ marginLeft: 8, fontFamily: T.body, fontSize: 11, color: T.muted }}>mahdi-siala.vercel.app</span>
          </div>
          <div style={{ position: 'relative', height: mob ? 210 : 288, overflow: 'hidden', background: 'linear-gradient(135deg,#EFEDE6 0%,#F8F8F5 60%,#EDE9E0 100%)' }}>
            <picture>
              {!isData && <source srcSet={base + '.webp'} type="image/webp" />}
              <img src={isData ? base : base + '.jpg'} alt={t('trust.csTitle')} width={1440} height={1363} loading="lazy" decoding="async"
                onLoad={() => setLoaded(true)}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block',
                  transform: h ? 'scale(1.03)' : 'scale(1)', opacity: loaded ? 1 : 0, filter: loaded ? 'none' : 'blur(12px)',
                  transition: 'transform .5s cubic-bezier(.16,1,.3,1), opacity .45s, filter .45s' }} />
            </picture>
          </div>
        </div>

        {/* description */}
        <div style={{ padding: mob ? '22px 20px 24px' : '30px 32px' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '6px 12px', borderRadius: 999,
            background: T.blueSoft, border: '1px solid ' + T.blueBorder, color: T.blueDark,
            fontFamily: T.body, fontWeight: 700, fontSize: 11.5, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: T.blue }} />{t('trust.csTag')}
          </span>
          <div style={{ fontFamily: T.display, fontSize: 'clamp(24px, 5vw, 32px)', lineHeight: 1.06, color: T.ink, margin: '16px 0 0' }}>{t('trust.csTitle')}</div>
          <div style={{ fontFamily: T.body, fontSize: 15.5, lineHeight: 1.55, color: T.ink2, margin: '12px 0 0', textWrap: 'pretty' }}>{t('trust.csDesc')}</div>
          <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap', margin: '18px 0 0' }}>
            {(Array.isArray(meta) ? meta : []).map((m) => (
              <span key={m} style={{ fontFamily: T.body, fontSize: 12.5, color: T.muted, border: '1px solid ' + T.line, padding: '4px 10px', borderRadius: 7 }}>{m}</span>
            ))}
          </div>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, marginTop: 22, fontFamily: T.body, fontWeight: 600, fontSize: 15, color: T.blue }}>
            {t('trust.csCta')}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              style={{ transform: h ? 'translateX(3px)' : 'none', transition: 'transform .25s' }}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
          </span>
        </div>
      </div>
    </a>
  );
}

function JustTrust() {
  const [, t] = window.jawUseLang();
  return (
    <section style={{ background: T.bgAlt, borderTop: '1px solid ' + T.line, borderBottom: '1px solid ' + T.line, padding: '84px 0' }}>
      <div style={T.wrap}>
        <Reveal>
          <h2 style={{ fontFamily: T.display, fontSize: 'clamp(30px, 8vw, 52px)', lineHeight: 1.05, color: T.ink, textAlign: 'center', margin: '0 auto', maxWidth: 780 }}>
            {t('trust.title1')}<br />{t('trust.title2')}
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20, marginTop: 52 }}>
            {JAW_PROJECTS.map((p) => <PreviewCard key={p.id} p={p} slotSuffix="mini" />)}
          </div>
        </Reveal>
        <Reveal delay={180}>
          <div style={{ marginTop: 20 }}><CaseStudyCard /></div>
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, { JustTrust, JAWPreviewCard: PreviewCard, JAWCaseImage: CaseImage, JAWCaseStudyCard: CaseStudyCard });
