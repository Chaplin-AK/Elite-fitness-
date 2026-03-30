import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionTitle from "@/components/SectionTitle";

type Props = {
  imageSrc: string;
  imageAlt: string;
};

const faqItems = [
  {
    question: "What are your membership plans?",
    answer:
      "We offer Basic, Standard, and Premium plans with flexible monthly options based on your goals and support level.",
  },
  {
    question: "Do you offer personal training?",
    answer:
      "Yes. Certified trainers provide one-on-one coaching with customized workouts, regular assessments, and progress tracking.",
  },
  {
    question: "What are the gym timings?",
    answer:
      "Elite Fitness is open daily from early morning to late evening so working professionals and students can train conveniently.",
  },
  {
    question: "Is there a trial session?",
    answer:
      "Yes, we provide a guided trial session so you can experience our training environment, equipment, and coaching quality.",
  },
  {
    question: "Do you provide diet plans?",
    answer:
      "Yes. Nutrition guidance is included in select plans and can also be added as a focused support service for fat loss or muscle gain.",
  },
  {
    question: "Are beginners welcome?",
    answer:
      "Absolutely. We design beginner-friendly programs and ensure safe form, confidence building, and gradual progression.",
  },
  {
    question: "Do you have female trainers?",
    answer:
      "Yes, we have experienced female coaches available for training, guidance, and dedicated support.",
  },
  {
    question: "What equipment do you have?",
    answer:
      "Our gym includes modern strength machines, free weights, cardio equipment, functional training tools, and recovery areas.",
  },
  {
    question: "Can I switch plans later?",
    answer:
      "Yes. You can upgrade your plan at any time and our team will help transition your training and nutrition support smoothly.",
  },
  {
    question: "How long before I see results?",
    answer:
      "Most members notice meaningful changes in 6 to 12 weeks with consistent training, nutrition discipline, and proper recovery.",
  },
];

const HomeFaqSection = ({ imageSrc, imageAlt }: Props) => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <SectionTitle title="Frequently Asked Questions" subtitle="Everything you need before you start" />
      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch">
        <div className="order-2 overflow-hidden rounded-2xl border border-primary/20 bg-[#0a0a0a] lg:order-1">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-full min-h-[340px] w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
            loading="lazy"
          />
        </div>
        <div className="order-1 rounded-2xl border border-primary/20 bg-[#0a0a0a] p-4 shadow-[0_0_16px_rgba(57,255,20,0.06)] sm:p-6 lg:order-2">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-primary/15">
                <AccordionTrigger className="text-left font-heading text-sm font-semibold uppercase tracking-wide text-foreground hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  </section>
);

export default HomeFaqSection;
