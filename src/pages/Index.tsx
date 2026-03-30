import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Award, Users, Dumbbell, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import TrainerCard from "@/components/TrainerCard";
import TestimonialsMarquee from "@/components/TestimonialsMarquee";
import HomeFaqSection from "@/components/HomeFaqSection";
import { mainTrainers } from "@/data/trainers";
import { homeTestimonials } from "@/data/homeTestimonials";
import heroBg from "@/assets/hero-bg.jpg";
import programWl from "@/assets/program-weightloss.jpg";
import programMuscle from "@/assets/program-muscle.jpg";
import programPersonal from "@/assets/program-personal.jpg";
import programCardio from "@/assets/program-cardio.jpg";
import transform2Before from "@/assets/transform2-before.png";
import transform2After from "@/assets/transform2-after.png";
import transform1Before from "@/assets/transform1-before.png";
import transform1After from "@/assets/transform1-after.png";

const programs = [
  { title: "Weight Loss", img: programWl, desc: "Burn fat and get lean with targeted programs" },
  { title: "Muscle Gain", img: programMuscle, desc: "Build strength and pack on quality muscle" },
  { title: "Personal Training", img: programPersonal, desc: "1-on-1 coaching tailored to your goals" },
  { title: "Cardio Fitness", img: programCardio, desc: "Boost endurance and heart health" },
];

const plans = [
  { name: "Basic", price: "₹999", features: ["Gym Access", "Locker Room", "Basic Equipment"] },
  { name: "Standard", price: "₹1,999", features: ["All Basic Features", "Group Classes", "Diet Plan", "Cardio Zone"], popular: true },
  { name: "Premium", price: "₹2,999", features: ["All Standard Features", "Personal Trainer", "Nutrition Coaching", "Spa Access", "Priority Support"] },
];

const transformationCards = [
  { left: transform1Before, right: transform1After },
  { left: transform2Before, right: transform2After },
];

const Index = () => (
  <div>
    {/* Hero */}
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Elite Fitness Gym" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-background/75" />
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold uppercase tracking-wider text-foreground leading-tight"
        >
          Transform Your Body <br />
          <span className="text-neon">Today 💪</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-muted-foreground text-lg md:text-xl mt-6 max-w-xl mx-auto"
        >
          Join Elite Fitness and start your fitness journey now
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button cta-button--lg hero-join-cta"
          >
            JOIN NOW
          </a>
          <Link
            to="/programs"
            className="inline-flex items-center justify-center border-2 border-border text-foreground font-heading text-lg uppercase tracking-wide font-semibold px-8 py-4 min-h-[48px] rounded-lg hover:border-primary hover:text-primary hover:shadow-neon hover:-translate-y-px transition-all duration-250 ease-in-out active:scale-[0.97] active:translate-y-0"
          >
            OUR PROGRAMS
          </Link>
        </motion.div>
      </div>
    </section>

    {/* About Preview */}
    <section className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <SectionTitle title="Why Elite Fitness" subtitle="Chennai's premier fitness destination since 2019" />
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
          {[
            { icon: Award, title: "5+ Years Experience", desc: "Proven track record of transforming lives" },
            { icon: Users, title: "Certified Trainers", desc: "Expert coaches with international certifications" },
            { icon: Dumbbell, title: "Modern Equipment", desc: "State-of-the-art machines and free weights" },
          ].map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="bg-card border border-border rounded-lg p-8 text-center hover:neon-border transition-all duration-300 group">
                <item.icon className="w-10 h-10 text-primary icon-neonthumb mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading text-lg font-bold uppercase tracking-wider text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Programs Preview */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <SectionTitle title="Our Programs" subtitle="Expert-designed programs for every fitness goal" />
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((p, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="group relative rounded-lg overflow-hidden aspect-[4/5]">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-heading text-xl font-bold uppercase tracking-wider text-foreground">{p.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{p.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 text-primary font-heading font-semibold tracking-wide hover:gap-3 transition-all duration-250 ease-in-out hover:text-[#2EE60F]"
          >
            VIEW ALL PROGRAMS <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>

    {/* Membership Preview */}
    <section className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <SectionTitle title="Membership Plans" subtitle="Choose the plan that fits your goals" />
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div
                className={`bg-card border rounded-lg p-8 text-center relative ${
                  plan.popular ? "neon-border" : "border-primary/15 shadow-[0_0_16px_rgba(57,255,20,0.05)]"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 cta-button cta-button--badge">
                    POPULAR
                  </span>
                )}
                <h3 className="font-heading text-xl font-bold uppercase tracking-wider text-foreground">{plan.name}</h3>
                <div className="my-4">
                  <span className="text-3xl font-heading font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground text-sm">/month</span>
                </div>
                <ul className="text-muted-foreground text-sm space-y-2 mb-6">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/plans"
            className="cta-button inline-flex items-center justify-center"
          >
            VIEW ALL PLANS
          </Link>
        </div>
      </div>
    </section>

    {/* Transformations */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <SectionTitle title="Client Transformations" subtitle="Real results from real members" />
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {transformationCards.map((card, i) => (
            <AnimatedSection key={i} delay={i * 0.12}>
              <div className="overflow-hidden rounded-xl border border-primary/20 bg-[#0a0a0a] p-2.5 shadow-[0_0_16px_rgba(57,255,20,0.06)]">
                <div className="transformation-card flex gap-2.5">
                  <img
                    src={card.left}
                    alt={`Client transformation image ${i + 1} left`}
                    className="h-auto w-1/2 rounded-[10px] object-cover aspect-[9/16]"
                    loading="lazy"
                  />
                  <img
                    src={card.right}
                    alt={`Client transformation image ${i + 1} right`}
                    className="h-auto w-1/2 rounded-[10px] object-cover aspect-[9/16]"
                    loading="lazy"
                  />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Trainers */}
    <section className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <SectionTitle title="Our Trainers" subtitle="Meet the experts behind your transformation" />
        </AnimatedSection>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-10">
          {mainTrainers.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.08}>
              <TrainerCard trainer={t} variant="home" />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <TestimonialsMarquee items={homeTestimonials} />

    {/* Final CTA */}
    <section className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4 text-center">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-wider text-foreground mb-4">
            Start Your Fitness Journey <span className="text-neon">Today</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8 text-base md:text-lg">
            Take the first step towards a stronger, healthier you. Explore plans that fit your goals.
          </p>
          <Link
            to="/plans"
            className="cta-button cta-button--lg inline-flex items-center justify-center"
          >
            View Plans
          </Link>
        </AnimatedSection>
      </div>
    </section>

    <HomeFaqSection
      imageSrc={programPersonal}
      imageAlt="Personal training guidance at Elite Fitness"
    />
  </div>
);

export default Index;
