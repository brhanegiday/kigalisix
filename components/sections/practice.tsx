import SectionLabel from "@/components/ui/section-label";
import { practices } from "@/lib/data/practices";

export default function Practice() {
  return (
    <section
      id="practice"
      className="px-6 lg:px-12 py-24 lg:py-32 border-t"
      style={{ borderColor: "var(--hair)" }}
    >
      <div className="max-w-[1400px] mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-20">
          <div className="lg:col-span-3">
            <SectionLabel index="03" label="Practice" />
          </div>
          <div className="lg:col-span-8 lg:col-start-5">
            <h2
              className="font-display"
              style={{
                color: "var(--fg)",
                fontSize: "clamp(2rem, 5vw, 4rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              What we{" "}
              <span style={{ fontStyle: "italic" }}>actually do.</span>
            </h2>
          </div>
        </div>

        <div className="border-t" style={{ borderColor: "var(--hair)" }}>
          {practices.map((p) => (
            <article
              key={p.index}
              className="ks-practice grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 py-9 lg:py-12 border-b"
              style={{ borderColor: "var(--hair)" }}
            >
              <div className="lg:col-span-3">
                <div
                  className="font-mono"
                  style={{
                    color: "var(--accent)",
                    fontSize: "11px",
                    letterSpacing: "0.18em",
                  }}
                >
                  {p.index}
                </div>
              </div>
              <div className="lg:col-span-5">
                <h3
                  className="font-display"
                  style={{
                    color: "var(--fg)",
                    fontSize: "clamp(1.625rem, 3vw, 2.5rem)",
                    lineHeight: 1.1,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {p.title}
                </h3>
              </div>
              <div className="lg:col-span-4">
                <p style={{ color: "var(--fg)", opacity: 0.7, lineHeight: 1.7 }}>
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
