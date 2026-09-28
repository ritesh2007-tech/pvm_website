"use client";

import React, { useState, useRef, useEffect } from "react";
import { Space_Grotesk, Comfortaa } from "next/font/google";
import { annualPlannerData } from "@/data/annualplannerdata";
import { Montserrat } from "next/font/google";
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const comfortaa    = Comfortaa({ subsets: ["latin"], weight: ["600", "700"] });
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
// ── Month metadata (2026) ──────────────────────────────────────────────────────
const MONTH_META: Record<string, { days: number; startDay: number }> = {
  January:   { days: 31, startDay: 3 },
  February:  { days: 28, startDay: 6 },
  March:     { days: 31, startDay: 0 },
  April:     { days: 30, startDay: 3 },
  May:       { days: 31, startDay: 5 },
  June:      { days: 30, startDay: 1 },
  July:      { days: 31, startDay: 3 },
  August:    { days: 31, startDay: 6 },
  September: { days: 30, startDay: 2 },
  October:   { days: 31, startDay: 4 },
  November:  { days: 30, startDay: 0 },
  December:  { days: 31, startDay: 2 },
};

const WEEKDAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

// ── Black & white, light-background palette ─────────────────────────────────
const BG_DEEP       = "#FFFFFF";
const BG_DEEP_2      = "#F7F7F8";
const PANEL          = "rgba(255, 255, 255, 0.03)";
const PANEL_SOFT     = "rgba(0,0,0,0.015)";
const PANEL_BORDER   = "rgba(0,0,0,0.12)";
const PANEL_BORDER_2 = "rgba(0,0,0,0.08)";
const ACCENT         = "#111111";      // near-black accent
const ACCENT_SOFT    = "rgba(0,0,0,0.06)";
const ACCENT_GLOW    = "0 6px 20px rgba(0,0,0,0.14)";
const TEXT_PRIMARY   = "#111111";
const TEXT_MUTED     = "#6B7280";
const TEXT_FAINT     = "#B4B8C0";
const SELECTED_BG    = "#111111";
const SELECTED_TEXT  = "#FFFFFF";

// ── Orange accents for "no event" / empty cells ──────────────────────────────
const ORANGE          = "#F97316";
const ORANGE_BORDER   = "rgba(249,115,22,0.35)";
const ORANGE_BORDER_HOVER = "rgba(249,115,22,0.6)";

const EVENT_DOTS = ["#111111", "#6B7280", "#B4B8C0"]; // black, mid gray, light gray

export default function AnnualPlanner() {
  // ── State ──────────────────────────────────────────────────────────────────
  const months = Object.keys(annualPlannerData);
  const [selectedMonth, setSelectedMonth] = useState("June");
  const [selectedDay,   setSelectedDay]   = useState<number | null>(null);
  const [dropdownOpen,  setDropdownOpen]  = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // ── Close dropdown on outside click ───────────────────────────────────────
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node))
        setDropdownOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ── Derived data ───────────────────────────────────────────────────────────
  const planner = annualPlannerData[selectedMonth as keyof typeof annualPlannerData];

  const eventMap: Record<number, string[]> = {};
  planner.forEach(({ date, events }) => {
    const day = parseInt(date);
    if (!isNaN(day) && !eventMap[day]) eventMap[day] = events;
  });

  const { days: totalDays, startDay } = MONTH_META[selectedMonth];

  const cells: (number | null)[] = [
    ...Array(startDay).fill(null),
    ...Array.from({ length: totalDays }, (_, i) => i + 1),
  ];
  while (cells.length % 7 !== 0) cells.push(null);

  const allEntries     = Object.entries(eventMap).sort((a, b) => +a[0] - +b[0]);
  const selectedEvents = selectedDay ? (eventMap[selectedDay] ?? []) : [];

  // ── Month navigation ───────────────────────────────────────────────────────
  const goToMonth = (delta: number) => {
    const idx = months.indexOf(selectedMonth);
    const next = months[(idx + delta + months.length) % months.length];
    setSelectedMonth(next);
    setSelectedDay(null);
  };

  return (
    <section
      className="w-full pt-24 pb-16 px-4 sm:px-8 relative overflow-hidden"
      style={{
        fontFamily: spaceGrotesk.style.fontFamily,
        background: `white`,
      }}
    >
      

      <div className="max-w-7xl mx-auto relative">

        {/* ── Section heading ──────────────────────────────────────────────── */}
        <div className="mb-10">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
            style={{ fontFamily: spaceGrotesk.style.fontFamily, color: TEXT_PRIMARY }}
          >
            ANNUAL PLANNER 2026
          </h2>
          <p className="mt-4 text-sm max-w-md" style={{ color: TEXT_MUTED }}>
            Events, examinations, and celebrations across the year at PVM.
          </p>
        </div>

        {/* ── Month navigation ──────────────────────────────────────────────── */}
        <div className="mb-8 flex items-center gap-3">
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen((p) => !p)}
              className="flex items-center gap-3 px-5 py-2.5 rounded-full text-sm font-semibold border transition-colors"
              style={{
                background: PANEL,
                borderColor: PANEL_BORDER,
                color: TEXT_PRIMARY,
                backdropFilter: "blur(12px)",
              }}
            >
              <span style={{ fontFamily: comfortaa.style.fontFamily }}>{selectedMonth} 2026</span>
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                fill="none" stroke={TEXT_MUTED} strokeWidth={2.5} viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {dropdownOpen && (
              <ul
                className="absolute z-20 mt-2 w-44 rounded-2xl overflow-hidden border shadow-xl"
                style={{ background: "#ffffff", borderColor: PANEL_BORDER, backdropFilter: "blur(16px)" }}
              >
                {months.map((month) => (
                  <li key={month}>
                    <button
                      onClick={() => {
                        setSelectedMonth(month);
                        setSelectedDay(null);
                        setDropdownOpen(false);
                      }}
                      className="w-full text-left px-5 py-2.5 text-sm transition-colors"
                      style={{
                        fontFamily: spaceGrotesk.style.fontFamily,
                        color: selectedMonth === month ? ACCENT : TEXT_MUTED,
                        fontWeight: selectedMonth === month ? 600 : 400,
                        background: selectedMonth === month ? ACCENT_SOFT : "transparent",
                      }}
                    >
                      {month}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* prev / next arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => goToMonth(-1)}
              aria-label="Previous month"
              className="w-9 h-9 rounded-full flex items-center justify-center border transition-colors hover:opacity-80"
              style={{ background: PANEL, borderColor: PANEL_BORDER, color: TEXT_PRIMARY }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => goToMonth(1)}
              aria-label="Next month"
              className="w-9 h-9 rounded-full flex items-center justify-center border transition-colors hover:opacity-80"
              style={{ background: PANEL, borderColor: PANEL_BORDER, color: TEXT_PRIMARY }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* ── Main layout: calendar + sidebar ───────────────────────────────── */}
        <div className="flex flex-col lg:flex-row gap-6">

          {/* ── Calendar ──────────────────────────────────────────────────── */}
          <div
            className="flex-1 min-w-0 rounded-3xl overflow-hidden border p-3 sm:p-6"
            style={{ background: PANEL_SOFT, borderColor: PANEL_BORDER_2, backdropFilter: "blur(20px)" }}
          >
            {/* Calendar header bar */}
            <div className="flex items-center justify-between mb-5 px-1">
              <h3
                className="text-xl sm:text-2xl font-bold"
                style={{ fontFamily: comfortaa.style.fontFamily, color: TEXT_PRIMARY }}
              >
                {selectedMonth} <span style={{ color: TEXT_MUTED, fontWeight: 500 }}>2026</span>
              </h3>

              <div
                className="flex flex-col items-center justify-center rounded-full w-14 h-14 sm:w-16 sm:h-16 border flex-shrink-0"
                style={{ background: PANEL, borderColor: PANEL_BORDER, boxShadow: allEntries.length ? ACCENT_GLOW : undefined }}
              >
                <span className="text-sm font-bold" style={{ color: ACCENT, fontFamily: spaceGrotesk.style.fontFamily }}>
                  {allEntries.length}
                </span>
                <span className="text-[8px] uppercase tracking-wide" style={{ color: TEXT_MUTED }}>
                  {allEntries.length === 1 ? "day" : "days"}
                </span>
              </div>
            </div>

            {/* Weekday labels */}
            <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-2">
              {WEEKDAYS.map((d) => (
                <div
                  key={d}
                  className="py-2 text-center text-[8px] sm:text-[10px] font-semibold rounded-full truncate"
                  style={{ color: TEXT_FAINT, fontFamily: spaceGrotesk.style.fontFamily, letterSpacing: "0.06em" }}
                >
                  {d}
                </div>
              ))}
            </div>

            {/* Date cells */}
            <div className="grid grid-cols-7 gap-1 sm:gap-2">
              {cells.map((day, idx) => {
                const events     = day ? (eventMap[day] ?? []) : [];
                const hasEvent   = events.length > 0;
                // day !== null guard: without it, blank padding cells (day === null)
                // would match the initial selectedDay === null state and render
                // as "selected" (solid black) on load.
                const isSelected = day !== null && selectedDay === day;
                // Only real days with no event/holiday get the orange border.
                // Blank padding cells (day === null) stay completely plain — no
                // background, no border — for a simple, uncluttered calendar grid.
                const isPlainDay = !!day && !hasEvent;

                return (
                  <div
                    key={idx}
                    onClick={() => day && hasEvent && setSelectedDay(isSelected ? null : day)}
                    className="relative rounded-xl sm:rounded-2xl min-h-[52px] sm:min-h-[86px] p-1 sm:p-2 transition-all duration-150 overflow-hidden flex flex-col"
                    style={{
                      background: isSelected ? SELECTED_BG : day ? PANEL : "transparent",
                      border: !day
                        ? "none"
                        : isSelected
                          ? `1px solid ${SELECTED_BG}`
                          : isPlainDay
                            ? `1px dashed ${ORANGE_BORDER}`
                            : `1px solid ${PANEL_BORDER_2}`,
                      cursor: day && hasEvent ? "pointer" : "default",
                      boxShadow: isSelected ? ACCENT_GLOW : undefined,
                    }}
                  >
                    {day && (
                      <>
                        {/* Day number */}
                        <span
                          className="block text-[11px] sm:text-sm font-semibold leading-none flex-shrink-0"
                          style={{
                            fontFamily: spaceGrotesk.style.fontFamily,
                            color: isSelected ? SELECTED_TEXT : hasEvent ? TEXT_PRIMARY : TEXT_FAINT,
                          }}
                        >
                          {day}
                        </span>

                        {/* event names (replaces dots) */}
                        {hasEvent && (
                          <div className="mt-1 sm:mt-1.5 flex-1 min-h-0 flex flex-col gap-0.5 overflow-hidden">
                            {events.slice(0, 2).map((ev, i) => (
                              <span
                                key={i}
                                className="text-[6.5px] sm:text-[9px] leading-[1.15] font-medium break-words"
                                style={{
                                  fontFamily: spaceGrotesk.style.fontFamily,
                                  color: isSelected ? "rgba(255,255,255,0.92)" : TEXT_MUTED,
                                  display: "-webkit-box",
                                  WebkitLineClamp: 2,
                                  WebkitBoxOrient: "vertical",
                                  overflow: "hidden",
                                }}
                              >
                                {ev}
                              </span>
                            ))}
                            {events.length > 2 && (
                              <span
                                className="text-[6px] sm:text-[8px] font-semibold flex-shrink-0"
                                style={{ color: isSelected ? "rgba(255,255,255,0.65)" : ORANGE }}
                              >
                                +{events.length - 2} more
                              </span>
                            )}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Sidebar / floating detail card ───────────────────────────────── */}
          <div className="w-full lg:w-80 flex flex-col gap-4">
            <div
              className="rounded-3xl p-6 border relative overflow-hidden"
              style={{
                background: "#FFFFFF",
                borderColor: selectedDay ? ACCENT : PANEL_BORDER_2,
                backdropFilter: "blur(20px)",
                boxShadow: selectedDay ? ACCENT_GLOW : undefined,
              }}
            >
              <p
                className="text-[10px] font-semibold mb-4 uppercase tracking-wider"
                style={{ color: selectedDay ? ACCENT : TEXT_FAINT, fontFamily: spaceGrotesk.style.fontFamily }}
              >
                {selectedDay ? `${selectedDay} ${selectedMonth} 2026` : "Select a date"}
              </p>

              {!selectedDay && (
                <p className="text-sm" style={{ color: TEXT_MUTED }}>
                  Tap a highlighted date to see its events.
                </p>
              )}
              {selectedDay && selectedEvents.length === 0 && (
                <p className="text-sm italic" style={{ color: TEXT_MUTED }}>No events on this day.</p>
              )}

              <ul className="space-y-4">
                {selectedEvents.map((ev, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: EVENT_DOTS[i % EVENT_DOTS.length], boxShadow: `0 0 8px ${EVENT_DOTS[i % EVENT_DOTS.length]}` }}
                    />
                    <span
                      className="text-sm leading-snug break-words"
                      style={{ fontFamily: spaceGrotesk.style.fontFamily, color: TEXT_PRIMARY }}
                    >
                      {ev}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* legend */}
            <div
              className="rounded-2xl p-5 border text-xs flex flex-col gap-2"
              style={{ background: PANEL_SOFT, borderColor: PANEL_BORDER_2, color: TEXT_MUTED }}
            >
              <span className="font-semibold mb-1" style={{ color: TEXT_PRIMARY }}>This month</span>
              <div className="flex items-center justify-between">
                <span>Event days</span>
                <span style={{ color: ACCENT, fontWeight: 600 }}>{allEntries.length}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Total events</span>
                <span style={{ color: TEXT_PRIMARY, fontWeight: 600 }}>
                  {allEntries.reduce((sum, [, evs]) => sum + evs.length, 0)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}