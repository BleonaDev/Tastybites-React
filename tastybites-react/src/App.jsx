import React, { useState } from 'react';
import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import RecipeCard, { FavoriteButton } from './RecipeCard.jsx';
import RecipeModal from './RecipeModal.jsx';
import Swiper from './Swiper.jsx';
import Subscribe from './Subscribe.jsx';
import Footer from './Footer.jsx';
import Search from './Search.jsx';
import OurRecipes from './OurRecipes.jsx';
import AboutUs from './AboutUs.jsx';
import Contact from './Contact.jsx';
import pastaImg from './assets/pasta.jpg';
import sushiImg from './assets/sushi.jpg';
import salmonImg from './assets/salmon.jpg';
import rizottoImg from './assets/rizotto.jpg';
import cakeImg from './assets/cake.jpg';
import pizzaImg from './assets/pizza.jpg';
import burritoImg from './assets/Burrito.jpg';
import steakImg from './assets/steak.jpg';
import pie from './assets/pie.jpg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

const recipesData = [
  {
    id: "cheesyPastaModal",
    title: "Cheesy Pasta",
    image: pastaImg,
    time: "15 minutes",
    ingredients: ["200g pasta", "100g grated cheddar cheese", "50ml heavy cream", "2 cloves garlic, minced", "1 tbsp butter", "Salt & pepper to taste"],
    directions: "Boil the pasta, then prepare a garlic-butter sauce with cream and melted cheese. Toss the pasta in the sauce until well coated, season with salt and pepper, and serve hot, garnished with parsley if desired."
  },
  {
    id: "californiaSushiModal",
    title: "California Sushi",
    image: sushiImg,
    time: "30 minutes",
    ingredients: ["Sushi rice", "Nori sheets", "Crab sticks", "Avocado slices", "Cucumber strips", "Soy sauce & wasabi"],
    directions: "Lay nori on a bamboo mat, spread sushi rice evenly, add crab, avocado, and cucumber, then roll tightly. Slice and serve with soy sauce and wasabi."
  },
  {
    id: "roastedSalmonModal",
    title: "Roasted Salmon",
    image: salmonImg,
    time: "15 minutes",
    ingredients: ["2 salmon fillets", "1 tbsp olive oil", "Salt & pepper", "1 lemon, sliced", "Fresh herbs (thyme or dill)"],
    directions: "Preheat oven to 200°C. Place salmon on a baking tray, drizzle with olive oil, season with salt and pepper, and top with lemon slices and herbs. Roast for 12–15 minutes until cooked through."
  },
  {
    id: "risottoModal",
    title: "Rizotto",
    image: rizottoImg,
    time: "25 minutes",
    ingredients: ["1 cup Arborio rice", "4 cups chicken or vegetable broth", "1 small onion, finely chopped", "2 tbsp butter", "1/2 cup grated Parmesan", "Salt & pepper to taste"],
    directions: "Sauté onion in butter until soft, add rice and toast for 1-2 minutes. Gradually add warm broth, stirring constantly, until rice is creamy and cooked. Stir in Parmesan, season, and serve hot."
  },
  {
    id: "chocolateCakeModal",
    title: "Chocolate Cake",
    image: cakeImg,
    time: "60 minutes",
    ingredients: ["200g all-purpose flour", "200g sugar", "100g cocoa powder", "2 eggs", "100ml milk", "100g butter (melted)", "1 tsp baking powder", "1 tsp vanilla extract", "Pinch of salt"],
    directions: "Preheat oven to 180°C. Mix flour, cocoa, baking powder, and salt in one bowl. In another bowl, whisk eggs, sugar, milk, butter, and vanilla. Combine mixtures, pour into a greased pan, and bake for 30–35 minutes until cooked through."
  },
  {
    id: "homemadePizzaModal",
    title: "Homemade Pizza",
    image: pizzaImg,
    time: "2 hours",
    ingredients: ["250g all-purpose flour", "150ml warm water", "1 tsp dry yeast", "1 tbsp olive oil", "1/2 tsp salt", "100g mozzarella cheese", "100g tomato sauce", "Fresh basil leaves"],
    directions: "Mix flour, yeast, salt, water, and olive oil to form a dough. Let rise for 1 hour. Roll out, spread tomato sauce, top with mozzarella and basil, then bake at 220°C for 12–15 minutes until golden and bubbly."
  },
  {
    id: "chickenBurritoModal",
    title: "Chicken Burrito",
    image: burritoImg,
    time: "25 minutes",
    ingredients: ["2 large tortillas", "200g cooked chicken breast", "1 ripe avocado", "50g shredded cheese", "½ cup cooked rice (optional)", "½ cup black beans (optional)", "1 tomato", "2 tbsp sour cream or Greek yogurt", "Fresh coriander (optional)", "Salt & pepper"],
    directions: "Warm the tortillas. Slice the chicken and avocado. Layer chicken, avocado, beans, rice, tomato, cheese, and sour cream on each tortilla. Season with salt and pepper, add coriander if desired. Roll into a burrito, tucking the sides in. Serve warm!"
  },
  {
    id: "panFriedSteakModal",
    title: "Pan Fried Steak",
    image: steakImg,
    time: "20 minutes",
    ingredients: ["2 beef steaks (sirloin or ribeye)", "2 tbsp olive oil or butter", "2 cloves garlic, crushed", "Fresh rosemary or thyme (optional)", "Salt & freshly ground black pepper"],
    directions: "Season steaks generously with salt and pepper. Heat oil or butter in a pan over high heat. Add garlic and herbs, then place steaks in the pan. Cook 2–4 minutes per side depending on doneness preference. Rest the steaks for 5 minutes before serving. Enjoy with your favorite sides!"
  }
];

 return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <h1 id="discover">Discover Tasty Recipes</h1><br/>
            <div className="container1">
              {recipesData.map((recipe) => (
                <RecipeCard 
                  key={recipe.id}
                  image={recipe.image} 
                  title={recipe.title} 
                  time={recipe.time} 
                  onViewRecipe={() => setSelectedRecipe(recipe.title)} 
                />
              ))}
            </div>
            
            <RecipeModal isOpen={selectedRecipe !== null} title={selectedRecipe} recipesData={recipesData} onClose={() => setSelectedRecipe(null)} />
            <br/><br/>
            
            <section className="quote">
              <img src={pie} height="330" width="410" alt="pie" />
              <h2>Cooking is love made visible❤️🍩</h2>
            </section><br/><br/>
            <Swiper /><br/><br/>
            <Subscribe/><br/><br/>
          </>
        } />

<Route path="/recipes" element={<OurRecipes recipesData={recipesData} setSelectedRecipe={setSelectedRecipe} />} />    
<Route path="/aboutus" element={<AboutUs/>}></Route>
<Route path="/contact" element={<Contact/>}></Route>
  </Routes>

      <Footer />
    </Router>
  );
}

export default App;
