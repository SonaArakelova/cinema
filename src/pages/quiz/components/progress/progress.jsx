import React, { useContext } from "react";
import { QuizContext } from "../../context/quiz-context";
import "./progress.css";

export const Progress = () => {
  const { points, index, questions, answer } = useContext(QuizContext);

  return (
    <header className="q-progress">
      <progress
        max={questions.length}
        value={index + Number(answer !== null)}
      />
      <p>
        Question <strong>{index + 1}</strong> / {questions.length}
      </p>
      <p>
        <strong>{points}</strong> / {questions.length * 10}
      </p>
    </header>
  );
};