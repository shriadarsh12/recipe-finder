package com.adarsh.recipefinder.controller;

import com.adarsh.recipefinder.model.IndianRecipe;
import com.adarsh.recipefinder.service.IndianRecipeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/indian-recipes")
public class IndianRecipeController {

    private final IndianRecipeService indianRecipeService;

    public IndianRecipeController(
            IndianRecipeService indianRecipeService
    ) {
        this.indianRecipeService = indianRecipeService;
    }

    @GetMapping
    public ResponseEntity<List<IndianRecipe>> getAllRecipes() {
        return ResponseEntity.ok(
                indianRecipeService.getAllRecipes()
        );
    }

    @GetMapping("/search")
    public ResponseEntity<List<IndianRecipe>> searchRecipes(
            @RequestParam String query
    ) {

        if (query == null || query.trim().isEmpty()) {
            return ResponseEntity.badRequest().build();
        }

        return ResponseEntity.ok(
                indianRecipeService.searchRecipes(query)
        );
    }

    @GetMapping("/random")
    public ResponseEntity<IndianRecipe> getRandomRecipe() {

        IndianRecipe recipe =
                indianRecipeService.getRandomRecipe();

        if (recipe == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(recipe);
    }

    @GetMapping("/{id}")
    public ResponseEntity<IndianRecipe> getRecipe(
            @PathVariable String id
    ) {

        IndianRecipe recipe =
                indianRecipeService.getRecipeById(id);

        if (recipe == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(recipe);
    }
}
