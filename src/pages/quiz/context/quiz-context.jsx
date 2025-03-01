import React,{ createContext, useReducer } from "react";
import { DATA_RECEIVED_ACTION } from "./actions";

const QuizContext = createContext();

const STATUES = {
  loading: "loading",
  error: "error",
  ready: "ready",
  active: "active",
  finished: "finished",
};

const initialState = {
  status: STATUES.loading,
  index: 0,
  answer: null,
  points: 0,
  questions: [],
  maxPossiblePoints: 0,
  secondsRemaining: null,
};

function reducer(state, action) {
  switch (action.type) {
    case DATA_RECEIVED_ACTION:
      const maxPossiblePoints = action.payload.reduce((prev, cur) => {
        return prev + cur.points;
      }, 0);

      return {
        ...state,
        questions: action.payload,
        status: STATUES.ready,
        maxPossiblePoints,
      };
    case "DATA_FAILED":
      return {
        ...state,
        status: STATUES.error,
      };
    case "START":
      return {
        ...state,
        status: STATUES.active,
        secondsRemaining: state.questions.length * 30,
      };
    case "NEW_ANSWER":
      const question = state.questions[state.index];
      const newPoints =
        action.payload === question.correctOption
          ? state.points + question.points
          : state.points;

      return {
        ...state,
        answer: action.payload,
        points: newPoints,
      };
    case "NEXT_QUESTION":
      return {
        ...state,
        answer: null,
        index: state.index + 1,
      };
    case "FINISH":
      return {
        ...state,
        status: STATUES.finished,
      };
    case "RESTART":
      return {
        ...initialState,
        question: state.questions,
        status: STATUES.ready,
      };
    case "TICK":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? STATUES.finished : state.status,
      };
    default:
      throw new Error("Something went wrong can not start the game");
  }
}

function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <QuizContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export { QuizProvider, QuizContext, STATUES };