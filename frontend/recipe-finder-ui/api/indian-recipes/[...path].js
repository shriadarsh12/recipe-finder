const recipes = [
  { id: "indian-1", name: "Butter Chicken", category: "Chicken", cuisine: "Indian", image: "https://www.themealdb.com/images/media/meals/uuqvwu1504629254.jpg", instructions: "Marinate chicken with yogurt and spices. Cook it, prepare tomato butter gravy, add cream and simmer until cooked.", ingredients: ["Chicken", "Yogurt", "Tomatoes", "Butter", "Cream"], measurements: ["500 g", "1 cup", "3", "2 tbsp", "1/2 cup"] },
  { id: "indian-2", name: "Paneer Butter Masala", category: "Vegetarian", cuisine: "Indian", image: "", instructions: "Cook tomatoes, butter, cashews and spices into a gravy. Add paneer and cream and simmer.", ingredients: ["Paneer", "Tomatoes", "Butter", "Cashews", "Cream"], measurements: ["250 g", "3", "2 tbsp", "10", "1/4 cup"] },
  { id: "indian-3", name: "Palak Paneer", category: "Vegetarian", cuisine: "Indian", image: "", instructions: "Blend blanched spinach. Cook with garlic, onion and spices, then add paneer cubes.", ingredients: ["Spinach", "Paneer", "Onion", "Garlic"], measurements: ["300 g", "200 g", "1", "4 cloves"] },
  { id: "indian-4", name: "Chole", category: "Vegetarian", cuisine: "Indian", image: "", instructions: "Boil soaked chickpeas. Cook onion, tomatoes and chole spices, add chickpeas and simmer.", ingredients: ["Chickpeas", "Onion", "Tomatoes", "Chole masala"], measurements: ["2 cups", "1", "2", "2 tbsp"] },
  { id: "indian-5", name: "Dal Tadka", category: "Vegetarian", cuisine: "Indian", image: "", instructions: "Boil lentils until soft. Temper ghee with cumin, garlic and spices and mix into the dal.", ingredients: ["Lentils", "Ghee", "Cumin", "Garlic"], measurements: ["1 cup", "2 tbsp", "1 tsp", "4 cloves"] },
  { id: "indian-6", name: "Aloo Paratha", category: "Vegetarian", cuisine: "Indian", image: "", instructions: "Fill wheat dough with spiced mashed potatoes, roll and cook on a hot griddle with ghee.", ingredients: ["Wheat flour", "Potatoes", "Green chilli", "Ghee"], measurements: ["2 cups", "3", "1", "As needed"] },
  { id: "indian-7", name: "Masala Dosa", category: "Vegetarian", cuisine: "Indian", image: "", instructions: "Spread dosa batter thinly on a hot pan. Add spiced potato filling, fold and serve.", ingredients: ["Dosa batter", "Potatoes", "Onion", "Curry leaves"], measurements: ["2 cups", "3", "1", "8 leaves"] },
  { id: "indian-8", name: "Vegetable Biryani", category: "Vegetarian", cuisine: "Indian", image: "", instructions: "Layer partially cooked basmati rice with spiced vegetables, herbs and fried onions. Cook covered until done.", ingredients: ["Basmati rice", "Mixed vegetables", "Yogurt", "Mint"], measurements: ["2 cups", "2 cups", "1/2 cup", "1 handful"] },
  { id: "indian-9", name: "Samosa", category: "Vegetarian", cuisine: "Indian", image: "", instructions: "Fill pastry dough with spiced potatoes and peas. Shape into triangles and fry until crisp.", ingredients: ["Flour", "Potatoes", "Peas", "Oil"], measurements: ["2 cups", "3", "1/2 cup", "For frying"] },
  { id: "indian-10", name: "Gulab Jamun", category: "Dessert", cuisine: "Indian", image: "", instructions: "Make soft milk-powder dough balls. Fry on low heat until golden and soak in warm cardamom sugar syrup.", ingredients: ["Milk powder", "Flour", "Milk", "Sugar", "Cardamom"], measurements: ["1 cup", "2 tbsp", "As needed", "1 cup", "2 pods"] }
];

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const url = new URL(req.url, "http://localhost");
  const parts = url.pathname.split("/").filter(Boolean).slice(2);
  const route = parts[0];

  if (!route) return res.status(200).json(recipes);

  if (route === "search") {
    const query = (url.searchParams.get("query") || "").toLowerCase().trim();
    const results = recipes.filter(recipe =>
      [recipe.name, recipe.category, recipe.cuisine, recipe.instructions, ...recipe.ingredients]
        .join(" ").toLowerCase().includes(query)
    );
    return res.status(200).json(results);
  }

  if (route === "random") {
    return res.status(200).json(recipes[Math.floor(Math.random() * recipes.length)]);
  }

  const recipe = recipes.find(item => item.id === decodeURIComponent(route));
  if (!recipe) return res.status(404).json({ error: "Indian recipe not found" });

  return res.status(200).json(recipe);
}