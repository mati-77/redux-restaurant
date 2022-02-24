import React from 'react'
import { useDispatch } from 'react-redux'
import { addCustomer } from '../features/customerSlice'
import { removeReservation } from '../features/reservationSlice'
import { v4 as uuid } from "uuid"

export default function ReservationCard({ name, index }) {

  const dispatch = useDispatch()

  return (
    <div 
      onClick={() => {
        dispatch(removeReservation(index))
        dispatch(addCustomer({
          id: uuid(),
          name,
          food: []
        }))
      }} 
      className="reservation-card-container"
    >
      {name}
    </div>
  )
}

/*hacemos que el componente tambien reciba un index mediante props, para despues, en un evento onClick,
llamar al metodo para remover la reservación, con dispatch, pasandole dicho index*/

/*tambien, al hacer click, debemos invocar a un metodo que renderize al componente CustomerCard*/