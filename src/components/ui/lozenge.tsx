import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/lib/utils";

export interface LozengeProps
  extends React.ButtonHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof lozengeVariants> {
  text: string;
}

const twClasses = "h-4 text-xs font-bold uppercase px-1 rounded";

const lozengeVariants = cva(twClasses, {
  variants: {
    appearance: {
      default:
        "bg-neutral-200A dark:bg-darkNeutral-200A text-neutral-800 dark:text-darkNeutral-800",
      defaultBold:
        "bg-neutral-800 dark:bg-darkNeutral-800 text-neutral-0 dark:text-darkNeutral-100",
      inprogress:
        "bg-blue-100 dark:bg-blue-1000 dark:text-blue-300 text-blue-800",
      inprogressBold:
        "bg-blue-800 dark:bg-blue-400 text-neutral-0 dark:text-darkNeutral-100",
      moved:
        "bg-yellow-100 dark:bg-yellow-1000 text-orange-800 dark:text-yellow-300",
      movedBold:
        "bg-yellow-400 dark:bg-yellow-400 text-neutral-1000 dark:text-darkNeutral-100",
      new: "text-purple-800 dark:text-purple-300 bg-purple-100 dark:bg-purple-1000",
      newBold:
        "bg-purple-800 dark:bg-purple-400 text-neutral-0 dark:text-darkNeutral-100",

      removed: "bg-red-100 dark:bg-red-1000 text-red-800 dark:text-red-300",
      removedBold:
        "bg-red-700 dark:bg-red-400 text-neutral-0 dark:text-darkNeutral-100",
      success:
        "bg-green-100 dark:bg-green-1000 text-green-800 dark:text-green-300",
      successBold:
        "bg-green-700 dark:bg-green-400 text-neutral-0 dark:text-darkNeutral-100",
    },
  },
  defaultVariants: {
    appearance: "default",
  },
});

export const Lozenge: React.FC<LozengeProps> = ({
  appearance,
  className,
  text,
  ...props
}) => {
  return (
    <div {...props} className={cn(lozengeVariants({ appearance, className }))}>
      {text}
    </div>
  );
};
