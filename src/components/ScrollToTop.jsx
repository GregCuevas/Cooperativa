import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Esto hace que la página se desplace al inicio
  }, [pathname]);

  return null;
};

export default ScrollToTop;
