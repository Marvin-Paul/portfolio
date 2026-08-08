export function SectionLabel({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`mono-label mb-4 ${
        light ? "text-white/60" : "text-body-muted"
      }`}
    >
      {children}
    </p>
  );
}
