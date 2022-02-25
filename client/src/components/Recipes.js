import React, { useContext} from 'react'
import Recipe from './Recipe'
import ReceipeContext from '../receipesContext'


function Recipes() {
  const { recipes } = useContext(ReceipeContext)
  

  return (
    <div style={{marginLeft:'20px'}} >{recipes.map((rec, idx) => <Recipe recipe={rec} key={idx} />)}</div>
  )
}

export default Recipes