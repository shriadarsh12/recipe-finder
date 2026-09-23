package com.adarsh.recipefinder.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.adarsh.recipefinder.service.RecipeService;

@RestController
@RequestMapping("/api/recipes")
public class RecipeController {

    private final RecipeService recipeService;

    public RecipeController(RecipeService recipeService) {
        this.recipeService = recipeService;
    }

    @GetMapping("/search")
    public ResponseEntity<String> searchRecipes(
            @RequestParam String query) {

        if (query == null || query.trim().isEmpty()) {
            return ResponseEntity.badRequest()
                    .body("{\"error\":\"Search query cannot be empty\"}");
        }

        return ResponseEntity.ok(
                recipeService.searchRecipes(query.trim())
        );
    }

    @GetMapping("/details/{id}")
    public ResponseEntity<String> getRecipeDetails(
            @PathVariable String id) {

        return ResponseEntity.ok(
                recipeService.getRecipeDetails(id)
        );
    }

    @GetMapping("/categories")
    public ResponseEntity<String> getCategories() {

        return ResponseEntity.ok(
                recipeService.getCategories()
        );
    }

    @GetMapping("/category/{category}")
    public ResponseEntity<String> getRecipesByCategory(
            @PathVariable String category) {

        return ResponseEntity.ok(
                recipeService.getRecipesByCategory(category)
        );
    }

    @GetMapping("/random")
    public ResponseEntity<String> getRandomRecipe() {

        return ResponseEntity.ok(
                recipeService.getRandomRecipe()
        );
    }
}