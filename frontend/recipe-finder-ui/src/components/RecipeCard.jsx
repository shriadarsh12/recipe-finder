function RecipeCard({
    recipe,
    onViewDetails,
    onFavorite,
    isFavorite
}) {

    const handleDetailsClick = () => {
        console.log("VIEW RECIPE CLICKED:", recipe.idMeal);
        onViewDetails(recipe.idMeal);
    };

    const handleFavoriteClick = (event) => {
        event.stopPropagation();
        onFavorite(recipe);
    };

    return (
        <div className="recipe-card">

            <div
                className="image-container"
                onClick={handleDetailsClick}
                style={{ cursor: "pointer" }}
            >

                <img
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal}
                />

                <button
                    type="button"
                    className="favorite-button"
                    onClick={handleFavoriteClick}
                >
                    {isFavorite ? "❤️" : "🤍"}
                </button>

            </div>


            <div className="recipe-content">

                <span className="category">
                    {recipe.strCategory || "Recipe"}
                </span>


                <h2>
                    {recipe.strMeal}
                </h2>


                <p>
                    🌎 {recipe.strArea || "International"}
                </p>


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