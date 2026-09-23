package com.adarsh.recipefinder.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

@Service
public class RecipeService {

    private final RestTemplate restTemplate = new RestTemplate();

    private static final String BASE_URL =
            "https://www.themealdb.com/api/json/v1/1";

    public String searchRecipes(String query) {

        String url = UriComponentsBuilder
                .fromUriString(BASE_URL + "/search.php")
                .queryParam("s", query)
                .toUriString();

        return restTemplate.getForObject(url, String.class);
    }

    public String getRecipeDetails(String id) {

        String url = UriComponentsBuilder
                .fromUriString(BASE_URL + "/lookup.php")
                .queryParam("i", id)
                .toUriString();

        return restTemplate.getForObject(url, String.class);
    }

    public String getCategories() {

        String url = BASE_URL + "/categories.php";

        return restTemplate.getForObject(url, String.class);
    }

    public String getRecipesByCategory(String category) {

        String url = UriComponentsBuilder
                .fromUriString(BASE_URL + "/filter.php")
                .queryParam("c", category)
                .toUriString();

        return restTemplate.getForObject(url, String.class);
    }

    public String getRandomRecipe() {

        String url = BASE_URL + "/random.php";

        return restTemplate.getForObject(url, String.class);
    }
}