import { useState , useEffect } from "react";
import stars from './assets/stars.png';
import timeImage from './assets/time.png';

function FavoriteButton({ recipeTitle }) {
  const [isFavorite, setIsFavorite] = useState(() => {
    const saved = localStorage.getItem(`fav-${recipeTitle}`);
    return saved === 'true'; 
  });
  const [showMessage,setShowMessage]=useState(false);
  const [isRed,setIsRed]=useState(false);

  useEffect(() => {
    localStorage.setItem(`fav-${recipeTitle}`, isFavorite);
  }, [isFavorite, recipeTitle]);

  const handleFavClick = () => {
    setIsFavorite(!isFavorite); 
    setIsRed(true);         
    setShowMessage(true);  
    setTimeout(() => {
      setIsRed(false);
      setShowMessage(false);
    }, 2000);
  };

  return (
    <>
      <button className="fav-btn" onClick={handleFavClick}>
        <i 
          className="fas fa-heart" 
          style={{ color: isRed ? 'red' : 'grey' }} 
        ></i>
      </button>
      
      {showMessage && <div className="added-btn">Recipe added to favourites✅</div>}  
    </>
  );

}

function RecipeCard({ image, title, time, onViewRecipe }) {
  return (
    <div className="food">
      <img src={image} id="foodimg" alt={title}/>
      <h3>{title}</h3>
      
      <div className="specifics">
        <img src={timeImage} width="30" height="30" alt="time"/>
        <span>{time}</span>
        
        <FavoriteButton recipeTitle={title} />
      </div>      
      
      <img src={stars} width="110" height="24" style={{ marginLeft: "54px" }} alt="stars"/>
      <button type="button" className="view" onClick={onViewRecipe}>View recipe</button> 
    </div>
    
  );
}

export { FavoriteButton };
export default RecipeCard;