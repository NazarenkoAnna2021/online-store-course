import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../../entities/IUser";

interface IUserState {
    user: IUser,
    isLoading: boolean,
    error: string,
};

const initialState: IUserState = {
    user: {} as IUser,
    isLoading: false,
    error: '',
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action){
            state.user = action.payload;
        }
    },
});

export default userSlice.reducer;