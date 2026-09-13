/* Just a Website — cookie / privacy consent banner (RODO/GDPR).
   Appears on first visit, remembers choice in localStorage, localized PL/EN/FR. */
const T = window.JAW_T;
const CONSENT_KEY = 'jaw_consent';

window.JustConsent = function JustConsent() {
  const [, t] = window.jawUseLang();
  const mob = window.jawUseMobile();
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    let seen = null;
    try { seen = localStorage.getItem(CONSENT_KEY); } catch (e) {}
    if (!seen) { const id = setTimeout(() => setShow(true), 600); return () => clearTimeout(id); }
  }, []);

  const decide = (val) => {
    try { localStorage.setItem(CONSENT_KEY, val); } catch (e) {}
    if (window.gtag) window.gtag('consent', 'update', { analytics_storage: val === 'all' ? 'granted' : 'denied' });
    setShow(false);
  };

  if (!show) return null;

  const btn = (bg, color, border) => ({
    fontFamily: T.body, fontSize: 14, fontWeight: 700, cursor: 'pointer',
    padding: '11px 20px', borderRadius: 10, background: bg, color, border: border || 'none',
    whiteSpace: 'nowrap', transition: 'filter .15s',
  });

  return (
    <div style={{ position: 'fixed', left: 0, right: 0, bottom: 0, zIndex: 300, padding: mob ? 12 : 20, display: 'flex', justifyContent: 'center', pointerEvents: 'none', animation: 'jawSlideUp .4s cubic-bezier(0.2,0,0.1,1)' }}>
      <div style={{
        pointerEvents: 'auto', maxWidth: 880, width: '100%', background: '#fff',
        border: '1px solid ' + T.line, borderRadius: 16, boxShadow: '0 12px 40px rgba(10,10,10,0.16)',
        padding: mob ? '16px 16px' : '18px 22px', display: 'flex', alignItems: mob ? 'stretch' : 'center',
        gap: mob ? 12 : 20, flexDirection: mob ? 'column' : 'row',
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, minWidth: 0, flex: 1 }}>
          <span style={{ width: 12, height: 12, marginTop: 3, background: T.gold, borderRadius: 2, flex: 'none' }} />
          <p style={{ margin: 0, fontFamily: T.body, fontSize: 13.5, lineHeight: 1.5, color: T.ink }}>
            {t('consent.text')}{' '}
            <span style={{ color: T.muted }}>{t('consent.more')}</span>{' '}
            <a href="privacy.html" style={{ color: T.blue, fontWeight: 600, textDecoration: 'none' }}>{t('consent.link')}</a>
          </p>
        </div>
        <div style={{ display: 'flex', gap: 10, flex: 'none', flexDirection: mob ? 'row' : 'row' }}>
          <button onClick={() => decide('essential')} style={btn('#F2F3F5', T.ink)}
            onMouseEnter={(e) => e.currentTarget.style.filter = 'brightness(0.96)'}
            onMouseLeave={(e) => e.currentTarget.style.filter = 'none'}>
            {t('consent.reject')}
          </button>
          <button onClick={() => decide('all')} style={btn(T.blue, '#fff')}
            onMouseEnter={(e) => e.currentTarget.style.filter = 'brightness(1.08)'}
            onMouseLeave={(e) => e.currentTarget.style.filter = 'none'}>
            {t('consent.accept')}
          </button>
        </div>
      </div>
    </div>
  );
};
