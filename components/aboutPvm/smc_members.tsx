"use client";
import { Space_Grotesk, Poppins } from "next/font/google";

interface Member {
  id: number;
  name: string;
  role: string;
}

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const members: Member[] = [
  { id: 1,  name: "Mr. Surendra Kumar",  role: "Trustee" },
  { id: 2,  name: "Mrs. Vimala Kumari",  role: "Trustee" },
  { id: 3,  name: "Mr. P. M. Chordia",    role: "Trustee" },
  { id: 4,  name: "Mr. Badan Raj Bhandari",    role: "Trustee" },
  { id: 5,  name: "Mr. Jitendra Kumar",  role: "Trustee" },

];

function MemberCard({ member }: { member: Member }) {
  return (
    <div className="flex items-center group cursor-pointer select-none">
      <div
        className="relative flex-1 min-w-0 rounded-2xl bg-white
          transition-all duration-300
          px-6 py-4"
      >
        <p
          className={`${spaceGrotesk.className} text-[1.4rem] leading-none font-thin  tracking-[-5%] truncate text-black text-center`}
        >
          {member.name}
        </p>
        <p
          className={`${spaceGrotesk.className} text-[12px] mt-1 font-medium tracking-[-0.01em] uppercase text-center truncate text-black/60`}
        >
          {member.role}
        </p>
      </div>
    </div>
  );
}

export default function SMCMembers() {
  return (
    <section className="w-full bg-white">
      <div className="relative z-10 py-16 px-6 sm:px-10 lg:px-16 max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-14 text-center">
          {/* <h2
            className={`${spaceGrotesk.className} text-6xl sm:text-7xl md:text-8xl text-black leading-none`}
          >
            School Management Commitee Members
          </h2> */}
          <p
            className={`${poppins.className} mt-4 text-black/80 text-sm sm:text-3xl underline uppercase font-medium`}
          >
            Trustees
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((m) => (
            <MemberCard key={m.id} member={m} />
          ))}
        </div>

        
      </div>
    </section>
  );
}