import { Link } from "react-router-dom";
import { motion } from "framer-motion";
<<<<<<< HEAD
import { Award, Users, Dumbbell, Star, ChevronRight, Quote } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import heroBg from "@/assets/hero-bg.jpg";
import trainer1 from "@/assets/trainer1.jpg";
import trainer2 from "@/assets/trainer2.jpg";
import trainer3 from "@/assets/trainer3.jpg";
=======
import { Award, Users, Dumbbell, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import TrainerCard from "@/components/TrainerCard";
import TestimonialsMarquee from "@/components/TestimonialsMarquee";
import HomeFaqSection from "@/components/HomeFaqSection";
import { mainTrainers } from "@/data/trainers";
import { homeTestimonials } from "@/data/homeTestimonials";
import heroBg from "@/assets/hero-bg.jpg";
>>>>>>> 94512aa (final edit)
import programWl from "@/assets/program-weightloss.jpg";
import programMuscle from "@/assets/program-muscle.jpg";
import programPersonal from "@/assets/program-personal.jpg";
import programCardio from "@/assets/program-cardio.jpg";
<<<<<<< HEAD
import transform1 from "@/assets/transform1.jpg";
import transform2 from "@/assets/transform2.jpg";
=======
import transform2Before from "@/assets/transform2-before.png";
import transform2After from "@/assets/transform2-after.png";
import transform1Before from "@/assets/transform1-before.png";
import transform1After from "@/assets/transform1-after.png";
>>>>>>> 94512aa (final edit)

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

<<<<<<< HEAD
const trainers = [
  { name: "Arjun Kumar", role: "Head Trainer • 8 yrs exp", img: trainer1 },
  { name: "Priya Sharma", role: "Fitness Coach • 5 yrs exp", img: trainer2 },
  { name: "Rahul Menon", role: "Strength Coach • 6 yrs exp", img: trainer3 },
];

const testimonials = [
  { name: "Vikram S.", text: "Lost 15kg in 3 months! The trainers at Elite Fitness are incredible. They pushed me beyond what I thought was possible.", stars: 5 },
  { name: "Ananya R.", text: "Best gym in Chennai. The equipment is top-notch and the atmosphere keeps you motivated every single day.", stars: 5 },
  { name: "Karthik M.", text: "Personal training here changed my life. I've gained confidence and strength I never knew I had.", stars: 5 },
=======
const transformationCards = [
  { left: transform1Before, right: transform1After },
  { left: transform2Before, right: transform2After },
>>>>>>> 94512aa (final edit)
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
<<<<<<< HEAD
            className="gradient-neon text-primary-foreground font-heading text-lg tracking-wider px-8 py-4 rounded-md hover:opacity-90 transition-opacity inline-block"
=======
            className="cta-button cta-button--lg hero-join-cta"
>>>>>>> 94512aa (final edit)
          >
            JOIN NOW
          </a>
          <Link
            to="/programs"
<<<<<<< HEAD
            className="border border-border text-foreground font-heading text-lg tracking-wider px-8 py-4 rounded-md hover:border-primary hover:text-primary transition-colors inline-block"
=======
            className="inline-flex items-center justify-center border-2 border-border text-foreground font-heading text-lg uppercase tracking-wide font-semibold px-8 py-4 min-h-[48px] rounded-lg hover:border-primary hover:text-primary hover:shadow-neon hover:-translate-y-px transition-all duration-250 ease-in-out active:scale-[0.97] active:translate-y-0"
>>>>>>> 94512aa (final edit)
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
<<<<<<< HEAD
                <item.icon className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
=======
                <item.icon className="w-10 h-10 text-primary icon-neonthumb mx-auto mb-4 group-hover:scale-110 transition-transform" />
>>>>>>> 94512aa (final edit)
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
<<<<<<< HEAD
          <Link to="/programs" className="inline-flex items-center gap-2 text-primary font-heading tracking-wider hover:gap-3 transition-all">
=======
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 text-primary font-heading font-semibold tracking-wide hover:gap-3 transition-all duration-250 ease-in-out hover:text-[#2EE60F]"
          >
>>>>>>> 94512aa (final edit)
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
<<<<<<< HEAD
              <div className={`bg-card border rounded-lg p-8 text-center relative ${plan.popular ? "neon-border" : "border-border"}`}>
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-neon text-primary-foreground text-xs font-heading tracking-wider px-4 py-1 rounded-full">
=======
              <div
                className={`bg-card border rounded-lg p-8 text-center relative ${
                  plan.popular ? "neon-border" : "border-primary/15 shadow-[0_0_16px_rgba(57,255,20,0.05)]"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 cta-button cta-button--badge">
>>>>>>> 94512aa (final edit)
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
<<<<<<< HEAD
            className="gradient-neon text-primary-foreground font-heading tracking-wider px-8 py-3 rounded-md hover:opacity-90 transition-opacity inline-block"
=======
            className="cta-button inline-flex items-center justify-center"
>>>>>>> 94512aa (final edit)
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
<<<<<<< HEAD
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {[transform1, transform2].map((img, i) => (
            <AnimatedSection key={i} delay={i * 0.2}>
              <div className="rounded-lg overflow-hidden border border-border">
                <img src={img} alt={`Transformation ${i + 1}`} className="w-full h-auto" loading="lazy" />
=======
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
>>>>>>> 94512aa (final edit)
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
<<<<<<< HEAD
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {trainers.map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="group text-center">
                <div className="overflow-hidden rounded-lg aspect-[4/5] mb-4">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <h3 className="font-heading text-lg font-bold uppercase tracking-wider text-foreground">{t.name}</h3>
                <p className="text-muted-foreground text-sm">{t.role}</p>
              </div>
=======
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-10">
          {mainTrainers.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.08}>
              <TrainerCard trainer={t} variant="home" />
>>>>>>> 94512aa (final edit)
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

<<<<<<< HEAD
    {/* Testimonials */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <SectionTitle title="What Members Say" subtitle="Hear from our community" />
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="bg-card border border-border rounded-lg p-6">
                <Quote className="w-8 h-8 text-primary/30 mb-3" />
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">"{t.text}"</p>
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="font-heading text-sm font-bold text-foreground">{t.name}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
=======
    <TestimonialsMarquee items={homeTestimonials} />
>>>>>>> 94512aa (final edit)

    {/* Final CTA */}
    <section className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4 text-center">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-wider text-foreground mb-4">
<<<<<<< HEAD
            Start Your Fitness Journey <span className="text-primary">Today</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            Take the first step towards a healthier, stronger you. Join Elite Fitness now.
          </p>
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-neon text-primary-foreground font-heading text-lg tracking-wider px-10 py-4 rounded-md hover:opacity-90 transition-opacity inline-block"
          >
            JOIN NOW
          </a>
        </AnimatedSection>
      </div>
    </section>
=======
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
>>>>>>> 94512aa (final edit)
  </div>
);

export default Index;
