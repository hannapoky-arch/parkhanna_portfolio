"use client";

import { useEffect, useState } from "react";

const letters: Record<string, string[]> = {
  A: ["01110", "10001", "10001", "11111", "10001", "10001", "10001"],
  B: ["11110", "10001", "10001", "11110", "10001", "10001", "11110"],
  C: ["01111", "10000", "10000", "10000", "10000", "10000", "01111"],
  E: ["11111", "10000", "10000", "11110", "10000", "10000", "11111"],
  F: ["11111", "10000", "10000", "11110", "10000", "10000", "10000"],
  G: ["01111", "10000", "10000", "10111", "10001", "10001", "01110"],
  I: ["11111", "00100", "00100", "00100", "00100", "00100", "11111"],
  J: ["00111", "00010", "00010", "00010", "10010", "10010", "01100"],
  L: ["10000", "10000", "10000", "10000", "10000", "10000", "11111"],
  M: ["10001", "11011", "10101", "10101", "10001", "10001", "10001"],
  N: ["10001", "11001", "10101", "10011", "10001", "10001", "10001"],
  O: ["01110", "10001", "10001", "10001", "10001", "10001", "01110"],
  R: ["11110", "10001", "10001", "11110", "10100", "10010", "10001"],
  S: ["01111", "10000", "10000", "01110", "00001", "00001", "11110"],
  T: ["11111", "00100", "00100", "00100", "00100", "00100", "00100"],
  U: ["10001", "10001", "10001", "10001", "10001", "10001", "01110"],
  " ": ["000", "000", "000", "000", "000", "000", "000"],
};

const WORDS = ["EMERGING SIGNAL", "FUTURE OBJECT"];
const MAX_LENGTH = 15;

function seeded(id: number, salt: number) {
  const x = Math.sin(id * 999 + salt * 777) * 10000;
  return x - Math.floor(x);
}

export default function DotTextMorph() {
  const [mounted, setMounted] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase] = useState<"show" | "scatter">("show");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const interval = setInterval(() => {
      setPhase("scatter");

      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % WORDS.length);
        setPhase("show");
      }, 900);
    }, 3600);

    return () => clearInterval(interval);
  }, [mounted]);

  if (!mounted) return null;

  const text = WORDS[wordIndex].padEnd(MAX_LENGTH, " ");

  return (
    <div className="flex w-full justify-center overflow-visible">
      <div className="flex translate-x-4 gap-[12px]">
        {text.split("").map((char, charIndex) => {
          const pattern = letters[char.toUpperCase()] || letters[" "];

          return (
            <div key={charIndex} className="grid gap-[5px]">
              {pattern.map((row, rowIndex) => (
                <div key={rowIndex} className="flex gap-[5px]">
                  {row.split("").map((cell, colIndex) => {
                    const id = charIndex * 100 + rowIndex * 10 + colIndex;
                    const visible = cell === "1";

                    const scatterX = (seeded(id, 1) - 0.5) * 260;
                    const scatterY = (seeded(id, 2) - 0.5) * 140;
                    const delay = seeded(id, 3) * 0.28;

                    return (
                      <span
                        key={`${charIndex}-${rowIndex}-${colIndex}`}
                        className="block h-[5px] w-[5px] rounded-full bg-[#111] transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                        style={{
                          opacity: visible && phase === "show" ? 1 : 0,
                          transform:
                            phase === "scatter"
                              ? `translate(${scatterX}px, ${scatterY}px) scale(0.35)`
                              : "translate(0px, 0px) scale(1)",
                          filter: phase === "scatter" ? "blur(4px)" : "blur(0px)",
                          transitionDelay: `${delay}s`,
                        }}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}