"use client";

import { useState } from "react";
import { Question } from "../data/questions";

interface Props {
  question: Question;
  selectedAnswer: number | null;
  onAnswer: (index: number | null) => void;
  onNext: () => void;
  onPrev: () => void;
  isFirst: boolean;
  isLast: boolean;
}

const difficultyColors: Record<string, string> = {
  Easy: "bg-emerald-900/40 text-emerald-400 border-emerald-800",
  Medium: "bg-yellow-900/40 text-yellow-400 border-yellow-800",
  Hard: "bg-red-900/40 text-red-400 border-red-800",
};

export default function MultipleChoice({
  question,
  selectedAnswer,
  onAnswer,
  onNext,
  onPrev,
  isFirst,
  isLast,
}: Props) {
  const [showExplanation, setShowExplanation] = useState(false);
  const hasAnswered = selectedAnswer !== null;

  const handleSelect = (i: number) => {
    if (hasAnswered) return;
    onAnswer(i);
    setShowExplanation(false);
  };

  const handleNext = () => {
    setShowExplanation(false);
    onNext();
  };

  const handlePrev = () => {
    setShowExplanation(false);
    onPrev();
  };

  const getOptionStyle = (i: number) => {
    if (!hasAnswered) {
      return "border-slate-700 bg-slate-800/60 text-slate-200 hover:border-blue-500 hover:bg-slate-800 cursor-pointer";
    }
    if (i === question.answer) {
      return "border-emerald-500 bg-emerald-900/30 text-emerald-200 cursor-default";
    }
    if (i === selectedAnswer && i !== question.answer) {
      return "border-red-500 bg-red-900/30 text-red-200 cursor-default";
    }
    return "border-slate-700 bg-slate-800/30 text-slate-500 cursor-default";
  };

  return (
    <div className="w-full max-w-2xl">
      {/* Question card */}
      <div className="bg-slate-800/80 backdrop-blur border border-slate-700 rounded-2xl p-6 mb-4 shadow-xl">
        {/* Meta */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-900/50 text-blue-400 border border-blue-800">
            {question.category}
          </span>
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${difficultyColors[question.difficulty]}`}>
            {question.difficulty}
          </span>
        </div>

        <p className="text-white text-lg font-medium leading-relaxed">{question.question}</p>
      </div>

      {/* Options */}
      <div className="space-y-3 mb-4">
        {question.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleSelect(i)}
            className={`w-full text-left p-4 rounded-xl border transition-all duration-150 flex items-start gap-3 ${getOptionStyle(i)}`}
          >
            <span className="shrink-0 w-7 h-7 rounded-lg bg-slate-700/60 flex items-center justify-center text-sm font-bold text-slate-300">
              {["A", "B", "C", "D"][i]}
            </span>
            <span className="text-sm leading-relaxed pt-0.5">{opt}</span>
            {hasAnswered && i === question.answer && (
              <span className="ml-auto shrink-0 text-emerald-400 text-lg">✓</span>
            )}
            {hasAnswered && i === selectedAnswer && i !== question.answer && (
              <span className="ml-auto shrink-0 text-red-400 text-lg">✗</span>
            )}
          </button>
        ))}
      </div>

      {/* Feedback */}
      {hasAnswered && (
        <div className="mb-4">
          <div
            className={`rounded-xl p-4 border text-sm ${
              selectedAnswer === question.answer
                ? "bg-emerald-900/20 border-emerald-700 text-emerald-300"
                : "bg-red-900/20 border-red-700 text-red-300"
            }`}
          >
            <p className="font-semibold mb-1">
              {selectedAnswer === question.answer ? "Correct!" : "Incorrect"}
            </p>
            <button
              onClick={() => setShowExplanation((v) => !v)}
              className="underline underline-offset-2 opacity-80 hover:opacity-100 text-xs"
            >
              {showExplanation ? "Hide explanation" : "Show explanation"}
            </button>
            {showExplanation && (
              <p className="mt-2 text-slate-300 text-xs leading-relaxed">{question.explanation}</p>
            )}
          </div>
        </div>
      )}

      {/* Skip & Nav */}
      <div className="flex gap-3">
        {!isFirst && (
          <button
            onClick={handlePrev}
            className="px-5 py-3 rounded-xl border border-slate-700 text-slate-300 text-sm hover:border-slate-500 transition-all"
          >
            ← Back
          </button>
        )}
        {!hasAnswered && (
          <button
            onClick={() => { onAnswer(-1); handleNext(); }}
            className="px-5 py-3 rounded-xl border border-slate-700 text-slate-400 text-sm hover:border-slate-500 transition-all"
          >
            Skip
          </button>
        )}
        <button
          onClick={handleNext}
          disabled={!hasAnswered}
          className={`flex-1 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
            hasAnswered
              ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/40"
              : "bg-slate-700/40 text-slate-500 cursor-not-allowed"
          }`}
        >
          {isLast ? "Finish Quiz →" : "Next →"}
        </button>
      </div>
    </div>
  );
}
