import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="pt-36 pb-24 lg:pt-44 lg:pb-32 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div
          className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono ks-reveal"
          style={{
            color: "var(--muted)",
            fontSize: "11px",
            textTransform: "uppercase",
            letterSpacing: "0.22em",
            animationDelay: "0ms",
          }}
        >
          <span style={{ color: "var(--accent)" }}>&bull;</span>
          <span>Kigali Six</span>
          <span style={{ opacity: 0.4 }}>&mdash;</span>
          <span>Est. MMXXVI</span>
          <span style={{ opacity: 0.4 }}>&mdash;</span>
          <span>CMU-Africa</span>
        </div>

        <h1
          className="font-display ks-reveal mt-10"
          style={{
            color: "var(--fg)",
            fontSize: "clamp(2.75rem, 9vw, 9rem)",
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
            animationDelay: "120ms",
          }}
        >
          Six builders.
          <br />
          One shared bet on
          <br />
          <span style={{ fontStyle: "italic", color: "var(--accent)" }}>
            Africa&apos;s next decade.
          </span>
        </h1>

        <div className="mt-14 lg:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7 lg:col-start-6">
            <p
              className="ks-reveal"
              style={{
                color: "var(--fg)",
                opacity: 0.85,
                fontSize: "1.125rem",
                lineHeight: 1.65,
                animationDelay: "240ms",
              }}
            >
              A collective of engineers, researchers, and product designers from
              Carnegie Mellon University Africa &mdash; working at the
              intersection of AI, infrastructure, and the problems we know
              first-hand.
            </p>

            <div
              className="mt-10 flex flex-wrap items-center gap-6 ks-reveal"
              style={{ animationDelay: "360ms" }}
            >
              <a
                href="#team"
                className="ks-cta inline-flex items-center gap-2 font-mono"
                style={{
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  padding: "14px 22px",
                }}
              >
                Meet the six
                <ArrowUpRight size={14} />
              </a>
              <a
                href="#contact"
                className="font-mono transition-opacity hover:opacity-60"
                style={{
                  color: "var(--muted)",
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                }}
              >
                Or skip to the brief &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
