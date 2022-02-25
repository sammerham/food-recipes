import React, {useState} from 'react';

import SearchForm from './components/SearchForm'
import ReceipeContext from './receipesContext';
import Recipes from './components/Recipes.js';
import Ingredients from './components/Ingredients';

//https://api.edamam.com/search?q=chicken&app_id=3e83e636&app_key=6d7527cd4837c3fdc033abb8aa4a85b0
function App() {
  const [recipes, setRecipes] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [ingredients, setIngredients] = useState([]);




  return (
    <ReceipeContext.Provider value={{setRecipes, recipes, setClicked, setIngredients, ingredients}}>
      <div className="App">
        {clicked ? 
          <Ingredients />
          :
          <>
            <SearchForm />
            <Recipes recipes={recipes}/>
          </>
        }
        
      </div>
    </ReceipeContext.Provider>
  );
}


export default App;
