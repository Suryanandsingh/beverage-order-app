import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    inQueue: [],
    beingMixed: [],
    readyToCollect: []
}

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addToQueue: (state, action) => {
            action.payload['id'] = nanoid();
            state.inQueue.push(action.payload);
        },
        addToMixed: (state, action) => {
            state.beingMixed.push(
                state.inQueue.find((item) => item.id === action.payload)
            );
            state.inQueue = state.inQueue.filter((item) => item.id !== action.payload);
        },
        addToReady: (state, action) => {
            state.readyToCollect.push(
                state.beingMixed.find((item) => item.id === action.payload)
            );
            state.beingMixed = state.beingMixed.filter((item) => item.id !== action.payload);
        },
        orderPlaced: (state, action) => {
            state.readyToCollect = state.readyToCollect.filter((item) => item.id !== action.payload);
        }
    }
});

export const { addToQueue, addToMixed, addToReady, orderPlaced } = orderSlice.actions;

export default orderSlice.reducer;

