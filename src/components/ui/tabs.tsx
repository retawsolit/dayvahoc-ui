import { type ReactNode, Children, cloneElement, isValidElement } from "react";
import { cn } from "@/lib/utils";
export function Tabs({ children, activeTab, onChange }: {
 children: ReactNode;
 activeTab: string;
 onChange: (tab: string) => void;
}) {
 const childrenWithProps = Children.map(children, (child) => {
 if (isValidElement(child)) {
 if (child.type === TabList) {
 return cloneElement(child, { activeTab, onChange } as any);
 }
 if (child.type === TabContent) {
 return cloneElement(child, { activeTab } as any);
 }
}
 return child;
});

return <div>{childrenWithProps}</div>;
}

export function TabList({ children, activeTab, onChange }: {
  children: ReactNode;
  activeTab?: string;
  onChange?: (tab: string) => void;
}) {
  const childrenWithProps = Children.map(children, (child) => {
    if (isValidElement(child) && child.type === TabTrigger) {
      return cloneElement(child, { activeTab, onChange } as any);
    }
    return child;
  });

  return <div className="flex border-b border-border mb-4">{childrenWithProps}</div>;
}

export function TabTrigger({
  value,
  children,
  activeTab,
  onChange,
}: {
  value: string;
  children: ReactNode;
  activeTab?: string;
  onChange?: (tab: string) => void;
}) {
  const isActive = value === activeTab;

  return (
    <button
      onClick={() => onChange?.(value)}
      data-active={isActive}
      className={cn(
        "px-4 py-2 border-b-2 text-sm font-medium transition-colors",
        isActive
          ? "border-primary text-black dark:text-white"
          : "border-transparent text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
      )}
    >
      {children}
    </button>
  );
}

export function TabContent({ value, children, activeTab }: {
 value: string;
 children: ReactNode;
 activeTab?: string;
}) {
if (value !== activeTab) {
 return null;
 }

return <div>{children}</div>;
}