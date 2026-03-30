import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

<<<<<<< HEAD
const buttonVariants = cva(
=======
type ButtonSize = "default" | "sm" | "lg" | "icon" | null | undefined;

const ctaSizeClass = (size: ButtonSize) => {
  switch (size) {
    case "sm":
      return "cta-button--sm";
    case "lg":
      return "cta-button--lg";
    case "icon":
      return "cta-button--fab [&_svg]:!size-5";
    default:
      return "";
  }
};

const nonCtaButtonVariants = cva(
>>>>>>> 94512aa (final edit)
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
<<<<<<< HEAD
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
=======
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm",
        outline:
          "border-2 border-primary bg-background text-primary transition-all duration-250 ease-in-out hover:bg-[#39FF14] hover:text-black hover:shadow-neon-hover hover:-translate-y-px active:scale-[0.97] active:translate-y-0",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-primary/15 hover:text-primary",
        link: "h-auto px-0 py-0 text-primary underline-offset-4 hover:underline hover:text-[#2EE60F] text-shadow-none",
>>>>>>> 94512aa (final edit)
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
<<<<<<< HEAD
    defaultVariants: {
      variant: "default",
=======
    compoundVariants: [
      { variant: "link", size: "default", class: "!h-auto" },
      { variant: "link", size: "sm", class: "!h-auto" },
      { variant: "link", size: "lg", class: "!h-auto" },
      { variant: "link", size: "icon", class: "!h-auto !w-auto" },
    ],
    defaultVariants: {
      variant: "secondary",
>>>>>>> 94512aa (final edit)
      size: "default",
    },
  },
);

<<<<<<< HEAD
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
=======
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof nonCtaButtonVariants> & {
    asChild?: boolean;
    /** Primary neon CTA; other variants use standard UI sizing */
    variant?: "default" | NonNullable<VariantProps<typeof nonCtaButtonVariants>["variant"]>;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    if (variant === "default") {
      return <Comp className={cn("cta-button", ctaSizeClass(size), className)} ref={ref} {...props} />;
    }

    return (
      <Comp
        className={cn(nonCtaButtonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
>>>>>>> 94512aa (final edit)
  },
);
Button.displayName = "Button";

<<<<<<< HEAD
export { Button, buttonVariants };
=======
const buttonVariants = (props?: { variant?: ButtonProps["variant"]; size?: ButtonSize; className?: string }) => {
  const { variant = "default", size = "default", className } = props ?? {};
  if (variant === "default") {
    return cn("cta-button", ctaSizeClass(size), className);
  }
  return cn(
    nonCtaButtonVariants({
      variant,
      size,
    }),
    className,
  );
};

export { buttonVariants };
>>>>>>> 94512aa (final edit)
