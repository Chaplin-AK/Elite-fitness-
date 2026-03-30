import { CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";

const plans = [
  {
    name: "Basic",
    price: "₹999",
    features: ["Gym Floor Access", "Locker Room & Showers", "Basic Cardio Equipment", "Open Gym Hours (6AM–10PM)"],
  },
  {
    name: "Standard",
    price: "₹1,999",
    popular: true,
    features: ["All Basic Features", "Group Fitness Classes", "Customized Diet Plan", "Full Cardio & Weights Zone", "Monthly Body Assessment"],
  },
  {
    name: "Premium",
    price: "₹2,999",
    features: ["All Standard Features", "Dedicated Personal Trainer", "Nutrition Coaching", "Spa & Steam Access", "Priority Booking", "24/7 Support"],
  },
];

const Plans = () => (
  <div className="pt-16">
    <section className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <SectionTitle title="Membership Plans" subtitle="Invest in yourself — choose a plan that fits your goals and budget" />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
<<<<<<< HEAD
              <div className={`bg-card border rounded-xl p-8 text-center relative flex flex-col ${plan.popular ? "neon-border scale-105" : "border-border"}`}>
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-neon text-primary-foreground text-xs font-heading tracking-wider px-4 py-1 rounded-full">
=======
              <div
                className={`bg-card border rounded-xl p-8 text-center relative flex flex-col ${
                  plan.popular ? "neon-border scale-105" : "border-primary/15 shadow-[0_0_20px_rgba(57,255,20,0.06)]"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 cta-button cta-button--badge">
>>>>>>> 94512aa (final edit)
                    MOST POPULAR
                  </span>
                )}
                <h3 className="font-heading text-2xl font-bold uppercase tracking-wider text-foreground">{plan.name}</h3>
                <div className="my-6">
                  <span className="text-4xl font-heading font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
<<<<<<< HEAD
                  className={`font-heading tracking-wider px-6 py-3 rounded-md transition-opacity inline-block ${
                    plan.popular
                      ? "gradient-neon text-primary-foreground hover:opacity-90"
                      : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  }`}
=======
                  className={
                    plan.popular
                      ? "cta-button"
                      : "inline-flex items-center justify-center font-heading uppercase tracking-wide border-2 border-primary text-primary font-semibold bg-transparent rounded-lg px-6 py-3 min-h-[44px] hover:bg-[#2EE60F] hover:text-black hover:shadow-neon-hover hover:-translate-y-px transition-all duration-250 ease-in-out active:scale-[0.97] active:translate-y-0"
                  }
>>>>>>> 94512aa (final edit)
                >
                  JOIN VIA WHATSAPP
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Plans;
