import { Quote, Star } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import type { MemberTestimonial } from "@/data/homeTestimonials";

type Props = {
  items: MemberTestimonial[];
};

const TestimonialCard = ({ t }: { t: MemberTestimonial }) => (
  <article className="testimonial-card flex h-full w-[min(calc(100vw-3rem),320px)] shrink-0 flex-col rounded-xl border border-primary/30 bg-[#0a0a0a] p-6 shadow-[0_0_14px_rgba(57,255,20,0.07)] sm:w-[320px]">
    <Quote className="mb-3 h-7 w-7 shrink-0 text-primary/90" aria-hidden />
    <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">&ldquo;{t.text}&rdquo;</p>
    <div className="mb-3 flex items-center gap-0.5">
      {Array.from({ length: t.stars }).map((_, j) => (
        <Star key={j} className="h-4 w-4 fill-primary text-primary" aria-hidden />
      ))}
    </div>
    <span className="font-heading text-sm font-bold uppercase tracking-wider text-foreground">{t.name}</span>
  </article>
);

const TestimonialsMarquee = ({ items }: Props) => {
  const loop = [...items, ...items];

  return (
    <section className="overflow-hidden bg-gradient-dark py-20" aria-label="Member testimonials">
      <div className="container mx-auto mb-10 px-4">
        <SectionTitle title="What Members Say" subtitle="Hear from our community" />
      </div>
      <div className="testimonial-wrapper">
        <div className="testimonial-track px-4">
          {loop.map((t, i) => (
            <TestimonialCard key={`${t.name}-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsMarquee;
