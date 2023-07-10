import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addQuizToTopic} from '../topics/topicsSlice';



const initialState = {
    quizzes: {}
};



export const createQuiz = createAsyncThunk(
    'quizzes/createQuiz',
    async(payload, {dispatch}) => {

        const {name, topicId, cardIds, id} = payload;

        const quizData = {
            id,
            name,
            topicId,
            cardIds,
        };
        dispatch(addQuiz(quizData));

        dispatch(addQuizToTopic({quizId: id, topicId}))
    }
)













const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState,
    reducers: {
        addQuiz: (state, action) => {
            const {id, name, topicId, cardIds} = action.payload;
            state.quizzes[id] = {
                id,
                name,
                topicId,
                cardIds
            };
        }
    }
});

export const {addQuiz} = quizzesSlice.actions;
export default quizzesSlice.reducer;
export const selectQuizzes = (state) => state.quizzes.quizzes; 