import React from 'react'
import { useDispatch } from 'react-redux'
import { removeReservation } from '../features/reservationSlice'

export default function ReservationCard({ name, index }) {

  const dispatch = useDispatch()

  return (
    <div onClick={() => {
      dispatch(removeReservation(index))
    }} 
    className="reservation-card-container">{name}</div>
  )
}

/*hacemos que el componente tambien reciba un index mediante props, para despues, en un evento onClick,
llamar al metodo para remover la reservación, con dispatch, pasandole dicho index*/