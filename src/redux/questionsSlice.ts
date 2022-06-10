import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IQuestion {
  question: string;
  answer: string;
  skipped: boolean;
}

interface IQuestionsState {
  questionList: IQuestion[];
  currentQuestion: number;
  sequence: number[];
  isPopupOpen: boolean;
  results: string[];
}

const initialState: IQuestionsState = {
  questionList: [
    {
      question: "Who?",
      answer: "",
      skipped: false,
    },
    {
      question: "What?",
      answer: "",
      skipped: false,
    },
    {
      question: "When?",
      answer: "",
      skipped: false,
    },
    {
      question: "Where?",
      answer: "",
      skipped: false,
    },
  ],
  sequence: [0, 1, 3, 2],
  currentQuestion: 0,
  isPopupOpen: false,
  results: [],
};

const setSkipped = (state: IQuestionsState) => {
  state.questionList[state.currentQuestion].skipped =
    state.questionList[state.currentQuestion].answer === "";
};

export const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    nextQuestion: (state) => {
      setSkipped(state);
      if (state.currentQuestion >= state.questionList.length - 1) return;
      state.currentQuestion += 1;
    },
    previousQuestion: (state) => {
      setSkipped(state);
      if (state.currentQuestion === 0) return;
      state.currentQuestion -= 1;
    },
    jumpToQuestion: (state, action) => {
      setSkipped(state);
      state.currentQuestion = action.payload;
    },
    setAnswer: (
      state,
      action: PayloadAction<{
        question: number;
        answer: string;
        skipped: boolean;
      }>
    ) => {
      state.questionList[action.payload.question].answer =
        action.payload.answer;
      state.questionList[action.payload.question].skipped =
        action.payload.skipped;
    },
    openPopup: (state, action) => {
      state.isPopupOpen = action.payload;
    },
    submitResult: (state, action) => {
      state.results = action.payload;
    },
    resetGame: (state) => {
      return {
        ...initialState,
        results: state.results,
      };
    },
    clearResults: (state) => {
      state.results = [];
    },
  },
});

export const {
  nextQuestion,
  previousQuestion,
  jumpToQuestion,
  setAnswer,
  resetGame,
  openPopup,
  submitResult,
  clearResults,
} = questionsSlice.actions;

export default questionsSlice.reducer;
