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
        },
        addFoodToCustomer:(state, action) => {
            state.value.forEach((customer => {
                if(customer.id === action.payload.id) {
                    customer.food.push(action.payload.food)
                }
            }))
        }
    }
})

export const { addCustomer, addFoodToCustomer } = customerSlice.actions

export default customerSlice.reducer;