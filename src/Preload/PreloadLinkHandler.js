import React from "react";
import { useNavigation } from "./NavigationProvider";

export default function PreloadLinkHandler({ children }) {
  const { setLoading } = useNavigation();

  React.useEffect(() => {
    const handler = (e) => {
      const a = e.target.closest("a");
      if (
        a &&
        a.href &&
        !a.target &&
        // !a.href.startsWith("mailto:") &&
        // !a.href.startsWith("tel:") &&
        !a.href.startsWith("javascript:")
      ) {
        setLoading(true);
      }
    };
    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler, true);
  }, [setLoading]);

  return children;
}