import { createAction, createReducer } from "@reduxjs/toolkit";

const findFilm = createAction("find Film");


const actions = {findFilm};

const initialState = {
  film: "",


}

const findReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(findFilm, (state, action) => {
            state.film = action.payload
        })
     
})

export { actions, findReducer }