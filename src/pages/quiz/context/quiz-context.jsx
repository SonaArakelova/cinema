import React,{ createContext, useReducer } from "react";

const QuizContext = createContext();

const initialState = {
  // 'loading', 'error', 'ready', 'active'
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  questions: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "DATA_RECEIVED":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "DATA_FAILED":
      return {
        ...state,
        status: "error",
      };
    case "START":
      return {
        ...state,
        status: "active",
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
        initialState,
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

export { QuizProvider, QuizContext };