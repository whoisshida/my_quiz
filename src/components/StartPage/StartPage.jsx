import { useNavigate } from "react-router-dom";
import React from "react";
import "./StartPage.scss";
import gifSource from "../../assets/test_tubes.gif";

const StartPage = () => {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate("/quiz");
  };

  return (
    <div className="start-page-container">
      <h1>DrugDev QuizLab</h1>
      <br />
      <div className="gif-container">
        <img src={gifSource} alt="Test Tubes" className="gif-image" />
      </div>
      <br />
      <p>Click below to start the quiz</p>
      <button onClick={handleStartQuiz}>Start Quiz</button>
    </div>
  );
};

export default StartPage;
