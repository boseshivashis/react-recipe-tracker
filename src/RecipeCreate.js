import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {

  // Initialize state for form data
  const [formData, setFormData] = useState({
    name: '',
    cuisine: '',
    photo: '',
    ingredients: '',
    preparation: ''
  });

  // Handle input change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleRecipeSubmit = (event) => {
    event.preventDefault();
    
    // Create a new recipe object from formData
    const newRecipe = {
      name: formData.name,
      cuisine: formData.cuisine,
      photo: formData.photo,
      ingredients: formData.ingredients,
      preparation: formData.preparation
    };

    // Call createRecipe function passed from parent component
    createRecipe(newRecipe);

    // Clear the form after submission
    setFormData({
      name: '',
      cuisine: '',
      photo: '',
      ingredients: '',
      preparation: ''
    });
  };

  return (
    <form name="create" onSubmit={handleRecipeSubmit}>
      <table>
        <tbody>
          <tr>
            <td className="content_td">
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Name"
                onChange={handleChange}
                size="10"
              />
            </td>
            <td className="content_td">
              <input
                type="text"
                name="cuisine"
                value={formData.cuisine}
                placeholder="Cuisine"
                onChange={handleChange}
                size="10"

              />
            </td>
            <td className="content_td">
              <input
                type="text"
                name="photo"
                value={formData.photo}
                placeholder="URL"
                onChange={handleChange}
                size="10"
              />
            </td>
            <td className="content_td">
              <textarea
                rows="2"
                cols="9"
                name="ingredients"
                value={formData.ingredients}
                placeholder="Ingredients"
                onChange={handleChange}
              />
            </td>
            <td className="content_td">
              <textarea
                rows="2"
                cols="9"
                name="preparation"
                value={formData.preparation}
                placeholder="Preparation"
                onChange={handleChange}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;