import { useEffect, useState } from "react";
import RecipeCard from "./components/RecipeCard";
import RecipeModal from "./components/RecipeModal";
import "./App.css";


const API_URL =
    import.meta.env.VITE_API_URL ||
    "http://localhost:8080/api/recipes";


function App() {

    const [query, setQuery] = useState("chicken");

    const [recipes, setRecipes] =
        useState([]);

    const [categories, setCategories] =
        useState([]);

    const [selectedCategory, setSelectedCategory] =
        useState("");


    const [selectedRecipe, setSelectedRecipe] =
        useState(null);


    const [favorites, setFavorites] =
        useState(() => {

            const saved =
                localStorage.getItem(
                    "recipeFavorites"
                );

            return saved
                ? JSON.parse(saved)
                : [];
        });


    const [loading, setLoading] =
        useState(false);

    const [detailsLoading, setDetailsLoading] =
        useState(false);

    const [error, setError] =
        useState("");

    const [showFavorites, setShowFavorites] =
        useState(false);


    /* --------------------------------
       SAVE FAVORITES
    -------------------------------- */

    useEffect(() => {

        localStorage.setItem(
            "recipeFavorites",
            JSON.stringify(favorites)
        );

    }, [favorites]);


    /* --------------------------------
       INITIAL LOAD
    -------------------------------- */

    useEffect(() => {

        loadCategories();
        searchRecipes("chicken");

    }, []);


    /* --------------------------------
       LOAD CATEGORIES
    -------------------------------- */

    const loadCategories = async () => {

        try {

            const response =
                await fetch(
                    `${API_URL}/categories`
                );


            if (!response.ok) {
                throw new Error(
                    "Category API failed"
                );
            }


            const data =
                await response.json();


            setCategories(
                data.categories || []
            );

        } catch (error) {

            console.error(
                "Category error:",
                error
            );

        }
    };


    /* --------------------------------
       SEARCH RECIPES
    -------------------------------- */

    const searchRecipes = async (
        searchQuery = query
    ) => {

        const cleanQuery =
            searchQuery.trim();


        if (!cleanQuery) {

            setError(
                "Please enter a recipe name."
            );

            return;
        }


        setLoading(true);
        setError("");
        setShowFavorites(false);
        setSelectedCategory("");


        try {

            const response =
                await fetch(
                    `${API_URL}/search?query=${encodeURIComponent(
                        cleanQuery
                    )}`
                );


            if (!response.ok) {

                throw new Error(
                    `Search API failed: ${response.status}`
                );
            }


            const data =
                await response.json();


            if (!data.meals) {

                setRecipes([]);

                setError(
                    "No recipes found. Try another search."
                );

            } else {

                setRecipes(
                    data.meals
                );
            }


        } catch (error) {

            console.error(
                "Search error:",
                error
            );


            setRecipes([]);


            setError(
                "Unable to connect to the recipe server."
            );

        } finally {

            setLoading(false);

        }
    };


    /* --------------------------------
       CATEGORY SEARCH
    -------------------------------- */

    const searchByCategory =
        async (category) => {

            if (!category) {
                return;
            }


            setLoading(true);
            setError("");
            setSelectedCategory(category);
            setShowFavorites(false);


            try {

                const response =
                    await fetch(
                        `${API_URL}/category/${encodeURIComponent(
                            category
                        )}`
                    );


                if (!response.ok) {

                    throw new Error(
                        `Category API failed: ${response.status}`
                    );
                }


                const data =
                    await response.json();


                setRecipes(
                    data.meals || []
                );


            } catch (error) {

                console.error(
                    "Category error:",
                    error
                );


                setRecipes([]);


                setError(
                    "Unable to load category recipes."
                );

            } finally {

                setLoading(false);

            }
        };


    /* --------------------------------
       RECIPE DETAILS
    -------------------------------- */

    const openRecipeDetails =
        async (id) => {

            console.log(
                "Opening recipe:",
                id
            );


            setDetailsLoading(true);
            setError("");


            try {

                const response =
                    await fetch(
                        `${API_URL}/details/${id}`
                    );


                console.log(
                    "Details status:",
                    response.status
                );


                if (!response.ok) {

                    throw new Error(
                        `Details API failed: ${response.status}`
                    );
                }


                const data =
                    await response.json();


                console.log(
                    "Details response:",
                    data
                );


                const recipe =
                    data.meals?.[0];


                if (!recipe) {

                    throw new Error(
                        "Recipe details not found"
                    );
                }


                setSelectedRecipe(recipe);


            } catch (error) {

                console.error(
                    "Recipe details error:",
                    error
                );


                setSelectedRecipe(null);


                setError(
                    "Unable to load recipe details."
                );

            } finally {

                setDetailsLoading(false);

            }
        };


    /* --------------------------------
       RANDOM RECIPE
    -------------------------------- */

    const loadRandomRecipe =
        async () => {

            setDetailsLoading(true);
            setError("");


            try {

                const response =
                    await fetch(
                        `${API_URL}/random`
                    );


                if (!response.ok) {

                    throw new Error(
                        "Random API failed"
                    );
                }


                const data =
                    await response.json();


                const recipe =
                    data.meals?.[0];


                if (!recipe) {

                    throw new Error(
                        "Random recipe not found"
                    );
                }


                setSelectedRecipe(recipe);


            } catch (error) {

                console.error(
                    "Random recipe error:",
                    error
                );


                setError(
                    "Unable to load random recipe."
                );

            } finally {

                setDetailsLoading(false);

            }
        };


    /* --------------------------------
       FAVORITES
    -------------------------------- */

    const toggleFavorite =
        (recipe) => {

            const exists =
                favorites.some(
                    (item) =>
                        item.idMeal ===
                        recipe.idMeal
                );


            if (exists) {

                setFavorites(
                    favorites.filter(
                        (item) =>
                            item.idMeal !==
                            recipe.idMeal
                    )
                );

            } else {

                setFavorites([
                    ...favorites,
                    recipe
                ]);

            }
        };


    const isFavorite =
        (id) => {

            return favorites.some(
                (recipe) =>
                    recipe.idMeal === id
            );
        };


    /* --------------------------------
       DISPLAY RECIPES
    -------------------------------- */

    const displayedRecipes =
        showFavorites
            ? favorites
            : recipes;


    /* --------------------------------
       UI
    -------------------------------- */

    return (

        <div className="app">


            <header className="hero">


                <nav className="navbar">

                    <div className="logo">
                        🍴 Recipe Finder
                    </div>


                    <button
                        type="button"
                        className="favorites-nav"
                        onClick={() => {

                            setShowFavorites(true);
                            setSelectedCategory("");
                            setError("");

                        }}
                    >
                        ❤️ Favorites ({favorites.length})
                    </button>

                </nav>


                <div className="hero-content">

                    <h1>
                        Find Your Perfect Recipe
                    </h1>


                    <p>
                        Discover delicious recipes,
                        ingredients and cooking instructions.
                    </p>


                    <div className="search-box">

                        <input
                            type="text"
                            value={query}
                            placeholder="Search chicken, pasta, pizza..."
                            onChange={(event) =>
                                setQuery(
                                    event.target.value
                                )
                            }
                            onKeyDown={(event) => {

                                if (
                                    event.key ===
                                    "Enter"
                                ) {

                                    searchRecipes();

                                }

                            }}
                        />


                        <button
                            type="button"
                            onClick={() =>
                                searchRecipes()
                            }
                        >
                            🔎 Search
                        </button>

                    </div>


                    <button
                        type="button"
                        className="random-button"
                        onClick={
                            loadRandomRecipe
                        }
                    >
                        🎲 Surprise Me
                    </button>

                </div>

            </header>


            <main className="main-container">


                <section className="categories">

                    <h2>
                        Browse Categories
                    </h2>


                    <div className="category-list">

                        {categories.map(
                            (category) => (

                                <button
                                    type="button"
                                    key={
                                        category.idCategory
                                    }
                                    className={
                                        selectedCategory ===
                                        category.strCategory
                                            ? "category-button active"
                                            : "category-button"
                                    }
                                    onClick={() =>
                                        searchByCategory(
                                            category.strCategory
                                        )
                                    }
                                >
                                    {
                                        category.strCategory
                                    }
                                </button>

                            )
                        )}

                    </div>

                </section>


                <section className="recipes-section">


                    <div className="section-header">

                        <div>

                            <h2>

                                {showFavorites
                                    ? "❤️ My Favorites"
                                    : selectedCategory
                                    ? `${selectedCategory} Recipes`
                                    : "🍽️ Recipes"}

                            </h2>


                            <p>

                                {
                                    displayedRecipes.length
                                }{" "}
                                recipes found

                            </p>

                        </div>

                    </div>


                    {loading && (

                        <div className="loading">

                            <div className="spinner"></div>

                            <p>
                                Finding delicious recipes...
                            </p>

                        </div>

                    )}


                    {detailsLoading && (

                        <div className="loading">

                            <div className="spinner"></div>

                            <p>
                                Loading recipe details...
                            </p>

                        </div>

                    )}


                    {error && !loading && (

                        <div className="error-box">

                            <span>
                                ⚠️
                            </span>

                            <p>
                                {error}
                            </p>

                        </div>

                    )}


                    {!loading &&
                        !detailsLoading &&
                        !error &&
                        displayedRecipes.length === 0 && (

                            <div className="empty">

                                <div>
                                    🍳
                                </div>

                                <h3>
                                    No recipes here
                                </h3>

                                <p>
                                    Search for a recipe
                                    to get started.
                                </p>

                            </div>

                        )}


                    {!loading &&
                        displayedRecipes.length > 0 && (

                            <div className="recipe-grid">

                                {displayedRecipes.map(
                                    (recipe) => (

                                        <RecipeCard
                                            key={
                                                recipe.idMeal
                                            }
                                            recipe={
                                                recipe
                                            }
                                            onViewDetails={
                                                openRecipeDetails
                                            }
                                            onFavorite={
                                                toggleFavorite
                                            }
                                            isFavorite={
                                                isFavorite(
                                                    recipe.idMeal
                                                )
                                            }
                                        />

                                    )
                                )}

                            </div>

                        )}

                </section>

            </main>


            {selectedRecipe && (

                <RecipeModal
                    recipe={
                        selectedRecipe
                    }
                    onClose={() =>
                        setSelectedRecipe(
                            null
                        )
                    }
                />

            )}


        </div>
    );
}


export default App;