import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  const linesRef = useRef([]);

  useEffect(() => {
    if (open) {
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
      );
    }
    const currentRef = menuRef.current;
    return () => {
      gsap.killTweensOf(currentRef);
    };
  }, [open]);

  const toggleMenu = () => {
    setOpen(!open);

    gsap.to(linesRef.current[0], {
      rotate: open ? 0 : 45,
      y: open ? 0 : 6,
      duration: 0.3,
    });
    gsap.to(linesRef.current[1], {
      opacity: open ? 1 : 0,
      duration: 0.3,
    });
    gsap.to(linesRef.current[2], {
      rotate: open ? 0 : -45,
      y: open ? 0 : -6,
      duration: 0.3,
    });
  };

  return (
    <nav className="bg-[var(--color-bg)] text-[var(--color-text)] px-6 py-4 border-b border-[var(--color-border)]">
      <div className="flex justify-between items-center">

        <h1 className="text-xl font-bold tracking-widest">
          SH<span className="text-[var(--color-primary)]">.</span>
        </h1>

        <ul className="hidden md:flex space-x-10 text-sm tracking-widest text-[var(--color-muted)]">
          {["ABOUT","PROJECTS","CONTACT"].map((item,i)=>(
            <li key={i}
              className="hover:text-[var(--color-primary)] cursor-pointer hover:underline active:underline transition duration-300 hover:scale-110"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <div onClick={toggleMenu} className="md:hidden space-y-1 cursor-pointer">
          {[0,1,2].map((i)=>(
            <hr
              key={i}
              ref={el => linesRef.current[i] = el}
              className="w-6 border-[var(--color-text)]"
            />
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          ref={menuRef}
          className="md:hidden flex flex-col mt-4 space-y-4 text-sm tracking-widest text-[var(--color-muted)]"
        >
          {["ABOUT","PROJECTS","EXPERIENCE","CONTACT"].map((item,i)=>(
            <button
              key={i}
              
              className="hover:text-primary hover:translate-x-2 transition duration-300 text-left"
            >
              <a href="">{item}</a>
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}