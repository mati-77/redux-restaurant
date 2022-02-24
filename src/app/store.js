import { configureStore } from "@reduxjs/toolkit";
import reservationsReducer from "../features/reservationSlice"

export const store = configureStore({
    reducer: {
        //aquí iran los slices
        reservations: reservationsReducer,
    }
})