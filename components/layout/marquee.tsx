const items = [
  "Kigali — Rwanda",
  "CMU-Africa, MMXXVI",
  "Six builders, one collective",
  "Software · AI · Cloud · Product · Research · Design",
  "Currently accepting briefs",
];

// 4× repetition; animation scrolls to −50% for a seamless loop
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
            <span style={{ color: "var(--accent)" }}>✦</span>
            <span>{item}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
