import SectionLabel from "@/components/ui/section-label";

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 lg:px-12 py-24 lg:py-40 border-t"
      style={{ borderColor: "var(--hair)" }}
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">

        <div className="lg:col-span-3">
          <SectionLabel index="04" label="Contact" />
        </div>

        <div className="lg:col-span-9">
          <h2
            className="font-display"
            style={{
              color: "var(--fg)",
              fontSize: "clamp(2.25rem, 7vw, 6.5rem)",
              lineHeight: 0.98,
              letterSpacing: "-0.02em",
            }}
          >
            Working on something{" "}
            <span style={{ fontStyle: "italic", color: "var(--accent)" }}>
              interesting
            </span>
            ?
            <br />
            Tell us about it.
          </h2>

          <div className="mt-14 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-3xl">
            <div>
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
                Write
              </div>
              {/* TODO: replace with real address before launch */}
              <a
                href="mailto:hello@kigalisix.co"
                className="font-display block mt-3 transition-opacity hover:opacity-60"
                style={{ color: "var(--fg)", fontSize: "1.5rem" }}
              >
                hello@kigalisix.co
              </a>
            </div>

            <div>
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
                Find us
              </div>
              <p className="font-display mt-3" style={{ color: "var(--fg)", fontSize: "1.5rem" }}>
                Kigali, RW
              </p>
            </div>

            <div>
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
                Brief us
              </div>
              <p
                className="mt-3"
                style={{ color: "var(--fg)", opacity: 0.7, fontSize: "14px", lineHeight: 1.6 }}
              >
                Send the shape of the problem. We&apos;ll respond with the
                shape of an answer.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
