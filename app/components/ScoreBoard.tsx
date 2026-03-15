"use client";

import { Question } from "../data/questions";
import { SessionStats } from "./QuizApp";

interface Props {
  stats: SessionStats;
  questions: Question[];
  answers: (number | null)[];
  onRestart: () => void;
}

export default function ScoreBoard({ stats, questions, answers, onRestart }: Props) {
  const pct = Math.round((stats.correct / stats.total) * 100);

  const grade =
    pct >= 90 ? { label: "Exceptional", color: "text-emerald-400" } :
    pct >= 75 ? { label: "Strong", color: "text-blue-400" } :
    pct >= 60 ? { label: "Passing", color: "text-yellow-400" } :
    { label: "Needs Work", color: "text-red-400" };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        {/* Score header */}
        <div className="bg-slate-800/80 backdrop-blur border border-slate-700 rounded-2xl p-8 mb-6 text-center shadow-xl">
          <p className="text-slate-400 text-sm uppercase tracking-widest mb-2">Your Score</p>
          <div className={`text-7xl font-extrabold mb-1 ${grade.color}`}>{pct}%</div>
          <div className={`text-xl font-semibold ${grade.color} mb-4`}>{grade.label}</div>

          <div className="flex justify-center gap-8 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-400">{stats.correct}</div>
              <div className="text-slate-500">Correct</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-400">{stats.incorrect}</div>
              <div className="text-slate-500">Incorrect</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-400">{stats.skipped}</div>
              <div className="text-slate-500">Skipped</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{stats.total}</div>
              <div className="text-slate-500">Total</div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-6 w-full bg-slate-700 rounded-full h-3">
            <div
              className="h-3 rounded-full bg-emerald-500 transition-all duration-700"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>

        {/* Review section */}
        <div className="bg-slate-800/60 border border-slate-700 rounded-2xl overflow-hidden mb-6">
          <div className="px-5 py-3 border-b border-slate-700">
            <h2 className="text-white font-semibold text-sm">Review Answers</h2>
          </div>
          <div className="divide-y divide-slate-700/60 max-h-96 overflow-y-auto">
            {questions.map((q, i) => {
              const ans = answers[i];
              const isCorrect = ans === q.answer;
              const isSkipped = ans === null || ans === -1;
              return (
                <div key={q.id} className="px-5 py-4">
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 mt-0.5">
                      {isSkipped ? (
                        <span className="text-slate-500 text-lg">—</span>
                      ) : isCorrect ? (
                        <span className="text-emerald-400 text-lg">✓</span>
                      ) : (
                        <span className="text-red-400 text-lg">✗</span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-slate-200 text-sm leading-snug mb-1">{q.question}</p>
                      {!isSkipped && !isCorrect && (
                        <p className="text-red-400 text-xs">
                          Your answer: {q.options[ans!]}
                        </p>
                      )}
                      <p className={`text-xs ${isCorrect ? "text-emerald-400" : "text-slate-400"}`}>
                        {isSkipped ? "Skipped" : `Correct: ${q.options[q.answer]}`}
                      </p>
                    </div>
                    <span className="shrink-0 text-xs px-2 py-0.5 rounded bg-slate-700 text-slate-400">
                      {q.category === "Investment Banking" ? "IB" : "Acct"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Actions */}
        <button
          onClick={onRestart}
          className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg rounded-xl transition-all duration-200 shadow-lg shadow-blue-900/50"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
