import React,{ useContext, useEffect } from "react";
import { QuizContext } from "../../context/quiz-context";


const getCorrectFormat = (sec) => {
    const mins = Math.floor(sec / 60);
    const seconds = sec % 60;
  
    return (
      <span>
        {mins < 10 && "0"}
        {mins}:{seconds < 10 && "0"}
        {seconds}
      </span>
    );
  };
  
  export const Footer = () => {
    const { dispatch, answer, index, secondsRemaining, questions } =
      useContext(QuizContext);
  
    useEffect(() => {
      const id = setInterval(() => {
        dispatch({ type: "TICK" });
      }, 1000);
  
      return () => {
        clearInterval(id);
      };
    }, [dispatch]);
  
    const timer = getCorrectFormat(secondsRemaining);
  
    return (
      <footer className="d-flex justify-content-between align-items-center">
        {timer}
        {answer !== null && index < questions.length - 1 && (
          <button
            className="btn btn-primary"
            onClick={() => dispatch({ type: "NEXT_QUESTION" })}
          >
            Next
          </button>
        )}
        {answer !== null && index === questions.length - 1 && (
          <button
            className="btn btn-primary"
            onClick={() => dispatch({ type: "FINISH" })}
          >
            Finish
          </button>
        )}
      </footer>
    );
  };