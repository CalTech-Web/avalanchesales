type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  as?: "h1" | "h2";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  as: Heading = "h2",
}: SectionHeadingProps) {
  return (
    <div className={`mx-auto max-w-3xl ${align === "center" ? "text-center" : "text-left"}`}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wider text-orange-text">
          {eyebrow}
        </p>
      )}
      <Heading
        className={`mt-2 text-3xl font-bold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-near-black"
        }`}
      >
        {title}
      </Heading>
      {description && (
        <p
          className={`mt-4 text-lg leading-7 ${
            light ? "text-zinc-300" : "text-zinc-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
