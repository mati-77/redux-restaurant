import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    value: [] //en este caso, queremos que el valor inicial del estado sea un array vacío.
}

export const reservationsSlice = createSlice({
    name: "reservations", //nombre del slice
    initialState,
    //en el objeto reducers, tendremos un conjunto de metodos para actualizar el estado
    reducers: {
        addReservation: (state, action) => {
            state.value.push(action.payload)
        },
    }
})

export const { addReservation } = reservationsSlice.actions

export default reservationsSlice.reducer;
