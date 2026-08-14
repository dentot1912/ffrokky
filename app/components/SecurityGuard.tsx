"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SecurityGuard() {
  const router = useRouter();

  useEffect(() => {
    // 1. Disable right-click context menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // 2. Redirect to 404 on F12 / DevTools keyboard shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      const forbidden =
        e.key === "F12" ||
        // Ctrl+Shift+I (Chrome DevTools)
        (e.ctrlKey && e.shiftKey && e.key === "I") ||
        // Ctrl+Shift+J (Console)
        (e.ctrlKey && e.shiftKey && e.key === "J") ||
        // Ctrl+Shift+C (Inspect element)
        (e.ctrlKey && e.shiftKey && e.key === "C") ||
        // Ctrl+U (View source)
        (e.ctrlKey && e.key === "u");

      if (forbidden) {
        e.preventDefault();
        router.push("/not-found");
      }
    };

    // 3. Detect DevTools open via window size difference (optional extra layer)
    let devtoolsOpen = false;
    const threshold = 160;

    const detectDevTools = () => {
      const widthDiff = window.outerWidth - window.innerWidth;
      const heightDiff = window.outerHeight - window.innerHeight;

      if (
        !devtoolsOpen &&
        (widthDiff > threshold || heightDiff > threshold)
      ) {
        devtoolsOpen = true;
        router.push("/not-found");
      } else if (widthDiff <= threshold && heightDiff <= threshold) {
        devtoolsOpen = false;
      }
    };

    const devToolsInterval = setInterval(detectDevTools, 1000);

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
      clearInterval(devToolsInterval);
    };
  }, [router]);

  return null;
}
