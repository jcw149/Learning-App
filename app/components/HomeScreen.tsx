"use client";

import { useState } from "react";
import { Category } from "../data/questions";
import { Mode } from "./QuizApp";

interface Props {
  onStart: (mode: Mode, category: Category | "All") => void;
}

const categories: (Category | "All")[] = ["All", "Investment Banking", "Accounting"];
const modes: { value: Mode; label: string; description: string; icon: string }[] = [
  {
    value: "multiple-choice",
    label: "Multiple Choice",
    description: "4 options per question with instant feedback and explanations",
    icon: "☑",
  },
  {
    value: "flashcard",
    label: "Flashcards",
    description: "Flip cards to reveal answers — great for memorization",
    icon: "🗂",
  },
];

export default function HomeScreen({ onStart }: Props) {
  const [selectedMode, setSelectedMode] = useState<Mode>("multiple-choice");
  const [selectedCategory, setSelectedCategory] = useState<Category | "All">("All");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white mb-2">IB & Accounting Quiz</h1>
          <p className="text-slate-400 text-lg">Master investment banking and accounting concepts</p>
        </div>

        {/* Category selection */}
        <div className="mb-8">
          <h2 className="text-slate-300 font-semibold text-sm uppercase tracking-widest mb-3">Category</h2>
          <div className="grid grid-cols-3 gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`py-3 px-4 rounded-xl text-sm font-medium transition-all duration-200 border ${
                  selectedCategory === cat
                    ? "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-900/40"
                    : "bg-slate-800/60 border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Mode selection */}
        <div className="mb-8">
          <h2 className="text-slate-300 font-semibold text-sm uppercase tracking-widest mb-3">Mode</h2>
          <div className="grid grid-cols-2 gap-4">
            {modes.map((m) => (
              <button
                key={m.value}
                onClick={() => setSelectedMode(m.value)}
                className={`p-5 rounded-xl text-left transition-all duration-200 border ${
                  selectedMode === m.value
                    ? "bg-blue-600/20 border-blue-500 text-white"
                    : "bg-slate-800/60 border-slate-700 text-slate-300 hover:border-slate-500"
                }`}
              >
                <div className="text-2xl mb-2">{m.icon}</div>
                <div className="font-semibold text-base">{m.label}</div>
                <div className="text-xs text-slate-400 mt-1 leading-relaxed">{m.description}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Start button */}
        <button
          onClick={() => onStart(selectedMode, selectedCategory)}
          className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg rounded-xl transition-all duration-200 shadow-lg shadow-blue-900/50 hover:shadow-blue-700/50 active:scale-[0.98]"
        >
          Start Quiz
        </button>

        {/* Stats hint */}
        <p className="text-center text-slate-500 text-sm mt-5">
          24 questions · Investment Banking & Accounting · Easy to Hard
        </p>
      </div>
    </div>
  );
}
