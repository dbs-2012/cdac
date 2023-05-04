import { useState } from "react";
import { CssBaseline, Box, Container } from "@mui/material";
import Image from '../images/pic6.png'
import QuestionCard from "./QuestionCard";
import Result from "./Result";
import questions from "./questions";

const Test2 = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const finishedQuiz = currentQuestionIndex === questions.length;
  const currentQuestion = questions[currentQuestionIndex];

  const goToNext = () => {
    setCurrentQuestionIndex((prevState) => prevState + 1);
  }

  const submitAnswer = (value) => {
    setAnswers((prevState) => [...prevState, value]);
    goToNext();
  }

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
  }

  return (
    <div style={{background: `url(${Image}) no-repeat center center fixed`,backgroundSize:'100% 100%', margin: "0"}}>
      <CssBaseline />
      <Box
        sx={{
            height: "100vh", 
            display: "flex", 
            alignItems: "center"
          }}
      >
        <Container maxWidth="sm">
          {finishedQuiz ? <Result restartQuiz={restartQuiz} answers={answers} /> : <QuestionCard question={currentQuestion} questionNumber={currentQuestionIndex + 1}
            submitAnswer={submitAnswer} />}
        </Container>
      </Box>
    </div>
  );
}

export default Test2;