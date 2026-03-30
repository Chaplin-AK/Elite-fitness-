import type { TrainerProfile } from "@/data/trainers";

type Props = {
  trainer: TrainerProfile;
  /** Home: single subtitle line; About: separate role + experience */
  variant: "home" | "about";
};

const cardShell =
  "group flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-primary/20 bg-[#0a0a0a]/90 text-center transition-transform duration-300 ease-out hover:scale-[1.02] hover:border-primary/40 hover:shadow-[0_0_18px_rgba(57,255,20,0.12)]";

const imgWrap = "relative mb-0 aspect-[4/5] w-full shrink-0 overflow-hidden";

/**
 * Shared trainer tile: same ratio, object position (faces), and typography everywhere.
 */
const TrainerCard = ({ trainer, variant }: Props) => {
  return (
    <div className={cardShell}>
      <div className={imgWrap}>
        <img
          src={trainer.img as string}
          alt={trainer.name}
          className="h-full w-full object-cover object-[center_15%] transition-transform duration-500 group-hover:scale-[1.04]"
          loading="lazy"
          decoding="async"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70" />
      </div>
      <div className="flex flex-1 flex-col items-center justify-center gap-1 px-4 py-5">
        <h3
          className={`font-heading text-base font-bold uppercase tracking-wider ${
            variant === "about" ? "text-primary" : "text-foreground"
          }`}
        >
          {trainer.name}
        </h3>
        {variant === "home" ? (
          <p className="text-sm leading-snug text-muted-foreground">{`${trainer.role} • ${trainer.exp}`}</p>
        ) : (
          <>
            <p className="text-xs font-semibold uppercase tracking-widest text-neon">{trainer.role}</p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{trainer.exp}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default TrainerCard;
