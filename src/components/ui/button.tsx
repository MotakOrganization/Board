import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/src/lib/utils";

const twClasses =
  "inline-flex items-center justify-center rounded text-sm font-medium duration-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:focus-visible:ring-blue-300 disabled:pointer-events-none disabled:opacity-50";

const buttonVariants = cva(twClasses, {
  variants: {
    variant: {
      default:
        "bg-neutral-200A text-neutral-1100 hover:bg-neutral-300A active:bg-neutral-400A dark:bg-darkNeutral-200A dark:text-darkNeutral-900 dark:hover:bg-darkNeutral-300A dark:active:bg-darkNeutral-400A disabled:bg-neutral-100A disabled:text-neutral-400A dark:disabled:bg-darkNeutral-N100A dark:disabled:text-darkNeutral-400A",
      primary:
        "bg-blue-700 text-neutral-0 hover:bg-blue-800 active:bg-blue-900 dark:bg-blue-400 dark:text-darkNeutral-100 dark:hover:bg-blue-300 dark:active:bg-blue-200 disabled:bg-neutral-100A disabled:text-neutral-400A dark:disabled:bg-darkNeutral-N100A dark:disabled:text-darkNeutral-400A",
      subtle:
        "text-neutral-1100 hover:bg-neutral-200A active:bg-neutral-300A dark:text-darkNeutral-900 dark:hover:bg-darkNeutral-200A dark:active:bg-darkNeutral-300A disabled:bg-transparent disabled:text-neutral-400A dark:disabled:bg-transparent dark:disabled:text-darkNeutral-400A",
      link: "text-blue-700 active:text-blue-800 underline-offset-4 hover:underline dark:text-blue-400 dark:active:text-blue-300 disabled:bg-transparent disabled:text-neutral-400A dark:disabled:bg-transparent dark:disabled:text-darkNeutral-400A",
      subtleLink:
        "text-neutral-800 active:text-neutral-1100 underline-offset-4 hover:underline dark:text-darkNeutral-800 dark:active:text-darkNeutral-900 disabled:bg-transparent disabled:text-neutral-400A dark:disabled:bg-transparent dark:disabled:text-darkNeutral-400A",
      warning:
        "bg-yellow-400 text-neutral-1000 hover:bg-yellow-500 active:bg-yellow-600 dark:bg-yellow-400 dark:text-darkNeutral-100 dark:hover:bg-yellow-300 dark:active:bg-yellow-200 disabled:bg-neutral-100A disabled:text-neutral-400A dark:disabled:bg-darkNeutral-N100A dark:disabled:text-darkNeutral-400A",
      error:
        "bg-red-700 text-neutral-0 hover:bg-red-800 active:bg-red-900 dark:bg-red-400 dark:text-darkNeutral-100 dark:hover:bg-red-300 dark:active:bg-red-200 disabled:bg-neutral-100A disabled:text-neutral-400A dark:disabled:bg-darkNeutral-N100A dark:disabled:text-darkNeutral-400A",
    },
    size: {
      default: "h-8 px-3 py-2 rounded",
      compact: "h-6 px-3 py-2 rounded",
      sm: "h-8 rounded-md px-3 text-xs",
      lg: "h-10 rounded-md px-8",
      icon: "h-8 w-8",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
