import { type Icon as IconType } from "@tabler/icons-react";
import { cva } from "class-variance-authority";
import { cn } from "~/lib/utils";

interface IIcon {
  IconComponent: IconType;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  color?: string;
}

const twClasses = "text-neutral-800 dark:text-darkNeutral-800";

const iconVariants = cva(twClasses, {
  variants: {
    size: {
      sm: "h-4 w-4",
      md: "h-6 w-6",
      lg: "h-8 w-8",
      xl: "h-12 w-12",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const Icon: React.FC<IIcon> = ({
  IconComponent,
  size = "md",
  color,
  className,
}) => {
  return (
    <IconComponent
      size={size}
      color={color}
      className={cn(iconVariants({ size, className }))}
    />
  );
};
