import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let data = []

for(let i = 1; i <= 10; i++){
  data.push({num: i, answered: false})
}

export const getQuestions = createAsyncThunk('quiz/getQuestions', async(url) => {
  return fetch(url)
    .then((resp) => resp.json())
    .catch((err) => console.log(err))
});

const initialState = {
  quizNumbers: data,
  timeTaken: "00:10:00",
  quizData: [],
  questions: {},
  next: "",
  loading: true,
  subject: "Mathematics",
  selectedAnswer: "",
  quizResults: {},
  takingQuiz: false,
  userHasResult: false,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    selectAnswer: (state, {payload}) =>{
      let {numID, questionID, optionID, optionLetter} = payload
      const quizNumber = state.quizNumbers.find((item) => item.num === numID);
      quizNumber.answered = true;
      state.selectedAnswer = optionID;

      function dataExists(id){
        return state.quizData.some(function(el){
          return el.question === id;
        });
      }

      if (dataExists(questionID)){
        let newData = state.quizData.find((item) => item.question === questionID);
        newData.option = optionID;
        newData.optionLetter = optionLetter
      } else {
        state.quizData = [...state.quizData, {question:questionID, option:optionID, pageNumber:numID, optionLetter:optionLetter}]
      }
    },
    getSelectedAnswer:(state, action)=>{
      const questionID = action.payload;

      function dataExists(id){
        return state.quizData.some(function(el){
          return el.question === id;
        });
      }

      if (dataExists(questionID)){
        const question = state.quizData.find((item)=> item.question === questionID);
        state.selectedAnswer = question.option
      }
    },
    selectSubject:(state, action)=>{
      state.subject = action.payload
    },
    getQuizResults:(state, action)=>{
      state.quizResults = action.payload
    },
    clearQuizData: (state)=>{
      state.quizNumbers = data;
      state.quizData = [];
      state.questions = {};
      state.next = "";
      state.selectedAnswer = "";
      state.takingQuiz = false;
      state.subject = "Mathematics";
    },
    startSession:(state)=>{
      state.takingQuiz = true
    },
    setUserResult:(state)=>{
      state.userHasResult = true
    },
    clearQuizResult:(state)=>{
      state.quizResults = {}
      state.userHasResult = false
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getQuestions.pending, (state) => {
        state.loading = true;
      })
      .addCase(getQuestions.fulfilled, (state, action) =>{
        state.loading = false;
        state.takingQuiz = true;
        const {next, results} = action.payload;
        state.next = next;
        state.questions = results[0];
      })
      .addCase(getQuestions.rejected, (state, action) => {
        state.loading = false
      });
  },
});

export const { selectAnswer, getSelectedAnswer, selectSubject, getQuizResults, clearQuizData, startSession, setUserResult, clearQuizResult } = quizSlice.actions;

export default quizSlice.reducer;