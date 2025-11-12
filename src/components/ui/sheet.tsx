import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Sheet = Dialog.Root;
export const SheetTrigger = Dialog.Trigger;
export const SheetClose = Dialog.Close;

export const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof Dialog.Overlay>,
  React.ComponentPropsWithoutRef<typeof Dialog.Overlay>
>(({ className, ...props }, ref) => (
  <Dialog.Overlay
    ref={ref}
    className={cn("fixed inset-0 bg-black/30 z-40", className)}
    {...props}
  />
));
SheetOverlay.displayName = "SheetOverlay";

export const SheetContent = React.forwardRef<
  React.ElementRef<typeof Dialog.Content>,
  React.ComponentPropsWithoutRef<typeof Dialog.Content>
>(({ className, children, ...props }, ref) => (
  <Dialog.Portal>
    <SheetOverlay />
    <Dialog.Content
      ref={ref}
      className={cn(
        "fixed left-0 top-0 z-50 h-full w-64 bg-white shadow-lg border-r translate-x-0 transition-transform",
        "data-[state=closed]:-translate-x-full data-[state=open]:translate-x-0",
        className
      )}
      {...props}
    >
      <div className="flex justify-end p-2">
        <SheetClose className="text-gray-500 hover:text-black">
          <X className="h-5 w-5" />
        </SheetClose>
      </div>
      {children}
    </Dialog.Content>
  </Dialog.Portal>
));
SheetContent.displayName = "SheetContent";
