/* Just a Website — Premium pricing section (replaces the configurator).
   Currency switcher (PLN|EUR|USD, remembered) · i18n (PL/EN/FR) · plans, extras,
   website care, "Our Promise", final CTA + consultation modal.
   Hidden field  Source: Just a Website Pricing Section. */
const T = window.JAW_T, JustButton = window.JustButton, Reveal = window.JAWReveal, Eyebrow = window.JAWEyebrow;

// Consultation modal posts to the same Google Sheet endpoint (set in JustContact.jsx).

function fmt(v) {
  return v.toLocaleString('en-US') + ' €';
}

// static (non-text) plan config, merged by index with translated text from the dictionary
const PLAN_META = [
  { price: 300, variant: 'ghost', popular: false },
  { price: 590, variant: 'primary', popular: true },
  { price: 990, variant: 'dark', popular: false },
];
const CARE_PRICE = 25;

/* ---------- plan card ---------- */
function PlanCard({ plan, meta, onCta, t }) {
  const [h, setH] = React.useState(false);
  const pop = meta.popular;
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ position: 'relative', background: '#fff', borderRadius: 28,
        border: '1px solid ' + (pop ? T.blueBorder : T.line),
        outline: pop ? '2px solid ' + T.blue : 'none', outlineOffset: -2,
        padding: '38px 30px 30px', display: 'flex', flexDirection: 'column', minWidth: 0,
        boxShadow: h ? '0 34px 70px rgba(16,24,40,0.14)' : (pop ? '0 20px 50px rgba(91,106,196,0.16)' : '0 12px 34px rgba(16,24,40,0.06)'),
        transform: h ? 'translateY(-8px)' : 'translateY(0)', transition: 'all .35s cubic-bezier(.16,1,.3,1)' }}>
      {pop && (
        <div style={{ position: 'absolute', top: -15, left: '50%', transform: 'translateX(-50%)', background: T.blue, color: '#fff',
          fontFamily: T.body, fontWeight: 800, fontSize: 12.5, letterSpacing: '0.04em', padding: '7px 16px', borderRadius: 999,
          boxShadow: '0 8px 20px rgba(91,106,196,0.4)', whiteSpace: 'nowrap' }}>{t('pricing.popular')}</div>
      )}

      <div style={{ fontFamily: T.display, fontSize: 34, color: T.ink, lineHeight: 1 }}>{plan.title}</div>
      {!pop && <div style={{ fontFamily: T.body, fontSize: 14, color: T.muted, marginTop: 10, lineHeight: 1.4 }}>{plan.badge}</div>}
      {pop && <div style={{ fontFamily: T.body, fontSize: 14, color: T.blue, fontWeight: 600, marginTop: 10 }}>{t('pricing.popularSub')}</div>}

      <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 22 }}>
        <span style={{ fontFamily: T.display, fontSize: 52, color: T.ink, lineHeight: 1,
          transform: h ? 'scale(1.04)' : 'scale(1)', transformOrigin: 'left', transition: 'transform .3s' }}>{fmt(meta.price)}</span>
        <span style={{ fontFamily: T.body, fontSize: 13.5, color: T.muted }}>{t('pricing.oneTime')}</span>
      </div>

      <div style={{ marginTop: 26 }}>
        <JustButton variant={meta.variant} size="lg" icon="arrow-right" onClick={onCta}
          style={{ width: '100%', justifyContent: 'center' }}>{plan.cta}</JustButton>
      </div>

      <div style={{ fontFamily: T.body, fontWeight: 700, fontSize: 13, letterSpacing: '0.02em', color: T.ink, marginTop: 30 }}>{t('pricing.have')}</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0,1fr))', gap: 10, marginTop: 14 }}>
        {plan.have.map(([e, label], i) => (
          <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', background: T.bgAlt, borderRadius: 14, padding: '12px 12px', minWidth: 0 }}>
            <div style={{ width: 26, height: 26, borderRadius: 8, background: '#fff', border: '1px solid ' + T.line, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: T.blue }}>
              <i data-lucide={e} style={{ width: 14, height: 14 }}></i>
            </div>
            <span style={{ fontFamily: T.body, fontSize: 13, color: T.ink2, lineHeight: 1.35, minWidth: 0, overflowWrap: 'break-word' }}>{label}</span>
          </div>
        ))}
      </div>

      <div style={{ height: 1, background: T.line, margin: '26px 0 20px' }} />

      <div style={{ fontFamily: T.body, fontWeight: 700, fontSize: 13, letterSpacing: '0.02em', color: T.ink }}>{t('pricing.care')}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginTop: 14 }}>
        {plan.care.map((c, i) => (
          <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={T.blue} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M20 6 9 17l-5-5" /></svg>
            <span style={{ fontFamily: T.body, fontSize: 13.5, color: T.ink2, lineHeight: 1.35 }}>{c}</span>
          </div>
        ))}
      </div>

      {plan.note && <div style={{ fontFamily: T.body, fontSize: 12.5, color: T.muted, marginTop: 18, fontStyle: 'italic' }}>{plan.note}</div>}

      <div style={{ flex: 1 }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 24, background: pop ? T.blueSoft : T.bgAlt, borderRadius: 12, padding: '12px 14px' }}>
        <i data-lucide="clock" style={{ width: 16, height: 16, color: T.blue }}></i>
        <span style={{ fontFamily: T.body, fontSize: 13.5, fontWeight: 600, color: T.ink }}>{plan.timeline}</span>
      </div>
    </div>
  );
}

/* ---------- extras ---------- */
function ExtraCard({ e, label, from, delay }) {
  const [h, setH] = React.useState(false);
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ background: '#fff', borderRadius: 18, border: '1px solid ' + (h ? T.blueBorder : T.line), padding: '20px 18px',
        boxShadow: h ? '0 18px 38px rgba(91,106,196,0.12)' : '0 6px 18px rgba(16,24,40,0.05)',
        transform: h ? 'translateY(-6px)' : 'translateY(0)', transition: 'all .3s cubic-bezier(.16,1,.3,1)',
        animation: `jawFloat 6s ease-in-out ${delay}ms infinite`, cursor: 'default' }}>
      <div style={{ width: 42, height: 42, borderRadius: 11, background: T.blueSoft, display: 'flex', alignItems: 'center', justifyContent: 'center', color: T.blue }}>
        <i data-lucide={e} style={{ width: 20, height: 20 }}></i>
      </div>
      <div style={{ fontFamily: T.body, fontWeight: 700, fontSize: 15.5, color: T.ink, marginTop: 12 }}>{label}</div>
      <div style={{ fontFamily: T.body, fontSize: 12.5, color: T.muted, marginTop: 4 }}>{from}</div>
    </div>
  );
}

/* ---------- consultation modal ---------- */
function ConsultField({ label, name, type = 'text', required, textarea, value, onChange }) {
  const [f, setF] = React.useState(false);
  const st = { width: '100%', fontFamily: T.body, fontSize: 15, color: T.ink, background: '#fff',
    border: '1px solid ' + (f ? T.blue : T.line), borderRadius: 12, padding: textarea ? '14px 15px' : '0 15px',
    height: textarea ? 'auto' : 52, outline: 'none', boxSizing: 'border-box', resize: 'vertical',
    boxShadow: f ? '0 0 0 3px ' + T.blueSoft : 'none', transition: 'border-color .15s, box-shadow .15s' };
  const common = { name, value, onChange, required, placeholder: label, style: st, onFocus: () => setF(true), onBlur: () => setF(false) };
  return textarea ? <textarea {...common} rows={3} /> : <input {...common} type={type} />;
}

const SLOT_TIMES = ['10:00','11:00','12:00','14:00','15:00','16:00','17:00'];
function nextSlotDays(lang, n) {
  const locale = lang === 'ru' ? 'ru-RU' : lang === 'fr' ? 'fr-FR' : 'en-US';
  const out = []; const d = new Date(); d.setDate(d.getDate() + 1);
  while (out.length < n) {
    if (d.getDay() !== 0 && d.getDay() !== 6) {
      out.push({ key: d.toISOString().slice(0, 10), label: d.toLocaleDateString(locale, { weekday: 'short', day: 'numeric', month: 'short' }) });
    }
    d.setDate(d.getDate() + 1);
  }
  return out;
}
function SlotSelect({ label, value, onChange, options, placeholder }) {
  const [f, setF] = React.useState(false);
  return (
    <select value={value} onChange={onChange} required onFocus={() => setF(true)} onBlur={() => setF(false)}
      style={{ width: '100%', fontFamily: T.body, fontSize: 15, color: value ? T.ink : T.muted, background: '#fff',
        border: '1px solid ' + (f ? T.blue : T.line), borderRadius: 12, padding: '0 15px', height: 52, outline: 'none',
        boxSizing: 'border-box', boxShadow: f ? '0 0 0 3px ' + T.blueSoft : 'none', transition: 'border-color .15s, box-shadow .15s', appearance: 'none' }}>
      <option value="" disabled>{placeholder}</option>
      {options.map((o) => <option key={o.key || o} value={o.key || o}>{o.label || o}</option>)}
    </select>
  );
}

function ConsultModal({ open, onClose, t, lang }) {
  const [data, setData] = React.useState({ name: '', email: '', phone: '', business: '', message: '' });
  const [date, setDate] = React.useState(''), [time, setTime] = React.useState('');
  const [sent, setSent] = React.useState(false);
  const set = (e) => setData((d) => ({ ...d, [e.target.name]: e.target.value }));
  const days = React.useMemo(() => nextSlotDays(lang, 10), [lang]);
  React.useEffect(() => { if (open) { setSent(false); document.body.style.overflow = 'hidden'; } else { document.body.style.overflow = ''; } return () => { document.body.style.overflow = ''; }; }, [open]);
  React.useEffect(() => { const k = (e) => e.key === 'Escape' && onClose(); window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k); }, [onClose]);
  if (!open) return null;
  const dayLabel = days.find((d) => d.key === date)?.label || '';
  const submit = (e) => {
    e.preventDefault();
    const payload = { ...data, date: dayLabel, dateISO: date, time, _subject: 'New consultation request — Just a Website Pricing', source: 'Just a Website Pricing Section' };
    const P_ENDPOINT = window.JAW_SHEET_ENDPOINT || '';
    if (P_ENDPOINT && !P_ENDPOINT.startsWith('PASTE_')) { try { fetch(P_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(payload) }); } catch (err) {} }
    setSent(true);
  };
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(10,15,30,0.5)', backdropFilter: 'blur(6px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20, animation: 'jawFade .25s ease' }}>
      <div onClick={(e) => e.stopPropagation()} style={{ width: '100%', maxWidth: 500, background: '#fff', borderRadius: 24, padding: 'clamp(22px, 5vw, 34px)', maxHeight: '90vh', overflowY: 'auto',
        boxShadow: '0 40px 100px rgba(10,15,30,0.35)', position: 'relative', animation: 'jawPop .35s cubic-bezier(.16,1.4,.3,1)' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: 18, right: 18, width: 36, height: 36, borderRadius: 999, border: '1px solid ' + T.line,
          background: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: T.muted }}>
          <i data-lucide="x" style={{ width: 18, height: 18 }}></i>
        </button>
        {!sent ? (
          <React.Fragment>
            <div style={{ fontFamily: T.display, fontSize: 36, color: T.ink, lineHeight: 1 }}>{t('modal.title')}</div>
            <p style={{ fontFamily: T.body, fontSize: 15, color: T.muted, margin: '12px 0 24px', lineHeight: 1.5 }}>{t('modal.desc')}</p>
            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
              <input type="hidden" name="source" value="Just a Website Pricing Section" />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 13 }}>
                <SlotSelect value={date} onChange={(e) => setDate(e.target.value)} options={days} placeholder={t('modal.dateLabel')} />
                <SlotSelect value={time} onChange={(e) => setTime(e.target.value)} options={SLOT_TIMES} placeholder={t('modal.timeLabel')} />
              </div>
              <p style={{ fontFamily: T.body, fontSize: 12, color: T.muted, margin: '-6px 0 0' }}>{t('modal.tzNote')}</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 13 }}>
                <ConsultField label={t('modal.name')} name="name" required value={data.name} onChange={set} />
                <ConsultField label={t('modal.email')} name="email" type="email" required value={data.email} onChange={set} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 13 }}>
                <ConsultField label={t('modal.phone')} name="phone" type="tel" value={data.phone} onChange={set} />
                <ConsultField label={t('modal.business')} name="business" value={data.business} onChange={set} />
              </div>
              <ConsultField label={t('modal.message')} name="message" textarea value={data.message} onChange={set} />
              <JustButton variant="primary" size="lg" icon="arrow-right" style={{ justifyContent: 'center', marginTop: 4 }}>{t('modal.cta')}</JustButton>
            </form>
          </React.Fragment>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '20px 0 8px' }}>
            <div style={{ width: 84, height: 84, borderRadius: 999, background: T.blueSoft, display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'jawPop .5s cubic-bezier(.16,1.4,.3,1)' }}>
              <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#5B6AC4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" style={{ strokeDasharray: 40, strokeDashoffset: 40, animation: 'jawDraw .5s .2s forwards' }} /></svg>
            </div>
            <h3 style={{ fontFamily: T.display, fontSize: 34, color: T.ink, margin: '22px 0 0' }}>{t('modal.okTitle')}</h3>
            <p style={{ fontFamily: T.body, fontSize: 15.5, color: T.muted, margin: '10px 0 0', maxWidth: 360 }}>{t('modal.okHi')}{data.name ? ', ' + data.name.split(' ')[0] : ''} {t('modal.ok')}</p>
            {dayLabel && time && <p style={{ fontFamily: T.body, fontSize: 14, fontWeight: 700, color: T.ink, margin: '14px 0 0' }}>{dayLabel}, {time}</p>}
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------- section ---------- */
function JustPricing({ onBuild, panelRef, onSelectPlan }) {
  const [lang, t] = window.jawUseLang();
  const mob = window.jawUseMobile(900);
  const [modal, setModal] = React.useState(false);
  const plans = t('pricing.plans');
  const chips = t('pricing.chips');
  const promise = t('pricing.promise');
  const extras = t('pricing.extras');
  const careBenefits = t('pricing.careBenefits');

  return (
    <section ref={panelRef} style={{ background: T.bgAlt, borderTop: '1px solid ' + T.line, padding: '96px 0' }}>
      <div style={T.wrap}>
        <Reveal>
          <Eyebrow center>{t('pricing.eyebrow')}</Eyebrow>
          <h2 style={{ fontFamily: T.display, fontSize: 'clamp(32px, 8vw, 56px)', lineHeight: 1, color: T.ink, textAlign: 'center', margin: '14px 0 0' }}>{t('pricing.title')}</h2>
          <p style={{ fontFamily: T.body, fontSize: 'clamp(15px, 4vw, 18px)', color: T.ink2, textAlign: 'center', margin: '18px auto 0', maxWidth: 560, lineHeight: 1.55 }}>
            {t('pricing.intro')}
          </p>
          <div style={{ display: 'flex', gap: 26, justifyContent: 'center', flexWrap: 'wrap', marginTop: 26 }}>
            {chips.map((c) => (
              <div key={c} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={T.blue} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                <span style={{ fontFamily: T.body, fontSize: 14.5, fontWeight: 600, color: T.ink }}>{c}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* plan cards — carousel on mobile, grid on desktop */}
        {mob ? (
          <React.Fragment>
            <div className="jaw-carousel" style={{ display: 'flex', gap: 16, overflowX: 'auto', scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch', margin: '44px -16px 0', padding: '24px 16px 14px' }}>
              {plans.map((p, i) => (
                <div key={i} style={{ flex: '0 0 84%', scrollSnapAlign: 'center' }}>
                  <PlanCard plan={p} meta={PLAN_META[i]} onCta={() => { window.jawTrack && window.jawTrack('cta_click', { cta: 'pricing_plan', plan: p.title }); onSelectPlan && onSelectPlan(p.title + ' — ' + fmt(PLAN_META[i].price)); onBuild(); }} t={t} />
                </div>
              ))}
              <div style={{ flex: '0 0 4px' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 12, fontFamily: T.body, fontSize: 13, fontWeight: 600, color: T.muted }}>
              <i data-lucide="arrow-left" style={{ width: 15, height: 15 }}></i>
              {t('pricing.swipe')}
              <i data-lucide="arrow-right" style={{ width: 15, height: 15 }}></i>
            </div>
          </React.Fragment>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: 22, marginTop: 56, alignItems: 'stretch' }}>
            {plans.map((p, i) => (
              <Reveal key={i} delay={i * 100}><PlanCard plan={p} meta={PLAN_META[i]} onCta={() => { window.jawTrack && window.jawTrack('cta_click', { cta: 'pricing_plan', plan: p.title }); onSelectPlan && onSelectPlan(p.title + ' — ' + fmt(PLAN_META[i].price)); onBuild(); }} t={t} /></Reveal>
            ))}
          </div>
        )}

        {/* extras */}
        <Reveal>
          <div style={{ textAlign: 'center', marginTop: 100 }}>
            <h3 style={{ fontFamily: T.display, fontSize: 'clamp(28px, 7vw, 42px)', color: T.ink, margin: 0 }}>{t('pricing.extrasTitle')}</h3>
            <p style={{ fontFamily: T.body, fontSize: 16, color: T.muted, margin: '12px auto 0', maxWidth: 460 }}>{t('pricing.extrasSub')}</p>
          </div>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px,1fr))', gap: 16, marginTop: 42 }}>
          {extras.map(([e, label, from], i) => <ExtraCard key={i} e={e} label={label} from={from} delay={i * 200} />)}
        </div>

        {/* website care */}
        <Reveal>
          <div style={{ marginTop: 100, background: T.ink, borderRadius: 28, padding: mob ? 28 : 44, color: '#fff', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: -80, right: -60, width: 320, height: 320, background: 'radial-gradient(circle, rgba(91,106,196,0.45), transparent 70%)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: mob ? '1fr' : '1.1fr 1fr', gap: mob ? 30 : 44, alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#B7C0F0' }}>{t('pricing.careEyebrow')}</div>
                <h3 style={{ fontFamily: T.display, fontSize: 'clamp(28px, 7vw, 42px)', lineHeight: 1.02, margin: '14px 0 0' }}>{t('pricing.careTitle')}</h3>
                <p style={{ fontFamily: T.body, fontSize: 16, color: 'rgba(255,255,255,0.72)', margin: '14px 0 26px', lineHeight: 1.55 }}>{t('pricing.careDesc')}</p>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
                  <span style={{ fontFamily: T.display, fontSize: 54, lineHeight: 1 }}>{fmt(CARE_PRICE)}</span>
                  <span style={{ fontFamily: T.body, fontSize: 15, color: 'rgba(255,255,255,0.7)' }}>{t('pricing.perMonth')}</span>
                </div>
                <div style={{ marginTop: 24 }}>
                  <JustButton variant="primary" size="lg" icon="arrow-right" onClick={() => { onSelectPlan && onSelectPlan(t('pricing.careEyebrow') + ' — ' + fmt(CARE_PRICE) + t('pricing.perMonth')); onBuild(); }} style={{ justifyContent: 'center' }}>{t('pricing.careCta')}</JustButton>
                </div>
                <p style={{ fontFamily: T.body, fontSize: 13, color: 'rgba(255,255,255,0.6)', marginTop: 16 }}>{t('pricing.careNote')}</p>
                <p style={{ fontFamily: T.body, fontSize: 12.5, color: 'rgba(255,255,255,0.5)', marginTop: 10, lineHeight: 1.5, maxWidth: 440 }}>{t('pricing.careLimits')}</p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {careBenefits.map(([e, label], i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'center', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 14, padding: '13px 14px' }}>
                    <i data-lucide={e} style={{ width: 17, height: 17, color: '#B7C0F0', flexShrink: 0 }}></i>
                    <span style={{ fontFamily: T.body, fontSize: 13, color: 'rgba(255,255,255,0.9)', lineHeight: 1.3 }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* our promise */}
        <Reveal>
          <div style={{ position: 'relative', marginTop: 100, borderRadius: 28, overflow: 'hidden', boxShadow: '0 20px 60px rgba(16,24,40,0.12)', minHeight: mob ? 'auto' : 480 }}>
            <img src="./assets/promise-photo.png" alt="" width={1672} height={941}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(250,248,243,0.1) 0%, rgba(250,248,243,0.72) 42%, rgba(250,248,243,0.94) 100%)', zIndex: 1 }} />
            <div style={{ position: 'relative', zIndex: 2, padding: mob ? '40px 24px' : '64px 40px 56px', textAlign: 'center' }}>
              <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: T.blueDark }}>{t('pricing.promiseEyebrow')}</div>
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 60, height: 60, borderRadius: 999, background: '#fff', border: '1px solid ' + T.line, marginTop: 18, boxShadow: '0 8px 20px rgba(16,24,40,0.08)' }}>
                <i data-lucide="shield-check" style={{ width: 28, height: 28, color: T.blue }}></i>
              </div>
              <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap', margin: '32px auto 0', maxWidth: 780 }}>
                {promise.map((tx) => (
                  <div key={tx} style={{ display: 'flex', alignItems: 'center', gap: 8, flex: '1 1 220px', maxWidth: 260, background: 'rgba(255,255,255,0.7)', border: '1px solid ' + T.line, borderRadius: 12, padding: '12px 16px', textAlign: 'left' }}>
                    <i data-lucide="check" style={{ width: 16, height: 16, color: T.blue, flexShrink: 0 }}></i>
                    <span style={{ fontFamily: T.body, fontSize: 14.5, color: T.ink2, lineHeight: 1.4 }}>{tx}</span>
                  </div>
                ))}
              </div>
              <p style={{ fontFamily: T.display, fontSize: 'clamp(22px, 5.5vw, 30px)', color: T.ink, lineHeight: 1.15, margin: '44px auto 0', maxWidth: 620 }}>
                {t('pricing.promiseBig')}
              </p>
            </div>
          </div>
        </Reveal>

        {/* final CTA */}
        <Reveal>
          <div style={{ textAlign: 'center', marginTop: 100, paddingTop: 20 }}>
            <h2 style={{ fontFamily: T.display, fontSize: 'clamp(38px, 10vw, 72px)', lineHeight: 0.98, color: T.ink, margin: 0 }}>{t('pricing.finalTitle')}</h2>
            <p style={{ fontFamily: T.body, fontSize: 19, color: T.ink2, margin: '20px auto 0', maxWidth: 460, lineHeight: 1.5 }}>{t('pricing.finalDesc')}</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, margin: '22px 0 26px' }}>
              <span style={{ color: '#F5A623', fontSize: 18, letterSpacing: 2 }}>★★★★★</span>
              <span style={{ fontFamily: T.body, fontSize: 14.5, color: T.muted }}>{t('pricing.finalStars')}</span>
            </div>
            <JustButton variant="dark" size="lg" icon="calendar" onClick={() => { window.jawTrack && window.jawTrack('cta_click', { cta: 'pricing_final' }); setModal(true); }} style={{ fontSize: 18, padding: '18px 34px' }}>{t('pricing.finalCta')}</JustButton>
          </div>
        </Reveal>
      </div>

      <ConsultModal open={modal} onClose={() => setModal(false)} t={t} lang={lang} />
    </section>
  );
}

Object.assign(window, { JustPricing, ConsultModal });
