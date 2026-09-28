"use client";

import { useMemo } from "react";
import Image from "next/image";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
import { motion, type Variants } from "framer-motion";
import { humane } from "@/lib/font";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
    variable: "--font-montserrat",
});

const fog = localFont({
    src: "./fonts/FogtwoNo5.ttf",
});

// ---- Animation timing config -------------------------------------------
const TRUST_HEADING_DELAY = 0;
const TRUST_DESC_DELAY = 0.25;
const NAME_DELAY = 0.5;

const LETTERS_START = 1.0;
const LETTER_STAGGER = 0.06;
const LETTER_DURATION = 0.95;

const WORD = "CORRESPONDENT";
const lastLetterFinish =
    LETTERS_START + (WORD.length - 1) * LETTER_STAGGER + LETTER_DURATION;

const IMAGE_DELAY = lastLetterFinish + 0.15;
const IMAGE_DURATION = 0.4;

const VIEWPORT = { once: true, amount: 0.3 } as const;

// ---- Variants ------------------------------------------------------------
const dissolveVariant = (delay: number): Variants => ({
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: {
        opacity: 1,
        filter: "blur(0px)",
        transition: { duration: 0.9, delay, ease: "easeOut" },
    },
});

// x is in % of each letter's own width, so the slide-in scales with the text
const letterVariants: Variants = {
    hidden: { opacity: 0, x: "-45%" },
    visible: (i: number) => ({
        opacity: 1,
        x: "0%",
        transition: {
            duration: LETTER_DURATION,
            delay: LETTERS_START + i * LETTER_STAGGER,
            ease: "easeOut",
        },
    }),
};

const imageVariant: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: IMAGE_DURATION, delay: IMAGE_DELAY, ease: "easeOut" },
    },
};

export default function CorrespondentSection() {
    const letters = useMemo(() => WORD.split(""), []);

    return (
        <section className={`${montserrat.className} w-full bg-white`}>
            {/*
              STAGE: every child is positioned in % / cqw of THIS box, so the layout
              scales uniformly on any screen, zoom level or window size.
              Mobile = portrait 4:5, md and up = landscape 2:1.
            */}
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[2200px] overflow-hidden [container-type:inline-size] md:aspect-[2/1]">
                {/* Trust heading */}
                <div className="absolute left-[6%] top-[4%] md:top-[5.8%]">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={VIEWPORT}
                        variants={dissolveVariant(TRUST_HEADING_DELAY)}
                        className={`${fog.className} text-[8.5cqw] leading-none text-black md:text-[3.1cqw]`}
                    >
                        The School Trust
                    </motion.h2>

                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={VIEWPORT}
                        variants={dissolveVariant(TRUST_DESC_DELAY)}
                        className="mt-2 max-w-[80cqw] text-xs tracking-wide text-neutral-500 md:max-w-none md:text-sm lg:text-base"
                    >
                        PVM runs under K C Prasannamal Memorial Educational Trust
                    </motion.p>
                </div>

                {/* Correspondent name */}
                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={VIEWPORT}
                    variants={dissolveVariant(NAME_DELAY)}
                    className={`${fog.className} absolute left-[6%] top-[40%] lg:top-[22%] text-[7cqw] font-semibold leading-none text-black md:left-[7.3%] md:top-[23%] md:text-[2.5cqw]`}
                >
                    Mr.Surendra Kumar
                </motion.p>

                {/* Big display word, sits behind the photo */}
                <h1
                    className={`${humane.className} pointer-events-none absolute left-1/2 top-[61%] z-0 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-center text-[35cqw] uppercase leading-[0.85] text-black md:top-[63%]`}
                    aria-label="CORRESPONDENT"
                >
                    {letters.map((letter, i) => (
                        <motion.span
                            key={`${letter}-${i}`}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={VIEWPORT}
                            variants={letterVariants}
                            className="inline-block"
                            aria-hidden="true"
                        >
                            {letter}
                        </motion.span>
                    ))}
                </h1>

                {/* Correspondent photo, overlapping the bottom-right of the word */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={VIEWPORT}
                    variants={imageVariant}
                    className="absolute -bottom-[2%] right-[2%] z-10 aspect-[3/4] w-[56%] drop-shadow-[0_0_35px_rgba(255,255,255,0.9)] md:-bottom-[5%] md:right-[17.9%] md:w-[27.1%]"
                >
                    <Image
                        src="/images/correspondent.png"
                        alt="Mr Surendra Kumar, Correspondent"
                        fill
                        priority
                        sizes="(min-width: 768px) 28vw, 56vw"
                        className="object-contain object-bottom rounded-full"
                    />
                </motion.div>
            </div>
        </section>
    );
}