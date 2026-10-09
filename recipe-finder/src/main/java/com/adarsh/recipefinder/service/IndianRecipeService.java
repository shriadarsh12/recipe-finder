package com.adarsh.recipefinder.service;

import com.adarsh.recipefinder.model.IndianRecipe;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

@Service
public class IndianRecipeService {

    private final List<IndianRecipe> recipes = new ArrayList<>();

    public IndianRecipeService() {
        loadRecipes();
    }

    private void loadRecipes() {

        recipes.add(new IndianRecipe(
                "indian-1",
                "Butter Chicken",
                "Main Course",
                "Indian",
                "https://placehold.co/600x400?text=Butter+Chicken",
                List.of(
                        "Chicken",
                        "Butter",
                        "Tomato Puree",
                        "Cream",
                        "Ginger Garlic Paste",
                        "Garam Masala",
                        "Red Chilli Powder",
                        "Salt"
                ),
                List.of(
                        "500 g",
                        "3 tbsp",
                        "1 cup",
                        "1/2 cup",
                        "1 tbsp",
                        "1 tsp",
                        "1 tsp",
                        "to taste"
                ),
                "Marinate the chicken with spices. Cook the chicken until golden. Prepare a tomato and butter gravy, add cream and cooked chicken, then simmer for 10 to 15 minutes. Serve hot with naan or rice.",
                "https://www.youtube.com/results?search_query=butter+chicken+recipe"
        ));

        recipes.add(new IndianRecipe(
                "indian-2",
                "Paneer Butter Masala",
                "Main Course",
                "Indian",
                "https://placehold.co/600x400?text=Paneer+Butter+Masala",
                List.of(
                        "Paneer",
                        "Butter",
                        "Tomatoes",
                        "Cream",
                        "Onion",
                        "Ginger Garlic Paste",
                        "Garam Masala",
                        "Salt"
                ),
                List.of(
                        "300 g",
                        "2 tbsp",
                        "4",
                        "1/4 cup",
                        "1",
                        "1 tbsp",
                        "1 tsp",
                        "to taste"
                ),
                "Cook onions and tomatoes until soft. Blend them into a smooth gravy. Add butter, spices and cream. Add paneer cubes and simmer for a few minutes. Serve with naan or rice.",
                "https://www.youtube.com/results?search_query=paneer+butter+masala+recipe"
        ));

        recipes.add(new IndianRecipe(
                "indian-3",
                "Palak Paneer",
                "Main Course",
                "Indian",
                "https://placehold.co/600x400?text=Palak+Paneer",
                List.of(
                        "Spinach",
                        "Paneer",
                        "Onion",
                        "Tomato",
                        "Ginger Garlic Paste",
                        "Green Chilli",
                        "Garam Masala",
                        "Cream"
                ),
                List.of(
                        "500 g",
                        "250 g",
                        "1",
                        "2",
                        "1 tbsp",
                        "1",
                        "1 tsp",
                        "2 tbsp"
                ),
                "Blanch spinach and blend into a smooth puree. Cook onion, tomato and spices. Add spinach puree and paneer cubes. Simmer for a few minutes and finish with cream.",
                "https://www.youtube.com/results?search_query=palak+paneer+recipe"
        ));

        recipes.add(new IndianRecipe(
                "indian-4",
                "Chole",
                "Main Course",
                "Indian",
                "https://placehold.co/600x400?text=Chole",
                List.of(
                        "Chickpeas",
                        "Onion",
                        "Tomato",
                        "Ginger Garlic Paste",
                        "Chole Masala",
                        "Cumin",
                        "Red Chilli Powder",
                        "Salt"
                ),
                List.of(
                        "2 cups",
                        "2",
                        "2",
                        "1 tbsp",
                        "2 tbsp",
                        "1 tsp",
                        "1 tsp",
                        "to taste"
                ),
                "Soak chickpeas overnight and pressure cook them. Prepare an onion and tomato masala with spices. Add chickpeas and simmer until the gravy becomes thick. Serve with bhatura, puri or rice.",
                "https://www.youtube.com/results?search_query=chole+recipe"
        ));

        recipes.add(new IndianRecipe(
                "indian-5",
                "Dal Tadka",
                "Main Course",
                "Indian",
                "https://placehold.co/600x400?text=Dal+Tadka",
                List.of(
                        "Yellow Dal",
                        "Onion",
                        "Tomato",
                        "Garlic",
                        "Cumin",
                        "Ghee",
                        "Turmeric",
                        "Salt"
                ),
                List.of(
                        "1 cup",
                        "1",
                        "1",
                        "4 cloves",
                        "1 tsp",
                        "1 tbsp",
                        "1/2 tsp",
                        "to taste"
                ),
                "Cook the dal with turmeric and salt. Prepare a tadka using ghee, cumin, garlic, onion and tomato. Pour the tadka over the cooked dal and serve hot with rice or roti.",
                "https://www.youtube.com/results?search_query=dal+tadka+recipe"
        ));

        recipes.add(new IndianRecipe(
                "indian-6",
                "Aloo Paratha",
                "Breakfast",
                "Indian",
                "https://placehold.co/600x400?text=Aloo+Paratha",
                List.of(
                        "Wheat Flour",
                        "Potatoes",
                        "Green Chilli",
                        "Coriander",
                        "Red Chilli Powder",
                        "Garam Masala",
                        "Salt",
                        "Oil"
                ),
                List.of(
                        "2 cups",
                        "4",
                        "2",
                        "2 tbsp",
                        "1/2 tsp",
                        "1/2 tsp",
                        "to taste",
                        "as required"
                ),
                "Boil and mash potatoes. Mix with spices, chilli and coriander. Prepare a dough with wheat flour. Fill the dough with potato mixture, roll and cook on a hot tawa using oil or ghee.",
                "https://www.youtube.com/results?search_query=aloo+paratha+recipe"
        ));

        recipes.add(new IndianRecipe(
                "indian-7",
                "Masala Dosa",
                "Breakfast",
                "Indian",
                "https://placehold.co/600x400?text=Masala+Dosa",
                List.of(
                        "Dosa Batter",
                        "Potatoes",
                        "Onion",
                        "Mustard Seeds",
                        "Curry Leaves",
                        "Green Chilli",
                        "Turmeric",
                        "Oil"
                ),
                List.of(
                        "3 cups",
                        "4",
                        "1",
                        "1 tsp",
                        "10",
                        "2",
                        "1/2 tsp",
                        "as required"
                ),
                "Prepare potato masala by cooking potatoes with onion, mustard seeds, curry leaves and spices. Spread dosa batter thinly on a hot pan. Add potato masala, fold and serve with chutney and sambar.",
                "https://www.youtube.com/results?search_query=masala+dosa+recipe"
        ));

        recipes.add(new IndianRecipe(
                "indian-8",
                "Vegetable Biryani",
                "Main Course",
                "Indian",
                "https://placehold.co/600x400?text=Vegetable+Biryani",
                List.of(
                        "Basmati Rice",
                        "Mixed Vegetables",
                        "Onion",
                        "Tomato",
                        "Yogurt",
                        "Biryani Masala",
                        "Mint",
                        "Salt"
                ),
                List.of(
                        "2 cups",
                        "2 cups",
                        "2",
                        "2",
                        "1/2 cup",
                        "2 tbsp",
                        "1/4 cup",
                        "to taste"
                ),
                "Cook basmati rice until partially done. Prepare vegetable masala with onion, tomato, yogurt and spices. Layer rice and vegetable masala, add mint and cook on low heat until fully done.",
                "https://www.youtube.com/results?search_query=vegetable+biryani+recipe"
        ));

        recipes.add(new IndianRecipe(
                "indian-9",
                "Samosa",
                "Snack",
                "Indian",
                "https://placehold.co/600x400?text=Samosa",
                List.of(
                        "All Purpose Flour",
                        "Potatoes",
                        "Peas",
                        "Green Chilli",
                        "Cumin",
                        "Garam Masala",
                        "Salt",
                        "Oil"
                ),
                List.of(
                        "2 cups",
                        "4",
                        "1/2 cup",
                        "2",
                        "1 tsp",
                        "1 tsp",
                        "to taste",
                        "for frying"
                ),
                "Prepare a firm dough using flour. Make a potato and pea filling with spices. Shape the dough into samosas, fill them and seal. Deep fry until golden and crispy.",
                "https://www.youtube.com/results?search_query=samosa+recipe"
        ));

        recipes.add(new IndianRecipe(
                "indian-10",
                "Gulab Jamun",
                "Dessert",
                "Indian",
                "https://placehold.co/600x400?text=Gulab+Jamun",
                List.of(
                        "Milk Powder",
                        "All Purpose Flour",
                        "Milk",
                        "Ghee",
                        "Sugar",
                        "Water",
                        "Cardamom"
                ),
                List.of(
                        "1 cup",
                        "1/4 cup",
                        "as required",
                        "1 tbsp",
                        "2 cups",
                        "1 cup",
                        "2"
                ),
                "Prepare a soft dough using milk powder, flour, milk and ghee. Shape into small balls. Deep fry on low heat until golden. Prepare sugar syrup with water and cardamom. Soak the fried balls in warm syrup.",
                "https://www.youtube.com/results?search_query=gulab+jamun+recipe"
        ));
    }

    public List<IndianRecipe> getAllRecipes() {
        return recipes;
    }

    public List<IndianRecipe> searchRecipes(String query) {
        String search = query.trim().toLowerCase();

        return recipes.stream()
                .filter(recipe ->
                        recipe.getName().toLowerCase().contains(search)
                                || recipe.getCategory().toLowerCase().contains(search)
                                || recipe.getCuisine().toLowerCase().contains(search)
                )
                .collect(Collectors.toList());
    }

    public IndianRecipe getRecipeById(String id) {
        return recipes.stream()
                .filter(recipe -> recipe.getId().equals(id))
                .findFirst()
                .orElse(null);
    }

    public IndianRecipe getRandomRecipe() {
        if (recipes.isEmpty()) {
            return null;
        }

        return recipes.get(
                new Random().nextInt(recipes.size())
        );
    }
}
