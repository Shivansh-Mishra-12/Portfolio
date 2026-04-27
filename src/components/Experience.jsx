import React from "react";

const Experience = () => {
  const data = [
    {
      year: "2024 — Present",
      role: "Frontend Developer Intern",
      company: "TechStartup Pvt. Ltd.",
      desc: "Built and maintained UI components using React and Tailwind CSS. Collaborated with the design team to implement responsive layouts and improve page load performance by 30%.",
      active: false,
    },
    {
      year: "2023",
      role: "Web Dev Volunteer",
      company: "NGO Connect",
      desc: "Redesigned and rebuilt the organization's website using HTML, CSS, and JavaScript. Improved mobile responsiveness and added a donation form integration.",
       active: false,
    },
    {
      year: "2022 — 2025",
      role: "B.Tech in Computer Science",
      company: "Your University Name",
      desc: "Focused on web technologies, data structures, and software engineering. Built several personal projects and participated in hackathons.",
       active: false,
    },
  ];
  return (
    <section className="relative px-6 md:px-12 lg:px-20 py-28 bg-bg text-text overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,241,53,0.06),transparent_60%)] pointer-events-none" />

      {/* Header */}
      <div className="mb-20">
        <p className="text-primary text-xs tracking-[0.3em] mb-6">
          // 03 — EXPERIENCE
        </p>

        <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          Where I've been.
        </h1>
      </div>

      {/* Timeline */}
      <div className="border-t border-border">
        {data.map((item, i) => (
          <div
            key={i}
            className="grid grid-cols-[120px_1fr] md:grid-cols-[160px_1fr] py-10 border-b border-border relative"
          >
            {/* Left Year */}
            <div className="text-muted text-sm tracking-wide">
              {item.year}
            </div>

            {/* Right Content */}
            <div className="relative">
              
              {/* Dot Indicator */}
              {item.active && (
                <div className="absolute -left-6 top-2 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-primary" />
                  <div className="absolute w-8 h-8 rounded-full border border-primary opacity-40 animate-ping" />
                </div>
              )}

              <h3 className="font-sans text-lg md:text-xl font-semibold mb-2">
                {item.role}
              </h3>

              <p className="text-primary text-sm mb-4">
                {item.company}
              </p>

              <p className="text-muted text-sm leading-relaxed max-w-2xl">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;