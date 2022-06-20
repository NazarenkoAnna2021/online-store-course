import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../../entities/IUser";

interface IUserState {
    user: IUser,
    isAuth: boolean,
    isLoading: boolean,
    error: string,
};

const initialState: IUserState = {
    user: {} as IUser,
    isAuth: false,
    isLoading: false,
    error: '',
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action){
            state.user = action.payload;
        },
        setIsAuth(state, action) {
            state.isAuth = action.payload;
        }
    },
});

export default userSlice.reducer;