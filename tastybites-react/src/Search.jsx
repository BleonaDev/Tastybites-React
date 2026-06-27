import React, { useState } from 'react';
import searchImage from './assets/search (1).png';
import RecipeCard from './RecipeCard.jsx';
import RecipeModal from './RecipeModal.jsx'; // Importojmë modalin e ri

function Search() {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [searched, setSearched] = useState(false); 
  const [selectedRecipe, setSelectedRecipe] = useState(null); // Tani mban të gjithë objektin e recetës ose null

  const searchRecipes = (e) => {
    if (e) e.preventDefault();
    if (!query.trim()) return;

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data.meals || []);
        setSearched(true); // E rregulluam: Rekrutuesit duan t'i shohin gjërat që funksionojnë!
      })
      .catch((error) => console.error("Error fetching recipes:", error));
  };

  return (
    <>
      {/* Këshillë: Zhvendosi këto inline styles në skedarin tënd CSS si ".search-form" */}
      <form onSubmit={searchRecipes} className="searchdiv" style={{ margin: "auto", height: "42px", backgroundColor: "hsl(350, 100%, 95%)", display: "flex", alignItems: "center" }}>
        <input 
          type="text" 
          placeholder="Search for a recipe" 
          id="search" 
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setSearched(false);
          }}
        />
        <button type="submit" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
          <img src={searchImage} height="30" width="30" id="searchicon" alt="Search" />
        </button>
      </form> 
      <br/>

      <div className="container1 recipes">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <RecipeCard 
              key={recipe.idMeal} 
              image={recipe.strMealThumb} 
              title={recipe.strMeal} 
              time={recipe.strArea ? `${recipe.strArea} Style` : "25 mins"} 
              onViewRecipe={() => setSelectedRecipe(recipe)} // Kalojmë të gjithë objektin këtu!
            />
          ))
        ) : (
          searched && <p style={{ paddingLeft: '15px', color: '#666' }}>No recipes found. Try another search!</p>
        )}
      </div>

      {selectedRecipe && (
        <RecipeModal 
          recipe={selectedRecipe} 
          onClose={() => setSelectedRecipe(null)} 
        />
      )}
    </>
  );
}

export default Search;