
/* eslint-disable no-unused-vars */


import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    topics: {}
};

const topicsSlice = createSlice({
    name: 'topics',
    initialState,
    reducers: {
        addTopic: (state, action) => {
            const { id, name, icon } = action.payload;
            state.topics = {
                ...state.topics,
                [id]:{
              id,
              name,
              icon,
              quizIds: [],
                }
            };
            
        },
        addQuizToTopic: (state, action) => {
            const {quizId, topicId} = action.payload;
            const topic = state.topics[topicId];
            if(topic){
                topic.quizIds.push(quizId);
            }
        }
        
    }
});


export const { addTopic, addQuizToTopic} = topicsSlice.actions;
export default topicsSlice.reducer;
export const selectTopics = (state) =>state.topics.topics;