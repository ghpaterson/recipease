# recipease

## The App

Recipease is a food and recipe web browser app allowing users to find their favourite recipes. All recipes come from the Spoonacular API.

## Using the App

On the homepage users can see suggested vegetarian and trending recipes as well as suggested 'cuisine buttons'. A search function allows users to search for a cuisine, ingredient or method of their choice. Click on the recipe image for a summary, ingredients list and Instructions on how to prepare the recipe.

## Installation

To download and initialise the app:

```js
$ git clone https://github.com/ghpaterson/recipease.git
$ cd recipease
$ npm install
```

Register and get an API key for the Spoonacular

[Spoonacular](https://spoonacular.com/food-api)

1. Create an Account
2. Go to 'My Console'
3. Go to 'Profile' where you will find your API key.

In the terminal go into the main recipease directory and create a .env file:

```js
$ cd recipease
$ touch .env
```

Copy the code below into the .env file:

```js
# .env

REACT_APP_SPOONACULAR_API = 'add your api key here'
```

NB!! Please put your API key into the .env otherwise it will be available to anyone if you push your code to Github etc.

## Using the APP

From the main directory you can run the app:

```js
$ cd recipease
$ npm start
```

Open http://localhost:3000 to view and use the Recipease app in your browser.

## Screenshots

## Packages used

Here are some of the packages used mainly for styling, images and animations within the app

1. framer-motion
2. react-icons
3. react-router-dom
4. styled-components
5. react-splide
