import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: 'Daniel',
        age: '20',
        avatar: '...',
    },
    reducers: {
        update: (state, action) => {
            state.name = action.payload.name;
            state.user = action.payload.user;
            state.avatar = action.payload.avatar;
        },
    },
});

export const { update } = userSlice.actions;
export default userSlice.reducer;
