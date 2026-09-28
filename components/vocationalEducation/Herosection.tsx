import React from "react";

export default function HeroVocational({
  heroImage = "/images/vocational.png",
}) {
  return (
    <section className="relative min-h-[86vh] w-full overflow-hidden bg-[#241F1A]">
      {/* Background photo */}
      <img
        src={heroImage}
        alt="Middle school students practicing a vocational skill"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Directional overlay — darker on the left where the text sits */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#241F1A] via-[#241F1A]/25 to-[#241F1A]/20" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full min-h-[86vh] max-w-6xl flex-col justify-center px-6 md:px-12">
        {/* <p
          className="mb-3 text-[15px] tracking-wide text-[#D9A441]"
          style={{ fontFamily: "'Comfortaa', cursive" }}
        >
          Kaushal Bodh
        </p> */}

        <h1
          className="max-w-2xl text-[42px] leading-[1.08] text-[#F2EDE1] sm:text-[56px] md:text-[100px]"
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800 }}
        >
          Vocational Education
        </h1>

        {/* <p
          className="mt-2 text-[20px] text-[#D9A441] sm:text-[24px]"
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}
        >
          Classes VI &ndash; IX
        </p> */}

        <p
          className="mt-6 max-w-md text-[16px] leading-relaxed text-[#F2EDE1]/85 sm:text-[17px]"
          style={{ fontFamily: "'Sora', sans-serif" }}
        >
          Hands-on skills, real trades, and the confidence that comes from
          making something with your own hands.
        </p>
      </div>

      {/* Tape-measure tick strip — a nod to hands-on craft, doubles as a bottom border */}
      <svg
        className="absolute bottom-0 left-0 z-10 w-full"
        height="14"
        viewBox="0 0 1000 14"
        preserveAspectRatio="none"
      >
        <rect width="1000" height="14" fill="#D9A441" />
        {Array.from({ length: 50 }).map((_, i) => (
          <rect
            key={i}
            x={i * 20}
            y={i % 5 === 0 ? 0 : 6}
            width="1.5"
            height={i % 5 === 0 ? 14 : 8}
            fill="#241F1A"
          />
        ))}
      </svg>
    </section>
  );
}