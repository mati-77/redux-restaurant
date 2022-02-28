import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./App.css";
import CustomerCard from "./components/CustomerCard";
import ReservationCard from "./components/ReservationCard";
import { addReservation } from "./features/reservationSlice";//importamos y accedemos a este metodo

function App() {

  const [reservationNameInput, setReservationNameInput] = useState("")

  const reservations = useSelector(
    (state) => state.reservations.value
  )//reservations es el nombre del slice, como aparece en el objeto reducer en la store

  const customers = useSelector(
    (state) => state.customer.value
  )

  const dispatch = useDispatch()

  const handleAddReservations = () => {
    if(!reservationNameInput) return;

    dispatch(addReservation(reservationNameInput))

    setReservationNameInput("")
  }

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name, index) => {
                return <ReservationCard name={name} index={index}/>
              })}
            </div>
          </div>
          <div className="reservation-input-container">
            <input 
              value={reservationNameInput} 
              onChange={(e) => setReservationNameInput(e.target.value)}
            />
            <button onClick={handleAddReservations}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customers.map(customer => {
            return <CustomerCard id={customer.id} name={customer.name} food={customer.food}/>
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
