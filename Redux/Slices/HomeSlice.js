import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
    value: "",
};

// Create the slice
const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        updateDailyVerse : (state,action) => {
            state.value = action.payload
        }
    },
});

// Export the actions
export const { updateDailyVerse } = homeSlice.actions;

// Export the reducer
export default homeSlice.reducer;