type Props = { index: string; label: string };

export default function SectionLabel({ index, label }: Props) {
  return (
    <div
      className="font-mono"
      style={{
        color: "var(--muted)",
        fontSize: "11px",
        textTransform: "uppercase",
        letterSpacing: "0.22em",
      }}
    >
      {index} &mdash; {label}
    </div>
  );
}
