'use client';

import { useEffect } from 'react';


export function useSquircle() {
  useEffect(() => {
    if (typeof window !== "undefined" && "paintWorklet" in CSS) {
      // TypeScript-safe cast
      (CSS as unknown as { paintWorklet: Worklet }).paintWorklet.addModule(
        "https://unpkg.com/css-houdini-squircle@0.3.0/lib/squircle.js"
      );
    }
  }, []);
}
