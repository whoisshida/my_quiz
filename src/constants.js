export const resultInitalState = {
  score: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
};

export const jsQuizz = {
  questions: [
    {
      question:
        "The ______ is an institution or individual who initiates, manages and finances a clinical trial",
      type: "FIB",
      correctAnswer: "sponsor",
    },

    {
      question: "A clinical research study is conducted in how many phases?",
      choices: ["5", "4", "8", "1"],
      type: "MCQs",
      correctAnswer: "4",
    },
    {
      question:
        "To begin with a clinical research study, it is mandatory to get approval from?",
      choices: ["Sponsor", "Regulator", "Regulators and ethics committees"],
      type: "MCQs",
      correctAnswer: "Regulators and ethics committees",
    },

    {
      question:
        "Preclinical studies are conducted on animals and artificial cells in labs.",
      choices: ["True", "False"],
      type: "MCQs",
      correctAnswer: "True",
    },
    {
      question:
        "Which step follows preclinical testing in the drug development process?",
      choices: [
        "Testing in clinical trials",
        "Confirming drug effectiveness",
        "Determining the optimum dosage",
        "Initiating preclinical testing",
      ],
      type: "MCQs",
      correctAnswer: "Testing in clinical trials",
    },
    {
      question: "What is the primary objective of preclinical testing in drug development?",
      choices: ["Analysing cells and tissues", "Determining the optimum dosage", "Verifying drug effectiveness", "Ensuring safety of the drug"],
      type: "MCQs",
      correctAnswer: "Ensuring safety of the drug",
    },
  ],
};
