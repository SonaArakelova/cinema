import React, { useContext } from "react";
import { QuizContext } from "../../context/quiz-context";
import "./options.css";

export const Options = ({ question }) => {
  const { dispatch, answer } = useContext(QuizContext);
  const hasAnswered = answer !== null;
  const isCorrect = question.correctOption === answer;

  const handleSelectOption = (index) => {
    dispatch({ type: "NEW_ANSWER", payload: index });
  };

  return (
    <div className="options">
      {question.options.map((option, index) => {
        const classes = hasAnswered
          ? index === question.correctOption
            ? "correct"
            : "wrong"
          : "";

        return (
          <button
            key={option}
            className={`q-btn btn-option ${classes}`}
            onClick={() => handleSelectOption(index)}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};