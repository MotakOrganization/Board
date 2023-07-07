import * as React from "react";

import { cn } from "@/src/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {}

const twClasses =
  "min-h-[60px] disabled:bg-neutral-100A duration-200 disabled:dark:bg-darkNeutral-N100A disabled:border-neutral-200A disabled:dark:border-darkNeutral-200A disabled:text-neutral-400A disabled:dark:text-darkNeutral-400A file:bg-transparent flex h-10 w-full rounded border-2 border-neutral-300A bg-neutral-0 px-2 py-2 text-sm text-neutral-1000 transition-colors file:border-0 file:text-sm file:font-medium placeholder:text-neutral-700 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus:bg-neutral-0 disabled:cursor-not-allowed disabled:opacity-50 dark:border-darkNeutral-300A dark:bg-darkNeutral-200 dark:text-darkNeutral-900 dark:placeholder:text-darkNeutral-700 dark:hover:bg-darkNeutral-250 dark:focus:bg-darkNeutral-200";

const textareaVariants = cva(twClasses, {
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

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, status, ...props }, ref) => {
    return (
      <textarea
        className={cn(textareaVariants({ status, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
