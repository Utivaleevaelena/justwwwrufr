/* Just a Website — shared theme, buttons, reveal hook. Exported to window.
   Cool dusk palette (indigo/lavender/silver), matched to the hero photo.
   Key names kept as "blue*" for compatibility with existing references. */
const T = {
  blue: '#5B6AC4', blueDark: '#454F9E', blueSoft: '#E7E9F7', blueBorder: '#C9CDEE',
  ink: '#1B1E2C', ink2: '#454A5E', muted: '#7A7F92', line: '#DFE1EC',
  bg: '#FFFFFF', bgAlt: '#F2F3F8', gold: '#E8A31A',
  gradient: 'linear-gradient(120deg,#5B6AC4 0%,#C9A0A8 100%)',
  display: "'Bricolage Grotesque', system-ui, sans-serif",
  body: "'Karla', system-ui, -apple-system, sans-serif",
  shadowSoft: '0 20px 40px -12px rgba(27,30,44,0.14)',
  shadowGlass: '0 8px 30px rgba(27,30,44,0.10)',
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
    primary: { background: T.blue, color: '#fff', border: '1px solid ' + T.blue, boxShadow: '0 10px 24px -4px rgba(91,106,196,0.35)' },
    dark: { background: T.ink, color: '#fff', border: '1px solid ' + T.ink, boxShadow: '0 10px 24px -4px rgba(27,30,44,0.25)' },
    ghost: { background: 'rgba(255,255,255,0.6)', color: T.ink, border: '1px solid ' + T.line, boxShadow: '0 1px 2px rgba(27,30,44,0.05)', backdropFilter: 'blur(8px)' },
  };
  const v = variants[variant] || variants.primary;
  const [h, setH] = React.useState(false);
  return (
    <button onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 9, padding: s.pad, fontSize: s.fs, fontWeight: 600,
        fontFamily: T.body, borderRadius: 10, cursor: 'pointer', lineHeight: 1, letterSpacing: '0.01em',
        transform: h ? 'translateY(-2px)' : 'translateY(0)', transition: 'transform .18s cubic-bezier(.2,0,.1,1), box-shadow .18s, filter .18s',
        filter: h ? 'brightness(1.05)' : 'none', ...v, ...style }}>
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
