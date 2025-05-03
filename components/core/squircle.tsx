"use client";

import { useSquircle } from "@/app/(docs)/docs/(docWarrap)/squircle/hooks/useSquircle";


interface SquircleProps {
  children: React.ReactNode;
  radius?: string;
  smooth?: string;
  outline?: string;
  className?: string;
}

export default function Squircle({
  children,
  radius = "40px",
  smooth = "1",
  outline = "none",
  className = "",
}: Readonly<SquircleProps>) {

  useSquircle();

  const squircleStyle: React.CSSProperties = {
    maskImage: "paint(squircle)",
    WebkitMaskImage: "paint(squircle)",
    borderRadius: radius,
    // CSS custom properties (Houdini)
    ["--squircle-radius" as any]: radius,
    ["--squircle-smooth" as any]: smooth,
    ["--squircle-outline" as any]: outline,
  };

  return (
    <div className={`w-auto h-auto ${className}`} style={squircleStyle}>
      {children}
    </div>
  );
}
