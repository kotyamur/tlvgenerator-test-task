"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialQuestionsState = [
  {
    id: "AF79C",
    topic: "Anatomy",
    questionName: "2.1 Basics",
    difficulty: 88,
    answerRate: "75%",
    totalAnswers: 1156,
    questionContent: "",
  },
  {
    id: "AF78C",
    topic: "Anatomy",
    questionName: "2.1 Basics",
    difficulty: 89,
    answerRate: "73%",
    totalAnswers: 1156,
    questionContent: "",
  },
];

const questionsSlice = createSlice({
  name: "questions",
  initialState: initialQuestionsState,
  reducers: {
    addQuestion: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({ id, topic, questionName, questionContent }) {
        return {
          payload: {
            id,
            topic,
            questionName,
            difficulty: 88,
            answerRate: "75%",
            totalAnswers: 1156,
            questionContent,
          },
        };
      },
    },
    deleteQuestion(state, action) {
      return state.filter((question) => question.id !== action.payload);
    },
    editQuestion(state, action) {
      for (const quest of state) {
        if (quest.id === action.payload.id) {
          quest.id = action.payload.id;
          quest.topic = action.payload.topic;
          quest.questionName = action.payload.questionName;
          quest.questionContent = action.payload.questionContent;
          break;
        }
      }
    },
  },
});



export const { addQuestion, deleteQuestion, editQuestion } =
    questionsSlice.actions;
  
export default questionsSlice.reducer;    