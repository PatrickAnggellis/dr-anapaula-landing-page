import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Interface para as opções do Carousel
export type CarouselOptions = {
  align?: "start" | "center" | "end";
  loop?: boolean;
}

// Componente Carousel com suporte a opções
const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { 
    opts?: CarouselOptions 
  }
>(({ className, children, opts, ...props }, ref) => {
  // Opções padrão
  const defaultOpts: CarouselOptions = {
    align: "start",
    loop: false
  }

  // Mesclar opções padrão com opções fornecidas
  const mergedOpts = { ...defaultOpts, ...opts }

  return (
    <div
      ref={ref}
      data-align={mergedOpts.align}
      data-loop={mergedOpts.loop}
      className={cn(
        "relative w-full overflow-hidden",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
})
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div 
      ref={ref} 
      className={cn(
        "flex transition-transform duration-300 ease-in-out", 
        className
      )} 
      {...props}
    >
      {children}
    </div>
  )
})
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      role="group"
      className={cn(
        "flex-0 w-full shrink-0 grow-0 basis-full", 
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
})
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn("absolute left-2 top-1/2 -translate-y-1/2", className)}
      {...props}
    >
      <ChevronLeft className="h-4 w-4" />
      <span className="sr-only">Anterior</span>
    </Button>
  )
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn("absolute right-2 top-1/2 -translate-y-1/2", className)}
      {...props}
    >
      <ChevronRight className="h-4 w-4" />
      <span className="sr-only">Próximo</span>
    </Button>
  )
})
CarouselNext.displayName = "CarouselNext"

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
}
