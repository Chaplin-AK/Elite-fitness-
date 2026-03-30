import { Link } from "react-router-dom";
import {
  Dumbbell,
  Flame,
  Target,
  Zap,
  Award,
  Users,
  Building2,
  Sparkles,
  Utensils,
  Briefcase,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import TrainerCard from "@/components/TrainerCard";
import { additionalTrainers, mainTrainers } from "@/data/trainers";
import heroBg from "@/assets/hero-bg.jpg";
import missionImg from "@/assets/program-muscle.jpg";
import visionImg from "@/assets/program-cardio.jpg";

const missionBullets: { icon: typeof Dumbbell; text: string }[] = [
  { icon: Dumbbell, text: "Build strength and endurance" },
  { icon: Flame, text: "High-energy, results-driven sessions" },
  { icon: Target, text: "Training mapped to your goals" },
  { icon: Zap, text: "Science-backed programming" },
];

const visionBullets: { icon: typeof Dumbbell; text: string }[] = [
  { icon: Zap, text: "Lead South India in premium coaching" },
  { icon: Users, text: "Inclusive spaces for every fitness level" },
  { icon: Building2, text: "Expand reach without losing quality" },
  { icon: Sparkles, text: "Raise the bar for gym culture" },
];

const whyUs: { icon: typeof Award; text: string }[] = [
  { icon: Award, text: "5+ years of fitness excellence in Chennai" },
  { icon: Users, text: "Internationally certified trainers" },
  { icon: Dumbbell, text: "State-of-the-art equipment and facilities" },
  { icon: Utensils, text: "Personalized nutrition and workout plans" },
  { icon: Sparkles, text: "Supportive and motivating community" },
  { icon: Briefcase, text: "Flexible membership options" },
];

const pillarCardClass =
  "group flex h-full flex-col overflow-hidden rounded-2xl border border-primary/25 bg-[#0a0a0a] shadow-[0_0_12px_rgba(57,255,20,0.08)] transition-all duration-300 ease-out hover:-translate-y-[5px] hover:border-primary/45 hover:shadow-[0_0_20px_rgba(57,255,20,0.14),0_12px_40px_rgba(0,0,0,0.45)]";

const MissionVisionCard = ({
  title,
  summary,
  image,
  imageAlt,
  bullets,
}: {
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  bullets: { icon: typeof Dumbbell; text: string }[];
}) => (
  <div className={pillarCardClass}>
    <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden">
      <img
        src={image}
        alt={imageAlt}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-90" />
    </div>
    <div className="flex flex-1 flex-col items-center px-6 pb-8 pt-6 text-center md:px-8">
      <h3 className="font-heading text-xl font-bold uppercase tracking-[0.12em] text-foreground md:text-2xl">
        {title}
      </h3>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">{summary}</p>
      <ul className="mt-6 w-full max-w-sm space-y-3 text-left">
        {bullets.map(({ icon: Icon, text }, i) => (
          <li key={i} className="flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/5 text-primary">
              <Icon className="h-4 w-4" strokeWidth={2.25} aria-hidden />
            </span>
            <span className="text-sm font-medium leading-snug text-foreground/90">{text}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const About = () => (
  <div className="pt-16">
    {/* Hero */}
    <section className="relative flex min-h-[320px] items-center justify-center overflow-hidden py-20 md:min-h-[380px] md:py-28">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="h-full w-full object-cover" loading="lazy" aria-hidden />
        <div className="absolute inset-0 bg-background/88" />
      </div>
      <div className="relative container mx-auto flex flex-col items-center justify-center px-4 text-center">
        <h1 className="font-heading text-4xl font-bold uppercase tracking-wider text-foreground md:text-6xl">
          About{" "}
          <span className="text-neon">Us</span>
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Discover the story behind Chennai&apos;s most trusted fitness brand — built on discipline, community, and
          real results.
        </p>
      </div>
    </section>

    {/* Story */}
    <section className="py-20">
      <div className="container mx-auto flex max-w-3xl flex-col items-center px-4 text-center">
        <AnimatedSection>
          <SectionTitle title="Our Story" />
          <div className="flex flex-col gap-6 text-muted-foreground">
            <p className="leading-relaxed">
              Founded in 2019, Elite Fitness was born from a simple belief: everyone deserves access to world-class
              fitness training. What started as a small gym in T. Nagar, Chennai, has grown into a premier destination
              trusted by thousands of members.
            </p>
            <p className="leading-relaxed">
              Our certified coaches blend progressive training with personal attention so every member moves forward —
              whether the goal is fat loss, muscle, or long-term wellness.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="bg-gradient-dark py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <p className="mb-12 text-center text-xs font-heading uppercase tracking-[0.2em] text-primary/90">
            Purpose &amp; direction
          </p>
        </AnimatedSection>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          <AnimatedSection>
            <MissionVisionCard
              title="Our Mission"
              summary="Empower every member to reach peak health through expert coaching, smart programming, and a culture that never settles for average."
              image={missionImg}
              imageAlt="Strength training floor at Elite Fitness"
              bullets={missionBullets}
            />
          </AnimatedSection>
          <AnimatedSection delay={0.12}>
            <MissionVisionCard
              title="Our Vision"
              summary="Shape a region where fitness is mainstream, inclusive, and led by professionals who obsess over member outcomes."
              image={visionImg}
              imageAlt="Cardio and conditioning zone"
              bullets={visionBullets}
            />
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Trainers */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <SectionTitle title="Meet Our Team" subtitle="Lead coaches & the crew behind your experience" />
        </AnimatedSection>

        <div className="mx-auto mt-4 max-w-6xl space-y-12">
          <div>
            <p className="mb-6 text-center font-heading text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Lead trainers
            </p>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
              {mainTrainers.map((t, i) => (
                <AnimatedSection key={t.name} delay={i * 0.08}>
                  <TrainerCard trainer={t} variant="about" />
                </AnimatedSection>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-6 text-center font-heading text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Specialists &amp; operations
            </p>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
              {additionalTrainers.map((t, i) => (
                <AnimatedSection key={t.name} delay={i * 0.08}>
                  <TrainerCard trainer={t} variant="about" />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CTA band */}
    <section className="relative overflow-hidden border-y border-primary/20 bg-[#060606] py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(57, 255, 20, 0.07), transparent 55%), linear-gradient(180deg, #0a0a0a 0%, #000000 100%)",
        }}
      />
      <div className="relative container mx-auto flex flex-col items-center justify-center px-4 text-center">
        <AnimatedSection>
          <h2 className="font-heading text-3xl font-bold uppercase tracking-wide text-foreground md:text-4xl lg:text-5xl">
            Your Transformation Starts Today <span className="text-neon">💪</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-base text-muted-foreground md:text-lg">
            No excuses. No limits. Just results.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button cta-button--lg"
            >
              Join Now
            </a>
            <Link
              to="/contact"
              className="inline-flex min-h-[48px] items-center justify-center rounded-lg border-2 border-primary/50 bg-transparent px-8 py-3 font-heading text-sm font-semibold uppercase tracking-wide text-primary shadow-[0_0_4px_rgba(57,255,20,0.35)] transition-all duration-250 ease-in-out hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_10px_rgba(57,255,20,0.2)] hover:-translate-y-px active:scale-[0.97] active:translate-y-0"
            >
              Enquiry Now
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="bg-gradient-dark py-20">
      <div className="container mx-auto flex max-w-4xl flex-col items-center px-4">
        <AnimatedSection>
          <SectionTitle title="Why Choose Us" subtitle="What sets Elite Fitness apart — in practice, not just on paper" />
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <ul className="mt-4 grid w-full max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
            {whyUs.map(({ icon: Icon, text }, i) => (
              <li
                key={i}
                className="flex flex-col items-center gap-4 rounded-xl border border-primary/15 bg-[#0a0a0a]/50 px-6 py-6 text-center sm:flex-row sm:items-center sm:text-left"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/35 bg-primary/8 text-primary shadow-[0_0_12px_rgba(57,255,20,0.12)]">
                  <Icon className="h-5 w-5" strokeWidth={2.2} aria-hidden />
                </span>
                <span className="text-sm font-medium leading-relaxed text-foreground/90 sm:pt-0">{text}</span>
              </li>
            ))}
          </ul>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default About;
