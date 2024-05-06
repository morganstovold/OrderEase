'use client';

import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { SIZE_VARIANTS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;
const buttonVariants = cva(
  ` relative inline-flex
  cursor-pointer 
  items-center 
  justify-center 
  space-x-2 
  rounded-md 
  border 
  text-center 
  outline-none
  outline-0 
  transition-all 
  duration-200 
  ease-out 
  focus-visible:outline-4
  focus-visible:outline-offset-1
`,
  {
    variants: {
      variant: {
        default: `border-green-300/40 bg-green-300/5 text-green-300/80 shadow-sm hover:border-green-300/50 hover:bg-green-300/10`,
        secondary: `border-zinc-300/40 bg-zinc-300/5 text-zinc-300/80 shadow-sm hover:border-zinc-300/50 hover:bg-zinc-300/10`,
        destructive: `bg-destructive text-destructive-foreground hover:bg-destructive/90`,
        outline: `border-green-300/40 bg-transparent text-green-300/80 shadow-sm hover:border-green-300/50 hover:bg-green-300/10`,
        dashed: `border-dashed border-green-300/40 bg-transparent text-green-300/80 shadow-sm hover:border-green-300/50 hover:bg-green-300/10`,
        link: `border border-transparent text-green-300/80 shadow-none hover:bg-green-300/10 focus-visible:outline-4`,
        warning: `border-amber-300/40 bg-amber-300/5 text-amber-300/80 shadow-sm hover:border-amber-300/50 hover:bg-amber-300/10 focus-visible:outline-amber-300/40`,
        danger: `border-red-300/40 bg-red-300/5 text-red-300/80 shadow-sm hover:border-red-300/50 hover:bg-red-300/10 focus-visible:outline-red-300/40`,
        text: `border-transparent text-foreground shadow-none focus-visible:outline-4`
      },
      block: {
        true: 'flex w-full items-center justify-center'
      },
      size: {
        ...SIZE_VARIANTS
      },
      overlay: {
        base: `absolute inset-0 bg-background opacity-50`,
        container: `fixed inset-0 transition-opacity`
      },
      disabled: {
        true: 'cursor-default opacity-50'
      },
      rounded: {
        true: 'rounded-full'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium'
    }
  }
);

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'>,
    Omit<ButtonVariantProps, 'disabled'> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
