const dishes = {
  1: {
    title: "Olive Garden Salad",
    image: "images/oliveGardenSalad.jpg",
    ingredients: [
      "Garden Salad Mix",
      "Roma tomatoes",
      "Pepperoncini",
      "Red onion",
      "Drained black olives",
      "Croutons",
      "Parmesan Cheese",
    ],
    price: "$12.99",
  },
  2: {
    title: "Caesar Salad",
    image: "images/caesarSalad.jpg",
    ingredients: [
      "Romaine lettuce",
      "Croutons",
      "Parmesan cheese",
      "Grilled chicken",
    ],
    price: "$10.99",
  },
  3: {
    title: "Greek Salad",
    image: "images/greekSalad.jpg",
    ingredients: [
      "Cucumbers",
      "Tomatoes",
      "Red onions",
      "Olives",
      "Feta cheese",
      "Olive oil",
      "Lemon",
    ],
    price: "$11.99",
  },
  4: {
    title: "Caprese Salad",
    image: "images/capreseSalad.jpg",
    ingredients: [
      "Mozzarella",
      "Tomatoes",
      "Basil",
      "Balsamic vinegar",
      "Olive oil",
      "Pepper",
    ],
    price: "$11.99",
  },
  5: {
    title: "Tabbouleh",
    image: "images/tabbouleh.jpg",
    ingredients: ["Bulgur rice", "Parsley", "Tomatoes", "Mint"],
    price: "$11.99",
  },
  6: {
    title: "Tex-Mex Potato Salad",
    image: "images/texMexPotatoSalad.jpg",
    ingredients: ["Corn", "Red Potatoes", "Avocado", "Mayonnaise"],
    price: "$11.99",
  },
  7: {
    title: "Summer Salad",
    image: "images/summerSalad.jpg",
    ingredients: [
      "Basil",
      "Mozzarella",
      "Peaches",
      "Blueberries",
      "Green mix",
      "Strawberries",
      "Cucumbers",
    ],
    price: "$11.99",
  },
  8: {
    title: "Ramen Coleslaw",
    image: "images/ramenCaleslaw.jpg",
    ingredients: ["Peas", "Ramen noodles", "Broccoli", "Carrots"],
    price: "$11.99",
  },
  9: {
    title: "Grilled Chicken Ceasar Wrap",
    image: "images/grilledChickenCeasarWrap.jpg",
    ingredients: [
      "Chicken breast",
      "Romaine lettuce",
      "Parmesan cheese",
      "Croutons",
      "Whole wheat wrap",
    ],
    price: "$10.25",
  },
  10: {
    title: "Mediterranean Veggie Wrap",
    image: "images/mediterraneanVeggieWrap.jpg",
    ingredients: [
      "Hummus",
      "Cucumber",
      "Red pepper",
      "Olives",
      "Feta cheese",
      "Mixed greens",
      "Tomato",
      "Flour wrap",
    ],
    price: "$8.5",
  },
  11: {
    title: "Buffalo Chicken Wrap",
    image: "images/buffaloChickenWrap.jpg",
    ingredients: [
      "Chicken",
      "buffalo sause",
      "lettuce",
      "Cheddar cheese",
      "Celery sticks",
      "Flour wrap",
    ],
    price: "$10.25",
  },
  12: {
    title: "Veggie & Hummus Wrap",
    image: "images/veggieHummusWrap.jpg",
    ingredients: [
      "Hummus",
      "Cucumbers",
      "Carrots",
      "Red peppers",
      "Spinach",
      "Tomato",
      "Whole wheat wrap",
    ],
    price: "$8",
  },
  13: {
    title: "Chicken Fajita Wrap",
    image: "images/chickenFajitaWrap.jpg",
    ingredients: [
      "Chicken breast",
      "Onions",
      "Bell peppers",
      "Cheddar cheese",
      "Lettuce",
      "Sour cream",
      "Whole wheat wrap",
    ],
    price: "$9.5",
  },
  14: {
    title: "Tuna Salad Wrap",
    image: "images/tunaSaladWrap.jpg",
    ingredients: [
      "Tuna",
      "Mayonaise",
      "Celery",
      "Onions",
      "Lettuce",
      "Tomatp",
      "Whole wheat wrap",
    ],
    price: "$9",
  },
  15: {
    title: "Shrimp & Avocado Wrap",
    image: "images/shrimpAvocadoWrap.jpg",
    ingredients: [
      "Shrimps",
      "Avocado",
      "Cabbage",
      "Lettuce",
      "Tomato",
      "Mayonaise",
      "Whole wheat wrap",
    ],
    price: "$12",
  },
  16: {
    title: "BBQ Chicken & Pineapple Wrap",
    image: "images/BBQ-Chicken-Wraps.jpg",
    ingredients: [
      "Chicken Brest",
      "Pineapple",
      "Lettuce",
      "Red onion",
      "BBQ sause",
      "Whole wheat wrap",
    ],
    price: "$10.5",
  },
  17: {
    title: "Falafel Wrap",
    image: "images/falafelWrap.jpg",
    ingredients: [
      "Falafel",
      "Cucumber",
      "Tomato",
      "Red onions",
      "Parsley",
      "Mixed greens",
      "Whole wheat wrap",
    ],
    price: "$9.5",
  },
  18: {
    title: "Classic Tomato Soup",
    image: "images/classicTomatoSoup.jpeg",
    ingredients: [
      "Tomatoes",
      "Onions",
      "Garlic",
      "Butter",
      "Salt",
      "Pepper",
      "Whole wheat wrap",
    ],
    price: "$10",
  },
  19: {
    title: "Chicken Noodle Soup",
    image: "images/chickenNoodleSoup.jpg",
    ingredients: [
      "Chicken breasts",
      "Carrots",
      "Celery",
      "Onions",
      "Garlic",
      "Noodles",
    ],
    price: "$14",
  },
  20: {
    title: "Lentil Soup",
    image: "images/lentilSoup.jpg",
    ingredients: [
      "Green lentils",
      "Carrots",
      "Garlic",
      "Onions",
      "Celery",
      "Bay leaves",
      "Olive oil",
    ],
    price: "$9",
  },

  21: {
    title: "Split Pea Soup",
    image: "images/splitPeaSoup.jpg",
    ingredients: [
      "Chicken breasts",
      "Carrots",
      "Split peas",
      "Onions",
      "Celery",
      "Bay leaves",
      "Garlic",
    ],
    price: "$9",
  },

  22: {
    title: "Potato Leek Soup",
    image: "images/potatoLeekSoup.jpg",
    ingredients: ["Potatoes", "Leeks", "Cream", "Onions", "Butter", "Garlic"],
    price: "$9",
  },

  23: {
    title: "French Onion Soup",
    image: "images/frenchOnionSoup.jpg",
    ingredients: ["Onions", "Butter", "Thyme", "Cheese", "Baguette"],
    price: "$16",
  },

  24: {
    title: "Cabbage Soup",
    image: "images/cabbageSoup.jpg",
    ingredients: [
      "Cabbage",
      "Carrots",
      "Potatoes",
      "Onions",
      "Garlic",
      "Tomatoes",
    ],
    price: "$9",
  },

  25: {
    title: "Mushroom Soup",
    image: "images/mushroomSoup.jpeg",
    ingredients: ["Mushrooms", "Onions", "Garlic", "Heavy cream", "Thyme"],
    price: "$13.5",
  },

  26: {
    title: "Borscht",
    image: "images/borscht.jpg",
    ingredients: [
      "Beets",
      "Potatoes",
      "Carrots",
      "Onions",
      "Vinegar",
      "Sour cream",
    ],
    price: "$12",
  },
};

const menuContainer = document.getElementById("menu-container");

Object.keys(dishes).forEach((id) => {
  const dish = dishes[id];

  const dishBox = document.createElement("div");
  dishBox.className = "menu-box";

  dishBox.innerHTML = `
    <h3>${dish.title}</h3>
    <img src="${dish.image}" alt="${dish.title}">
    <p><strong>Ingredients:</strong></p>
    <ul>${dish.ingredients
      .map((ingredient) => `<li>${ingredient}</li>`)
      .join("")}</ul>
    <p><strong>Price:</strong> ${dish.price}</p>
    <button class="learn-more" onclick="window.location.href='description.html?dish=${id}'">Learn More</button>
  `;

  menuContainer.appendChild(dishBox);
});
