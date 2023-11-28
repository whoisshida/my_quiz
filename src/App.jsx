import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Quiz from "./components/Quiz/Quiz";
import StartPage from "./components/StartPage/StartPage";

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getQuestionsFunction();
  }, []);

  const getQuestionsFunction = async () => {
    try {
      const response = await fetch('https://6564c40aceac41c0761ec5fd.mockapi.io/api/quiz_questions/quiz');
      const questionsResponse = await response.json();
      console.log(questionsResponse);
      setQuestions(questionsResponse);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route
          path="/quiz"
          element={questions.length ? <Quiz questions={questions} /> : null}
        />
      </Routes>
    </Router>
  );
}

export default App;
