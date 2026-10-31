import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap text-[11px] md:text-[13px] uppercase tracking-[0.15em] transition-all duration-500 group relative overflow-hidden";
    
    const variants = {
      primary: "border border-gold text-gold hover:bg-gold hover:text-white px-6 py-3 md:px-8 md:py-4",
      outline: "border border-charcoal text-charcoal hover:bg-charcoal hover:text-white px-6 py-3 md:px-8 md:py-4",
      ghost: "text-charcoal hover:text-gold px-4 py-2",
    };

    return (
      <button
        className={cn(baseStyles, variants[variant], className)}
        ref={ref}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button }
