import SectionLabel from "@/components/ui/section-label";

const pillars = [
  {
    roman: "i.",
    title: "Builders",
    body: "Six people who actually ship. Software, AI, cloud, data, product, design - covered end to end.",
  },
  {
    roman: "ii.",
    title: "Grounded",
    body: "We work on problems we recognize - labor markets, language, identity, public infrastructure - not borrowed playbooks.",
  },
  {
    roman: "iii.",
    title: "Together",
    body: "Long enough to outlast one project. The collective is the bet; the projects are how we test it.",
  },
];

export default function Premise() {
  return (
    <section
      id="premise"
      className="px-6 lg:px-12 py-24 lg:py-32 border-t"
      style={{ borderColor: "var(--hair)" }}
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-3">
          <SectionLabel index="01" label="Premise" />
        </div>

        <div className="lg:col-span-8 lg:col-start-5">
          <p
            className="font-display"
            style={{
              color: "var(--fg)",
              fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
              lineHeight: 1.18,
              letterSpacing: "-0.01em",
            }}
          >
            We met in Kigali, at{" "}
            <span style={{ fontStyle: "italic" }}>CMU-Africa</span>. We stayed
            because we share a working hypothesis: the next decade of African
            technology will be built by teams who know the continent first-hand
            &mdash; and we plan to be one of them.
          </p>

          <div className="mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
            {pillars.map((p) => (
              <div key={p.title}>
                <div
                  className="font-mono pb-3 border-b flex items-baseline gap-3"
                  style={{
                    color: "var(--accent)",
                    borderColor: "var(--hair)",
                    fontSize: "11px",
                    textTransform: "uppercase",
                    letterSpacing: "0.22em",
                  }}
                >
                  <span style={{ opacity: 0.6 }}>{p.roman}</span>
                  <span>{p.title}</span>
                </div>
                <p
                  className="mt-4"
                  style={{ color: "var(--fg)", opacity: 0.7, lineHeight: 1.7 }}
                >
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
