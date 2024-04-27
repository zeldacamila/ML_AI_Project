import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: 'no-authenticated', //checking, authenticated
    user: {},
    error: undefined
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        onChecking: ( state ) => {
            state.status = 'checking';
        },
        onLogin: ( state, { payload } ) => {
            state.status = 'authenticated';
            state.user = payload;
            state.error = undefined;
        },
        onLogout: ( state, { payload } ) => {
            state.status = 'no-authenticated';
            state.user = {};
            state.error = payload;
        },
        onResetAuth: ( state ) => {
            state.status = 'no-authenticated';
            state.user = {};
            state.error = undefined;
        }
    }
});

export const { 
    onChecking,
    onLogin,
    onLogout,
    onResetAuth,
 } = authSlice.actions;