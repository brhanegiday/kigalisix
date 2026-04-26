const items = [
  "Kigali - Rwanda",
  "CMU-Africa, MMXXVI",
  "Six builders, one collective",
  "Software \u00b7 AI \u00b7 Cloud \u00b7 Product \u00b7 Research \u00b7 Design",
  "Currently accepting briefs",
];

const track = [...items, ...items, ...items, ...items];

export default function Marquee() {
  return (
    <div
      className="overflow-hidden border-t border-b py-3"
      style={{ borderColor: "var(--hair)" }}
    >
      <div
        className="ks-marquee-track font-mono"
        style={{
          color: "var(--muted)",
          fontSize: "10px",
          textTransform: "uppercase",
          letterSpacing: "0.24em",
        }}
      >
        {track.map((item, i) => (
          <span key={i} className="flex items-center gap-12">
            <span style={{ color: "var(--accent)" }}>&#10022;</span>
            <span>{item}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
