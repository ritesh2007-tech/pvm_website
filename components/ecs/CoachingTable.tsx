"use client";

import { Sora, Comfortaa } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-label",
});

const sports = [
  {
    sport: "Volleyball",
    category: "Boys & Girls",
    classes: "Std IV – XII",
    days: "Mon & Wed",
  },
  {
    sport: "Basketball",
    category: "Boys & Girls",
    classes: "Std IV – XII",
    days: "Mon & Wed",
  },
  {
    sport: "Athletics",
    category: "Boys & Girls",
    classes: "Std IV – XII",
    days: "Mon & Wed",
  },
  {
    sport: "Football",
    category: "Boys & Girls",
    classes: "Std IV – XII",
    days: "Mon & Wed",
  },
];

export default function SportsCoachingTable() {
  return (
    <section
      className={`${sora.variable} ${comfortaa.variable} w-full bg-white px-5 py-16 sm:px-8 md:px-12 md:py-20`}
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-10">
          <h2 className="font-[family-name:var(--font-body)] text-3xl font-normal text-[#222] sm:text-4xl">
            Sports Coaching Classes
          </h2>
        </div>

        {/* Desktop / Tablet Table */}
        <div className="hidden overflow-x-auto md:block">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-4 py-4 text-left font-[family-name:var(--font-label)] text-xs font-medium text-gray-500">
                  Sport
                </th>
                <th className="px-4 py-4 text-left font-[family-name:var(--font-label)] text-xs font-medium text-gray-500">
                  Category
                </th>
                <th className="px-4 py-4 text-left font-[family-name:var(--font-label)] text-xs font-medium text-gray-500">
                  Classes
                </th>
                <th className="px-4 py-4 text-left font-[family-name:var(--font-label)] text-xs font-medium text-gray-500">
                  Days
                </th>
              </tr>
            </thead>

            <tbody>
              {sports.map((item) => (
                <tr
                  key={item.sport}
                  className="border-b border-gray-100 last:border-0"
                >
                  <td className="px-4 py-5 font-[family-name:var(--font-body)] text-sm font-normal text-gray-800">
                    {item.sport}
                  </td>

                  <td className="px-4 py-5 font-[family-name:var(--font-body)] text-sm font-normal text-gray-500">
                    {item.category}
                  </td>

                  <td className="px-4 py-5 font-[family-name:var(--font-body)] text-sm font-normal text-gray-500">
                    {item.classes}
                  </td>

                  <td className="px-4 py-5 font-[family-name:var(--font-body)] text-sm font-normal text-gray-500">
                    {item.days}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile */}
        <div className="divide-y divide-gray-100 border-y border-gray-100 md:hidden">
          {sports.map((item) => (
            <div key={item.sport} className="py-6">
              <h3 className="font-[family-name:var(--font-body)] text-base font-normal text-gray-800">
                {item.sport}
              </h3>

              <div className="mt-3 grid grid-cols-2 gap-y-3">
                <div>
                  <p className="font-[family-name:var(--font-label)] text-[10px] text-gray-400">
                    Category
                  </p>
                  <p className="mt-1 font-[family-name:var(--font-body)] text-sm text-gray-500">
                    {item.category}
                  </p>
                </div>

                <div>
                  <p className="font-[family-name:var(--font-label)] text-[10px] text-gray-400">
                    Classes
                  </p>
                  <p className="mt-1 font-[family-name:var(--font-body)] text-sm text-gray-500">
                    {item.classes}
                  </p>
                </div>

                <div className="col-span-2">
                  <p className="font-[family-name:var(--font-label)] text-[10px] text-gray-400">
                    Days
                  </p>
                  <p className="mt-1 font-[family-name:var(--font-body)] text-sm text-gray-500">
                    {item.days}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}