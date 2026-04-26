import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grow pt-[72px] flex items-center">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24">
        <p
          className="font-mono"
          style={{
            color: "var(--muted)",
            fontSize: "11px",
            textTransform: "uppercase",
            letterSpacing: "0.22em",
          }}
        >
          404
        </p>
        <p
          className="font-display mt-4"
          style={{
            color: "var(--fg)",
            fontSize: "clamp(2rem, 5vw, 4rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
          }}
        >
          No such member.
        </p>
        <Link
          href="/#team"
          className="font-mono inline-block mt-8 transition-opacity hover:opacity-60"
          style={{
            color: "var(--muted)",
            fontSize: "11px",
            textTransform: "uppercase",
            letterSpacing: "0.18em",
          }}
        >
          &larr; Back to the Six
        </Link>
      </div>
    </main>
  );
}
