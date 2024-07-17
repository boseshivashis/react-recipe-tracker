import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.


    // Function to handle recipe deletion
  const handleDelete = (recipeName) => {
    const updatedRecipeList = recipes.filter(recipe => recipe.name !== recipeName);
   setRecipes(updatedRecipeList);
  };
  
   // Function to add new recipe
  const createRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
    console.log(recipes);
  };
  
  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} handleDelete={handleDelete}/>
      <RecipeCreate createRecipe={createRecipe}/>
    </div>
  );
}

export default App;
