import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit' 
import useReducer from '../feautures/user/userSlice';
import movieReducer from '../feautures/movie/movieSlice';

export default configureStore({
    reducer: {
        user: useReducer,
        movie: movieReducer
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false
    })
})