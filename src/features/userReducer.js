import { createAction, createReducer } from "@reduxjs/toolkit";

const loginUsername = createAction("username login");
const loginPassword = createAction("password login");
const logout = createAction("log out");

const actions = { loginUsername, loginPassword, logout };

const initialState = {
    username: "",
    password: "",
}

const userReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(loginUsername, (state, action) => {
            state.username = action.payload
        })
        .addCase(loginPassword, (state, action) => {
            state.password = action.payload
        })
        .addCase(logout, (state, action) => {
            return initialState
        })
})

export { actions, userReducer }