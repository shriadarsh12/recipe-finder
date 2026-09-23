function RecipeModal({ recipe, onClose }) {

    if (!recipe) {
        return null;
    }


    const ingredients = [];


    for (let i = 1; i <= 20; i++) {

        const ingredient =
            recipe[`strIngredient${i}`];

        const measure =
            recipe[`strMeasure${i}`];


        if (
            ingredient &&
            ingredient.trim()
        ) {

            ingredients.push({
                ingredient,
                measure
            });
        }
    }


    return (
        <div
            className="modal-overlay"
            onClick={onClose}
        >

            <div
                className="modal"
                onClick={(event) =>
                    event.stopPropagation()
                }
            >

                <button
                    type="button"
                    className="close-button"
                    onClick={onClose}
                >
                    ✕
                </button>


                <img
                    className="modal-image"
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal}
                />


                <div className="modal-content">

                    <h2>
                        {recipe.strMeal}
                    </h2>


                    <div className="recipe-info">

                        <span>
                            🍽️ {recipe.strCategory}
                        </span>

                        <span>
                            🌎 {recipe.strArea}
                        </span>

                    </div>


                    <h3>
                        🥕 Ingredients
                    </h3>


                    <ul className="ingredients">

                        {ingredients.map(
                            (item, index) => (

                                <li key={index}>

                                    <strong>
                                        {item.ingredient}
                                    </strong>

                                    {item.measure && (
                                        <span>
                                            {" — "}
                                            {item.measure}
                                        </span>
                                    )}

                                </li>

                            )
                        )}

                    </ul>


                    <h3>
                        👨‍🍳 Instructions
                    </h3>


                    <p className="instructions">
                        {recipe.strInstructions}
                    </p>


                    {recipe.strYoutube && (

                        <a
                            className="youtube-button"
                            href={recipe.strYoutube}
                            target="_blank"
                            rel="noreferrer"
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