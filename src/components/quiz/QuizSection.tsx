import { useState } from 'react';
import type { QuizQuestion } from '../../types/course';
import { useProgressContext } from '../../context/useProgressContext';
import { XP_REWARDS } from '../../types/gamification';
import { BADGES, getBadgeById } from '../../data/badges';

interface QuizSectionProps {
  moduleId: string;
  questions: QuizQuestion[];
}

export default function QuizSection({ moduleId, questions }: QuizSectionProps) {
  const { submitQuizAnswer, getModuleProgress, hasBadge } = useProgressContext();
  const moduleProgress = getModuleProgress(moduleId);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [hasChecked, setHasChecked] = useState(false);
  const [lastResult, setLastResult] = useState<{ correct: boolean } | null>(null);
  const [showSummary, setShowSummary] = useState(false);

  const currentQuestion = questions[currentIndex];
  const questionResult = currentQuestion ? moduleProgress.quiz.questionResults[currentQuestion.id] : undefined;
  const attemptsSoFar = questionResult?.attempts ?? 0;

  const handleSelectOption = (optionId: string) => {
    if (hasChecked) return;
    setSelectedAnswer(optionId);
  };

  const handleCheckAnswer = () => {
    if (!selectedAnswer || !currentQuestion) return;
    const result = submitQuizAnswer(moduleId, currentQuestion.id, selectedAnswer);
    setLastResult(result);
    setHasChecked(true);
  };

  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setHasChecked(false);
      setLastResult(null);
    } else {
      setShowSummary(true);
    }
  };

  const handleTryAgain = () => {
    setSelectedAnswer(null);
    setHasChecked(false);
    setLastResult(null);
  };

  if (showSummary) {
    const updatedProgress = getModuleProgress(moduleId);
    const score = updatedProgress.quiz.score;
    const total = questions.length;
    const percent = Math.round((score / total) * 100);

    const earnedModuleBadge = BADGES.find(badge => badge.criteria === moduleId && hasBadge(badge.id));

    return (
      <div className="quiz-section">
        <h2>Quiz Complete!</h2>
        <div className="quiz-summary">
          <div className="quiz-summary-score">
            {score}/{total}
          </div>
          <p className="quiz-summary-label">
            {percent === 100
              ? 'Perfect score. Precision unlocked.'
              : percent >= 70
                ? 'Great work. Keep momentum going.'
                : 'Good start. Review the module and retry for mastery.'}
          </p>
          {earnedModuleBadge && (
            <>
              <div className="quiz-summary-badge">{earnedModuleBadge.icon}</div>
              <p className="quiz-summary-badge-name">Badge Earned: {earnedModuleBadge.name}</p>
            </>
          )}
          {hasBadge('perfect-quiz') && (
            <>
              <div className="quiz-summary-badge">{getBadgeById('perfect-quiz')?.icon}</div>
              <p className="quiz-summary-badge-name">Badge Earned: Precision Pass</p>
            </>
          )}
        </div>
      </div>
    );
  }

  if (!currentQuestion) return null;

  const xpForCorrect = attemptsSoFar === 0 ? XP_REWARDS.QUIZ_CORRECT_FIRST_TRY : XP_REWARDS.QUIZ_CORRECT_RETRY;
  const isAnsweredCorrectly = hasChecked && lastResult?.correct;
  const actionGuidance = !hasChecked
    ? 'Select one option, then choose Check Answer.'
    : lastResult?.correct
      ? currentIndex < questions.length - 1
        ? 'Correct. Continue when ready.'
        : 'Correct. See results to finish this quiz.'
      : 'Choose another option and check again.';

  return (
    <div className="quiz-section">
      <h2>
        <span>Knowledge Check</span>
      </h2>
      <p className="quiz-optional-note">Optional quiz for XP and badges. Module completion is section-based.</p>
      <p className="quiz-progress-text">
        Question {currentIndex + 1} of {questions.length}
      </p>
      <div className="quiz-progress-dots" aria-hidden="true">
        {questions.map((question, index) => {
          const completed = index < currentIndex || (index === currentIndex && isAnsweredCorrectly);
          const active = index === currentIndex && !completed;
          return (
            <span
              key={question.id}
              className={`quiz-progress-dot ${completed ? 'done' : active ? 'active' : ''}`}
            />
          );
        })}
      </div>
      <p className="quiz-guidance-text" role="status" aria-live="polite">
        {actionGuidance}
      </p>

      <div className="quiz-question-card">
        <p className="quiz-question-text">{currentQuestion.question}</p>

        <div className="quiz-options">
          {currentQuestion.options.map(option => {
            let className = 'quiz-option';

            if (hasChecked && lastResult) {
              if (option.id === selectedAnswer && lastResult.correct) {
                className += ' correct';
              } else if (option.id === selectedAnswer && !lastResult.correct) {
                className += ' incorrect';
              } else if (option.id === currentQuestion.correctAnswer && !lastResult.correct) {
                className += ' correct-reveal';
              }
            } else if (option.id === selectedAnswer) {
              className += ' selected';
            }

            return (
              <label key={option.id} className={className} onClick={() => handleSelectOption(option.id)}>
                <input
                  type="radio"
                  name={`quiz-${currentQuestion.id}`}
                  value={option.id}
                  checked={selectedAnswer === option.id}
                  onChange={() => handleSelectOption(option.id)}
                />
                <span className="quiz-option-radio" />
                <span>{option.text}</span>
              </label>
            );
          })}
        </div>

        {hasChecked && lastResult && (
          <div className={`quiz-feedback ${lastResult.correct ? 'correct' : 'incorrect'}`}>
            <div className="quiz-feedback-header">
              {lastResult.correct ? (
                <>
                  Correct!
                  <span className="quiz-feedback-xp">+{xpForCorrect} XP</span>
                </>
              ) : (
                'Not correct yet'
              )}
            </div>
            {!lastResult.correct && <p className="quiz-feedback-retry">Choose another option and check again.</p>}
            <p className="quiz-feedback-explanation">{currentQuestion.explanation}</p>
          </div>
        )}

        <div className="quiz-actions">
          {!hasChecked && (
            <button className="btn btn-primary" onClick={handleCheckAnswer} disabled={!selectedAnswer}>
              Check Answer
            </button>
          )}
          {hasChecked && lastResult?.correct && (
            <button className="btn btn-success" onClick={handleNextQuestion}>
              {currentIndex < questions.length - 1 ? 'Next Question' : 'See Results'}
            </button>
          )}
          {hasChecked && lastResult && !lastResult.correct && (
            <button className="btn btn-secondary" onClick={handleTryAgain}>
              Try Another Option
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
