import React, {useContext} from 'react'
import Ingredient from './Ingredient'
import ReceipeContext from '../receipesContext'
import {StyledButton} from './StyledComponents'


function Ingredients() {
  const { ingredients, setClicked } = useContext(ReceipeContext);
  const handleGoBack = ()=> setClicked(false)
  return (
    <div>
      {ingredients.map(ing => <Ingredient key={ing.weight} ingredient={ing} />)}
      <StyledButton bg={'grey'} onClick = {handleGoBack} style={{marginLeft:'20px'}} >Go Back</StyledButton>
    </div>
  )
}

export default Ingredients