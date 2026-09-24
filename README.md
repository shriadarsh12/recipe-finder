#  Recipe Finder

A full-stack Recipe Finder web application built using **React.js, Java Spring Boot, and TheMealDB API**.

The application allows users to search for recipes, browse recipes by category, view complete recipe details, save favorite recipes, and discover random recipes.

===========================================================================

##  Project Overview

Recipe Finder provides a simple and user-friendly interface for discovering recipes.

The React frontend communicates with a Java Spring Boot REST API, which handles requests to the external TheMealDB API and returns recipe data to the frontend.
===========================================================================
### Application Flow

```text
User
  │
  ▼
React.js Frontend
  │
  │ REST API
  ▼
Spring Boot Backend
  │
  │ HTTP Request
  ▼
TheMealDB API
  │
  ▼
Recipe Data
  │
  ▼
React.js UI
===========================================================================
Features
 Search recipes by name
 Browse recipes by category
 View complete recipe details
 View ingredients and measurements
 View cooking instructions
 Add and remove favorite recipes
 Store favorite recipes using browser localStorage
 Discover a random recipe using "Surprise Me"
 Display recipe cuisine/area
 Recipe images
 Loading state
 Error handling
 Responsive user interface
 REST API integration
 React.js frontend
 Java Spring Boot backend
 Docker support
==================================================================================
Tech Stack
Frontend
React.js
Vite
JavaScript
HTML5
CSS3
===================================================================================
Backend
Java 17
Spring Boot
REST APIs
Maven
External API
TheMealDB API
Development Tools
Visual Studio Code
Git
GitHub
Postman
Docker
=================================================================================
📁 Project Structure
recipe-finder/
│
├── frontend/
│   └── recipe-finder-ui/
│       │
│       ├── public/
│       │
│       ├── src/
│       │   ├── components/
│       │   │   ├── RecipeCard.jsx
│       │   │   └── RecipeModal.jsx
│       │   │
│       │   ├── App.jsx
│       │   ├── App.css
│       │   ├── index.css
│       │   └── main.jsx
│       │
│       ├── package.json
│       └── vite.config.js
│
├── recipe-finder/
│   │
│   ├── src/
│   │   └── main/
│   │       ├── java/
│   │       │   └── com/
│   │       │       └── adarsh/
│   │       │           └── recipefinder/
│   │       │               │
│   │       │               ├── config/
│   │       │               │   └── CorsConfig.java
│   │       │               │
│   │       │               ├── controller/
│   │       │               │   └── RecipeController.java
│   │       │               │
│   │       │               ├── service/
│   │       │               │   └── RecipeService.java
│   │       │               │
│   │       │               └── RecipeFinderApplication.java
│   │       │
│   │       └── resources/
│   │
│   ├── pom.xml
│   ├── mvnw
│   └── mvnw.cmd
│
├── .gitignore
├── Dockerfile
└── README.md
