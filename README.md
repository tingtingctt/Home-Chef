This website is a meal planning organization tool design to keep all of your planning needs in one place.

There are three html pages. 
    - index.html, which houses the homepage with your current recipe and the drop-down holdings of your planned meals
    - recipe.html, which is the page that supports finding a new recipe and then adding it to your plan
    - grocerylist.html, which contains your grocery list.


    - Bootstrap is used throughout the website, as is jQuery. 
    - Links to specific google fonts are also used in the website
    - TT Images in assets holds all the images used during the project across the html pages
    - Each html page has a favicon link rel in their head sections to have the homepage first image as a favicon

index.html:

    - A landing picture at the top that would be used to log-in and make your settings with back-end later
        - This page currently allows you to choose an avatar - if you pick one and click on it, it randomly dances around the page
        - There is an arrow in the top right corner: if you click on it, it slides you down to the navbar (clicking on settings slides you back up)

    - A navbar that directs you to the other pages

    - A drop-down section that gets from local storage each corresponding meal that you've set - you can also set an easy meal, like cereal that you do not need a recipe for

    - The local date displayed.

    - IF you have selected a meal/recipe for this meal slot, then you will have:

        - The title of the recipe next to the date

        - A clickable giphy gif that depicts the meal that you chose when searching for recipes

        - A picture and name of the chef you chose for your meal
            - If you click on the picture of the chef, images pop out that you can click on to determine the pages theme

        - Ingredients and instructions for your meal

        -If you click on the picture of the garden, a fun pop-up appears where you can make mushrooms grow!

index.html JS

    - TTscript.js
        - This script handles a lot of the visual effects.

            - It is where the avatars that you pick from the html are stored and shown from
                - Has the code for their random movement

            - It has the animation for the screen automatically scrolling down after you click on the arrow in the top right corner, and then scrolling back up after settings

            - There is code that prepends the date from the computer, to get the local date

            - The code that brings out the theme icons is here, as well as hiding them.

            - The next lines of code have the onclick events that allow you to change the background by clicking on the theme icons

            - The last sections of code control the applications of the garden: the icon being clickable to bring it up, the mushrooms growing, and removing the garden with an arrow.

    -nextMeal.js
        - This script handles the logic and code that takes from local storage to display the current recipe

            - For class purposes, this js starts with var time and day that you can use to check that different days and times are working. The code should always be live using the vars that exist on line 11 and 14

            - The next set of code gets the current day and time in military so that meal times can be determined. For this website, breakfast ends at 9:00 and lunch ends at 15:00. You would be able to determine these in your log-in settings. This uses moment.js to do so

            -Next is var dish and chef, pre-defined so multipe ifs/sections can use them

            - Next is sets of variables that use local storage pre-determined in the recipe page to display your choices.

                - The variables for all of the meal choice options are first. The giphy api uses these to create a random gif relating to the recipe.

                - The variables for all of the titles of the meal choices are next. These are used to add text next to the current date.

                - The variables for the chef are next. This variable is used to show the chosen chef and the corresponding image

                - Next is the ingredients list of the chosen date and time

                - Last is the instructions of the chosen date and time (these had to use the parse function since they returned as objects)
            
            -Two empty p vars are created to later store ingredient and instruction choices

            -Then there is a list of if statements that say if day is CERTAIN DAY and time is CERTAIN TIME, then that recipe is shown. This if statement uses the day and time variables that store the current day and time to determine if this is the next recipe, and if it is, to show them. Each statement:

                - sets dish to be the meal choice chosen for that slot, this is used by giphy api later

                - if dish is null, removes text from the slot (otherwise it says "click the gif to change it!")

                - sets the text inside ingredsP and instructP to corresponding meal ingredients and instructions

                - Adds the title to the html using mealText

                - Adds the chef name to the html using chefName

                - Has a set of if statements that determine the picture, and adds the source of the picture depending on the name

            - After the if statements has ingredientsList and instructionsList having the html of the corresponding defined ingredsP and instructP

            - Next is the corresponding api for the giphy image. It uses dish (which now holds the meal choice) to choose a random gif. The function showGif creates the new gif. There is a empty variable i that determines which gif in the array it shows. The variable i increases each time the gif is clicked and is stored in newI, so that the image changes each time it is clicked

    - moment.min.js
        - This is a copy of the functional moment js that lets you use the current time functionally. nextMeal.js uses it

    - script.js
        - This script determines the functionality of the drop-downs

            - It starts with the variables also used in nextMeal.js, which gets the title of the recipe from local storage

            - For each meal option:

                - In the html the drop-downs have forms. For each meal option, if you have chosen a recipe previously it stores that choice as a placeholder in the form. 

                - If you enter a new value into the form, then instead the form will store that value using the new variable newChoiceOPTIONS

index.html CSS

    - style.css
        - This css holds all of the styling for index.html including heights, fonts, colors, and keyframe rotation coding

recipe.html

    - This html starts with a navbar that has links to the other html, but no settings link

    - There are overall instructions in a row that tell you how to use the page

    - The page then contains two forms
        - one for a meal and a submit button that runs the recipe puppy api
        - One for a url to a recipe page and a submit button that runs the api and opens the modal

    - There is a section for choosing your recipes when they appear

    -Last in the html page is the coding for the modal, which only shows when you press the url submit button
        - The modal has you choose which day, meal slot and chef you want to have for the recipe url that you just input

recipe.html JS

    - recipe.js

        - Starts with a bunch of empty variables to be used later in the script

        - Next is the on click event for the mealBtn, which is the first form in the html
            - Takes the value of the form as a parameter for the recipe puppy api

            - The recipe puppy api takes your parameter (in this case a meal name like meatloaf) and returns links in text to recipes that are relevant

            - for each of these returned text a for loop is there to put this text in an a tag to make it clickable (and open in a new page) and then in a p tag so there is space between the links. 
                - the recipe class then prepends these links so that they show up in html for you to choose
            
        - the url button on click event runs the mycookbook api, that takes a url to a webpage and scans it for instruction, ingredients and title. 

            - using the returned data, variables recipeTitle, recipeIngredients, and recipeInstructions. recipeInstructions stringifys the data so that it can be later stored in local storage

            - The last thing it does is show the modal
        
        - the save button within the modal commits the choices you made within the modal to local storage.

            - It does so by creating variables for your choices

            - Then uses those choices for a set of if statements that set the recipe title, ingredients, instructions, chef choice, and meal option (from the meal form) to local storage that corresponds with the options made

            - Last it changes the attribute of the modal so that the modal closes when it is clicked

recipe.html CSS
    - recipe.css
        - Contains the styling for the navbar, text, buttons, and modal.

grocerylist.html
    
    - The html starts with a navbar that has the same links as the homepage, except for the settings

    - Then it has a form for inputting items that you want to add to your list and a submit button

    - There is an unseen clear button that shows when you add an item and if you click it, it clears everything use the value clear list

grocerylist.html JS 

    - partyjs.js
        - contains the onclick for the submit grocery button
            
            - It takes the value of the form input and says if there's a value then:
                - append a div class with a checkbox, the value of the form in text, and two button (one that says complete and one that says delete)

                    - You can choose when finishing your list at the store to check it off an or to complete it

                    - the complete button does a line through the added item text

                    - the delete button deletes all items on the same plane as the delete button

grocerylist.html

    grocerylist.css
        - Contains all of the styling for the navbar, buttons, and text



    