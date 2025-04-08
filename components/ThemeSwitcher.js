// components/ThemeSwitcher.js
import { useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const { setTheme } = useTheme();

  // force dark on mount
  useEffect(() => {
    setTheme("dark");
  }, [setTheme]);

  return null; // no UI
}
