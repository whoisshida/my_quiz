import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import StartPage from "./StartPage";
import "@testing-library/jest-dom";

// Mocking react-router-dom's useNavigate hook
jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

// Mock the GIF file import
jest.mock("../../assets/test_tubes.gif", () => ({
  default: "test_tubes.gif", // Mock the imported file path or any specific value
}));

describe("StartPage component", () => {
  it("renders StartPage correctly", () => {
    render(<StartPage />);

    // Check if the title is rendered
    expect(screen.getByText("DrugDev QuizLab")).toBeInTheDocument();

    // Check if the button is rendered
    expect(screen.getByText("Start Quiz")).toBeInTheDocument();
  });

  it('calls useNavigate when the "Start Quiz" button is clicked', () => {
    const mockNavigate = jest.fn();
    jest
      .requireMock("react-router-dom")
      .useNavigate.mockReturnValue(mockNavigate);

    render(<StartPage />);

    // Click the "Start Quiz" button
    fireEvent.click(screen.getByText("Start Quiz"));

    // Check if useNavigate was called with the expected argument ("/quiz")
    expect(mockNavigate).toHaveBeenCalledWith("/quiz");
  });
});
