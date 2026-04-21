"use client";

import React, { Suspense } from "react";
import { LoadingSpinner } from "./ui/loading-spinner";

export function PreLoader({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>;
}