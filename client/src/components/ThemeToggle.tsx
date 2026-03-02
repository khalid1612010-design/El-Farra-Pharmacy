import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * ThemeToggle Component
 * Manages the dark/light mode state and persists it to localStorage.
 * Adds/removes the "dark" class from the document element.
 */
export function ThemeToggle() {
  // Initialize theme from localStorage or system preference
  const [isDark, setIsDark] = useState(() => {
    // Check if we're in a browser environment
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      // Fallback to system preference
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Apply theme class to body and save to localStorage
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300 flex items-center justify-center border border-primary/20"
      aria-label="Toggle Theme"
      data-testid="button-theme-toggle"
    >
      {isDark ? (
        <Sun className="w-5 h-5 transition-transform duration-500 rotate-0" />
      ) : (
        <Moon className="w-5 h-5 transition-transform duration-500 rotate-0" />
      )}
    </motion.button>
  );
}
