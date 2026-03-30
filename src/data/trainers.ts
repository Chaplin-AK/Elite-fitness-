import trainer1 from "@/assets/trainer1.jpg";
import trainer2 from "@/assets/trainer2.jpg";
import trainer3 from "@/assets/trainer3.jpg";
import trainerKarthikRaj from "@/assets/trainer-karthik-raj.png";
import trainerSnehaReddy from "@/assets/trainer-sneha-reddy.png";

/** Local assets — same style as shipped “main” trainer photography */
export type TrainerImage = string | typeof trainer1;

export type TrainerProfile = {
  name: string;
  role: string;
  exp: string;
  img: TrainerImage;
};

/**
 * Core team — high-res local portraits (faces visible, consistent framing).
 * Shown on Home + row 1 on About.
 */
export const mainTrainers: TrainerProfile[] = [
  {
    name: "Arjun Kumar",
    role: "Head Trainer",
    exp: "8 yrs · Strength & HIIT",
    img: trainer1,
  },
  {
    name: "Priya Sharma",
    role: "Fitness Coach",
    exp: "5 yrs · Weight loss & functional",
    img: trainer2,
  },
  {
    name: "Rahul Menon",
    role: "Strength Coach",
    exp: "6 yrs · Powerlifting & conditioning",
    img: trainer3,
  },
];

/**
 * Extended team — Unsplash fitness portraits (face-forward, upper body / gym context).
 * ixlib + fixed w/h helps stable loading. Replace with your own files when available.
 */
const portrait = (photoId: string) =>
  `https://images.unsplash.com/${photoId}?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&h=800&q=85&fm=jpg`;

export const additionalTrainers: TrainerProfile[] = [
  {
    name: "Karthik Raj",
    role: "Functional Trainer",
    exp: "5 yrs – Strength & conditioning",
    img: trainerKarthikRaj,
  },
  {
    name: "Sneha Reddy",
    role: "Nutrition Coach",
    exp: "4 yrs – Diet & fat loss",
    img: trainerSnehaReddy,
  },
  {
    name: "Ajay Kumar",
    role: "Personal Trainer",
    exp: "6 yrs – Muscle building",
    img: portrait("photo-1567013127542-490d757e51fc"),
  },
];
