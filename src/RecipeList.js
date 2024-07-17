import React from "react";

function RecipeList({recipes, handleDelete}) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked.


  return (

    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th className="ingredients">Ingredients</th>
            <th className="preparations">Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
             <tbody >
  
          {recipes.map((recipe,index) => (
          <tr key={index}  >
            <td className="content_td"><p>  {recipe.name}</p></td>
            <td className="content_td"> <p>  {recipe.cuisine}</p></td>
            <td className="content_td"> <img src={recipe.photo} alt={recipe.name} style={{ maxWidth: '100%' }}/></td>
            <td className="content_td"><p> {recipe.ingredients }</p></td>
            <td className="content_td"><p> {recipe.preparation}</p></td>
            <td className="content_td"><p> <button name="delete" onClick={() => handleDelete(recipe.name)}>Delete</button></p></td>
          </tr> 
      ))}
               
   
 

                    </tbody>


        
    
      </table>
    </div>
  );
}

export default RecipeList;
