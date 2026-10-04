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

const BusinessExploration = () => {
  const photos = [
    "/images/ExpLearning/el1.jpeg",
    "/images/ExpLearning/el2.jpeg",
    "/images/ExpLearning/el3.jpeg",
    "/images/ExpLearning/el4.jpeg",
    "/images/ExpLearning/el5.jpeg",
    "/images/ExpLearning/el6.jpeg",
  ];

  return (
    <section className="w-full bg-white px-6 py-20 md:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl">

        {/* Content */}
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <h2
            className={`${spaceGrotesk.className} mb-6 text-3xl font-semibold text-black md:text-4xl lg:text-5xl`}
          >
            Business Exploration
          </h2>

          <p
            className={`${comfortaa.className} text-base leading-8 text-gray-600 md:text-lg`}
          >
            An immersive business exploration! Our Class 11 & 12 students had
            an excellent experiential learning visit to leading local
            enterprises – Boutique Shop, Umamageshwari Agencies, Harish Music
            Academy & Vel Systems – understanding real-world business
            strategies used.
          </p>
        </div>

        {/* Photos */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo, index) => (
            <div
              key={photo}
              className="group overflow-hidden rounded-3xl"
            >
              <Image
                src={photo}
                alt={`Business exploration visit ${index + 1}`}
                width={500}
                height={600}
                className="h-[320px] w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-[360px] lg:h-[400px]"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BusinessExploration;