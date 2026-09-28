import React from "react";
import { Sora, Comfortaa } from "next/font/google";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const goals = [
  { label: "Experiential learning" },
  { label: "Creativity" },
  { label: "Problem-solving" },
  { label: "Entrepreneurship" },
  { label: "Employability" },
  { label: "Career awareness" },
];

export default function ContentVocational({
  aboutImage = "/images/vocational.png",
  skillsImage = "/images/ve1.png",
}) {
  return (
    <section className="bg-[#F2EDE1] py-20 px-6 md:px-12">
      <div className="mx-auto max-w-4xl">
        {/* CBSE framing */}
        <p
          className={`text-[17px] leading-[1.75] text-[#241F1A]/90 sm:text-[18px] ${comfortaa.className}`}
        
        >
          As per CBSE guidelines, vocational education for Classes VI to IX
          gives students hands-on exposure to real skills, trades and career
          pathways. It connects classroom learning to real life through
          experiential learning, creativity, problem-solving,
          entrepreneurship and employability &mdash; helping students make
          informed career choices.
        </p>
      </div>

      {/* About Kaushal Bodh — text + image row */}
      <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <h2
            className="text-[28px] text-[#241F1A] sm:text-[40px]"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
          >
            Kaushal Bodh
          </h2>
          <p
            className={`mt-4 max-w-md text-[16px] leading-relaxed text-[#241F1A]/80 ${comfortaa.className}`}
            
          >
            Kaushal Bodh introduces middle school students to essential
            vocational skills, fostering self-reliance, creativity and
            respect for skilled work.
          </p>
        </div>
        <img
          src={aboutImage}
          alt="Students learning a vocational trade at school"
          className="aspect-[4/3] w-full rounded-sm object-cover"
        />
      </div>

      {/* Image + goals row (reversed order) */}
      <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
        <img
          src={skillsImage}
          alt="A student practicing a hands-on skill"
          className="aspect-[4/3] w-full rounded-sm object-cover md:order-1"
        />
        <div className="md:order-2">
          <h3
            className="text-[42px] text-[#241F1A]"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
          >
            What it builds
          </h3>
          <div className="mt-5 flex flex-wrap gap-3">
            {goals.map((goal) => (
              <span
                key={goal.label}
                className={`rounded-full border border-[#241F1A]/15 bg-white/60 px-4 py-2 text-[14px] text-[#241F1A]/85 ${comfortaa.className}`}
                
              >
                {goal.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}