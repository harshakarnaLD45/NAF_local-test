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
        a.origin === window.location.origin && // same-origin only
        !a.getAttribute("target") && // not target="_blank"
        !a.href.startsWith("mailto:") &&
        !a.href.startsWith("tel:") &&
        !a.href.startsWith("javascript:") &&
        !a.hasAttribute("download") // not a download link
      ) {
        setLoading(true);
      }
    };
    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler, true);
  }, [setLoading]);

  return children;
}