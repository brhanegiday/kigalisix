import Link from "next/link";
import type { Member } from "@/lib/data/members";

export default function MemberCard({ member }: { member: Member }) {
  return (
    <Link
      href={`/six/${member.slug}`}
      className="ks-member block relative p-8 lg:p-10"
    >
      <div className="flex items-start justify-between mb-10 gap-6">
        <div
          className="font-mono"
          style={{ color: "var(--accent)", fontSize: "11px", letterSpacing: "0.18em" }}
        >
          {member.index}
        </div>
        <div
          className="font-mono text-right"
          style={{
            color: "var(--muted)",
            fontSize: "10px",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
          }}
        >
          {member.place}
        </div>
      </div>

      <h3
        className="font-display"
        style={{
          color: "var(--fg)",
          fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
          lineHeight: 1.05,
          letterSpacing: "-0.01em",
        }}
      >
        {member.name}
      </h3>

      <div
        className="mt-3 font-mono"
        style={{
          color: "var(--muted)",
          fontSize: "10.5px",
          textTransform: "uppercase",
          letterSpacing: "0.16em",
        }}
      >
        {member.tags.join(" \u00b7 ")}
      </div>

      <p
        className="mt-6"
        style={{ color: "var(--fg)", opacity: 0.78, fontSize: "15px", lineHeight: 1.65 }}
      >
        {member.bioShort}
      </p>

      <div className="mt-10 ks-rule" />
    </Link>
  );
}
