import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-blue-500 text-white shadow-lg shadow-blue-500/30 hover:bg-blue-600 hover:shadow-xl hover:scale-105 active:scale-100",
        destructive:
          "bg-red-500 text-white shadow-sm hover:bg-red-600 hover:shadow-md",
        outline:
          "border-2 border-blue-500 bg-white text-blue-600 shadow-sm hover:bg-blue-50 hover:border-blue-600",
        secondary:
          "bg-blue-100 text-blue-700 shadow-sm hover:bg-blue-200 hover:shadow-md",
        ghost: "text-blue-600 hover:bg-blue-50 hover:text-blue-700",
        link: "text-blue-600 underline-offset-4 hover:underline hover:text-blue-700",
        accent:
          "bg-cyan-500 text-white shadow-lg shadow-cyan-500/30 hover:bg-cyan-600 hover:shadow-xl hover:scale-105 active:scale-100",
      },
      size: {
        default: "h-10 px-6 py-2.5",
        sm: "h-8 rounded-md px-4 text-xs",
        lg: "h-12 rounded-xl px-10 text-base font-semibold",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
