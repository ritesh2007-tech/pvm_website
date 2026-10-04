import { Pinyon_Script } from "next/font/google";

const pinyonScript = Pinyon_Script({
  subsets: ["latin"],
  weight: "400",
});

const HerosectionExperential = () => {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-white px-6">
      <div className="flex flex-col items-center text-center">
        <h1
          className={`${pinyonScript.className} text-6xl text-black md:text-7xl lg:text-8xl`}
        >
          Experiential Learning
        </h1>

        <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-500 md:text-base">
          Minds and Hands come together to make the learning more effective
          and long lasting
        </p>
      </div>
    </section>
  );
};

export default HerosectionExperential;