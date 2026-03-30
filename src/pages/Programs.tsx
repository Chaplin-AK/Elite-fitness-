import { CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import programWl from "@/assets/program-weightloss.jpg";
import programMuscle from "@/assets/program-muscle.jpg";
import programPersonal from "@/assets/program-personal.jpg";
import programCardio from "@/assets/program-cardio.jpg";

const programs = [
  {
    title: "Weight Loss Training",
    img: programWl,
    desc: "Our comprehensive weight loss program combines high-intensity interval training, metabolic conditioning, and nutrition guidance to help you shed fat effectively and sustainably.",
    benefits: ["Customized calorie-deficit diet plans", "Fat-burning HIIT workouts", "Weekly progress tracking", "Body composition analysis"],
  },
  {
    title: "Muscle Building",
    img: programMuscle,
    desc: "Build lean muscle mass with our progressive overload training program. Our certified trainers guide you through proper form and periodized routines for maximum hypertrophy.",
    benefits: ["Structured periodization programs", "Supplement guidance", "Progressive overload tracking", "Recovery and mobility work"],
  },
  {
    title: "Personal Training",
    img: programPersonal,
    desc: "Get dedicated 1-on-1 attention from our expert trainers. Every session is tailored to your goals, fitness level, and schedule for the fastest results possible.",
    benefits: ["Fully customized workout plans", "Dedicated trainer attention", "Flexible scheduling", "Injury prevention focus"],
  },
  {
    title: "Cardio Workouts",
    img: programCardio,
    desc: "Improve your cardiovascular endurance and overall fitness with our dynamic cardio programs, from treadmill training to group cardio classes.",
    benefits: ["Heart rate zone training", "Varied cardio modalities", "Stamina and endurance building", "Fun group sessions available"],
  },
];

const Programs = () => (
  <div className="pt-16">
    <section className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <SectionTitle title="Our Programs" subtitle="Expert-designed training programs for every fitness goal" />
        </AnimatedSection>

        <div className="space-y-20 mt-8">
          {programs.map((p, i) => (
            <AnimatedSection key={i}>
              <div className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center max-w-5xl mx-auto`}>
                <div className="w-full md:w-1/2">
                  <div className="rounded-lg overflow-hidden aspect-[5/4] border border-primary/20 shadow-[0_0_24px_rgba(57,255,20,0.1)]">
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-wider text-foreground mb-4">
                    {p.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{p.desc}</p>
                  <ul className="space-y-3">
                    {p.benefits.map((b, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-muted-foreground text-sm">{b}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://wa.me/919999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-button inline-block mt-6"
                  >
                    ENQUIRE NOW
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Programs;
