import React from "react";

const techStack = [
  { name: "HTML5", level: "PRO", icon: "⚡" },
  { name: "CSS3", level: "PRO", icon: "🎨" },
  { name: "JavaScript", level: "MID", icon: "🟧" },
  { name: "React", level: "MID", icon: "⚛️" },
  { name: "Tailwind", level: "MID", icon: "💨" },
  { name: "Git/GitHub", level: "MID", icon: "🐙" },
  { name: "Figma", level: "LEARN", icon: "🎭" },
];

const About=()=>{
  return (
    <section className="min-h-screen bg-[#0a0a0a] text-white px-6 md:px-16 py-16 relative overflow-hidden">

      {/* subtle gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(163,230,53,0.08),transparent_40%)]" />

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* LEFT SIDE */}
        <div>
          {/* label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-lime-400 shadow-[0_0_10px_#a3e635]" />
            <p className="text-lime-400 text-sm tracking-widest">
              // 01 — ABOUT
            </p>
          </div>

          {/* heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-8">
            Turning ideas into <br />
            pixel-perfect <br />
            reality.
          </h1>

          {/* description */}
          <p className="text-gray-400 max-w-xl mb-6 leading-relaxed">
            Hey! I'm <span className="text-white font-semibold">Shivansh</span>, a junior frontend developer with a passion for crafting clean, performant, and beautiful web interfaces.
          </p>

          <p className="text-gray-500 max-w-xl mb-6 leading-relaxed">
            I'm comfortable with the fundamentals —{" "}
            <span className="text-white">HTML, CSS, JavaScript</span> — and I'm actively building projects with{" "}
            <span className="text-white">React</span>.
          </p>

          <p className="text-gray-500 max-w-xl mb-10 leading-relaxed">
            When I'm not coding, I'm exploring design inspiration or drinking way too much chai ☕
          </p>

          {/* button */}
          <button className="bg-lime-400 text-black px-6 py-3 text-sm tracking-wide font-semibold hover:bg-lime-300 transition">
            DOWNLOAD CV →
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <p className="text-lime-400 text-sm tracking-widest mb-6">
            // TECH STACK
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {techStack.map((tech, i) => (
              <div
                key={i}
                className="flex items-center justify-between border border-gray-800 bg-[#0f0f0f] px-4 py-4 hover:border-lime-400/40 transition"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{tech.icon}</span>
                  <span className="text-sm">{tech.name}</span>
                </div>

                <span
                  className={`text-xs tracking-widest ${
                    tech.level === "PRO"
                      ? "text-lime-400"
                      : tech.level === "MID"
                      ? "text-yellow-400"
                      : "text-gray-500"
                  }`}
                >
                  {tech.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;