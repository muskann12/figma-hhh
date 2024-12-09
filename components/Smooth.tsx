"use client"
import ReactLenis from "lenis/react";

export const Smooth = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactLenis root>
      <div>{children}</div>
    </ReactLenis>
  );
};
