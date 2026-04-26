import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const members = [
  {
    n: '01',
    name: 'Brhane Giday',
    tags: ['Software', 'UX', 'COO', 'AI'],
    bio: 'Builds full-stack systems and the experiences around them. Currently working on labor market intelligence and African digital public infrastructure.',
    place: 'Kigali · Axum',
  },
  {
    n: '02',
    name: 'Julius Zannu',
    tags: ['Cloud', 'Software', 'Entrepreneurship'],
    bio: "Cloud and software engineer with an entrepreneur's instinct for what scales — and what doesn't yet.",
    place: 'Kigali',
  },
  {
    n: '03',
    name: 'Wendy Esuman',
    tags: ['Product', 'Data Science', 'Education'],
    bio: 'Connects product thinking to data science, with a particular interest in the future of education on the continent.',
    place: 'Kigali',
  },
  {
    n: '04',
    name: 'Roy Esibe',
    tags: ['Research', 'LLM', 'GenAI'],
    bio: "Researches large language models and applied generative AI — asking how they actually work, and where they don't.",
    place: 'Kigali',
  },
  {
    n: '05',
    name: 'Michael Nwankwo',
    tags: ['Software', 'AI Systems', 'Research'],
    bio: 'Builds AI-enabled systems from research prototype to production. Equally at home in a paper draft and a deploy log.',
    place: 'Kigali',
  },
  {
    n: '06',
    name: 'Godbright Nixon',
    tags: ['React', 'TypeScript', 'FastAPI', 'AI/ML'],
    bio: 'Ships fast across the stack — React and TypeScript on the front, FastAPI and ML on the back.',
    place: 'Kigali',
  },
];

const practices = [
  {
    n: '01',
    title: 'Applied AI & Research',
    body: 'From LLM evaluation to deployed generative systems, we work on AI that has to live in the real world — and survive it.',
  },
  {
    n: '02',
    title: 'Software & Cloud Engineering',
    body: 'Full-stack web and cloud-native infrastructure. The boring parts done well so the interesting parts can ship.',
  },
  {
    n: '03',
    title: 'Product, Data & Design',
    body: 'Product strategy, data science, and UX that takes African context as a starting point, not a retrofit.',
  },
  {
    n: '04',
    title: 'Research & Policy',
    body: 'Working with universities, NGOs, and governments on digital ID, data protection, and the policy layer of African tech.',
  },
];

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

  :root {
    --bg: #14130F;
    --fg: #EFEAE0;
    --muted: #8C8478;
    --accent: #C8553D;
    --hair: #2A2722;
  }

  body { background: var(--bg); }

  .ks-display { font-family: 'Instrument Serif', 'Times New Roman', serif; font-weight: 400; font-style: normal; }
  .ks-body { font-family: 'Geist', system-ui, -apple-system, sans-serif; font-weight: 400; }
  .ks-mono { font-family: 'JetBrains Mono', 'Courier New', monospace; }

  .ks-italic { font-style: italic; }

  .ks-grain {
    position: fixed;
    inset: 0;
    pointer-events: none;
    opacity: 0.07;
    mix-blend-mode: overlay;
    z-index: 100;
  }

  @keyframes ksFadeUp {
    from { opacity: 0; transform: translateY(14px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .ks-reveal { animation: ksFadeUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) both; }

  @keyframes ksDrift {
    0%, 100% { transform: translateX(0); }
    50% { transform: translateX(-2px); }
  }

  .ks-link { transition: opacity 0.3s ease; }
  .ks-link:hover { opacity: 0.6; }

  .ks-member {
    background: var(--bg);
    transition: background 0.5s ease;
  }
  .ks-member:hover { background: #18170F; }

  .ks-rule {
    height: 1px;
    width: 32px;
    background: var(--accent);
    transition: width 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
  }
  .ks-member:hover .ks-rule { width: 100%; }

  .ks-practice { transition: padding-left 0.5s cubic-bezier(0.2, 0.8, 0.2, 1); }
  .ks-practice:hover { padding-left: 1.5rem; }

  .ks-marquee-track {
    display: flex;
    gap: 3rem;
    animation: ksMarquee 80s linear infinite;
    white-space: nowrap;
  }
  @keyframes ksMarquee {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }
`;

function Grain() {
  return (
    <div className="ks-grain" aria-hidden="true">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <filter id="ksNoise">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#ksNoise)" />
      </svg>
    </div>
  );
}

function Header() {
  return (
    <header
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-md"
      style={{ background: 'rgba(20, 19, 15, 0.78)', borderBottom: '1px solid var(--hair)' }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        <a href="#top" className="ks-display text-xl tracking-tight" style={{ color: 'var(--fg)' }}>
          Kigali <span className="ks-italic" style={{ color: 'var(--accent)' }}>Six</span>
        </a>
        <nav
          className="hidden md:flex items-center gap-7 ks-mono"
          style={{ color: 'var(--muted)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.18em' }}
        >
          <a href="#premise" className="ks-link">Premise</a>
          <a href="#team" className="ks-link">The Six</a>
          <a href="#practice" className="ks-link">Practice</a>
          <a href="#contact" className="ks-link">Contact</a>
        </nav>
      </div>
    </header>
  );
}

function Marquee() {
  const items = [
    'Kigali — Rwanda',
    'CMU-Africa, MMXXVI',
    'Six builders, one collective',
    'Software · AI · Cloud · Product · Research · Design',
    'Currently accepting briefs',
  ];
  const repeated = [...items, ...items, ...items, ...items];
  return (
    <div
      className="overflow-hidden border-t border-b py-3"
      style={{ borderColor: 'var(--hair)' }}
    >
      <div className="ks-marquee-track ks-mono" style={{ color: 'var(--muted)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.24em' }}>
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center gap-12">
            <span style={{ color: 'var(--accent)' }}>✦</span>
            <span>{item}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="pt-36 pb-24 lg:pt-44 lg:pb-32 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div
          className="flex flex-wrap items-center gap-x-3 gap-y-2 ks-mono ks-reveal"
          style={{ color: 'var(--muted)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.22em', animationDelay: '0ms' }}
        >
          <span style={{ color: 'var(--accent)' }}>●</span>
          <span>Kigali Six</span>
          <span style={{ opacity: 0.4 }}>—</span>
          <span>Est. MMXXVI</span>
          <span style={{ opacity: 0.4 }}>—</span>
          <span>CMU-Africa</span>
        </div>

        <h1
          className="ks-display ks-reveal mt-10"
          style={{
            color: 'var(--fg)',
            fontSize: 'clamp(2.75rem, 9vw, 9rem)',
            lineHeight: 0.95,
            letterSpacing: '-0.02em',
            animationDelay: '120ms',
          }}
        >
          Six builders.<br />
          One shared bet on<br />
          <span className="ks-italic" style={{ color: 'var(--accent)' }}>Africa&apos;s next decade.</span>
        </h1>

        <div className="mt-14 lg:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7 lg:col-start-6">
            <p
              className="ks-reveal"
              style={{
                color: 'var(--fg)',
                opacity: 0.85,
                fontSize: '1.125rem',
                lineHeight: 1.65,
                animationDelay: '240ms',
              }}
            >
              A collective of engineers, researchers, and product designers from
              Carnegie Mellon University Africa — working at the intersection of AI,
              infrastructure, and the problems we know first-hand.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6 ks-reveal" style={{ animationDelay: '360ms' }}>
              <a
                href="#team"
                className="group inline-flex items-center gap-2 ks-mono"
                style={{
                  color: 'var(--fg)',
                  fontSize: '11px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.18em',
                  border: '1px solid var(--fg)',
                  padding: '14px 22px',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--fg)';
                  e.currentTarget.style.color = 'var(--bg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'var(--fg)';
                }}
              >
                Meet the six
                <ArrowUpRight size={14} />
              </a>
              <a
                href="#contact"
                className="ks-mono ks-link"
                style={{ color: 'var(--muted)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.18em' }}
              >
                Or skip to the brief →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Premise() {
  return (
    <section
      id="premise"
      className="px-6 lg:px-12 py-24 lg:py-32 border-t"
      style={{ borderColor: 'var(--hair)' }}
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-3">
          <div
            className="ks-mono"
            style={{ color: 'var(--muted)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.22em' }}
          >
            01 — Premise
          </div>
        </div>
        <div className="lg:col-span-8 lg:col-start-5">
          <p
            className="ks-display"
            style={{
              color: 'var(--fg)',
              fontSize: 'clamp(1.75rem, 3.5vw, 3rem)',
              lineHeight: 1.18,
              letterSpacing: '-0.01em',
            }}
          >
            We met in Kigali, at <span className="ks-italic">CMU-Africa</span>. We
            stayed because we share a working hypothesis: the next decade of African
            technology will be built by teams who know the continent first-hand —
            and we plan to be one of them.
          </p>

          <div className="mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
            {[
              {
                roman: 'i.',
                title: 'Builders',
                body: 'Six people who actually ship. Software, AI, cloud, data, product, design — covered end to end.',
              },
              {
                roman: 'ii.',
                title: 'Grounded',
                body: 'We work on problems we recognize — labor markets, language, identity, public infrastructure — not borrowed playbooks.',
              },
              {
                roman: 'iii.',
                title: 'Together',
                body: 'Long enough to outlast one project. The collective is the bet; the projects are how we test it.',
              },
            ].map((p) => (
              <div key={p.title}>
                <div
                  className="ks-mono pb-3 border-b flex items-baseline gap-3"
                  style={{
                    color: 'var(--accent)',
                    borderColor: 'var(--hair)',
                    fontSize: '11px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.22em',
                  }}
                >
                  <span style={{ opacity: 0.6 }}>{p.roman}</span>
                  <span>{p.title}</span>
                </div>
                <p className="mt-4" style={{ color: 'var(--fg)', opacity: 0.82, lineHeight: 1.65 }}>
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MemberCard({ m }) {
  return (
    <article className="ks-member relative p-8 lg:p-10">
      <div className="flex items-start justify-between mb-10">
        <div
          className="ks-mono"
          style={{ color: 'var(--accent)', fontSize: '11px', letterSpacing: '0.18em' }}
        >
          {m.n}
        </div>
        <div
          className="ks-mono text-right"
          style={{ color: 'var(--muted)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em' }}
        >
          {m.place}
        </div>
      </div>

      <h3
        className="ks-display"
        style={{
          color: 'var(--fg)',
          fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
          lineHeight: 1.05,
          letterSpacing: '-0.01em',
        }}
      >
        {m.name}
      </h3>

      <div
        className="mt-3 ks-mono"
        style={{
          color: 'var(--muted)',
          fontSize: '10.5px',
          textTransform: 'uppercase',
          letterSpacing: '0.16em',
        }}
      >
        {m.tags.join(' · ')}
      </div>

      <p className="mt-6" style={{ color: 'var(--fg)', opacity: 0.78, fontSize: '15px', lineHeight: 1.65 }}>
        {m.bio}
      </p>

      <div className="mt-10 ks-rule" />
    </article>
  );
}

function TheSix() {
  return (
    <section
      id="team"
      className="px-6 lg:px-12 py-24 lg:py-32 border-t"
      style={{ borderColor: 'var(--hair)' }}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-20">
          <div className="lg:col-span-3">
            <div
              className="ks-mono"
              style={{ color: 'var(--muted)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.22em' }}
            >
              02 — The Six
            </div>
          </div>
          <div className="lg:col-span-8 lg:col-start-5">
            <h2
              className="ks-display"
              style={{
                color: 'var(--fg)',
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
              }}
            >
              The masthead, <span className="ks-italic">not the brand.</span>
            </h2>
            <p
              className="mt-6 max-w-2xl"
              style={{ color: 'var(--fg)', opacity: 0.7, lineHeight: 1.65 }}
            >
              Each of us has our own work. The Six is what we share — and where we
              collaborate when the project asks for more than one head.
            </p>
          </div>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ background: 'var(--hair)', gap: '1px' }}
        >
          {members.map((m) => (
            <MemberCard key={m.n} m={m} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Practice() {
  return (
    <section
      id="practice"
      className="px-6 lg:px-12 py-24 lg:py-32 border-t"
      style={{ borderColor: 'var(--hair)' }}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-20">
          <div className="lg:col-span-3">
            <div
              className="ks-mono"
              style={{ color: 'var(--muted)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.22em' }}
            >
              03 — Practice
            </div>
          </div>
          <div className="lg:col-span-8 lg:col-start-5">
            <h2
              className="ks-display"
              style={{
                color: 'var(--fg)',
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
              }}
            >
              What we <span className="ks-italic">actually do.</span>
            </h2>
          </div>
        </div>

        <div className="border-t" style={{ borderColor: 'var(--hair)' }}>
          {practices.map((p) => (
            <article
              key={p.n}
              className="ks-practice grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 py-9 lg:py-12 border-b"
              style={{ borderColor: 'var(--hair)' }}
            >
              <div className="lg:col-span-3">
                <div
                  className="ks-mono"
                  style={{ color: 'var(--accent)', fontSize: '11px', letterSpacing: '0.18em' }}
                >
                  {p.n}
                </div>
              </div>
              <div className="lg:col-span-5">
                <h3
                  className="ks-display"
                  style={{
                    color: 'var(--fg)',
                    fontSize: 'clamp(1.625rem, 3vw, 2.5rem)',
                    lineHeight: 1.1,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {p.title}
                </h3>
              </div>
              <div className="lg:col-span-4">
                <p style={{ color: 'var(--fg)', opacity: 0.78, lineHeight: 1.65 }}>
                  {p.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="px-6 lg:px-12 py-24 lg:py-40 border-t"
      style={{ borderColor: 'var(--hair)' }}
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-3">
          <div
            className="ks-mono"
            style={{ color: 'var(--muted)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.22em' }}
          >
            04 — Contact
          </div>
        </div>
        <div className="lg:col-span-9">
          <h2
            className="ks-display"
            style={{
              color: 'var(--fg)',
              fontSize: 'clamp(2.25rem, 7vw, 6.5rem)',
              lineHeight: 0.98,
              letterSpacing: '-0.02em',
            }}
          >
            Working on something <span className="ks-italic" style={{ color: 'var(--accent)' }}>interesting</span>?<br />
            Tell us about it.
          </h2>

          <div className="mt-14 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-3xl">
            <div>
              <div
                className="ks-mono pb-3 border-b"
                style={{
                  color: 'var(--muted)',
                  borderColor: 'var(--hair)',
                  fontSize: '11px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.22em',
                }}
              >
                Write
              </div>
              <a
                href="mailto:hello@kigalisix.co"
                className="ks-display ks-link block mt-3"
                style={{ color: 'var(--fg)', fontSize: '1.5rem' }}
              >
                hello@kigalisix.co
              </a>
            </div>
            <div>
              <div
                className="ks-mono pb-3 border-b"
                style={{
                  color: 'var(--muted)',
                  borderColor: 'var(--hair)',
                  fontSize: '11px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.22em',
                }}
              >
                Find us
              </div>
              <p className="ks-display mt-3" style={{ color: 'var(--fg)', fontSize: '1.5rem' }}>
                Kigali, RW
              </p>
            </div>
            <div>
              <div
                className="ks-mono pb-3 border-b"
                style={{
                  color: 'var(--muted)',
                  borderColor: 'var(--hair)',
                  fontSize: '11px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.22em',
                }}
              >
                Brief us
              </div>
              <p className="mt-3" style={{ color: 'var(--fg)', opacity: 0.7, fontSize: '14px', lineHeight: 1.6 }}>
                Send the shape of the problem. We'll respond with the shape of an answer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      className="px-6 lg:px-12 py-10 border-t"
      style={{ borderColor: 'var(--hair)' }}
    >
      <div
        className="max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6 ks-mono"
        style={{
          color: 'var(--muted)',
          fontSize: '10.5px',
          textTransform: 'uppercase',
          letterSpacing: '0.18em',
        }}
      >
        <div>© Kigali Six — MMXXVI</div>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <span>Brhane</span>
          <span style={{ opacity: 0.4 }}>·</span>
          <span>Julius</span>
          <span style={{ opacity: 0.4 }}>·</span>
          <span>Wendy</span>
          <span style={{ opacity: 0.4 }}>·</span>
          <span>Roy</span>
          <span style={{ opacity: 0.4 }}>·</span>
          <span>Michael</span>
          <span style={{ opacity: 0.4 }}>·</span>
          <span>Godbright</span>
        </div>
        <div>Made in Kigali · Rwanda</div>
      </div>
    </footer>
  );
}

export default function KigaliSix() {
  return (
    <>
      <style>{styles}</style>
      <div className="ks-body min-h-screen relative" style={{ background: 'var(--bg)', color: 'var(--fg)' }}>
        <Grain />
        <Header />
        <main>
          <Hero />
          <Marquee />
          <Premise />
          <TheSix />
          <Practice />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}