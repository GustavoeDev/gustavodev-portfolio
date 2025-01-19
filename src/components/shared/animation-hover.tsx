"use client";

import { useState, forwardRef } from "react";

interface AnimationHoverProps {
  as?: React.ElementType;
  factor?: number;
  href?: string;
  children: React.ReactNode;
  target?: string;
  className?: string;
  onClick?: (event: any) => void;
  type?: string;
  rel?: string;
}

const AnimationHover = forwardRef<HTMLElement, AnimationHoverProps>(
  (
    {
      as: Component = "a",
      factor = 0.2,
      children,
      href,
      target,
      className,
      onClick,
      rel,
      type,
      ...props
    }: AnimationHoverProps,
    ref
  ) => {
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
      const { clientX, clientY, currentTarget } = e;
      const { left, top, width, height } =
        currentTarget.getBoundingClientRect();

      const x = (clientX - left - width / 2) * factor;
      const y = (clientY - top - height / 2) * factor;

      setOffset({ x, y });
    };

    const resetOffset = () => setOffset({ x: 0, y: 0 });

    return (
      <Component
        onMouseMove={handleMouseMove}
        onMouseLeave={resetOffset}
        className="inline-block"
        style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
        ref={ref}
        {...(href && { href })}
        {...(target && { target })}
        {...(className && { className })}
        {...(onClick && { onClick })}
        {...(rel && { rel })}
        {...(type && { type })}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

export default AnimationHover;
