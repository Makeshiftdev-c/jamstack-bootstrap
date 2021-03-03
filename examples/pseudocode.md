---
title: Pseudocode
description: This is a post on My Blog about touchpoints and circling wagons.
date: 2018-09-30
tags:
  - second-tag
  - third
layout: layouts/example.njk
image: https://cdn.pixabay.com/photo/2017/10/24/07/12/hacker-2883632_960_720.jpg
---

<div class="container mt-4">
    <h1>Pseudocode tasks</h1>
    <p>Open the console to view the results.</p>
</div>

<div class="container mt-4">
    <code>
        <pre>
            LOOP through numbers 0 - 100
                IF the number is a multiple of 3 and 5
                    THEN output "fizzbuzz"
                ELSE IF number is a multiple of 3
                    THEN output "fizz"
                ELSE IF the number is a multiple of 5
                    THEN output "buzz"
                ELSE
                    THEN output number
        </pre>
    </code>
</div>

<!--
Create an object to hold information on your favourite recipes. It should have properties for:
recipeTitle (a string)
servings (a number)
ingredients (an array of strings)
directions (a string)
List all recipes
Create a loop to list all the ingredients.
 -->

<div class="container mt-4">
    <code>
        <pre>
            LOOP through recipes
                THEN output recipe recipeTitle
                LOOP through ingredients
                    THEN output recipe ingredients
        </pre>
    </code>
</div>

<script>
console.log("--- Task 1 ---");
 //LOOP through numbers 0 - 100
 for (let counter = 1; counter <= 100; counter++) {
        let message = ""
        //    IF the number is a multiple of 3 and 5
        if (counter % 15 == 0) {
            //    THEN output "fizzbuzz"
            message += "fizzbuzz";
        }
        //    ELSE IF number is a multiple of 3
        else if (counter % 3 == 0) {
            
            //    THEN output "fizz"
            message += "fizz"
        }
        //    ELSE IF the number is a multiple of 5
        else if (counter % 5 == 0) {
            //    THEN output "buzz"
            message += "buzz";
        }
        //    ELSE
        else {
            message = counter;
        }
            //    THEN output number
        console.log(message);
 }
console.log("--- End of Task 1 ---");


console.log("--- Task 2 ---");
 let favoriteRecipes = {
    recipeTitle: "flomboyay", //(a string)
    servings: 1, //(a number)
    ingredients: ["eggs", "sugar", "honey", "spice"], //(an array of strings)
    directions:  "stir well and flomboyay" //(a string)
 };

//LOOP through recipes
            //    THEN output recipe recipeTitle
            //    LOOP through ingredients
                //    THEN output recipe ingredients

console.log("--- End of Task 2 ---");
</script>
