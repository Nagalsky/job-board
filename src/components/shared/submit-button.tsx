"use client";

import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FC } from "react";

type Props = {
  className?: string;
  title?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  icon?: React.ReactNode;
};

export const SubmitButton: FC<Props> = ({
  className,
  title = "Submit",
  variant = "default",
  icon,
}) => {
  const { pending } = useFormStatus();
  return (
    <Button
      className={cn("flex items-center gap-3", className)}
      variant={variant}
    >
      {pending ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          <span>Submitting...</span>
        </>
      ) : (
        <>
          {icon && <div className="">{icon}</div>}
          <span>{title}</span>
        </>
      )}
    </Button>
  );
};
