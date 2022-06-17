import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../../entities/IUser";

interface IUserState {
    user: IUser | {},
    isLoading: boolean,
    error: string,
};

const initialState: IUserState = {
    user: {},
    isLoading: false,
    error: '',
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        
    },
});

export default userSlice.reducer;