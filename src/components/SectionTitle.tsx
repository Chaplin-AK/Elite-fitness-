interface Props {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const SectionTitle = ({ title, subtitle, center = true }: Props) => (
  <div className={`mb-12 ${center ? "text-center" : ""}`}>
    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wider text-foreground">
      {title.split(" ").map((word, i) => (
        <span key={i}>
          {i === title.split(" ").length - 1 ? (
            <span className="text-neon">{word}</span>
          ) : (
            word + " "
          )}
        </span>
      ))}
    </h2>
    {subtitle && (
      <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">{subtitle}</p>
    )}
    <div className="neon-accent-line" />
  </div>
);

export default SectionTitle;
