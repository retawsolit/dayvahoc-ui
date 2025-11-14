import { ChevronRight, Folder } from "lucide-react";


interface BreadcrumbProps {
paths: string[];
}


export function Breadcrumb({ paths }: BreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-800 dark:text-white">
      {paths.map((path, index) => (
        <div key={index} className="flex items-center gap-1">
          {index === 0 && <Folder className="w-4 h-4 opacity-70" />}
          <span className="capitalize">{path}</span>
          {index < paths.length - 1 && (
            <ChevronRight className="w-4 h-4 opacity-70" />
          )}
        </div>
      ))}
    </nav>
  );
}

