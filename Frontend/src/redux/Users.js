import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: "user",
    initialState: {
        value: []
    },
    reducers: {
        register: (state, action) => {
            state.value.push(action.payload)
        },
        logout: (state) => {
            state.value = [];
        },
    }
});
export const { register: register, logout:logout } = userSlice.actions;
export default userSlice.reducer;