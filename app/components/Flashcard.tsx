"use client";

import { useState } from "react";
import { Question } from "../data/questions";

interface Props {
  question: Question;
  onNext: () => void;
  onPrev: () => void;
  isFirst: boolean;
  isLast: boolean;
}

const difficultyColors: Record<string, string> = {
  Easy: "text-emerald-400",
  Medium: "text-yellow-400",
  Hard: "text-red-400",
};

export default function Flashcard({ question, onNext, onPrev, isFirst, isLast }: Props) {
  const [flipped, setFlipped] = useState(false);

  const handleNext = () => {
    setFlipped(false);
    // Small delay to avoid seeing the back before it resets
    setTimeout(onNext, 150);
  };

  const handlePrev = () => {
    setFlipped(false);
    setTimeout(onPrev, 150);
  };

  return (
    <div className="w-full max-w-2xl flex flex-col items-center">
      {/* Card */}
      <div
        className="w-full cursor-pointer"
        style={{ perspective: "1200px" }}
        onClick={() => setFlipped((v) => !v)}
      >
        <div
          className="relative w-full transition-transform duration-500"
          style={{
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
            minHeight: "280px",
          }}
        >
          {/* Front */}
          <div
            className="absolute inset-0 rounded-2xl border border-slate-700 bg-slate-800/80 backdrop-blur shadow-xl p-8 flex flex-col justify-between"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-900/50 text-blue-400 border border-blue-800">
                {question.category}
              </span>
              <span className={`text-xs font-semibold ${difficultyColors[question.difficulty]}`}>
                {question.difficulty}
              </span>
            </div>
            <div className="flex-1 flex items-center">
              <p className="text-white text-xl font-medium leading-relaxed text-center w-full">
                {question.question}
              </p>
            </div>
            <p className="text-center text-slate-500 text-xs">Tap to reveal answer</p>
          </div>

          {/* Back */}
          <div
            className="absolute inset-0 rounded-2xl border border-blue-700 bg-blue-950/80 backdrop-blur shadow-xl p-8 flex flex-col justify-between"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-900/50 text-blue-400 border border-blue-800">
                Answer
              </span>
            </div>
            <div className="flex-1 flex flex-col justify-center gap-3">
              <p className="text-emerald-300 text-lg font-semibold text-center">
                {question.options[question.answer]}
              </p>
              <p className="text-slate-400 text-sm text-center leading-relaxed">
                {question.explanation}
              </p>
            </div>
            <p className="text-center text-slate-500 text-xs">Tap to flip back</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex gap-3 mt-6 w-full">
        {!isFirst && (
          <button
            onClick={handlePrev}
            className="px-5 py-3 rounded-xl border border-slate-700 text-slate-300 text-sm hover:border-slate-500 transition-all"
          >
            ← Back
          </button>
        )}
        <button
          onClick={() => setFlipped((v) => !v)}
          className="px-5 py-3 rounded-xl border border-blue-700 text-blue-300 text-sm hover:bg-blue-900/20 transition-all"
        >
          Flip
        </button>
        <button
          onClick={handleNext}
          className="flex-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-900/40"
        >
          {isLast ? "Finish →" : "Next →"}
        </button>
      </div>
    </div>
  );
}
