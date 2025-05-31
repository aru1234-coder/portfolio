import React, { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const rainbowButtonVariants = cva(
  cn(
    "relative cursor-pointer group transition-all",
    "inline-flex items-center justify-center gap-2 shrink-0",
    "rounded-sm outline-none focus-visible:ring-[3px] aria-invalid:border-destructive",
    "text-sm font-medium whitespace-nowrap",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0"
  ),
  {
    variants: {
      variant: {
        default:
          "bg-[#121213] text-primary-foreground border border-transparent",
        outline:
          "border border-input bg-white text-accent-foreground dark:bg-[#0a0a0a]",
      },
      size: {
        default: "h-6 px-1 py-1",
        sm: "h-8 rounded-xl px-3 text-xs",
        lg: "h-11 rounded-xl px-8",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const RainbowButton = forwardRef(function RainbowButton(
  { className, variant, size, asChild = false, ...props },
  ref
) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="button"
      className={cn(rainbowButtonVariants({ variant, className, size }))}
      ref={ref}
      {...props}
    />
  );
});

RainbowButton.displayName = "RainbowButton";

export { RainbowButton, rainbowButtonVariants };
