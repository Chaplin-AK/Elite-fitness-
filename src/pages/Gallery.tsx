import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import gallery1 from "@/assets/gallery1.jpg";
import gallery2 from "@/assets/gallery2.jpg";
import gallery3 from "@/assets/gallery3.jpg";
import gallery4 from "@/assets/gallery4.jpg";
import gallery5 from "@/assets/gallery5.jpg";
import gallery6 from "@/assets/gallery6.jpg";
import transform1 from "@/assets/transform1.jpg";
import transform2 from "@/assets/transform2.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import programWl from "@/assets/program-weightloss.jpg";
import programMuscle from "@/assets/program-muscle.jpg";
import programPersonal from "@/assets/program-personal.jpg";
import programCardio from "@/assets/program-cardio.jpg";

const defaultGalleryImage = heroBg;

const images = [
  { src: heroBg, alt: "Elite Fitness interior", span: "wide tall" },
  { src: gallery1, alt: "Cardio zone", span: "wide" },
  { src: gallery2, alt: "Group fitness floor", span: "tall" },
  { src: gallery3, alt: "Boxing and bags", span: "" },
  { src: gallery4, alt: "Free weights area", span: "wide" },
  { src: gallery5, alt: "Stretch and mobility", span: "tall" },
  { src: gallery6, alt: "Locker and amenities", span: "" },
  { src: transform1, alt: "Member transformation", span: "tall" },
  { src: transform2, alt: "Member transformation", span: "" },
  { src: programMuscle, alt: "Strength training floor", span: "wide" },
  { src: programCardio, alt: "Cardio equipment", span: "" },
  { src: programPersonal, alt: "Personal training session", span: "wide" },
  { src: programWl, alt: "Weight-loss program area", span: "" },
];

const Gallery = () => (
  <div className="pt-16">
    <section className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <SectionTitle title="Our Gallery" subtitle="Take a look inside Elite Fitness" />
        </AnimatedSection>

        <div className="mt-10 grid w-full grid-flow-dense grid-cols-1 gap-5 auto-rows-[200px] sm:grid-cols-2 lg:grid-cols-4">
          {images.map((img, i) => (
            <div
              key={`${img.alt}-${i}`}
              className={`group overflow-hidden rounded-lg border border-border/50 bg-black/20 ${
                img.span.includes("wide") ? "lg:col-span-2" : "lg:col-span-1"
              } ${img.span.includes("tall") ? "row-span-2" : "row-span-1"}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                onError={(event) => {
                  const image = event.currentTarget;
                  image.onerror = null;
                  image.src = defaultGalleryImage;
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Gallery;
