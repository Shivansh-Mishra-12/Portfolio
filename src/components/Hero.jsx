
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
 useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".tag", { y: 20, opacity: 0, duration: 0.5 })
      .from(".title-line", { y: 40, opacity: 0, stagger: 0.15 }, "-=0.3")
      .from(".desc", { y: 20, opacity: 0 }, "-=0.2")
      .from(".buttons", { y: 20, opacity: 0 }, "-=0.2")
      .from(".card", { x: 80, opacity: 0, duration: 0.6 }, "-=0.3")
      .from(".stats", { x: 40, opacity: 0, stagger: 0.1 }, "-=0.4");
  }, []);

  return (
    <section className="min-h-screen lg:-mt-12 bg-[var(--color-bg)] text-[var(--color-text)] flex items-center px-6 md:px-16">
      <div className="grid md:grid-cols-2 gap-10 w-full">

        {/* LEFT */}
        <div>
          <div className="tag inline-block border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-primary)] px-4 py-1 text-xs tracking-widest mb-6">
            ✦ OPEN TO WORK
          </div>

          <h1 className="font-extrabold leading-none">
            <div className="title-line text-5xl md:text-7xl">Frontend</div>

            <div className="title-line text-5xl md:text-7xl text-[var(--color-primary)] relative inline-block">
              Developer
              <span className="absolute left-0 bottom-1 w-full h-[3px] bg-[var(--color-secondary)] scale-x-0 origin-left animate-[lineReveal_0.8s_0.6s_forwards]"></span>
            </div>

            <div className="title-line text-5xl md:text-7xl">& Creator.</div>
          </h1>

          <p className="desc text-[var(--color-muted)] max-w-md mt-6">
            I build fast, accessible, and beautiful web experiences. Currently levelling up my skills in React and modern CSS — one commit at a time.
          </p>

          <div className="buttons flex gap-4 mt-8 flex-wrap *:cursor-pointer">
            <button className="bg-[var(--color-primary)] text-black px-6 py-3 text-xs tracking-widest hover:-translate-y-1 transition">
              VIEW PROJECTS →
            </button>
            <button className="border border-[var(--color-border)] px-6 py-3 text-xs tracking-widest hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition">
              LET'S TALK
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative hidden md:flex justify-center items-center">
          <div className="card w-[320px] h-[380px] bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center relative">
            <span className="text-6xl opacity-40">👨‍💻</span>

            <div className="absolute bottom-4 left-4 border border-[var(--color-border)] px-4 py-2 bg-[var(--color-bg)] text-sm">
              <strong className="text-[var(--color-primary)] block">Shivansh</strong>
              Junior Frontend Dev
            </div>
          </div>

          <div className="absolute right-0 top-10 flex flex-col gap-3">
            {["10+ Projects", "React Enthusiast", "∞ Coffee"].map((item, i) => (
              <div key={i} className="stats border border-[var(--color-border)] px-4 py-2 text-xs bg-[var(--color-surface)]">
                <span className="text-[var(--color-primary)]">
                  {item.split(" ")[0]}
                </span>{" "}
                {item.split(" ").slice(1).join(" ")}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}