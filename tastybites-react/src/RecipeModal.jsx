import React from 'react';

function RecipeModal({ isOpen, onClose, title, recipesData }) {
  if (!isOpen) return null;

  const recipe = recipesData.find((recipe) => recipe.title === title);
  if (!recipe) return null;

  return (
    <div className="modal">
      <div className="modal-box">    
        <div className="modal-header">
          <h2>{recipe.title}</h2>
          <button onClick={onClose} className="close-btn">✕</button>
        </div>      
        <div className="modal-body">
          <h3>Ingredients:</h3>
          <ul>
            {recipe.ingredients.map((ingredient, i) => (
              <li key={i}>{ingredient}</li>
            ))}
          </ul>         
          <h3>Instructions:</h3>
          <p>{recipe.directions}</p>
          <p className="enjoy-text">
            Enjoy your {recipe.title.toLowerCase()} 😊!
          </p>
        </div>
      </div>
    </div>
  );
}

export default RecipeModal;