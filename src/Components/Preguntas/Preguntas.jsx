import "./Preguntas.css"
import React from 'react'
import { Typography } from "@mui/material"
const Preguntas = () => {
  return (
    <div>
      <Typography className="questionContainer">
      <h2 className="Title">Preguntas Frecuentes</h2>
      <div className="questionItems">¿Tienen tienda física? <br/>
        No </div>
      <div className="questionItems">¿Hacen envíos a otros países? <br/>
        No, solo hacemos envíos dentro de territorio nacional</div>
      <div className="questionItems"> ¿Cómo puedo comprar? <br/>
      Facilísimo!, solo tienes que agregar los productos que te interesan a tu carrito de compras, ingresar tus datos,
      dirección y seleccionar el medio de pago que deseas utilizar</div>
      <div className="questionItems"> ¿Todo lo que aparece en Dangerous Level esta disponible? <br/>
      No necesariamente. La ficha de cada producto indica si este se encuentra con stock para comprar online o si se encuentra agotado.</div>
      <div className="questionItems">¿Se puede reservar un producto? <br/>
      No hacemos reservas de productos, solo puedes comprar los productos que se encuentran en stock</div>
      <div className="questionItems">¿Existe un monto mínimo para concretar la compra? <br/>
      ¿No, pero te recomendamos que su compra no sea tan baja para que no pagues mas por el envío que por el producto que compraste.</div>
      <div className="questionItems final">Han pasado más de 48hrs y no han aprobado mi pago <br/>
      Recuerda que todos nuestros plazos son en días hábiles. Si compras con transferencia un día viernes en la noche o el fin de semana, revisaremos tu pago el día lunes a primera hora, no te preocupes! 
      </div>
      </Typography>
    </div>
  )
}

export default Preguntas