function RecipeModal({ recipe, onClose }) {
    if (!recipe) return null;

    const ingredients = [];

    for (let i = 1; i <= 20; i++) {
        const ingredient = recipe[`strIngredient${i}`];
        const measure = recipe[`strMeasure${i}`];

        if (ingredient && ingredient.trim()) {
            ingredients.push({ ingredient, measure });
        }
    }

    const handleImageError = (event) => {
        event.currentTarget.onerror = null;
        event.currentTarget.src = "/recipe-placeholder.svg";
    };

    const youtubeUrl = recipe.strYoutube;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={(event) => event.stopPropagation()}>
                <button
                    type="button"
                    className="close-button"
                    onClick={onClose}
                    aria-label="Close recipe details"
                >
                    ✕
                </button>

                <img
                    className="modal-image"
                    src={recipe.strMealThumb || "/recipe-placeholder.svg"}
                    alt={recipe.strMeal}
                    onError={handleImageError}
                />

                <div className="modal-content">
                    <h2>{recipe.strMeal}</h2>

                    <div className="recipe-info">
                        <span>🍽️ {recipe.strCategory || "Recipe"}</span>
                        <span>🌎 {recipe.strArea || "Indian"}</span>
                    </div>

                    <h3>🥕 Ingredients</h3>
                    <ul className="ingredients">
                        {ingredients.map((item, index) => (
                            <li key={`${item.ingredient}-${index}`}>
                                <strong>{item.ingredient}</strong>
                                {item.measure && <span>{" — "}{item.measure}</span>}
                            </li>
                        ))}
                    </ul>

                    <h3>👨‍🍳 Instructions</h3>
                    <p className="instructions">
                        {recipe.strInstructions || "Instructions are not available."}
                    </p>

                    {youtubeUrl && (
                        <a
                            className="youtube-button"
                            href={youtubeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            ▶ Watch Recipe Video
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default RecipeModal;