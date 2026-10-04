import Image from "next/image";
import { Comfortaa, Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const CreaLabSection = () => {
  return (
    <section className="w-full bg-white px-6 py-20 md:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl space-y-16 md:space-y-24">

        {/* Section 1 */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Left Image */}
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/images/cl1.png"
              alt="CREA Lab students"
              width={600}
              height={600}
              className="h-auto w-full max-w-md rounded-3xl object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="rounded-3xl bg-[#E8F1E5] p-8 md:p-12 lg:p-14">
            <h2
              className={`${spaceGrotesk.className} mb-6 text-3xl font-semibold text-black md:text-4xl`}
            >
              CREA Lab
            </h2>

            <p
              className={`${comfortaa.className} mb-5 text-base leading-8 text-gray-700 md:text-lg`}
            >
              The CREA lab facilitates STEM learning for Class I to IV in a
              playway method and for V to VIII on strengthening the conceptual
              understanding.
            </p>

            <p
              className={`${comfortaa.className} text-base leading-8 text-gray-700 md:text-lg`}
            >
              Students of classes I to VIII visit the CREA lab for two periods
              in a week and involve themselves, weaving the learning into
              experiences.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Left Content */}
          <div className="order-2 rounded-3xl bg-[#F4E9D8] p-8 md:p-12 lg:order-1 lg:p-14">
            <h2
              className={`${spaceGrotesk.className} mb-6 text-3xl font-semibold text-black md:text-4xl`}
            >
              What is a CREA Lab?
            </h2>

            <p
              className={`${comfortaa.className} text-base leading-8 text-gray-700 md:text-lg`}
            >
              A dedicated, hands-on learning environment in schools that
              integrates Science, Technology, Engineering, and Mathematics.
            </p>
          </div>

          {/* Right Image */}
          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <Image
              src="/images/cl2.png"
              alt="Hands-on STEM learning in the CREA Lab"
              width={600}
              height={600}
              className="h-auto w-full max-w-md rounded-3xl object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default CreaLabSection;