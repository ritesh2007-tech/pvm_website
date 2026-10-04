"use client";

import { Montserrat } from "next/font/google";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

function MenuIcon({ open }: { open: boolean }) {
  return (
    <div className="relative flex h-4 w-5 shrink-0 flex-col items-center justify-between">
      <span
        className={`h-[2px] w-full rounded-full bg-white transition-all duration-300 ${
          open ? "translate-y-[7px] rotate-45" : ""
        }`}
      />

      <span
        className={`h-[2px] w-full rounded-full bg-white transition-all duration-300 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />

      <span
        className={`h-[2px] w-full rounded-full bg-white transition-all duration-300 ${
          open ? "-translate-y-[7px] -rotate-45" : ""
        }`}
      />
    </div>
  );
}

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About PVM", href: "/AboutPVM" },
  { label: "Curriculum", href: "/Curriculam" },
  {
    label: "Community Outreach Programmes",
    href: "/COP",
  },
  {
    label: "Vocational Education",
    href: "/VocationalEducation",
  },
  {
    label: "Experiential  Learning",
    href: "/ExperientialLearning",
  },
  {
    label: "Extra Curricular & Sports Coaching",
    href: "/ECS",
  },
  {
    label: "Alumni Connect",
    href: "/AluminiConnect",
  },
  {
    label: "Contact Us",
    href: "/Contact",
  },
];

const STEP_MS = 45;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`${montserrat.className} fixed right-3 top-3 z-[9999] flex max-w-[calc(100vw-24px)] flex-col items-end sm:right-5 sm:top-5 md:right-6 md:top-6`}
    >
      {/* MENU BUTTON */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        className="
          relative
          z-[10000]
          flex
          h-11
          min-w-[82px]
          shrink-0
          touch-manipulation
          select-none
          items-center
          justify-center
          gap-2
          rounded-full
          bg-black
          px-4
          text-sm
          font-medium
          text-white
          shadow-lg
          transition-transform
          duration-300
          hover:scale-105
          active:scale-95
          sm:h-12
          sm:min-w-[88px]
          sm:px-5
          sm:text-base
        "
      >
        <MenuIcon open={open} />
        <span>Menu</span>
      </button>

      {/* NAVIGATION */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            className="
              mt-3
              flex
              w-full
              max-w-[calc(100vw-24px)]
              flex-col
              items-end
              gap-2
              sm:max-w-[520px]
              md:max-w-[600px]
            "
          >
            {NAV_LINKS.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -12,
                    scale: 0.94,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.36,
                      delay: index * (STEP_MS / 1000),
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                  exit: {
                    opacity: 0,
                    y: -8,
                    scale: 0.96,
                    transition: {
                      duration: 0.18,
                    },
                  },
                }}
                className="
                  flex
                  min-h-11
                  w-fit
                  max-w-full
                  touch-manipulation
                  select-none
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  px-4
                  py-2
                  text-right
                  text-xs
                  font-medium
                  leading-tight
                  text-black
                  shadow-md
                  transition-transform
                  duration-200
                  hover:scale-[1.02]
                  hover:text-black/90
                  active:scale-95
                  sm:px-5
                  sm:text-sm
                  md:px-6
                  md:text-base
                "
              >
                <span className="mr-2 shrink-0">↪</span>
                <span className="break-words">{link.label}</span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}