import React, { useState } from 'react';
import { saveProgress } from '../utils/progressStorage';

const quizData = [
  {
    id: 1,
    question: "Which media query targets viewports that are 600px wide or narrower?",
    options: [
      "@media (min-width: 600px)",
      "@media (max-width: 600px)",
      "@media (width: 600px)",
      "@media (viewport: 600px)"
    ],
    correct: 1,
    explanation: "max-width means the viewport width must be less than or equal to the specified value (600px)."
  },
  {
    id: 2,
    question: "If an animation has 'animation-duration: 4s' and keyframes at 0%, 50%, and 100%, at what time does the 50% keyframe occur?",
    options: [
      "0.5 seconds",
      "2 seconds",
      "4 seconds",
      "50 seconds"
    ],
    correct: 1,
    explanation: "Percentages are based on the total duration. 50% of 4 seconds is 2 seconds."
  },
  {
    id: 3,
    question: "Which timing function starts slowly, accelerates, and then slows down at the end?",
    options: [
      "linear",
      "ease-in",
      "ease-out",
      "ease-in-out"
    ],
    correct: 3,
    explanation: "ease-in-out means it eases (slows) both in (at the start) and out (at the end), moving fastest in the middle."
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleSelect = (idx) => {
    if (showExplanation) return;
    setSelectedOption(idx);
  };

  const handleSubmit = () => {
    if (selectedOption === null) return;
    
    setShowExplanation(true);
    if (selectedOption === quizData[currentQuestion].correct) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(c => c + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      setQuizFinished(true);
      saveProgress('quiz', { completed: true, score: score + (selectedOption === quizData[currentQuestion].correct ? 1 : 0) });
    }
  };

  if (quizFinished) {
    const percentage = Math.round((score / quizData.length) * 100);
    return (
      <div className="quiz-page">
        <div className="card text-center" style={{ maxWidth: '600px', margin: '0 auto', padding: '3rem' }}>
          <h2 className="mb-3 text-gradient">Quiz Completed!</h2>
          <div style={{ fontSize: '4rem', margin: '1rem 0' }}>{percentage}%</div>
          <p className="mb-4 text-muted">You scored {score} out of {quizData.length}</p>
          <button className="btn btn-primary" onClick={() => {
            setCurrentQuestion(0);
            setSelectedOption(null);
            setShowExplanation(false);
            setScore(0);
            setQuizFinished(false);
          }}>Retry Quiz</button>
        </div>
      </div>
    );
  }

  const q = quizData[currentQuestion];

  return (
    <div className="quiz-page">
      <h1 className="mb-2">CSS Quiz</h1>
      <p className="text-muted mb-4">Test your knowledge of Media Queries and Animations.</p>
      
      <div className="mb-3 text-muted">
        Question {currentQuestion + 1} of {quizData.length}
      </div>

      <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h3 className="mb-4">{q.question}</h3>
        
        <div className="options-grid grid" style={{ gap: '1rem' }}>
          {q.options.map((opt, idx) => {
            let className = "card option-card ";
            if (showExplanation) {
              if (idx === q.correct) className += "correct-option";
              else if (idx === selectedOption) className += "wrong-option";
            } else {
              if (idx === selectedOption) className += "selected-option";
            }

            return (
              <div 
                key={idx} 
                className={className}
                style={{
                  padding: '1rem',
                  cursor: showExplanation ? 'default' : 'pointer',
                  border: showExplanation && idx === q.correct ? '2px solid var(--success)' : 
                          showExplanation && idx === selectedOption ? '2px solid var(--error)' :
                          idx === selectedOption ? '2px solid var(--accent-cyan)' : '2px solid var(--border-color)',
                  background: showExplanation && idx === q.correct ? 'rgba(16, 185, 129, 0.1)' : 
                              showExplanation && idx === selectedOption ? 'rgba(239, 68, 68, 0.1)' : 'var(--bg-card)'
                }}
                onClick={() => handleSelect(idx)}
              >
                {opt}
              </div>
            );
          })}
        </div>

        {showExplanation && (
          <div className="mt-4 p-3" style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '8px' }}>
            <h4 style={{ color: selectedOption === q.correct ? 'var(--success)' : 'var(--error)' }}>
              {selectedOption === q.correct ? 'Correct!' : 'Incorrect.'}
            </h4>
            <p className="mt-2 text-muted">{q.explanation}</p>
          </div>
        )}

        <div className="mt-4 d-flex justify-content-between">
          {!showExplanation ? (
            <button 
              className="btn btn-primary w-100" 
              onClick={handleSubmit}
              disabled={selectedOption === null}
            >
              Submit Answer
            </button>
          ) : (
            <button 
              className="btn btn-primary w-100" 
              onClick={handleNext}
            >
              {currentQuestion + 1 === quizData.length ? 'Finish Quiz' : 'Next Question'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
