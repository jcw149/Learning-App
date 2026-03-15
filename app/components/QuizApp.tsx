"use client";

import { useState, useCallback } from "react";
import { questions, Question, Category } from "../data/questions";
import MultipleChoice from "./MultipleChoice";
import Flashcard from "./Flashcard";
import ScoreBoard from "./ScoreBoard";
import HomeScreen from "./HomeScreen";

export type Mode = "multiple-choice" | "flashcard";
export type Screen = "home" | "quiz" | "results";

export interface SessionStats {
  total: number;
  correct: number;
  incorrect: number;
  skipped: number;
  category: Category | "All";
  mode: Mode;
}

export default function QuizApp() {
  const [screen, setScreen] = useState<Screen>("home");
  const [mode, setMode] = useState<Mode>("multiple-choice");
  const [category, setCategory] = useState<Category | "All">("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sessionQuestions, setSessionQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [stats, setStats] = useState<SessionStats | null>(null);

  const startQuiz = useCallback(
    (selectedMode: Mode, selectedCategory: Category | "All") => {
      setMode(selectedMode);
      setCategory(selectedCategory);

      const filtered =
        selectedCategory === "All"
          ? questions
          : questions.filter((q) => q.category === selectedCategory);

      // Shuffle
      const shuffled = [...filtered].sort(() => Math.random() - 0.5);
      setSessionQuestions(shuffled);
      setAnswers(new Array(shuffled.length).fill(null));
      setCurrentIndex(0);
      setScreen("quiz");
    },
    []
  );

  const handleAnswer = useCallback(
    (answerIndex: number | null) => {
      setAnswers((prev) => {
        const next = [...prev];
        next[currentIndex] = answerIndex;
        return next;
      });
    },
    [currentIndex]
  );

  const handleNext = useCallback(() => {
    if (currentIndex < sessionQuestions.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      // Calculate stats
      let correct = 0;
      let incorrect = 0;
      let skipped = 0;
      answers.forEach((a, i) => {
        if (a === null || a === -1) skipped++;
        else if (a === sessionQuestions[i].answer) correct++;
        else incorrect++;
      });
      // Count last question
      setStats({ total: sessionQuestions.length, correct, incorrect, skipped, category, mode });
      setScreen("results");
    }
  }, [currentIndex, sessionQuestions, answers, category, mode]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((i) => Math.max(0, i - 1));
  }, []);

  const handleRestart = useCallback(() => {
    setScreen("home");
    setStats(null);
  }, []);

  if (screen === "home") {
    return <HomeScreen onStart={startQuiz} />;
  }

  if (screen === "results" && stats) {
    return <ScoreBoard stats={stats} questions={sessionQuestions} answers={answers} onRestart={handleRestart} />;
  }

  const currentQuestion = sessionQuestions[currentIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex flex-col items-center justify-center p-4">
      {/* Progress bar */}
      <div className="w-full max-w-2xl mb-6">
        <div className="flex justify-between text-sm text-slate-400 mb-2">
          <span>{currentIndex + 1} / {sessionQuestions.length}</span>
          <span className="font-medium text-blue-400">{mode === "multiple-choice" ? "Multiple Choice" : "Flashcard"}</span>
          <span className="text-slate-400">{category}</span>
        </div>
        <div className="w-full bg-slate-700 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / sessionQuestions.length) * 100}%` }}
          />
        </div>
      </div>

      {mode === "multiple-choice" ? (
        <MultipleChoice
          question={currentQuestion}
          selectedAnswer={answers[currentIndex]}
          onAnswer={handleAnswer}
          onNext={handleNext}
          onPrev={handlePrev}
          isFirst={currentIndex === 0}
          isLast={currentIndex === sessionQuestions.length - 1}
        />
      ) : (
        <Flashcard
          question={currentQuestion}
          onNext={handleNext}
          onPrev={handlePrev}
          isFirst={currentIndex === 0}
          isLast={currentIndex === sessionQuestions.length - 1}
        />
      )}
    </div>
  );
}
