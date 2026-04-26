export default function Footer() {
  return (
    <footer
      className="px-6 lg:px-12 py-10 border-t font-mono"
      style={{ borderColor: "var(--hair)" }}
    >
      <div
        className="max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6"
        style={{
          color: "var(--muted)",
          fontSize: "10.5px",
          textTransform: "uppercase",
          letterSpacing: "0.18em",
        }}
      >
        <div>&copy; Kigali Six &mdash; MMXXVI</div>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <span>Brhane</span>
          <span style={{ opacity: 0.4 }}>&middot;</span>
          <span>Julius</span>
          <span style={{ opacity: 0.4 }}>&middot;</span>
          <span>Wendy</span>
          <span style={{ opacity: 0.4 }}>&middot;</span>
          <span>Roy</span>
          <span style={{ opacity: 0.4 }}>&middot;</span>
          <span>Michael</span>
          <span style={{ opacity: 0.4 }}>&middot;</span>
          <span>Godbright</span>
        </div>
        <div>Made in Kigali &middot; Rwanda</div>
      </div>
    </footer>
  );
}
