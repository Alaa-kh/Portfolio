"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export function LoadingSpinner({ progress = 0 }: { progress?: number }) {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? "" : prev + ".");
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <Image
        src="/favicon.png"
        alt="Favicon"
        width={64}
        height={64}
        className="rounded-full animate-pulse"
      />
      <p className="mt-4 text-2xl text-white">People Think I'm a Robot 🤖</p>
      
      {/* Main spinner */}
      <div className="relative mt-8">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        {progress > 0 && (
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-secondary rounded-full animate-spin" 
               style={{ animationDuration: '0.8s' }}></div>
        )}
      </div>

      {/* Progress bar */}
      {progress > 0 && (
        <div className="w-48 h-2 bg-muted rounded-full mt-4 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}

      <p className="mt-4 text-lg text-muted-foreground">
        Loading{dots}
        {progress > 0 && ` ${Math.round(progress)}%`}
      </p>
    </div>
  );
}
