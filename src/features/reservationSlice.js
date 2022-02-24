import { createSlice } from "@reduxjs/toolkit";
//tambien se importa PayloadAction, si usamos Typescript, para aclarar el tipo de accion. action:PayloadAction<string>

const initialState = {
    value: [], //en este caso, queremos que el valor inicial del estado sea un array vacío.
};

export const reservationsSlice = createSlice({
    name: "reservations", //nombre del slice
    initialState,
    //en el objeto reducers, tendremos un conjunto de metodos para actualizar el estado
    reducers: {
        addReservation: (state, action) => {
            state.value.push(action.payload)
        },
        removeReservation: (state, action) => {
            state.value.splice(action.payload, 1)
        }
    }
})

export const { addReservation, removeReservation } = reservationsSlice.actions

export default reservationsSlice.reducer; //queremos exportar todo el slice
