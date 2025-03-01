import React, { useContext } from "react";
import { QuizContext } from "../../context/quiz-context";

import "./start-screen.css";

export const StartScreen = () => {
  const { questions, dispatch } = useContext(QuizContext);
  const numberOfQuestions = questions.length;

  return (
    <div className="start">
      <h2> Welcome to the Movie Quiz</h2>
      <h3>{numberOfQuestions} questions for testing your skills</h3>
      <button
        className="btn btn-primary"
        onClick={() => dispatch({ type: "START" })}
      >
       START
      </button>
    </div>
  );
};