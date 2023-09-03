import { useEffect, useReducer } from "react";

import Header from "./components/Header";
import Mains from "./components/Mains";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import FinishScreen from "./components/FinishScreen";
import Footer from "./components/Footer";
import Timer from "./components/Timer";
import { QuizProvider, useQuiz } from "./contexts/QuizContext";

// const SECS_PER_QUESTION = 30;

// const initialState = {
//   questions: [],

//   // 'loading', 'error', 'ready', 'active', 'finished'
//   status: "loading",
//   index: 0,
//   answer: null,
//   points: 0,
//   highscore: 0,
//   secondsRemaining: null,
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case "dataReceived":
//       return {
//         ...state,
//         questions: action.payload,
//         status: "ready",
//       };
//     case "dataFailed":
//       return {
//         ...state,
//         status: "error",
//       };
//     case "start":
//       return {
//         ...state,
//         status: "active",
//         secondsRemaining: state.questions.length * SECS_PER_QUESTION,
//       };
//     case "newAnswer":
//       const question = state.questions.at(state.index);

//       return {
//         ...state,
//         answer: action.payload,
//         points:
//           action.payload === question.correctOption
//             ? state.points + question.points
//             : state.points,
//       };
//     case "nextQuestion":
//       return { ...state, index: state.index + 1, answer: null };
//     case "finish":
//       return {
//         ...state,
//         status: "finished",
//         highscore:
//           state.points > state.highscore ? state.points : state.highscore,
//       };
//     case "restart":
//       return {
//         ...initialState,
//         questions: state.questions,
//         status: "ready",
//         highscore: state.highscore,
//       };
//     case "tick":
//       return {
//         ...state,
//         secondsRemaining: state.secondsRemaining - 1,
//         status: state.secondsRemaining === 0 ? "finished" : state.status,
//       };
//     default:
//       throw new Error("Action unknown");
//   }
// }

export default function App() {
  // const [
  //   { questions, status, index, answer, points, highscore, secondsRemaining },
  //   dispatch,
  // ] = useReducer(reducer, initialState);

  const { status } = useQuiz();

  return (
    <div className="app">
      <Header />

      <Mains>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Question />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}
        {status === "finished" && <FinishScreen />}
      </Mains>
    </div>
  );
}
