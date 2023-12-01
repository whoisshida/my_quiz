import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Result from "./Result";
import { BrowserRouter as Router } from "react-router-dom"; //
import "./Result.scss";
import "@testing-library/jest-dom";

test("renders Result component", () => {
  const resultData = {
    score: 10, // Provide necessary values for result object
    correctAnswers: 8,
    wrongAnswers: 2,
  };
  const { getByText } = render(
    <Router>
      <Result totalQuestions={10} result={resultData} />
    </Router>
  );
  const headingElement = getByText("Result");
  expect(headingElement).toBeInTheDocument();
});

test("saves user score when Save button is clicked", () => {
  const resultData = {
    score: 10,
    correctAnswers: 8,
    wrongAnswers: 2,
  };
  const { getByText, getByPlaceholderText } = render(
    <Router>
      <Result totalQuestions={10} result={resultData} />
    </Router>
  );

  // Simulate user entering a name
  const nameInput = getByPlaceholderText("Your Name");
  fireEvent.change(nameInput, { target: { value: "John Doe" } });

  // Click the save button
  const saveButton = getByText("Save");
  fireEvent.click(saveButton);

  // Ensure localStorage is updated with the high scores
  const highScores = JSON.parse(localStorage.getItem("highScores"));
  expect(highScores.length).toBe(1);
  expect(highScores[0].name).toBe("John Doe");
  expect(highScores[0].score).toBe(10);
});

test("toggles between score display and input form", () => {
  const resultData = {
    score: 10,
    correctAnswers: 8,
    wrongAnswers: 2,
  };
  const { getByText, queryByText } = render(
    <Router>
      <Result totalQuestions={10} result={resultData} />
    </Router>
  );

  // Look for a text that partially matches "Enter your name below"
  const enterNameText = queryByText(/Enter your name below/);
  expect(enterNameText).toBeInTheDocument();

  // Click the save button
  const saveButton = getByText("Save");
  fireEvent.click(saveButton);

  // Ensure input form is not displayed after saving
  const enterNameTextAfterSave = queryByText("Enter your name below");
  expect(enterNameTextAfterSave).toBeNull();

  // Ensure the table of high scores is displayed after saving
  const rankingHeader = getByText("Ranking");
  expect(rankingHeader).toBeInTheDocument();
});

test("resets state and navigates to home on Try Again button click", () => {
  const resultData = {
    score: 10,
    correctAnswers: 8,
    wrongAnswers: 2,
  };
  const onTryAgainMock = jest.fn();
  const { getByText } = render(
    <Router>
      <Result
        totalQuestions={10}
        result={resultData}
        onTryAgain={onTryAgainMock}
      />
    </Router>
  );

  // Click the Try Again button
  const tryAgainButton = getByText("Try Again");
  fireEvent.click(tryAgainButton);

  // Ensure state is reset
  // Ensure onTryAgain function is called
  expect(onTryAgainMock).toHaveBeenCalled();

  // Ensure navigation to the home path
  expect(window.location.pathname).toBe("/");
});
