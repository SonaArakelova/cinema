import React, { useContext, useEffect } from "react";
import { QuizProvider, QuizContext, STATUES } from "./context/quiz-context";
import { quizApi } from "../../api/quize.api";
import { Loading } from "./components/loading/loading";
import { Error } from "./components/error/error";
import { StartScreen } from "./components/start-screen/start.screen";
import { Questions } from "./components/questions/questions";
import { DATA_RECEIVED_ACTION } from "./context/actions";
import { Progress } from "./components/progress/progress";
import { FinishScreen } from "./components/finishscreen/finish-screen";
import { Footer } from "./components/footer/footer";
import "./quiz.css";



const QuizApp = () => {
    const { status, dispatch } = useContext(QuizContext);
  
    useEffect(() => {
      quizApi.getQuestions().then((response) => {
        if (response.success) {
          dispatch({ type: DATA_RECEIVED_ACTION, payload: response.data });
        } else {
          dispatch({ type: "DATA_FAILED" });
        }
      });
    }, [dispatch]);
  
    return (
      <div className="quiz-game mt-4">
        <main className="main">
          {status === "loading" && <Loading />}
          {status === "error" && <Error />}
          {status === "ready" && <StartScreen />}
          {status === "active" && (
            <>
              <Progress />
              <Questions />
              <Footer />
            </>
          )}
          {status === STATUES.finished && <FinishScreen />}
        </main>
      </div>
    );
  };
  
  export const Quiz = () => {
    return (
      <QuizProvider>
        <QuizApp />
      </QuizProvider>
    );
  };