import { Label } from "./label";
import { cn } from "@/lib/utils";

export function Textarea({
  label,
  className,
  ...props
}: { label?: string } & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <div className="space-y-1">
 {label && <Label>{label}</Label>}
        <textarea
         className={cn(
           "w-full px-3 py-2 border rounded-md text-sm",
           "bg-white dark:bg-gray-900 text-gray-900 dark:text-white",
           "border-gray-300 dark:border-gray-700",
           "focus:outline-none focus:ring-2 focus:ring-primary",

          "placeholder:text-gray-400 dark:placeholder:text-gray-500", 
          className 
        )}
        rows={4}
         {...props}
     />
   </div>
  );
}