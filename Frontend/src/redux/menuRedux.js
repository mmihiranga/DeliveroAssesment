import { createSlice } from '@reduxjs/toolkit'

export const menuSlice = createSlice({
    name: "users",
    initialState: {
        value: []
    },
    reducers: {
        addMenu: (state, action) => {
            state.value.push(action.payload)
        }
    }
});
export const { addMenu } = menuSlice.actions;
export default menuSlice.reducer;