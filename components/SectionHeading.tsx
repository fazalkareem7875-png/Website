import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal
      className={`mb-10 md:mb-14 ${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}
    >
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="text-3xl leading-tight tracking-tight text-ink md:text-4xl">
        {title}
      </h2>
      <div
        className={`mt-4 h-px w-16 bg-accent ${align === "center" ? "mx-auto" : ""}`}
      />
      {intro && (
        <p className="mt-5 text-base leading-relaxed text-ink/70 md:text-lg">
          {intro}
        </p>
      )}
    </Reveal>
  );
}
