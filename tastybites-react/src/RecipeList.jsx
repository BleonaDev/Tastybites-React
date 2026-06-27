import RecipeCard from "./RecipeCard";

function RecipeList({ recipes }) {
  return (
    <div className="grid md:grid-cols-3 gap-6 px-6">
      {recipes.map((r) => (
        <RecipeCard key={r.id} recipe={r} />
      ))}
    </div>
  );
}

export default RecipeList;