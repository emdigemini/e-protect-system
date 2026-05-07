import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.getElementById("root").scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [pathname]);

  return children;
}

export default ScrollToTop