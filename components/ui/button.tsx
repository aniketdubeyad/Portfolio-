"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold outline-none transition focus-visible:ring-2 focus-visible:ring-cyan-300 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-white text-black shadow-[0_0_40px_rgba(255,255,255,.18)] hover:bg-cyan-100",
        glass: "glass text-white hover:border-cyan-200/50 hover:shadow-[0_0_42px_rgba(98,230,255,.18)]",
        ghost: "text-white/80 hover:bg-white/10 hover:text-white"
      },
      size: {
        default: "h-11",
        sm: "h-9 px-4 text-xs",
        icon: "h-11 w-11 px-0"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default"
    }
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, ...props }, ref) => (
  <button ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />
));
Button.displayName = "Button";
