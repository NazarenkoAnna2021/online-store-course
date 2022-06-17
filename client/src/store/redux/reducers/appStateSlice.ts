import { createSlice } from "@reduxjs/toolkit";

interface IAppState {
    isAuth: boolean,
};

const initialState: IAppState = {
    isAuth: false,
};

export const appStateSlice = createSlice({
    name: 'appState',
    initialState,
    reducers: {
        setIsAuth(state, action) {
            state.isAuth = action.payload;
        }
    },
});

export default appStateSlice.reducer;