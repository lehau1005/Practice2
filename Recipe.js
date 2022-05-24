const meals = document.getElementById("meals");
const searchTerm = document.getElementById("search-term");
const searchBtn = document.getElementById("search");
const mealPopup = document.getElementById("meal-popup");
const closeBtn = document.getElementById("close");
const mealInfo1 = document.getElementById("meal-info1");


let imageArray = [];
// function loadRandomMeal(){
//  const imageEl = document.createElement("img");
//  imageEl.setAttribute()
//  meals.appendChild(imageEl)




getRandomMeal();

// get Random Meal from Api
async function getRandomMeal() {
    const resp = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php");
    const randomMeal = await resp.json();
    const mealData = randomMeal.meals[0];
    console.log(mealData)
    addMeal(mealData);

}

// get Meal from Api by Searching
async function getMealBySeach(term) {
    const resp2 = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=" + term);
    const resp2Data = await resp2.json();
    const meals = resp2Data.meals;
    return meals;
}

function addMeal(mealData) {// C1: createElement,setAttribute. C2: use innerHTML add các thẻ HTML
    const meal = document.createElement("div");// C2 better, nhanh hơn.
    meal.classList.add("meal");
    meal.innerHTML = `
    <div class="meal" id="meal-el">
        <span class="random">Random Recipe</span>
        <img src="${mealData.strMealThumb}" >
    </div>
    <div class="meal-body">
        <h4>${mealData.strMeal}</h4>
        <button class="fav-btn "><i class="fa-solid fa-heart"></i></button>
     </div>
    `

    meals.appendChild(meal);
    const btn = document.querySelector(".meal-body .fav-btn");
    btn.addEventListener("click", () => {
        if (btn.classList.contains("active")) {
            btn.classList.remove("active");
        }
        else {
            btn.classList.add("active");
        }
    })
    meals.addEventListener("click", () => {
        showMealInfo(mealData);
    })
}


closeBtn.addEventListener("click", () => {
    mealPopup.classList.add("display");
})


function getImgToFavourite(mealData) {
    const myMeals = document.querySelector(".fav-meals")
    const myLi = document.createElement("li")
    myLi.innerHTML = "";
    myLi.innerHTML = `
        <img src="${mealData.strMealThumb}" ><br>
        <span>${mealData.strMeal}</span>
        `

    myMeals.appendChild(myLi);
    myLi.addEventListener("click", () => {
        showMealInfo(mealData);
    });

}
// click to get FavouriteMeal by Search
searchBtn.addEventListener("click", async () => {
    const search = searchTerm.value;
    const meals = await getMealBySeach(search);
    meals.forEach(meal => {
        getImgToFavourite(meal);
    })


})

// show Meal Info  
function showMealInfo(mealData) {
    const ingredients = [];
    mealInfo1.innerHTML = "";
    const mealEl = document.createElement("div");
    // get Ingredirents & Measure from mealData(Api)
    for (let i = 1; i <= 20; i++) {
        if (mealData["strIngredient" + i]) { // các vị trí ingredient. 
            ingredients.push(`${mealData["strIngredient" + i]} - 
                              ${mealData["strMeasure" + i]}`);
        }
        else {
            break;
        }
    }
    mealEl.innerHTML = ` 
    <h2>${mealData.strMeal}</h2>
    <img src="${mealData.strMealThumb}" alt=""/>
    <p>${mealData.strInstructions}</p>
    <h3>Ingredients:</h3>
    <ul>
    ${ingredients.map(ing => `<li> ${ing}</li>`).join("")}
    </ul>
    `
    //các phần tử đưa vào mảng mới và Join chúng thành chuỗi bởi ""
    // Not use for.Each (undefined)
    mealInfo1.appendChild(mealEl);
    mealPopup.classList.remove("display"); // remove popup


}
