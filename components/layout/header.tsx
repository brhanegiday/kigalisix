import ThemeToggle from "@/components/ui/theme-toggle";

export default function Header() {
  return (
    <header
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-md"
      style={{
        background: "var(--header-bg)",
        borderBottom: "1px solid var(--hair)",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        <a
          href="#top"
          className="font-display text-xl tracking-tight"
          style={{ color: "var(--fg)" }}
        >
          Kigali{" "}
          <span style={{ fontStyle: "italic", color: "var(--accent)" }}>
            Six
          </span>
        </a>
        <div className="flex items-center gap-4 md:gap-7">
          <nav
            className="hidden md:flex items-center gap-7 font-mono"
            style={{
              color: "var(--muted)",
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.18em",
            }}
          >
            <a
              href="#premise"
              className="transition-opacity hover:opacity-60"
            >
              Premise
            </a>
            <a href="#team" className="transition-opacity hover:opacity-60">
              The Six
            </a>
            <a
              href="#practice"
              className="transition-opacity hover:opacity-60"
            >
              Practice
            </a>
            <a
              href="#contact"
              className="transition-opacity hover:opacity-60"
            >
              Contact
            </a>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
