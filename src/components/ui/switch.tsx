import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

export function Switch({ className, ...props }: SwitchPrimitives.SwitchProps) {
  return (
    <SwitchPrimitives.Root
      className={cn(
        "group inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent",
        "bg-gray-200 dark:bg-gray-700",
        "transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 data-[state=checked]:bg-primary",
        className
      )}
      {...props}
    >
      <SwitchPrimitives.Thumb
        className="pointer-events-none block h-5 w-5 rounded-full bg-white dark:bg-gray-900 shadow-lg ring-0 transition-transform duration-200 translate-x-1 group-data-[state=checked]:translate-x-5"
      />
    </SwitchPrimitives.Root>
  );
}

