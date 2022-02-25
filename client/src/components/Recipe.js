import React, {useContext} from 'react'
import {
  StyledImage,
  StyledTitle,
} from './StyledComponents'
import ReceipeContext from '../receipesContext';



function Recipe({ recipe }) {
  const { setClicked, setIngredients } = useContext(ReceipeContext);

  const { image, calories, cuisineType, ingredients, label } = recipe.recipe;



  const handleIngredientClick = () => { 
    setIngredients(ingredients)
    setClicked(true)
  };
  
  return (
    <div>
      <StyledTitle bg={'red'} onClick={handleIngredientClick} ><b>{ label }</b></StyledTitle>
      <StyledImage src={image} alt="food" onClick={handleIngredientClick} />
      <p >Calories : {calories.toFixed(2)}</p>
      <p onClick={handleIngredientClick} >Cuisine Type : <b>{cuisineType[0][0].toUpperCase() + cuisineType[0].slice(1)} </b></p>
      <p onClick={handleIngredientClick}>Ingredients <b>+</b></p>
    </div>
  )
}

export default Recipe