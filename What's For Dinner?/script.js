
const dialog = document.getElementById("food-dialog")
const wrapper = dialog.querySelector(".wrapper")

const asianFoods = [
    "Sushi",
    "Ramen",
    "Dim Sum",
    "Pad Thai",
    "Bibimbap",
    "Pho",
    "Dumplings",
    "Butter Chicken"
]

const latinAmericanFoods = [
    "Tacos al Pastor",
    "Ceviche",
    "Feijoada",
    "Empanadas",
    "Arepas",
    "Moqueca",
    "Bandeja Paisa",
    "Choripan"
];

const middleEasternFoods = [
    "Shawarma",
    "Falafel",
    "Hummus with Pita",
    "Tabbouleh",
    "Kebabs",
    "Baba Ganoush",
    "Fattoush",
    "Dolma"
];

const westernFoods = [
    "Cheeseburger",
    "Mac and Cheese",
    "Spaghetti",
    "Roast Chicken",
    "Caesar Salad",
    "Pizza Margherita",
    "Steak and Fries",
    "Fish and Chips"
];

const foodData = {
    "Sushi": {
        image:"../images/sushi.png",
        recipe: "https://natashaskitchen.com/sushi-rice-and-california-rolls-recipe/",
        tags: ["Peanut-Free", "Halal"]
    },
    "Ramen": {
        image: "../images/ramen.png",
        recipe: "https://pinchofyum.com/quick-homemade-ramen/",
        tags: ["Contains Pork"]
    },
    "Pad Thai": {
        image: "../images/padthai.png",
        recipe: "https://tastesbetterfromscratch.com/pad-thai/",
        tags: ["Peanut-Free", "Vegan Option"]
    },
    "Dim Sum": {
        image: "../images/dimsum.png",
        recipe: "https://www.allrecipes.com/recipe/204129/dim-sum-asian-dumplings/",
        tags: ["Peanut-Free"]
    },
    "Bibimbap": {
        image: "../images/bibimbap.png",
        recipe: "https://mykoreankitchen.com/bibimbap-korean-mixed-rice-with-meat-and-assorted-vegetables/",
        tags: ["Peanut-Free"]
    },
    "Pho": {
        image: "../images/pho.png",
        recipe: "https://www.recipetineats.com/vietnamese-pho-recipe/",
        tags: ["Peanut-Free"]
    },
    "Dumplings": {
        image: "../images/dumplings.png",
        recipe: "https://www.allrecipes.com/recipe/6900/dumplings/",
        tags: ["Peanut-Free", "Vegan Option"]
    },
    "Butter Chicken": {
        image: "../images/butterchicken.png",
        recipe: "https://www.recipetineats.com/butter-chicken/",
        tags: ["Peanut-Free"]
    },
    // Western Foods
    "Cheeseburger": {
        image: "../images/cheeseburger.png",
        recipe: "https://www.recipetineats.com/cheeseburger-recipe/",
        tags: ["Peanut-Free", "Vegan Options"]
    },
    "Mac and Cheese": {
        image: "../images/macandcheese.png",
        recipe: "https://tastesbetterfromscratch.com/homemade-mac-and-cheese/",
        tags: ["Vegan", "Peanut-Free"]
    },
    "Spaghetti": {
        image: "../images/spaghetti.png",
        recipe: "https://www.inspiredtaste.net/38940/spaghetti-with-meat-sauce-recipe/",
        tags: ["Peanut-Free"]
    },
    "Roast Chicken": {
        image: "../images/roastchicken.png",
        recipe: "https://www.recipetineats.com/roast-chicken/",
        tags: ["Peanut-Free"]
    },
    "Caesar Salad": {
        image: "../images/salad.png",
        recipe: "https://natashaskitchen.com/caesar-salad-recipe/",
        tags: ["Peanut-Free"]
    },
    "Pizza Margherita": {
        image: "../images/pizza.png",
        recipe: "https://www.abeautifulplate.com/the-best-homemade-margherita-pizza/",
        tags: ["Peanut-Free", "Vegan"]
    },
    "Steak and Fries": {
        image: "../images/steakandfrites.png",
        recipe: "https://www.billyparisi.com/steak-frites-recipe-lemon-herb-butter/",
        tags: ["Peanut-Free"]
    },
    "Fish and Chips": {
        image: "../images/fishandchips.png",
        recipe: "https://tastesbetterfromscratch.com/fish-and-chips/",
        tags: ["Peanut-Free"]
    },
    // latin american foods
    "Tacos al Pastor": {
        image: "../images/tacos.png",
        recipe: "https://tastesbetterfromscratch.com/tacos-al-pastor/",
        tags: ["Peanut-Free"]
    },
    "Ceviche": {
        image: "../images/ceviche.png",
        recipe: "https://www.feastingathome.com/easy-ceviche-recipe/",
        tags: ["Peanut-Free"]
    },
    "Feijoada": {
        image: "../images/feijoada.png",
        recipe: "https://www.allrecipes.com/recipe/139208/feijoada-brazilian-black-bean-stew/",
        tags: ["Peanut-Free"]
    },
    "Empanadas": {
        image: "../images/empanadas.png",
        recipe: "https://handletheheat.com/how-to-make-empanadas/",
        tags: ["Peanut-Free"]
    },
    "Arepas": {
        image: "../images/arepas.png",
        recipe: "https://minimalistbaker.com/how-to-make-arepas/",
        tags: ["Peanut-Free", "Halal Options"]
    },
    "Moqueca": {
        image: "../images/moqueca.png",
        recipe: "https://www.simplyrecipes.com/recipes/moqueca___brazilian_fish_stew/",
        tags: ["Peanut-Free"]
    },
    "Bandeja Paisa": {
        image: "../images/bandejapaisa.png",
        recipe: "https://www.mycolombianrecipes.com/paisa-tray-bandeja-paisa/",
        tags: ["Peanut-Free"]
    },
    "Choripan": {
        image: "../images/choripan.png",
        recipe: "https://www.grillseeker.com/authentic-choripan-recipe/",
        tags: ["Peanut-Free"]
    },
    // middle eastern foods
    "Shawarma": {
        image: "../images/shawarma.png",
        recipe: "https://www.recipetineats.com/chicken-sharwama-middle-eastern/",
        tags: ["Peanut-Free"]
    },
    "Falafel": {
        image: "../images/falalel.png",
        recipe: "https://www.themediterraneandish.com/how-to-make-falafel/",
        tags: ["Halal", "Vegan", "Peanut-Free"]
    },
    "Hummus with Pita": {
        image: "../images/hummus.png",
        recipe: "https://entertainingwithbeth.com/authentic-hummus-recipe/",
        tags: ["Halal", "Vegan", "Peanut-Free"]
    },
    "Tabbouleh": {
        image: "../images/tabbouleh.png",
        recipe: "https://www.loveandlemons.com/tabbouleh/",
        tags: ["Halal", "Vegan", "Peanut-Free"]
    },
    "Kebabs": {
        image: "../images/kebabs.png",
        recipe: "https://www.allrecipes.com/recipe/218486/moms-beef-shish-kabobs/",
        tags: ["Peanut-Free"]
    },
    "Baba Ganoush": {
        image: "../images/babaganoush.png",
        recipe: "https://cookieandkate.com/epic-baba-ganoush-recipe/",
        tags: ["Halal", "Vegan", "Peanut-Free"]
    },
    "Fattoush": {
        image: "../images/fattoush.png",
        recipe: "https://feelgoodfoodie.net/recipe/lebanese-fattoush-salad/",
        tags: ["Halal", "Vegan", "Peanut-Free"]
    },
    "Dolma": {
        image: "../images/dolma.png",
        recipe: "https://www.themediterraneandish.com/stuffed-grape-leaves-dolmades/",
        tags: ["Halal", "Vegan Options", "Peanut-Free"]
    }
}

    // Shuffle using the Fisher–Yates method
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    // Return 4 options
    return array.slice(0, 4);
}


// Map cuisine names to arrays
const cuisineMap = {
    asian: asianFoods,
    latinAmerican: latinAmericanFoods,
    middleEastern: middleEasternFoods,
    western: westernFoods
};

function shuffleFoods() {

    // Get cuisine type from body attribute
    const cuisineType = document.body.getAttribute('data-cuisine');
    const foods = cuisineMap[cuisineType];
    if (!foods) return;

    const randomFoods = shuffle([...foods]);
    const foodOptionsDiv = document.getElementById('food-options');
    foodOptionsDiv.innerHTML = "";

   /*  foodOptionsDiv.innerHTML = randomFoods.map(food =>
        `<button class="button food-button">${food}</button>`
    ).join(''); */
    randomFoods.forEach(food => {
        const btn = document.createElement("button");
        btn.className = "button food-button";
        btn.textContent = food;
        btn.onclick = () => showDialog(food);
        foodOptionsDiv.appendChild(btn);
    });
}


/* 
function shuffleFoods() {
    const foodOptionsDiv = document.getElementById('food-options');
    // Get 4 random foods
    const foods = shuffle([...middleEasternFoods]); // Use a copy to avoid modifying the original
    // Create buttons for each food
    foodOptionsDiv.innerHTML = foods.map(food => 
        `<button class="button food-button">${food}</button>`
    ).join('');
    
}  */

window.onload = shuffleFoods;

function showDialog(foodName) {
    const data = foodData[foodName];

    if (!data) {
        alert(`Missing food data for: ${foodName}`);
        return;
    }

    document.getElementById("food-name").textContent = foodName;
    document.getElementById("food-image").src = data.image;
    document.getElementById("food-image").alt = foodName;
    document.getElementById("food-tags").textContent = "Tags: " + data.tags.join(", ");
    document.getElementById("food-recipe").href = data.recipe;
      
    document.getElementById("food-dialog").showModal();

}

function closeDialog() {
    document.getElementById("food-dialog").close();
}

dialog.addEventListener("click", (e) => {
    if(!wrapper.contains(e.target)) {
        dialog.close()
    }
} )

document.getElementById('lets-eat-button').addEventListener('click', () => {
    // Basic confetti burst
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
});


