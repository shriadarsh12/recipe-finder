package com.adarsh.recipefinder.model;

import java.util.List;

public class IndianRecipe {

    private String id;
    private String name;
    private String category;
    private String cuisine;
    private String image;
    private List<String> ingredients;
    private List<String> measurements;
    private String instructions;
    private String youtubeUrl;

    public IndianRecipe() {
    }

    public IndianRecipe(
            String id,
            String name,
            String category,
            String cuisine,
            String image,
            List<String> ingredients,
            List<String> measurements,
            String instructions,
            String youtubeUrl
    ) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.cuisine = cuisine;
        this.image = image;
        this.ingredients = ingredients;
        this.measurements = measurements;
        this.instructions = instructions;
        this.youtubeUrl = youtubeUrl;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getCuisine() {
        return cuisine;
    }

    public void setCuisine(String cuisine) {
        this.cuisine = cuisine;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public List<String> getIngredients() {
        return ingredients;
    }

    public void setIngredients(List<String> ingredients) {
        this.ingredients = ingredients;
    }

    public List<String> getMeasurements() {
        return measurements;
    }

    public void setMeasurements(List<String> measurements) {
        this.measurements = measurements;
    }

    public String getInstructions() {
        return instructions;
    }

    public void setInstructions(String instructions) {
        this.instructions = instructions;
    }

    public String getYoutubeUrl() {
        return youtubeUrl;
    }

    public void setYoutubeUrl(String youtubeUrl) {
        this.youtubeUrl = youtubeUrl;
    }
}
