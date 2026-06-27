import React from "react";
import Navbar from "./Navbar";
import Search from "./Search.jsx"; // Importojmë Search-in që rregulluam

function OurRecipes({ setSelectedRecipe }) {
  return (
    <>
     
       <Navbar /> 
       <br/><br/><br/><br/><br/><br/>

      <h1 style={{ marginLeft: "440px" }}>Recipes from all over the world</h1>

      <Search setSelectedRecipe={setSelectedRecipe} />
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </>
  );
}

export default OurRecipes;