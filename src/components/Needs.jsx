import React from "react";

/**
 * WhatINeedFromYou
 *
 * Drop into a Tailwind + React project. Matches the portfolio's
 * dark / monospace / lime-accent theme.
 *
 * Tailwind config assumptions (adjust if your tokens differ):
 * - font-mono resolves to a mono stack (JetBrains Mono / Space Mono / ui-monospace)
 * - no special colors required — everything below uses inline hex / arbitrary values
 *
 * Layout: illustrations/cards on the LEFT, text on the RIGHT.
 * Reduced to 4 requirement cards, fully responsive (stacks on mobile,
 * text moves above the cards below the md breakpoint).
 */

const REQUIREMENTS = [
  {
    icon: "🎨",
    iconBg: "rgba(190,242,100,0.12)",
    title: "Brand assets",
    subtitle: "Logos, colors, fonts, brand guidelines, or anything else that represents your brand.",
    tag: "MUST HAVE",
    tagClass: "text-[#fb923c] bg-[rgba(251,146,60,0.1)]",
    
  },
  {
    icon: "⏱️",
    iconBg: "rgba(251,146,60,0.12)",
    title: "Timeline",
    subtitle: "Your ideal launch date, important milestones, and any deadlines I should know about.",
    tag: "Must have",
    tagClass: "text-[#fb923c] bg-[rgba(251,146,60,0.1)]",
  },
  {
    
    icon: "📋",
    iconBg: "rgba(251,146,60,0.12)",
    title: "Project brief",
    subtitle: "Your goals, target audience, key requirements, and what “done” looks like.",
    tag: "HELPS A LOT",
    tagClass: "text-[#bef264] bg-[rgba(190,242,100,0.1)]",
  },
  {
    icon: "✍️",
    iconBg: "rgba(139,143,136,0.14)",
    title: "Content & copy",
    subtitle: "Logos, colors, fonts, brand guidelines, or anything else that represents your brand.",
    tag: "MUST HAVE",
    tagClass: "text-[#8b8f88] bg-[rgba(139,143,136,0.12)]",
  },
];

const Needs=()=> {
  return (
    <section className="relative overflow-hidden bg-bg px-6 py-20 sm:px-10 md:py-28 lg:px-20 h-screen w-screen" >

      <div
        className="pointer-events-none absolute left-0 top-0 h-[500px] w-[700px] opacity-60"
        style={{
          background:
            "radial-gradient(600px 400px at 10% 15%, rgba(163,230,53,0.06), transparent 70%)",
        }}
      />

      <div className="hidden md:grid relative mx-auto max-w-full grid-cols-1 items-start gap-12 font-mono md:grid-cols-2 md:gap-14 lg:gap-[70px]">
        {/* LEFT — illustrations / cards */}
        <div className="order-2 grid grid-cols-1 gap-4 sm:grid-cols-2 md:order-1">
          {REQUIREMENTS.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-4 rounded-[10px] border border-white/[0.08] bg-[#0d110d] p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(163,230,53,0.35)]"
            >
              <div
                className="flex h-[38px] w-[38px] items-center justify-center rounded-lg text-[17px]"
                style={{ background: item.iconBg }}
              >
                {item.icon}
              </div>
              <div>
                <div className="text-sm font-bold text-[#f3f4ee]">
                  {item.title}
                </div>
                <div className="mt-1 text-[11.5px] leading-relaxed text-[#8a9188]">
                  {item.subtitle}
                </div>
              </div>
              <span
                className={`self-start rounded-[4px] px-2 py-1 text-[10.5px] font-bold uppercase tracking-wider ${item.tagClass}`}
              >
                {item.tag}
              </span>
            </div>
          ))}
        </div>

        {/* RIGHT — text */}
        <div className="order-1 md:order-2">
          <div className="mb-7 flex items-center gap-2.5 text-[13px] tracking-[0.12em] text-[#a3e635]">
            <span className="h-2 w-2 rounded-full bg-[#a3e635] shadow-[0_0_10px_rgba(163,230,53,0.6)]" />
            // 02 — COLLABORATION
          </div>

          <h2 className="mb-8 text-[34px] font-extrabold leading-[1.12] tracking-tight text-[#f3f4ee] sm:text-[42px] md:text-[52px]">
            What I Need
            <br />
            From <span className="text-[#a3e635]">You</span>
          </h2>

          <p className="mb-5 max-w-[520px] text-base leading-relaxed text-[#8a9188]">
            Every good build starts with a clear picture. The more context you hand me up front, the faster I can turn your idea into something real — without unnecessary guessing or rework later.

Here’s what makes the process smooth, and what I can happily help figure out if you don’t have it ready.
          </p>

          <p className="mb-9 max-w-[520px] text-base leading-relaxed text-[#8a9188]">
            Here&rsquo;s what makes the process smooth, and what I can
            happily fill in myself if you don&rsquo;t have it ready.
          </p>

          <div className="flex flex-wrap gap-5">
            <div className="flex items-center gap-2 text-xs text-[#8a9188]">
              <span className="h-2.5 w-2.5 rounded-sm bg-[#fb923c]" />
              Must have
            </div>
            <div className="flex items-center gap-2 text-xs text-[#8a9188]">
              <span className="h-2.5 w-2.5 rounded-sm bg-[#bef264]" />
              Helps a lot
            </div>
            <div className="flex items-center gap-2 text-xs text-[#8a9188]">
              <span className="h-2.5 w-2.5 rounded-sm bg-[#8b8f88]" />
              Nice bonus
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Needs