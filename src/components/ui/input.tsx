import { Label } from "./label";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, className, ...props }: InputProps) {
  return (
    <div className="space-y-1">
      {label && <Label>{label}</Label>}
      <input
        className={cn(
          "w-full px-3 py-2 border rounded-md text-sm",
          "bg-white text-gray-900 placeholder:text-gray-400 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500",
          "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
          error
            ? "border-red-500 focus:ring-red-500"
            : "border-gray-300 dark:border-gray-600",
          className
        )}
        {...props}
      />
      {error && <p className="text-xs text-red-500 dark:text-red-400 mt-1">{error}</p>}
    </div>
  );
}
