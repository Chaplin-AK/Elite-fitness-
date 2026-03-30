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
<<<<<<< HEAD
            <span className="text-primary">{word}</span>
=======
            <span className="text-neon">{word}</span>
>>>>>>> 94512aa (final edit)
          ) : (
            word + " "
          )}
        </span>
      ))}
    </h2>
    {subtitle && (
      <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">{subtitle}</p>
    )}
<<<<<<< HEAD
    <div className="w-20 h-1 gradient-neon rounded-full mt-4 mx-auto" />
=======
    <div className="neon-accent-line" />
>>>>>>> 94512aa (final edit)
  </div>
);

export default SectionTitle;
