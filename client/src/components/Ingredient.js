import React from 'react'
import { StyledImage } from './StyledComponents'

function Ingredient({ ingredient }) {
  const { food, image, measure, quantity } = ingredient;
  
  return (
    <div style={{marginLeft:'40px'}}>
      <StyledImage src={image} alt="food" />
      <p style={{marginLeft:'40px'}}>{food}</p>
      <p style={{marginLeft:'40px'}}>{quantity} {measure} </p>
    </div>
  )
}

export default Ingredient