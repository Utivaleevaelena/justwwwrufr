/* Just a Website — shared theme, buttons, reveal hook. Exported to window. */
const T = {
  blue: '#2F6BFF', blueDark: '#1D4ED8', blueSoft: '#EAF1FF', blueBorder: '#CFE0FF',
  ink: '#0A0A0A', ink2: '#3A3D45', muted: '#6B7280', line: '#E7E9EC',
  bg: '#FFFFFF', bgAlt: '#F7F8FA', gold: '#E8A31A',
  gradient: 'linear-gradient(120deg,#2F6BFF 0%,#4A9EA8 100%)',
  display: "'Jersey 25', system-ui, sans-serif",
  body: "'Archivo', system-ui, -apple-system, sans-serif",
  wrap: { maxWidth: 1160, margin: '0 auto', padding: '0 clamp(16px, 5vw, 28px)' },
};

function useMobile(bp) {
  const q = bp || 760;
  const get = () => (typeof window !== 'undefined' ? window.innerWidth < q : false);
  const [m, setM] = React.useState(get);
  React.useEffect(() => { const f = () => setM(get()); window.addEventListener('resize', f); f(); return () => window.removeEventListener('resize', f); }, [q]);
  return m;
}

function JustButton({ children, variant = 'primary', size = 'md', onClick, style = {}, icon }) {
  const sizes = { md: { pad: '13px 22px', fs: 15 }, lg: { pad: '17px 30px', fs: 17 } };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: { background: T.blue, color: '#fff', border: '1px solid ' + T.blue, boxShadow: '0 8px 20px rgba(47,107,255,0.28)' },
    dark: { background: T.ink, color: '#fff', border: '1px solid ' + T.ink, boxShadow: '0 8px 20px rgba(10,10,10,0.18)' },
    ghost: { background: '#fff', color: T.ink, border: '1px solid ' + T.line, boxShadow: '0 1px 2px rgba(0,0,0,0.04)' },
  };
  const v = variants[variant] || variants.primary;
  const [h, setH] = React.useState(false);
  return (
    <button onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 9, padding: s.pad, fontSize: s.fs, fontWeight: 600,
        fontFamily: T.body, borderRadius: 12, cursor: 'pointer', lineHeight: 1, letterSpacing: '0.01em',
        transform: h ? 'translateY(-2px)' : 'translateY(0)', transition: 'transform .18s cubic-bezier(.2,0,.1,1), box-shadow .18s, filter .18s',
        filter: h ? 'brightness(1.04)' : 'none', ...v, ...style }}>
      {children}{icon && <i data-lucide={icon} style={{ width: s.fs + 3, height: s.fs + 3 }}></i>}
    </button>
  );
}

function Eyebrow({ children, center }) {
  return <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase',
    color: T.blue, textAlign: center ? 'center' : 'left' }}>{children}</div>;
}

function useReveal() {
  const ref = React.useRef(null);
  const [seen, setSeen] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }), { threshold: 0.15 });
    io.observe(el); return () => io.disconnect();
  }, []);
  return [ref, seen];
}

function Reveal({ children, delay = 0, y = 24 }) {
  const [ref, seen] = useReveal();
  return <div ref={ref} style={{ opacity: seen ? 1 : 0, transform: seen ? 'none' : `translateY(${y}px)`,
    transition: `opacity .7s cubic-bezier(.16,1,.3,1) ${delay}ms, transform .7s cubic-bezier(.16,1,.3,1) ${delay}ms` }}>{children}</div>;
}

function relight() { if (window.lucide) window.lucide.createIcons(); }

Object.assign(window, { JAW_T: T, JustButton, JAWEyebrow: Eyebrow, JAWReveal: Reveal, jawUseReveal: useReveal, jawRelight: relight, jawUseMobile: useMobile });
