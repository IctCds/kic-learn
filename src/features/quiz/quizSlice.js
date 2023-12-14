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
  loading: true,
  subject: "Mathematics",
  selectedAnswer: "",
  quizResults: {},
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    selectAnswer: (state, {payload}) =>{
      let {numID, questionID, optionID} = payload
      const quizNumber = state.quizNumbers.find((item) => item.num === numID);
      quizNumber.answered = true;
      state.selectedAnswer = optionID;

      function dataExists(id){
        return state.quizData.some(function(el){
          return el.id === id;
        });
      }

      if (dataExists(questionID)){
        let newData = state.quizData.find((item) => item.id === questionID);
        newData.option = optionID;
      } else {
        state.quizData = [...state.quizData, {question:questionID, option:optionID, pageNumber:numID}]
      }
    },
    getSelectedAnswer:(state, action)=>{
      const questionID = action.payload;

      function dataExists(id){
        return state.quizData.some(function(el){
          return el.id === id;
        });
      }

      if (dataExists(questionID)){
        const question = state.quizData.find((item)=> item.id === questionID);
        state.selectedAnswer = question.option
      }
    },
    selectSubject:(state, action)=>{
      state.subject = action.payload
    },
    getQuizResults:(state, action)=>{
      state.quizResults = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getQuestions.pending, (state) => {
        state.loading = true;
      })
      .addCase(getQuestions.fulfilled, (state, action) =>{
        state.loading = false;
        state.questions = action.payload;
      })
      .addCase(getQuestions.rejected, (state, action) => {
        state.loading = false
      });
  },
});

export const { selectAnswer, getSelectedAnswer, selectSubject, getQuizResults } = quizSlice.actions;

export default quizSlice.reducer;