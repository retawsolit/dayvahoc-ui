import { Label } from "./label";

export function Textarea({
  label,
  ...props
}: { label?: string } & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <div className="space-y-1">
      {label && <Label>{label}</Label>}
          <textarea
      className="w-full px-3 py-2 border rounded-md text-sm
        bg-white dark:bg-gray-900 text-gray-900 dark:text-white
        border-gray-300 dark:border-gray-700
        focus:outline-none focus:ring-2 focus:ring-primary"
      rows={4}
      {...props}
    />
    </div>
  );
}
