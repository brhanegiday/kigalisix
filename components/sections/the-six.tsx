import SectionLabel from "@/components/ui/section-label";
import MemberCard from "@/components/ui/member-card";
import { members } from "@/lib/data/members";

export default function TheSix() {
  return (
    <section
      id="team"
      className="px-6 lg:px-12 py-24 lg:py-32 border-t"
      style={{ borderColor: "var(--hair)" }}
    >
      <div className="max-w-[1400px] mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-20">
          <div className="lg:col-span-3">
            <SectionLabel index="02" label="The Six" />
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
              The masthead,{" "}
              <span style={{ fontStyle: "italic" }}>not the brand.</span>
            </h2>
            <p
              className="mt-6 max-w-2xl"
              style={{ color: "var(--fg)", opacity: 0.7, lineHeight: 1.65 }}
            >
              Each of us has our own work. The Six is what we share — and where
              we collaborate when the project asks for more than one head.
            </p>
          </div>
        </div>

        {/* 1px hairline grid: parent bg = var(--hair), gap = 1px, cards bg = var(--bg) */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ background: "var(--hair)", gap: "1px" }}
        >
          {members.map((m) => (
            <MemberCard key={m.slug} member={m} />
          ))}
        </div>

      </div>
    </section>
  );
}
