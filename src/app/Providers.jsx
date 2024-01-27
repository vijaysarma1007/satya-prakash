"use client";

import { ThemeProvider } from "next-themes";

export default function Providers({ children }) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className="text-gray-950 dark:text-gray-200 dark:bg-gray-900 bg-gray-100 min-h-screen select-none transition-colors duration-300">{children}</div>
    </ThemeProvider>
  );
}
