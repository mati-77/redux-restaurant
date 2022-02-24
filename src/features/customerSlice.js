import { createSlice } from "@reduxjs/toolkit";
//tambien se importa PayloadAction, si usamos Typescript, para aclarar el tipo de accion. action:PayloadAction<string>

const initialState = {
    value: [], //en este caso, queremos que el valor inicial del estado sea un array vacío.
};

export const customerSlice = createSlice({
    name: "customers", //nombre del slice
    initialState,
    //en el objeto reducers, tendremos un conjunto de metodos para actualizar el estado
    reducers: {
        addCustomer: (state, action) => {
            state.value.push(action.payload)//action.payload será un objeto
        }
    }
})

export const { addCustomer } = customerSlice.actions

export default customerSlice.reducer;