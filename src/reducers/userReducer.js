import {CHANGE_MOVIES, SET_GENRES, SET_MOVIE} from "../actions/userActions";


const initialState = {
    movies: JSON.parse(localStorage.getItem('movies')),
    genres: JSON.parse(localStorage.getItem('genres'))
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIE:
            return {...state, movie: action.payload}
        case CHANGE_MOVIES:
            return {...state, movies: action.payload}
        case SET_GENRES:
            return {...state, genres: action.payload}
        default:
            return state;
    }
}