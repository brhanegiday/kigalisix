import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { members } from "@/lib/data/members";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return members.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const member = members.find((m) => m.slug === slug);
  if (!member) return { title: "Member not found" };
  return {
    title: member.name,
    description: member.bioShort,
    openGraph: {
      title: `${member.name} - Kigali Six`,
      description: member.bioShort,
    },
    twitter: {
      title: `${member.name} - Kigali Six`,
      description: member.bioShort,
    },
  };
}

export default async function MemberPage({ params }: PageProps) {
  const { slug } = await params;
  const member = members.find((m) => m.slug === slug);
  if (!member) notFound();

  const currentIndex = members.findIndex((m) => m.slug === slug);
  const nextMember = members[(currentIndex + 1) % members.length];

  const hasLinks =
    member.links != null && Object.values(member.links).some(Boolean);

  return (
    <main className="grow pt-[72px]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="py-6 border-b" style={{ borderColor: "var(--hair)" }}>
          <Link
            href="/#team"
            className="font-mono transition-opacity hover:opacity-60"
            style={{
              color: "var(--muted)",
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.18em",
            }}
          >
            &larr; The Six
          </Link>
        </div>

        <div className="pt-16 lg:pt-24 pb-0">
          <div className="flex items-center justify-between gap-6">
            <span
              className="font-mono"
              style={{
                color: "var(--accent)",
                fontSize: "11px",
                letterSpacing: "0.18em",
              }}
            >
              {member.index}
            </span>
            <span
              className="font-mono text-right"
              style={{
                color: "var(--muted)",
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
              }}
            >
              {member.place}
            </span>
          </div>

          <h1
            className="font-display mt-4"
            style={{
              color: "var(--fg)",
              fontSize: "clamp(4rem, 9vw, 9rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
            }}
          >
            {member.name}
          </h1>

          <div
            className="mt-4 font-mono"
            style={{
              color: "var(--muted)",
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.16em",
            }}
          >
            {member.tags.join(" \u00b7 ")}
          </div>

          <div
            className="mt-10"
            style={{ height: "1px", background: "var(--hair)" }}
          />
        </div>

        <div className="mt-12 lg:mt-16 pb-16 lg:pb-24 max-w-2xl">
          {member.bioLong.split("\n\n").map((para, i) => (
            <p
              key={i}
              className={i > 0 ? "mt-6" : ""}
              style={{
                color: "var(--fg)",
                opacity: 0.85,
                fontSize: "1.0625rem",
                lineHeight: 1.75,
              }}
            >
              {para}
            </p>
          ))}

          {hasLinks && (
            <div className="mt-14 lg:mt-16">
              <div
                className="font-mono pb-3 border-b"
                style={{
                  color: "var(--muted)",
                  borderColor: "var(--hair)",
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.22em",
                }}
              >
                Links
              </div>
              <div className="mt-6 flex flex-wrap gap-x-8 gap-y-4">
                {member.links?.linkedin && (
                  <a
                    href={member.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono transition-opacity hover:opacity-60"
                    style={{
                      color: "var(--fg)",
                      fontSize: "11px",
                      textTransform: "uppercase",
                      letterSpacing: "0.18em",
                    }}
                  >
                    LinkedIn
                  </a>
                )}
                {member.links?.github && (
                  <a
                    href={member.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono transition-opacity hover:opacity-60"
                    style={{
                      color: "var(--fg)",
                      fontSize: "11px",
                      textTransform: "uppercase",
                      letterSpacing: "0.18em",
                    }}
                  >
                    GitHub
                  </a>
                )}
                {member.links?.site && (
                  <a
                    href={member.links.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono transition-opacity hover:opacity-60"
                    style={{
                      color: "var(--fg)",
                      fontSize: "11px",
                      textTransform: "uppercase",
                      letterSpacing: "0.18em",
                    }}
                  >
                    Website
                  </a>
                )}
                {member.links?.email && (
                  <a
                    href={`mailto:${member.links.email}`}
                    className="font-mono transition-opacity hover:opacity-60"
                    style={{
                      color: "var(--fg)",
                      fontSize: "11px",
                      textTransform: "uppercase",
                      letterSpacing: "0.18em",
                    }}
                  >
                    Email
                  </a>
                )}
              </div>
            </div>
          )}
        </div>

        <div
          className="border-t py-8 flex items-center justify-between"
          style={{ borderColor: "var(--hair)" }}
        >
          <Link
            href={`/six/${nextMember.slug}`}
            className="font-mono inline-flex items-center gap-3 transition-opacity hover:opacity-60"
            style={{
              color: "var(--muted)",
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.18em",
            }}
          >
            <span>{nextMember.index}</span>
            <span style={{ opacity: 0.4 }}>&mdash;</span>
            <span>{nextMember.name}</span>
            <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
