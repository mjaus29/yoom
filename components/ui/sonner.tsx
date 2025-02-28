"use client";

import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="!bg-dark-1 !text-white"
      toastOptions={{
        classNames: {
          toast: "!bg-dark-1 !text-white !border-none !shadow-lg",
          description: "!text-muted-foreground",
          actionButton: "!bg-dark-1 !text-primary-foreground",
          cancelButton: "!bg-muted !text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
