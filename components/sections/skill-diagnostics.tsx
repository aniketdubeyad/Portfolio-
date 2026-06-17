"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { diagnosticQuestions, systemLogMessages, DiagnosticQuestion } from "@/data/diagnosticQuestions";
import { Award, CheckCircle2, XCircle, ArrowRight, UserCheck, Sparkles, FileText, Send } from "lucide-react";
import { cn, scrollToSection } from "@/lib/utils";

export function SkillDiagnostics() {
  // Shuffling questions at the start of the session
  const [questions, setQuestions] = useState<DiagnosticQuestion[]>([]);
  const [qIndex, setQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [failedCurrentQuestion, setFailedCurrentQuestion] = useState(false);
  const [revealedCurrent, setRevealedCurrent] = useState(false);
  
  // States
  const [showSummary, setShowSummary] = useState(false);
  const [achievement, setAchievement] = useState<string | null>(null);
  const [unlockedAchievements, setUnlockedAchievements] = useState<string[]>([]);
  const [systemLog, setSystemLog] = useState("Running Intelligence Scan...");
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Helper to shuffle array
  const shuffleArray = (array: DiagnosticQuestion[]) => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.slice(0, 10); // Keep exactly 10 questions
  };

  // Initializing questions once at session start
  useEffect(() => {
    const shuffled = shuffleArray(diagnosticQuestions);
    setQuestions(shuffled);
  }, []);

  // Handle answer selection
  const handleOptionSelect = (option: string) => {
    if (showFeedback || isTransitioning) return;

    setSelectedOption(option);
    const correct = option === questions[qIndex].correctAnswer;
    setIsCorrect(correct);
    setShowFeedback(true);

    if (correct) {
      // If they haven't failed this question yet on this turn, increment score
      if (!failedCurrentQuestion) {
        setScore((prev) => prev + 1);
        const nextStreak = currentStreak + 1;
        setCurrentStreak(nextStreak);
        checkAchievements(score + 1);
      } else {
        setCurrentStreak(0);
      }
    } else {
      setFailedCurrentQuestion(true);
      setCurrentStreak(0);
    }
  };

  // Allow user to try the question again
  const handleTryAgain = () => {
    setSelectedOption(null);
    setShowFeedback(false);
    setIsCorrect(false);
  };

  // Reveal the correct answer to the user
  const handleRevealAnswer = () => {
    setRevealedCurrent(true);
    setSelectedOption(questions[qIndex].correctAnswer);
    setIsCorrect(false);
    setShowFeedback(true);
    setCurrentStreak(0);
  };

  // Advance to the next question
  const handleNextQuestion = () => {
    if (qIndex + 1 >= 10) {
      setShowSummary(true);
      return;
    }

    setIsTransitioning(true);
    setShowFeedback(false);
    setSelectedOption(null);
    setFailedCurrentQuestion(false);
    setRevealedCurrent(false);

    // Pick a random system log message
    const randomLog = systemLogMessages[Math.floor(Math.random() * systemLogMessages.length)];
    setSystemLog(randomLog);

    setTimeout(() => {
      setQIndex((prev) => prev + 1);
      setIsTransitioning(false);
      setSystemLog("Running Intelligence Scan...");
    }, 1000);
  };

  // Restart the diagnostics session
  const handleRestart = () => {
    setQuestions(shuffleArray(diagnosticQuestions));
    setQIndex(0);
    setScore(0);
    setCurrentStreak(0);
    setSelectedOption(null);
    setShowFeedback(false);
    setIsCorrect(false);
    setFailedCurrentQuestion(false);
    setRevealedCurrent(false);
    setShowSummary(false);
    setUnlockedAchievements([]);
  };

  // Check achievements milestones
  const checkAchievements = (currentScore: number) => {
    let newAchievement: string | null = null;
    if (currentScore === 3 && !unlockedAchievements.includes("DATA EXPLORER")) {
      newAchievement = "DATA EXPLORER";
    } else if (currentScore === 6 && !unlockedAchievements.includes("ANALYTICS ENGINEER")) {
      newAchievement = "ANALYTICS ENGINEER";
    } else if (currentScore === 8 && !unlockedAchievements.includes("AI SYSTEMS OPERATOR")) {
      newAchievement = "AI SYSTEMS OPERATOR";
    } else if (currentScore === 10 && !unlockedAchievements.includes("INTELLIGENCE ARCHITECT")) {
      newAchievement = "INTELLIGENCE ARCHITECT";
    }

    if (newAchievement) {
      setAchievement(newAchievement);
      setUnlockedAchievements((prev) => [...prev, newAchievement!]);
      setTimeout(() => setAchievement(null), 3000);
    }
  };

  if (questions.length === 0) {
    return (
      <div className="flex h-[450px] items-center justify-center font-mono text-sm text-cyan-200/50">
        Booting diagnostics system...
      </div>
    );
  }

  const currentQuestion = questions[qIndex];
  const progressPercent = Math.round((qIndex / 10) * 100);

  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-white/[.045] p-5 flex flex-col justify-between h-full font-mono text-white select-none relative overflow-hidden">
      
      {/* Achievements Popup Toast */}
      <AnimatePresence>
        {achievement && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="absolute top-4 left-4 right-4 z-50 p-4 rounded-xl border border-amber-400/40 bg-black/95 shadow-[0_0_30px_rgba(245,158,11,0.25)] flex items-center gap-3"
          >
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-amber-400/10 text-amber-300">
              <Award size={22} className="animate-bounce" />
            </div>
            <div>
              <p className="text-[10px] text-amber-300 font-bold uppercase tracking-wider">Achievement Unlocked</p>
              <h4 className="text-sm font-black text-white">{achievement}</h4>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header Diagnostics Bar */}
      <div>
        <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
          <div>
            <span className="text-[10px] text-white/40 font-bold tracking-widest block uppercase">ANIKET_OS</span>
            <span className="text-xs font-black text-cyan-200 tracking-wider">SKILL DIAGNOSTICS</span>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] font-bold">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-300">ONLINE</span>
          </div>
        </div>

        {/* Progress Tracker Area */}
        <div className="space-y-2 mb-5">
          <div className="flex justify-between text-[10px] font-bold text-white/50">
            <span>QUESTION {qIndex + 1} OF 10</span>
            <span>{progressPercent}% COMPLETE</span>
          </div>
          {/* Progress Bar */}
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-cyan-300"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </div>
      </div>

      {/* Main Interactive Screen */}
      <div className="flex-1 flex flex-col justify-center relative min-h-[260px]">
        <AnimatePresence mode="wait">
          {showSummary ? (
            /* COMPLETION SCREEN */
            <motion.div
              key="completion-screen"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-xl p-4 flex flex-col items-center justify-center text-center border border-white/10 z-10 overflow-y-auto"
            >
              <UserCheck size={32} className="text-green-400 mb-2 animate-bounce" />
              <h3 className="text-lg font-black text-white uppercase tracking-wider">Diagnostic Complete</h3>
              <div className="rounded-full bg-green-500/10 border border-green-500/20 px-3 py-1 text-[10px] font-bold text-green-300 mt-1 uppercase tracking-widest">
                Recruiter Approved
              </div>
              
              <div className="my-4 grid grid-cols-2 gap-3 w-full max-w-[240px]">
                <div className="rounded-lg border border-white/5 bg-white/5 p-2 text-center">
                  <span className="text-[9px] text-white/40 block">CORRECT</span>
                  <span className="text-sm font-black text-lime-400">{score}/10</span>
                </div>
                <div className="rounded-lg border border-white/5 bg-white/5 p-2 text-center">
                  <span className="text-[9px] text-white/40 block">SCORE</span>
                  <span className="text-sm font-black text-cyan-300">{score * 10}%</span>
                </div>
              </div>

              <p className="text-xs text-white/70 italic px-4 leading-relaxed mb-5">
                &ldquo;You now know more about my skills than most resumes can tell you.&rdquo;
              </p>

              {/* Call To Actions */}
              <div className="w-full space-y-2 px-2 max-w-[260px]">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="w-full rounded-xl bg-cyan-300 hover:bg-cyan-200 text-black font-black text-xs py-2.5 flex items-center justify-center gap-1.5 transition-all shadow-[0_0_15px_rgba(34,211,238,0.2)] cursor-pointer"
                >
                  <Sparkles size={13} />
                  View Projects
                </button>
                <button
                  onClick={() => window.open("/resume.pdf", "_blank")}
                  className="w-full rounded-xl bg-white/15 hover:bg-white/25 border border-white/10 text-white font-black text-xs py-2.5 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  <FileText size={13} />
                  Download Resume
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="w-full rounded-xl bg-white/10 hover:bg-white/20 border border-white/5 text-white font-black text-xs py-2.5 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  <Send size={13} />
                  Connect With Me
                </button>
                <button
                  onClick={handleRestart}
                  className="w-full text-[10px] text-white/40 hover:text-white/70 transition py-1 text-center font-bold uppercase tracking-widest cursor-pointer"
                >
                  Restart Diagnostic
                </button>
              </div>
            </motion.div>
          ) : isTransitioning ? (
            /* SYSTEM LOG TRANSITION SCREEN */
            <motion.div
              key="transition-screen"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="flex flex-col items-center justify-center text-center py-8"
            >
              <div className="h-2 w-20 bg-white/10 rounded-full overflow-hidden relative mb-3">
                <motion.div 
                  initial={{ left: "-100%" }}
                  animate={{ left: "100%" }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  className="absolute top-0 bottom-0 w-10 bg-cyan-200"
                />
              </div>
              <p className="text-xs font-mono text-cyan-200/80 animate-pulse tracking-wide">{systemLog}</p>
            </motion.div>
          ) : (
            /* ACTIVE DIAGNOSTIC QUESTION */
            <motion.div
              key={currentQuestion.id}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="space-y-4"
            >
              {/* Question Text */}
              <h4 className="text-sm font-semibold leading-relaxed text-white/90">
                {currentQuestion.question}
              </h4>

              {/* Answer Choices Grid */}
              <div className="grid gap-2">
                {currentQuestion.options.map((option) => {
                  const isSelected = selectedOption === option;
                  const isCorrectAnswer = option === currentQuestion.correctAnswer;
                  
                  let btnStyle = "border-white/10 bg-white/5 text-white/80 hover:border-cyan-300/30 hover:bg-white/10";
                  if (showFeedback) {
                    if (isCorrectAnswer) {
                      btnStyle = "border-green-400/50 bg-green-500/10 text-green-300 shadow-[0_0_15px_rgba(74,222,128,0.1)]";
                    } else if (isSelected) {
                      btnStyle = "border-red-400/50 bg-red-500/10 text-red-300 shadow-[0_0_15px_rgba(248,113,113,0.1)]";
                    } else {
                      btnStyle = "border-white/5 bg-transparent text-white/30";
                    }
                  }

                  return (
                    <button
                      key={option}
                      disabled={showFeedback}
                      onClick={() => handleOptionSelect(option)}
                      className={cn(
                        "w-full text-left rounded-xl border px-4 py-2.5 text-xs font-semibold transition-all duration-300 flex items-center justify-between cursor-pointer",
                        btnStyle
                      )}
                    >
                      <span>{option}</span>
                      {showFeedback && isCorrectAnswer && <CheckCircle2 size={14} className="text-green-300 shrink-0" />}
                      {showFeedback && isSelected && !isCorrectAnswer && <XCircle size={14} className="text-red-300 shrink-0" />}
                    </button>
                  );
                })}
              </div>

              {/* Feedback Text & Insight Area */}
              <AnimatePresence>
                {showFeedback && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="overflow-hidden border-t border-white/10 pt-3 mt-1 space-y-3"
                  >
                    <div className="flex items-center gap-1.5">
                      {isCorrect || revealedCurrent ? (
                        <>
                          <CheckCircle2 size={13} className="text-green-300" />
                          <span className="text-[10px] font-bold text-green-300 uppercase tracking-wider">
                            {revealedCurrent ? "✓ Revealed Answer" : "✓ Correct // +10 Intelligence Points"}
                          </span>
                        </>
                      ) : (
                        <>
                          <XCircle size={13} className="text-red-300" />
                          <span className="text-[10px] font-bold text-red-300 uppercase tracking-wider">✗ Not Quite</span>
                        </>
                      )}
                    </div>
                    <p className="text-[11px] leading-relaxed text-white/60">
                      {currentQuestion.insight}
                    </p>

                    {/* Progress Control Buttons */}
                    <div className="flex gap-2 pt-2">
                      {isCorrect || revealedCurrent ? (
                        <button
                          onClick={handleNextQuestion}
                          className="rounded-lg bg-cyan-300 hover:bg-cyan-200 text-black font-black text-xs px-4 py-2 flex items-center gap-1.5 transition ml-auto cursor-pointer"
                        >
                          Next Question
                          <ArrowRight size={13} />
                        </button>
                      ) : (
                        <>
                          <button
                            onClick={handleTryAgain}
                            className="rounded-lg bg-white/15 hover:bg-white/25 border border-white/10 text-white font-bold text-xs px-3.5 py-2 transition cursor-pointer"
                          >
                            Try Again
                          </button>
                          <button
                            onClick={handleRevealAnswer}
                            className="rounded-lg bg-transparent hover:bg-white/5 text-cyan-200 font-semibold text-xs px-3.5 py-2 transition cursor-pointer"
                          >
                            Reveal Answer
                          </button>
                          <button
                            onClick={handleNextQuestion}
                            className="rounded-lg bg-cyan-300/20 hover:bg-cyan-300/30 text-cyan-200 font-bold text-xs px-4 py-2 flex items-center gap-1 ml-auto transition cursor-pointer"
                          >
                            Skip Question
                            <ArrowRight size={13} />
                          </button>
                        </>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer diagnostic status */}
      <div className="border-t border-white/5 pt-3 mt-4 text-[9px] text-white/30 font-bold flex items-center justify-between">
        <span className="uppercase tracking-widest">Diagnostic Engine v2.1.0</span>
        <span className="uppercase text-cyan-200">User Controlled</span>
      </div>
    </div>
  );
}
