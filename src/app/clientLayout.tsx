// src/app/components/client-layout.tsx
"use client";

import { useEffect, useState } from "react";
import { ThemeProvider } from "../lib/theme-provider";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}
