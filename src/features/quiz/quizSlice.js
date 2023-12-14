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
  timeTaken: "00:00:00",
  quizData: [],
  questions: {},
  isLoading: true,
  subject: "",
  selectedAnswer: "",
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
        state.quizData = [...state.quizData, {id:questionID, option:optionID}]
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
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getQuestions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getQuestions.fulfilled, (state, action) =>{
        state.isLoading = false;
        state.questions = action.payload;
      })
      .addCase(getQuestions.rejected, (state, action) => {
        state.isLoading = false
      });
  },
});

export const { selectAnswer, getSelectedAnswer } = quizSlice.actions;

export default quizSlice.reducer;