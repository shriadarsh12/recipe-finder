function RecipeCard({ recipe, onViewDetails, onFavorite, isFavorite }) {
    const handleDetailsClick = () => onViewDetails(recipe.idMeal);

    const handleFavoriteClick = (event) => {
        event.stopPropagation();
        onFavorite(recipe);
    };

    const handleImageError = (event) => {
        event.currentTarget.onerror = null;
        event.currentTarget.src = "/recipe-placeholder.svg";
    };

    return (
        <div className="recipe-card">
            <div
                className="image-container"
                onClick={handleDetailsClick}
                style={{ cursor: "pointer" }}
            >
                <img
                    src={recipe.strMealThumb || "/recipe-placeholder.svg"}
                    alt={recipe.strMeal}
                    onError={handleImageError}
                />
                <button
                    type="button"
                    className="favorite-button"
                    onClick={handleFavoriteClick}
                    aria-label={isFavorite ? "Remove from favourites" : "Add to favourites"}
                >
                    {isFavorite ? "❤️" : "🤍"}
                </button>
            </div>

            <div className="recipe-content">
                <span className="category">{recipe.strCategory || "Recipe"}</span>
                <h2>{recipe.strMeal}</h2>
                <p>🌎 {recipe.strArea || "International"}</p>
                <button
                    type="button"
                    className="details-button"
                    onClick={handleDetailsClick}
                >
                    View Recipe
                </button>
            </div>
        </div>
    );
}

export default RecipeCard;