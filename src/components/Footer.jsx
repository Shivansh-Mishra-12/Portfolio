import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(footerRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="w-full border-t border-border py-6 px-6 md:px-12 lg:px-20 flex flex-col md:flex-row justify-between items-center text-xs text-muted"
    >
      <p>
        Designed & built by{" "}
        <span className="text-primary">Shivansh</span> — 2025
      </p>

      <p className="mt-2 md:mt-0">
        Made with <span className="text-primary">♥</span> & too much chai
      </p>
    </footer>
  );
};

export default Footer;