import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    // Scroll to top on route change
    scrollToTop();

    // Add event listener for history changes
    window.addEventListener('popstate', scrollToTop);

    return () => {
      window.removeEventListener('popstate', scrollToTop);
    };
  }, [pathname]);

  return null;
}
