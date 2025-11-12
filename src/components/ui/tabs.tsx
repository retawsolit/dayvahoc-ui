import { type ReactNode, Children, cloneElement, isValidElement } from "react";

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

 return <div className="flex border-b mb-4">{childrenWithProps}</div>;
}

export function TabTrigger({ value, children, activeTab, onChange }: {
 value: string;
 children: ReactNode;
 activeTab?: string; 
 onChange?: (tab: string) => void;
}) {
 const isActive = value === activeTab;

 return (
 <button
 onClick={() => onChange?.(value)}
 className="px-4 py-2 border-b-2 text-sm font-medium hover:text-blue-600 data-[active=true]:border-blue-600 data-[active=true]:text-blue-600"
 data-active={isActive}
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