import * as React from "react";

import { cn } from "@/src/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const twClasses =
  "disabled:bg-neutral-100A disabled:dark:bg-darkNeutral-N100A duration-200 disabled:border-neutral-200A disabled:dark:border-darkNeutral-200A disabled:text-neutral-400A disabled:dark:text-darkNeutral-400A file:bg-transparent flex h-10 w-full rounded border-2 border-neutral-300A bg-neutral-0 px-2 py-2 text-sm text-neutral-1000 transition-colors file:border-0 file:text-sm file:font-medium placeholder:text-neutral-700 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus:bg-neutral-0 disabled:cursor-not-allowed disabled:opacity-50 dark:border-darkNeutral-300A dark:bg-darkNeutral-200 dark:text-darkNeutral-900 dark:placeholder:text-darkNeutral-700 dark:hover:bg-darkNeutral-250 dark:focus:bg-darkNeutral-200";

const inputVariants = cva(twClasses, {
  variants: {
    status: {
      default: "focus-visible:ring-blue-500 dark:focus-visible:ring-blue-300",
      error: "focus-visible:ring-red-600 dark:focus-visible:ring-red-500",
    },
  },
  defaultVariants: {
    status: "default",
  },
});

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, status, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ status, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
