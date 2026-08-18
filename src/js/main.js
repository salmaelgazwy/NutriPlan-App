// catrgories card in array
let categorycard=document.querySelectorAll(".category-card");
// getting buttons of international cusines
let interCuisines=document.querySelectorAll(".inter-cuisines button:not(:first-child)");
// recipies grid
let recipesGrid=document.getElementById("recipes-grid");
// search icon for empty recipies
let emptyrecipies=document.querySelector(".emptyrecipies");
// paragraph for counting recipies
let counting=document.querySelector(".counting");
let heroSection=document.querySelector(".hero-section");
let allCuisines=document.querySelector(".all-cuisines");
let instructionsParagraph=document.querySelector("#instructionsParagraph");
let videoyoutube=document.querySelector(".videoyoutube");
let searchinput=document.querySelector("#search-input");
let productsGrid = document.querySelector("#products-grid");
let foodlogdate=document.querySelector("#foodlog-date");
let logmealbtn=document.querySelector("#log-meal-btn");
let caloriesperserving= document.querySelector(".caloriesperserving");
let totalcal= document.querySelector(".totalcal");
let proteinfacts= document.querySelector(".proteinfacts");
let carbsfacts= document.querySelector(".carbsfacts");
let fatfacts= document.querySelector(".fatfacts");
let fiberfacts= document.querySelector(".fiberfacts");
let sugarfacts= document.querySelector(".sugarfacts");
let mealdetails=document.querySelector("#meal-details");
let productssection=document.querySelector("#products-section");
let foodlogbtn=document.querySelector(".foodlogbtn");
let foodlogsection=document.querySelector("#foodlog-section");
// first btn
let searchfilterssection=document.querySelector("#search-filters-section");
let mealcategoriessection=document.querySelector("#meal-categories-section");
let allrecipessection=document.querySelector("#all-recipes-section");

let firstnavbtn=document.querySelector(".first-nav-btn");
let secondnavbtn=document.querySelector(".second-nav-btn");
let thirdnavbtn=document.querySelector(".third-nav-btn");
let headingone=document.querySelector(".headingone");
let tagline=document.querySelector(".tagline");
let loggeditems=document.querySelector("#logged-items-list");
let test=document.querySelectorAll(".test");


//  mealdetails.classList.remove("hidden");
// searchfilterssection.classList.add("hidden");
// mealcategoriessection.classList.add("hidden");
// allrecipessection.classList.add("hidden");

firstnavbtn.addEventListener("click",function(){
  productssection.classList.add("hidden");
  mealdetails.classList.add("hidden");
  foodlogsection.classList.add("hidden");
  searchfilterssection.classList.remove("hidden");
  mealcategoriessection.classList.remove("hidden");
  allrecipessection.classList.remove("hidden");
  firstnavbtn.classList.add("bg-emerald-50","text-emerald-700");
  firstnavbtn.classList.remove("text-gray-600","hover:bg-gray-50");
  secondnavbtn.classList.remove("bg-emerald-50","text-emerald-700");
  secondnavbtn.classList.add("text-gray-600","hover:bg-gray-50");
  thirdnavbtn.classList.remove("bg-emerald-50","text-emerald-700");
  thirdnavbtn.classList.add("text-gray-600","hover:bg-gray-50");
  headingone.innerHTML="Meals & Recipes";
  tagline.innerHTML="Discover delicious and nutritious recipes tailored for you";
   mealdetails.classList.add("hidden");
})
secondnavbtn.addEventListener("click",function(){
  secondnavbtn.classList.remove("text-gray-600","hover:bg-gray-50");
  secondnavbtn.classList.add("bg-emerald-50","text-emerald-700");
  allrecipessection.classList.add("hidden");
  mealcategoriessection.classList.add("hidden");
  searchfilterssection.classList.add("hidden");
  productssection.classList.remove("hidden");
  foodlogsection.classList.add("hidden");
firstnavbtn.classList.remove("bg-emerald-50","text-emerald-700");
firstnavbtn.classList.add("text-gray-600");
thirdnavbtn.classList.remove("bg-emerald-50","text-emerald-700");
thirdnavbtn.classList.add("text-gray-600","hover:bg-gray-50");
 headingone.innerHTML="Product Scanner";
  tagline.innerHTML="Search packaged foods by name or barcode";
  mealdetails.classList.add("hidden");


})
thirdnavbtn.addEventListener("click", function () {

    thirdnavbtn.classList.remove("text-gray-600", "hover:bg-gray-50");
    thirdnavbtn.classList.add("bg-emerald-50", "text-emerald-700");

    firstnavbtn.classList.remove("bg-emerald-50", "text-emerald-700");
    firstnavbtn.classList.add("text-gray-600", "hover:bg-gray-50");

    secondnavbtn.classList.remove("bg-emerald-50", "text-emerald-700");
    secondnavbtn.classList.add("text-gray-600", "hover:bg-gray-50");

    foodlogsection.classList.remove("hidden");
    productssection.classList.add("hidden");
    searchfilterssection.classList.add("hidden");
    mealcategoriessection.classList.add("hidden");
    allrecipessection.classList.add("hidden");
    headingone.innerHTML="Food Log";
    tagline.innerHTML="Track your daily nutrition and food intake";
     mealdetails.classList.add("hidden");
});

let mealsarrow=document.querySelector("#back-to-meals-btn");
mealsarrow.addEventListener("click",function(){
mealdetails.classList.add("hidden");
searchfilterssection.classList.remove("hidden") ;
mealcategoriessection.classList.remove("hidden") ;
allrecipessection.classList.remove("hidden") ;


})
//saerch on recipies




let currentMeal = null;
let x;

async function search(){
try{

  let getinfocategory=await fetch("https://nutriplan-api.vercel.app/api/meals/categories");
  let infocategory=await getinfocategory.json();
  console.log(infocategory);

  let catname="";
  let catarr=[];

  for(let r=0;r<infocategory.results.length;r++) 
  {
    console.log(infocategory.results[r].name);

    let getinfosearch=await fetch(`https://nutriplan-api.vercel.app/api/meals/search?q=${infocategory.results[r].name}&page=1&limit=25`);
    let infosearch=await getinfosearch.json();

    console.log(infosearch);

    catarr.push(infosearch);
  }

  console.log("we did it",catarr);


  searchinput.addEventListener("keyup",function searchdata(){

    let value=this.value.toLowerCase().trim();
    console.log(value);

    let categorybox="";

    for(let size=0;size<catarr.length;size++)
    {
      for (let i = 0; i < catarr[size].results.length; i++) {

        let mealName = catarr[size].results[i].name.toLowerCase();

        if(mealName.includes(value))
        {

          let mealInstructions = catarr[size].results[i].instructions || [];
          let inst0 = mealInstructions[0] || "";
          let inst1 = mealInstructions[1] || "";

          categorybox=categorybox+`<div
              class="recipe-card bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group"
              data-meal-id="${catarr[size].results[i].id}"
            >
              <div class="relative h-48 overflow-hidden">
                <img
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src="${catarr[size].results[i].thumbnail}"
                  alt="${catarr[size].results[i].name}"
                  loading="lazy"
                />

                <div class="absolute bottom-3 left-3 flex gap-2">

                  <span
                    class="px-2 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold rounded-full text-gray-700 flex items-center gap-1"
                  >
                    <i class="fa-solid fa-utensils text-blue-500 text-[10px]"></i>
                    ${catarr[size].results[i].category}
                  </span>

                  <span class="px-2 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold rounded-lg">
                    <i class="mr-1 text-blue-600" data-fa-i2svg="">
                      <svg class="svg-inline--fa fa-globe" data-prefix="fas" data-icon="globe" role="img" viewBox="0 0 512 512" aria-hidden="true" data-fa-i2svg="">
                        <path fill="currentColor" d="M351.9 280l-190.9 0c2.9 64.5 17.2 123.9 37.5 167.4 11.4 24.5 23.7 41.8 35.1 52.4 11.2 10.5 18.9 12.2 22.9 12.2s11.7-1.7 22.9-12.2c11.4-10.6 23.7-28 35.1-52.4 20.3-43.5 34.6-102.9 37.5-167.4zM160.9 232l190.9 0C349 167.5 334.7 108.1 314.4 64.6 303 40.2 290.7 22.8 279.3 12.2 268.1 1.7 260.4 0 256.4 0s-11.7 1.7-22.9 12.2c-11.4 10.6-23.7 28-35.1 52.4-20.3 43.5-34.6 102.9-37.5 167.4zm-48 0C116.4 146.4 138.5 66.9 170.8 14.7 78.7 47.3 10.9 131.2 1.5 232l111.4 0zM1.5 280c9.4 100.8 77.2 184.7 169.3 217.3-32.3-52.7-54.4-131.7-57.9-217.3L1.5 280zm398.4 0c-3.5 85.6-25.6 165.1-57.9 217.3 92.1-32.7 159.9-116.5 169.3-217.3l-111.4 0zM511.3 232C501.9 131.2 434.1 47.3 342 14.7 374.3 66.9 396.4 146.4 399.9 232l111.4 0z"></path>
                      </svg>
                    </i>

                    ${catarr[size].results[i].area}
                  </span>

                </div>
              </div>

              <div class="p-4">

                <h3
                  class="text-base font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors line-clamp-1"
                >
                  ${catarr[size].results[i].name}
                </h3>

                <p class="text-xs text-gray-600 mb-3 line-clamp-2">
                  ${inst0} ${inst1}
                </p>

                <div class="flex items-center justify-between text-xs">

                  <span class="font-semibold text-gray-900">
                    <i class="fa-solid fa-utensils text-emerald-600 mr-1"></i>
                    ${catarr[size].results[i].category}
                  </span>

                  <span class="font-semibold text-gray-500">
                    <i class="fa-solid fa-globe text-blue-500 mr-1"></i>
                    ${catarr[size].results[i].area}
                  </span>

                </div>

              </div>

            </div>`;


        }
      }
    }


    if (categorybox === "") {
      emptyrecipies.classList.remove("hidden");
    } 
    else {
      emptyrecipies.classList.add("hidden");
    }

    recipesGrid.innerHTML = categorybox;

    let solorecipecard=document.querySelectorAll(".recipe-card");

    let recipeId="";

    let recipeCard =document.querySelectorAll(".recipe-card");

    for(let k=0;k<recipeCard.length;k++)
    {

      recipeCard[k].addEventListener("click",async function getmealbyid()
      {
        mealdetails.classList.remove("hidden");
       searchfilterssection.classList.add("hidden");
       mealcategoriessection.classList.add("hidden");
       allrecipessection.classList.add("hidden") ;

        recipeId=this.getAttribute("data-meal-id");

        console.log(recipeId);

        let getallIds=await fetch(`https://nutriplan-api.vercel.app/api/meals/${recipeId}`);

        let IdOfMeals=await getallIds.json();

        currentMeal = IdOfMeals.result;
// nutrition api
///////////api nutri

let body = {
  recipeName: IdOfMeals.result.name,
  ingredients: IdOfMeals.result.ingredients.map(function(item) {
    return `${item.measure} ${item.ingredient}`;
  })
};

let response = await fetch(
  "https://nutriplan-api.vercel.app/api/nutrition/analyze",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "vM89ff4XGH8CzZbOm23PpH6OdLDebKVO1QtS5r4k"
    },
    body: JSON.stringify(body)
  }
);


let nutritiondata = await response.json();


console.log("القيم الغذائية الجاية من السيرفر:", nutritiondata);

/////////////// data from nutrition api 

x=nutritiondata.data.perServing;



 caloriesperserving.innerHTML=x.calories;
 totalcal.innerHTML=`Total: ${nutritiondata.data.totals.calories} cal;`
proteinfacts.innerHTML=x.protein;
  carbsfacts.innerHTML=x.carbs;
  fatfacts.innerHTML=x.fat;
  fiberfacts.innerHTML=x.fiber;
  sugarfacts.innerHTML=x.sugar;








////////////////




////////////
        let tagsbox = "";

        if(IdOfMeals.result.tags) {

          for (let q = 0; q < IdOfMeals.result.tags.length; q++) {

            tagsbox += `
              <span class="px-3 py-1 bg-purple-500 text-white text-sm font-semibold rounded-full recipe-tag">
                ${IdOfMeals.result.tags[q]}
              </span>
            `;

          }
        }


        let categoryingredientsBox = "";

        if(IdOfMeals.result.ingredients && Array.isArray(IdOfMeals.result.ingredients)) {

          for (let i = 0; i < IdOfMeals.result.ingredients.length; i++) {

            categoryingredientsBox += `
              <div class="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors">

                <input 
                  type="checkbox"
                  class="ingredient-checkbox w-5 h-5 text-emerald-600 rounded border-gray-300"
                />

                <span class="text-gray-700">

                  <span class="font-medium text-gray-900">
                    ${IdOfMeals.result.ingredients[i].measure || ""}
                  </span>

                  ${IdOfMeals.result.ingredients[i].ingredient || ""}

                </span>

              </div>
            `;

          }
        }


        let ingred=document.querySelector(".ingred");

        ingred.innerHTML= categoryingredientsBox;


        let foodarea ="";

        if (IdOfMeals.result.area!=null) {

          foodarea= `
            <span
              class="px-3 py-1 bg-blue-500 text-white text-sm font-semibold rounded-full food-area"
            >
              ${IdOfMeals.result.area}
            </span>`;

        }


        let recipetag = "";

        if(IdOfMeals.result.tags && Array.isArray(IdOfMeals.result.tags)) {

          for(let h=0;h<IdOfMeals.result.tags.length;h++ ) 
          {

            recipetag += `
              <span class="px-3 py-1 bg-purple-500 text-white text-sm font-semibold rounded-full recipe-tag">
                ${IdOfMeals.result.tags[h]}
              </span>
            `;

          }
        }


        let categarea="";

        if(IdOfMeals.result.area!=null)
        {

          categarea+=
          `<span
            class="px-3 py-1 bg-blue-500 text-white text-sm font-semibold rounded-full recipecountry"
          >
            ${IdOfMeals.result.area}
          </span>`;

        }


        heroSection.innerHTML=
        ` <div>

          <div class="relative h-80 md:h-96">

            <img
              src="${IdOfMeals.result.thumbnail}"
              alt="${IdOfMeals.result.name}"
              class="w-full h-full object-cover"
            />

            <div
              class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
            ></div>

            <div class="absolute bottom-0 left-0 right-0 p-8">

              <div class="flex items-center gap-3 mb-3">

                <span
                  class="px-3 py-1 bg-emerald-500 text-white text-sm font-semibold rounded-full"
                >
                  ${IdOfMeals.result.category}
                </span>

                ${categarea}

                ${recipetag}

              </div>

              <h1 class="text-3xl md:text-4xl font-bold text-white mb-2">
                ${IdOfMeals.result.name || ""}
              </h1>

              <div class="flex items-center gap-6 text-white/90">

                <span class="flex items-center gap-2">
                  <i class="fa-solid fa-clock"></i>
                  <span>30 min</span>
                </span>

                <span class="flex items-center gap-2">
                  <i class="fa-solid fa-utensils"></i>
                  <span id="hero-servings"> ${nutritiondata.data.servings || ""} servings</span>
                </span>

                <span class="flex items-center gap-2">
                  <i class="fa-solid fa-fire"></i>
                  <span id="hero-calories">${nutritiondata.data.totals.calories || "" } cal/serving</span>
                </span>

              </div>

            </div>

          </div>

        </div>`;


        let recipeinstructionsid="";

        if(IdOfMeals.result.instructions) 
        {

          for(let z=0;z<IdOfMeals.result.instructions.length;z++)
          {

            recipeinstructionsid+=`
              <div
                class="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
              >

                <div
                  class="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold shrink-0"
                >
                  ${z+1}
                </div>

                <p class="text-gray-700 leading-relaxed pt-2 inst-p">
                  ${IdOfMeals.result.instructions[z]}
                </p>

              </div>
            `;

          }
        }


        instructionsParagraph.innerHTML=recipeinstructionsid;


        // youtube

        if(IdOfMeals.result.youtube && typeof videoyoutube !== "undefined") {

          let youtube=IdOfMeals.result.youtube;

          videoyoutube.src=youtube.replace("watch?v=","embed/");

        }

      });

    }

  });

}

catch(err) {

  console.log("ERROR:", err);

}

}



search();

let recipearr;

if(localStorage.recipe !=null)
{
  recipearr=JSON.parse(localStorage.recipe)
 
}
else{
  recipearr=[]
  foodlogbtn.innerHTML=`<div class="text-center py-12">
                    <div class="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="text-3xl text-gray-300" data-fa-i2svg=""><svg class="svg-inline--fa fa-utensils" data-prefix="fas" data-icon="utensils" role="img" viewBox="0 0 512 512" aria-hidden="true" data-fa-i2svg=""><path fill="currentColor" d="M63.9 14.4C63.1 6.2 56.2 0 48 0s-15.1 6.2-16 14.3L17.9 149.7c-1.3 6-1.9 12.1-1.9 18.2 0 45.9 35.1 83.6 80 87.7L96 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224.4c44.9-4.1 80-41.8 80-87.7 0-6.1-.6-12.2-1.9-18.2L223.9 14.3C223.1 6.2 216.2 0 208 0s-15.1 6.2-15.9 14.4L178.5 149.9c-.6 5.7-5.4 10.1-11.1 10.1-5.8 0-10.6-4.4-11.2-10.2L143.9 14.6C143.2 6.3 136.3 0 128 0s-15.2 6.3-15.9 14.6L99.8 149.8c-.5 5.8-5.4 10.2-11.2 10.2-5.8 0-10.6-4.4-11.1-10.1L63.9 14.4zM448 0C432 0 320 32 320 176l0 112c0 35.3 28.7 64 64 64l32 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-448c0-17.7-14.3-32-32-32z"></path></svg></i>
                    </div>
                    <p class="text-gray-500 font-medium mb-2">No food logged today</p>
                    <p class="text-gray-400 text-sm mb-4">Start tracking your nutrition by logging meals or scanning products</p>
                    <div class="flex justify-center gap-3">
                        <a href="#meals" class="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all">
                            <i data-fa-i2svg=""><svg class="svg-inline--fa fa-plus" data-prefix="fas" data-icon="plus" role="img" viewBox="0 0 448 512" aria-hidden="true" data-fa-i2svg=""><path fill="currentColor" d="M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z"></path></svg></i>
                            Browse Recipes
                        </a>
                        <a href="/products" class="nav-link inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
                            <i data-fa-i2svg=""><svg class="svg-inline--fa fa-barcode" data-prefix="fas" data-icon="barcode" role="img" viewBox="0 0 448 512" aria-hidden="true" data-fa-i2svg=""><path fill="currentColor" d="M32 32C14.3 32 0 46.3 0 64L0 448c0 17.7 14.3 32 32 32s32-14.3 32-32L64 64c0-17.7-14.3-32-32-32zm88 0c-13.3 0-24 10.7-24 24l0 400c0 13.3 10.7 24 24 24s24-10.7 24-24l0-400c0-13.3-10.7-24-24-24zm72 32l0 384c0 17.7 14.3 32 32 32s32-14.3 32-32l0-384c0-17.7-14.3-32-32-32s-32 14.3-32 32zm208-8l0 400c0 13.3 10.7 24 24 24s24-10.7 24-24l0-400c0-13.3-10.7-24-24-24s-24 10.7-24 24zm-96 0l0 400c0 13.3 10.7 24 24 24s24-10.7 24-24l0-400c0-13.3-10.7-24-24-24s-24 10.7-24 24z"></path></svg></i>
                            Scan Product
                        </a>
                    </div>
                </div>`
}

let now = new Date();

let time = now.toLocaleTimeString("en-US", {
  hour: "numeric",
  minute: "2-digit"
});


//success
logmealbtn.addEventListener("click", function () {
  Swal.fire({
    width: "450px",
    showConfirmButton: false,
    showCloseButton: false,
    customClass: { popup: "!rounded-3xl" },
    html: `
    <div class="bg-white rounded-2xl p-6 max-w-md w-full mx-4">
                <div class="flex items-center gap-4 mb-6">
                    <img src="${currentMeal.thumbnail}" alt="${currentMeal.name}" class="w-16 h-16 rounded-xl object-cover">
                    <div>
                        <h3 class="text-xl font-bold text-gray-900"id="log-this-meal">Log This Meal</h3>
                        <p class="text-gray-500 text-sm">${currentMeal.name}</p>
                    </div>
                </div>
                
                <div class="mb-6">
                    <label class="block text-sm font-semibold text-gray-700 mb-2 text-left">Number of Servings</label>
                    <div class="flex items-center gap-3">
                        <button id="decrease-servings" class="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center">
                            <i class="text-gray-600" data-fa-i2svg=""><svg class="svg-inline--fa fa-minus" data-prefix="fas" data-icon="minus" role="img" viewBox="0 0 448 512" aria-hidden="true" data-fa-i2svg=""><path fill="currentColor" d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"></path></svg></i>
                        </button>
                        <input type="number" id="meal-servings" value="1" min="0.5" max="10" step="0.5" class="w-20 text-center text-xl font-bold border-2 border-gray-200 rounded-lg py-2">
                        <button id="increase-servings" class="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center">
                            <i class="text-gray-600" data-fa-i2svg=""><svg class="svg-inline--fa fa-plus" data-prefix="fas" data-icon="plus" role="img" viewBox="0 0 448 512" aria-hidden="true" data-fa-i2svg=""><path fill="currentColor" d="M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z"></path></svg></i>
                        </button>
                    </div>
                </div>
                
                
                <div class="bg-emerald-50 rounded-xl p-4 mb-6">
                    <p class="text-sm text-gray-600 mb-2 text-left">Estimated nutrition per serving:</p>
                    <div class="grid grid-cols-4 gap-2 text-center">
                        <div>
                            <p class="text-lg font-bold text-emerald-600" id="modal-calories">${x.calories}</p>
                            <p class="text-xs text-gray-500">Calories</p>
                        </div>
                        <div>
                            <p class="text-lg font-bold text-blue-600" id="modal-protein">${x.protein}</p>
                            <p class="text-xs text-gray-500">Protein</p>
                        </div>
                        <div>
                            <p class="text-lg font-bold text-amber-600" id="modal-carbs">${x.carbs}</p>
                            <p class="text-xs text-gray-500">Carbs</p>
                        </div>
                        <div>
                            <p class="text-lg font-bold text-purple-600" id="modal-fat">${x.fat}</p>
                            <p class="text-xs text-gray-500">Fat</p>
                        </div>
                    </div>
                </div>
                
                
                <div class="flex gap-3">
                    <button id="cancel-log-meal" class="flex-1 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all">
                        Cancel
                    </button>
                    <button id="confirm-log-meal" class="flex-1 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all">
                        <i class="mr-2" data-fa-i2svg=""><svg class="svg-inline--fa fa-clipboard-list" data-prefix="fas" data-icon="clipboard-list" role="img" viewBox="0 0 384 512" aria-hidden="true" data-fa-i2svg=""><path fill="currentColor" d="M311.4 32l8.6 0c35.3 0 64 28.7 64 64l0 352c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l8.6 0C83.6 12.9 104.3 0 128 0L256 0c23.7 0 44.4 12.9 55.4 32zM248 112c13.3 0 24-10.7 24-24s-10.7-24-24-24L136 64c-13.3 0-24 10.7-24 24s10.7 24 24 24l112 0zM128 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm32 0c0 13.3 10.7 24 24 24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-112 0c-13.3 0-24 10.7-24 24zm0 128c0 13.3 10.7 24 24 24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-112 0c-13.3 0-24 10.7-24 24zM96 416a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"></path></svg></i>
                        Log Meal
                    </button>
                </div>
            </div>
    `,
    didOpen: () => {
      document.querySelector("#cancel-log-meal").addEventListener("click", function() {
        
        Swal.close()
      } );
      document.querySelector("#confirm-log-meal").addEventListener("click",function ()  {
       console.log("currentMeal:", currentMeal);
console.log("currentMeal name:", currentMeal.name);
        let recipe = {
   ...currentMeal,
   calories: x.calories,
  protein: x.protein,
  carbs: x.carbs,
  fat: x.fat
};
    recipearr.push(recipe);
 console.log("Logged Meal:", recipearr);
 localStorage.setItem("recipe",JSON.stringify(recipearr));
displaydata()
console.log(recipearr);
let clearall=document.querySelector("#clear-foodlog");
clearall.style.display="block";
clearall.addEventListener("click", function () {

    Swal.fire({
        title: "Clear Today's Log?",
        text: "This will remove all logged food items for today",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, clear it!",
        cancelButtonText: "Cancel",
        confirmButtonColor: "#ef4444",
        cancelButtonColor: "#6b7280"
    }).then((result) => {

        if (result.isConfirmed) {
            clearAllRecipes();
            loggeditems.innerHTML=`<div class="text-center py-12">
                    <div class="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="text-3xl text-gray-300" data-fa-i2svg=""><svg class="svg-inline--fa fa-utensils" data-prefix="fas" data-icon="utensils" role="img" viewBox="0 0 512 512" aria-hidden="true" data-fa-i2svg=""><path fill="currentColor" d="M63.9 14.4C63.1 6.2 56.2 0 48 0s-15.1 6.2-16 14.3L17.9 149.7c-1.3 6-1.9 12.1-1.9 18.2 0 45.9 35.1 83.6 80 87.7L96 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224.4c44.9-4.1 80-41.8 80-87.7 0-6.1-.6-12.2-1.9-18.2L223.9 14.3C223.1 6.2 216.2 0 208 0s-15.1 6.2-15.9 14.4L178.5 149.9c-.6 5.7-5.4 10.1-11.1 10.1-5.8 0-10.6-4.4-11.2-10.2L143.9 14.6C143.2 6.3 136.3 0 128 0s-15.2 6.3-15.9 14.6L99.8 149.8c-.5 5.8-5.4 10.2-11.2 10.2-5.8 0-10.6-4.4-11.1-10.1L63.9 14.4zM448 0C432 0 320 32 320 176l0 112c0 35.3 28.7 64 64 64l32 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-448c0-17.7-14.3-32-32-32z"></path></svg></i>
                    </div>
                    <p class="text-gray-500 font-medium mb-2">No food logged today</p>
                    <p class="text-gray-400 text-sm mb-4">Start tracking your nutrition by logging meals or scanning products</p>
                    <div class="flex justify-center gap-3">
                        <a href="#meals" class="browsebtn inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all">
                            <i data-fa-i2svg=""><svg class="svg-inline--fa fa-plus" data-prefix="fas" data-icon="plus" role="img" viewBox="0 0 448 512" aria-hidden="true" data-fa-i2svg=""><path fill="currentColor" d="M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z"></path></svg></i>
                            Browse Recipes
                        </a>
                        <a href="/products"scanbtn class="nav-link inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
                            <i data-fa-i2svg=""><svg class="svg-inline--fa fa-barcode" data-prefix="fas" data-icon="barcode" role="img" viewBox="0 0 448 512" aria-hidden="true" data-fa-i2svg=""><path fill="currentColor" d="M32 32C14.3 32 0 46.3 0 64L0 448c0 17.7 14.3 32 32 32s32-14.3 32-32L64 64c0-17.7-14.3-32-32-32zm88 0c-13.3 0-24 10.7-24 24l0 400c0 13.3 10.7 24 24 24s24-10.7 24-24l0-400c0-13.3-10.7-24-24-24zm72 32l0 384c0 17.7 14.3 32 32 32s32-14.3 32-32l0-384c0-17.7-14.3-32-32-32s-32 14.3-32 32zm208-8l0 400c0 13.3 10.7 24 24 24s24-10.7 24-24l0-400c0-13.3-10.7-24-24-24s-24 10.7-24 24zm-96 0l0 400c0 13.3 10.7 24 24 24s24-10.7 24-24l0-400c0-13.3-10.7-24-24-24s-24 10.7-24 24z"></path></svg></i>
                            Scan Product
                        </a>
                    </div>
                </div>`;
        }

    });

});
 let browsebtn=document.querySelector(".browsebtn");

let scanbtn=document.querySelector(".scanbtn");


loggeditems.addEventListener("click", function (e) {

    if (e.target.closest(".browsebtn")) {

        productssection.classList.add("hidden");
        mealdetails.classList.add("hidden");
        foodlogsection.classList.add("hidden");

        searchfilterssection.classList.remove("hidden");
        mealcategoriessection.classList.remove("hidden");
        allrecipessection.classList.remove("hidden");

        firstnavbtn.classList.add("bg-emerald-50", "text-emerald-700");
        firstnavbtn.classList.remove("text-gray-600", "hover:bg-gray-50");

        secondnavbtn.classList.remove("bg-emerald-50", "text-emerald-700");
        secondnavbtn.classList.add("text-gray-600", "hover:bg-gray-50");

        thirdnavbtn.classList.remove("bg-emerald-50", "text-emerald-700");
        thirdnavbtn.classList.add("text-gray-600", "hover:bg-gray-50");

        headingone.innerHTML = "Meals & Recipes";
        tagline.innerHTML = "Discover delicious and nutritious recipes tailored for you";
    }


    if (e.target.closest(".scanbtn")) {
 secondnavbtn.classList.remove("text-gray-600","hover:bg-gray-50");
  secondnavbtn.classList.add("bg-emerald-50","text-emerald-700");
  allrecipessection.classList.add("hidden");
  mealcategoriessection.classList.add("hidden");
  searchfilterssection.classList.add("hidden");
  productssection.classList.remove("hidden");
  foodlogsection.classList.add("hidden");
firstnavbtn.classList.remove("bg-emerald-50","text-emerald-700");
firstnavbtn.classList.add("text-gray-600");
thirdnavbtn.classList.remove("bg-emerald-50","text-emerald-700");
thirdnavbtn.classList.add("text-gray-600","hover:bg-gray-50");
 headingone.innerHTML="Product Scanner";
  tagline.innerHTML="Search packaged foods by name or barcode";
  mealdetails.classList.add("hidden");
     
    }

});

/////display
function displaydata(){
  let itemsbox="";
  for(let n=0;n<recipearr.length;n++)
{
  itemsbox+=`<div class="flex items-center justify-between bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-all">
                        <div class="flex items-center gap-4">
                            <img src="${recipearr[n].thumbnail}" alt="${recipearr[n].name}" class="w-14 h-14 rounded-xl object-cover">
                            <div>
                                <p class="font-semibold text-gray-900">${recipearr[n].name}</p>
                                <p class="text-sm text-gray-500">
                                     serving
                                    <span class="mx-1">•</span>
                                    <span class="text-emerald-600">Recipe</span>
                                </p>
                                <p class="text-xs text-gray-400 mt-1">${time}</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-4">
                            <div class="text-right">
                                <p class="text-lg font-bold text-emerald-600">${recipearr[n].calories}</p>
                                <p class="text-xs text-gray-500">kcal</p>
                            </div>
                            <div class="hidden md:flex gap-2 text-xs text-gray-500">
                                <span class="px-2 py-1 bg-blue-50 rounded">${recipearr[n].protein}g P</span>
                                <span class="px-2 py-1 bg-amber-50 rounded">${recipearr[n].carbs}g C</span>
                                <span class="px-2 py-1 bg-purple-50 rounded">${recipearr[n].fat}g F</span>
                            </div>
                            <button onclick="deletebtn(${n})"  class="remove-foodlog-item text-gray-400 hover:text-red-500 transition-all p-2">
                                <i data-fa-i2svg=""><svg class="svg-inline--fa fa-trash-can" data-prefix="fas" data-icon="trash-can" role="img" viewBox="0 0 448 512" aria-hidden="true" data-fa-i2svg=""><path fill="currentColor" d="M136.7 5.9C141.1-7.2 153.3-16 167.1-16l113.9 0c13.8 0 26 8.8 30.4 21.9L320 32 416 32c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 8.7-26.1zM32 144l384 0 0 304c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-304zm88 64c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24zm104 0c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24zm104 0c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24z"></path></svg></i>
                            </button>
                        </div>
                    </div>`

}
loggeditems.innerHTML=itemsbox;



}








let removeButtons = document.querySelectorAll('.remove-foodlog-item');

removeButtons.forEach((button, index) => {
  button.addEventListener('click', function () {
    
    recipearr.splice(index, 1);

    
    localStorage.setItem('recipe', JSON.stringify(recipearr));

    
    displaydata();
  });
});


function clearAllRecipes() {
  recipearr = [];
  localStorage.setItem("recipe", JSON.stringify(recipearr));
  displaydata();
}


















        Swal.close();
      });

      const input = document.querySelector("#meal-servings");
      document.querySelector("#increase-servings").addEventListener("click",function (){
        input.value = (parseFloat(input.value) || 1) + 0.5;
      });
      document.querySelector("#decrease-servings").addEventListener("click",function (){
        if (parseFloat(input.value) > 0.5) {
          input.value = (parseFloat(input.value) || 1) - 0.5;
        }
      });
    }
  });
});


///////////////////////////////////////////////////////





//api  random meals
// all recipies
async function getRandomMeals() {
    try {
        
        let savedMeals = localStorage.getItem("myRandomMeals");
        let final;

        if (savedMeals) {

            final = JSON.parse(savedMeals);
        } else {
            
            let serverData = await fetch(
                "https://nutriplan-api.vercel.app/api/meals/random?count=25"
            );
            final = await serverData.json();

            
            localStorage.setItem("myRandomMeals", JSON.stringify(final));
        }

        console.log("random meals", final);

        function displayrecipies() {
            let randombox = "";

            for (let i = 0; i < final.results.length; i++) {
                if(final.results[i].area == null) 
                {
                    final.results[i].area = "International";
                }

                randombox += `
                    <div class="recipe-card bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group">
                        <div class="relative h-48 overflow-hidden">
                            <img 
                                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                src="${final.results[i].thumbnail}"
                                alt="${final.results[i].name}"
                                loading="lazy"
                            />
                            <div class="absolute bottom-3 left-3 flex gap-2">
                                <span class="px-2 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold rounded-full text-gray-700">
                                    ${final.results[i].category}
                                </span>
                                <span class="px-2 py-1 bg-emerald-500 text-xs font-semibold rounded-full text-white">
                                    ${final.results[i].area}
                                </span>
                            </div>
                        </div>

                        <div class="p-4">
                            <h3 class="text-base font-bold text-gray-900 mb-1">
                                ${final.results[i].name}
                            </h3>
                            <p class="text-xs text-gray-600 mb-3 line-clamp-2">
                                ${final.results[i].instructions[0]}
                            </p>
                        </div>
                    </div>
                `;
            }

            recipesGrid.innerHTML = randombox;
        }
displayrecipies();
clickallrecipiesbtn();
function clickallrecipiesbtn()
{
    let recipecardallbtn=document.querySelectorAll(".recipe-card");
    let 
allrecipesid="";

    for(let i=0;i<recipecardallbtn.length;i++)
    {
        console.log(final.results[i].category);
recipecardallbtn[i].addEventListener("click",async function(){
  console.log("CLICKED");
        console.log("INDEX:", i);
        console.log("MEAL:", final.results[i]);
  mealdetails.classList.remove("hidden");
searchfilterssection.classList.add("hidden");
mealcategoriessection.classList.add("hidden");
allrecipessection.classList.add("hidden");
          
            allrecipesid = final.results[i].id;
            try{
                let apidata=await fetch(`https://nutriplan-api.vercel.app/api/meals/${allrecipesid}`);
                let getiddata=await apidata.json(); 
                console.log(getiddata);
                let body = {
       recipeName: getiddata.result.name,
       ingredients: getiddata.result.ingredients.map(function(item) {
    return `${item.measure} ${item.ingredient}`;
  })
};

let response = await fetch(
  "https://nutriplan-api.vercel.app/api/nutrition/analyze",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "vM89ff4XGH8CzZbOm23PpH6OdLDebKVO1QtS5r4k"
    },
    body: JSON.stringify(body)
  }
);


let nutritiondata = await response.json();


console.log("القيم الغذائية الجاية من السيرفر:", nutritiondata);
  x=nutritiondata.data.perServing;
caloriesperserving.innerHTML=x.calories;
 totalcal.innerHTML=`Total: ${nutritiondata.data.totals.calories} cal`;
  proteinfacts.innerHTML=x.protein;
  carbsfacts.innerHTML=x.carbs;
  fatfacts.innerHTML=x.fat;
  fiberfacts.innerHTML=x.fiber;
  sugarfacts.innerHTML=x.sugar;






// tags box
let idtagsbox = "";
if(getiddata.result.tags.length!=0)
{
for (let q = 0; q < getiddata.result.tags.length; q++) {
    idtagsbox += `
        <span class="px-3 py-1 bg-purple-500 text-white text-sm font-semibold rounded-full recipe-tag">
            ${getiddata.result.tags[q]}
        </span>
    `;
}

}



// random ingredients
let ingredientsBox = "";

for (let i = 0; i < getiddata.result.ingredients.length; i++) {

    ingredientsBox += `
        <div class="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors">

            <input 
                type="checkbox"
                class="ingredient-checkbox w-5 h-5 text-emerald-600 rounded border-gray-300"
            />

            <span class="text-gray-700">

                <span class="font-medium text-gray-900">
                    ${getiddata.result.ingredients[i].measure}
                </span>

                ${getiddata.result.ingredients[i].ingredient}

            </span>

        </div>
    `;
}
//random instructions 
let randominstructionp="";
for(let n=0;n<getiddata.result.instructions.length;n++)
{
          randominstructionp+=`
                  <div
                    class="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <div
                      class="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold shrink-0 "
                    >
                      ${n+1}
                    </div>
                    <p class="text-gray-700 leading-relaxed pt-2 inst-p">
                    ${getiddata.result.instructions[n]}
                    </p>
                    </div>
                  `

}
instructionsParagraph.innerHTML=randominstructionp;

// hero section inner html
let areatest="";
if(getiddata.result.area!=null)
{
areatest=` <span
                    class="px-3 py-1 bg-blue-500 text-white text-sm font-semibold rounded-full food-area"
                    >
                     ${getiddata.result.area}
                    </span>`
}
heroSection.innerHTML=
` <div class="relative h-80 md:h-96">
              <img
                src="${getiddata.result.thumbnail}"
                alt="${getiddata.result.name}"
                class="w-full h-full object-cover"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
              ></div>
              <div class="absolute bottom-0 left-0 right-0 p-8">
                <div class="flex items-center gap-3 mb-3">
                  <span
                    class="px-3 py-1 bg-emerald-500 text-white text-sm font-semibold rounded-full"
                    >
                    ${getiddata.result.category}
                    </span
                  >
                 
                  ${areatest}
                  
                     ${idtagsbox}
         
                </div>
                <h1 class="text-3xl md:text-4xl font-bold text-white mb-2">
                 ${getiddata.result.name || ""}
                </h1>
                <div class="flex items-center gap-6 text-white/90">
                  <span class="flex items-center gap-2">
                    <i class="fa-solid fa-clock"></i>
                    <span>30 min</span>
                  </span>
                  <span class="flex items-center gap-2">
                    <i class="fa-solid fa-utensils"></i>
                    <span id="hero-servings">${nutritiondata.data.servings} servings</span>
                  </span>
                  <span class="flex items-center gap-2">
                    <i class="fa-solid fa-fire"></i>
                    <span id="hero-calories">${x.calories} cal/serving</span>
                  </span>
                </div>
              </div>
            </div>
               <!-- Ingredients --> 
    <div class="bg-white rounded-2xl shadow-lg p-6"> 

        <h2 class="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2"> 

            <i class="fa-solid fa-list-check text-emerald-600"></i> 

            Ingredients 

            <span class="text-sm font-normal text-gray-500 ml-auto">
                ${getiddata.result.ingredients.length} items
            </span>

        </h2> 


        <div class="grid grid-cols-1 md:grid-cols-2 gap-3"> 

            ${ingredientsBox}

        </div> 
         </div> `;


         ///////////try
  logmealbtn.addEventListener("click", function () {
  Swal.fire({
    width: "450px",
    showConfirmButton: false,
    showCloseButton: false,
    customClass: { popup: "!rounded-3xl" },
    html: `
    <div class="bg-white rounded-2xl p-6 max-w-md w-full mx-4">
                <div class="flex items-center gap-4 mb-6">
                    <img src="${getiddata.result.thumbnail}" alt="${getiddata.result.name}" class="w-16 h-16 rounded-xl object-cover">
                    <div>
                        <h3 class="text-xl font-bold text-gray-900">Log This Meal</h3>
                        <p class="text-gray-500 text-sm">${getiddata.result.name}</p>
                    </div>
                </div>
                
                <div class="mb-6">
                    <label class="block text-sm font-semibold text-gray-700 mb-2 text-left">Number of Servings</label>
                    <div class="flex items-center gap-3">
                        <button id="decrease-servings" class="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center">
                            <i class="text-gray-600" data-fa-i2svg=""><svg class="svg-inline--fa fa-minus" data-prefix="fas" data-icon="minus" role="img" viewBox="0 0 448 512" aria-hidden="true" data-fa-i2svg=""><path fill="currentColor" d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"></path></svg></i>
                        </button>
                        <input type="number" id="meal-servings" value="1" min="0.5" max="10" step="0.5" class="w-20 text-center text-xl font-bold border-2 border-gray-200 rounded-lg py-2">
                        <button id="increase-servings" class="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center">
                            <i class="text-gray-600" data-fa-i2svg=""><svg class="svg-inline--fa fa-plus" data-prefix="fas" data-icon="plus" role="img" viewBox="0 0 448 512" aria-hidden="true" data-fa-i2svg=""><path fill="currentColor" d="M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z"></path></svg></i>
                        </button>
                    </div>
                </div>
                
                
                <div class="bg-emerald-50 rounded-xl p-4 mb-6">
                    <p class="text-sm text-gray-600 mb-2 text-left">Estimated nutrition per serving:</p>
                    <div class="grid grid-cols-4 gap-2 text-center">
                        <div>
                            <p class="text-lg font-bold text-emerald-600" id="modal-calories">${x.calories}</p>
                            <p class="text-xs text-gray-500">Calories</p>
                        </div>
                        <div>
                            <p class="text-lg font-bold text-blue-600" id="modal-protein">${x.protein}</p>
                            <p class="text-xs text-gray-500">Protein</p>
                        </div>
                        <div>
                            <p class="text-lg font-bold text-amber-600" id="modal-carbs">${x.carbs}</p>
                            <p class="text-xs text-gray-500">Carbs</p>
                        </div>
                        <div>
                            <p class="text-lg font-bold text-purple-600" id="modal-fat">${x.fat}</p>
                            <p class="text-xs text-gray-500">Fat</p>
                        </div>
                    </div>
                </div>
                
                
                <div class="flex gap-3">
                    <button id="cancel-log-meal" class="flex-1 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all">
                        Cancel
                    </button>
                    <button id="confirm-log-meal" class="flex-1 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all">
                        <i class="mr-2" data-fa-i2svg=""><svg class="svg-inline--fa fa-clipboard-list" data-prefix="fas" data-icon="clipboard-list" role="img" viewBox="0 0 384 512" aria-hidden="true" data-fa-i2svg=""><path fill="currentColor" d="M311.4 32l8.6 0c35.3 0 64 28.7 64 64l0 352c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l8.6 0C83.6 12.9 104.3 0 128 0L256 0c23.7 0 44.4 12.9 55.4 32zM248 112c13.3 0 24-10.7 24-24s-10.7-24-24-24L136 64c-13.3 0-24 10.7-24 24s10.7 24 24 24l112 0zM128 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm32 0c0 13.3 10.7 24 24 24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-112 0c-13.3 0-24 10.7-24 24zm0 128c0 13.3 10.7 24 24 24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-112 0c-13.3 0-24 10.7-24 24zM96 416a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"></path></svg></i>
                        Log Meal
                    </button>
                </div>
            </div>
    `,
     didOpen: () => {
      document.querySelector("#cancel-log-meal").addEventListener("click", function() {
        
        Swal.close()
      } );
      document.querySelector("#confirm-log-meal").addEventListener("click",function ()  {
   
        let recipe = {
   ...getiddata,
   name:getiddata.result.name,
  thumbnail: getiddata.result.thumbnail,
   calories: x.calories,
  protein: x.protein,
  carbs: x.carbs,
  fat: x.fat
};
    recipearr.push(recipe);
 console.log("Logged Meal:", recipearr);
 localStorage.setItem("recipe",JSON.stringify(recipearr));
displaydata()
console.log(recipearr);
let clearall=document.querySelector("#clear-foodlog");
clearall.style.display="block";
clearall.addEventListener("click", function () {

    Swal.fire({
        title: "Clear Today's Log?",
        text: "This will remove all logged food items for today",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, clear it!",
        cancelButtonText: "Cancel",
        confirmButtonColor: "#ef4444",
        cancelButtonColor: "#6b7280"
    }).then((result) => {

        if (result.isConfirmed) {
            clearAllRecipes();
            loggeditems.innerHTML=`<div class="text-center py-12">
                    <div class="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="text-3xl text-gray-300" data-fa-i2svg=""><svg class="svg-inline--fa fa-utensils" data-prefix="fas" data-icon="utensils" role="img" viewBox="0 0 512 512" aria-hidden="true" data-fa-i2svg=""><path fill="currentColor" d="M63.9 14.4C63.1 6.2 56.2 0 48 0s-15.1 6.2-16 14.3L17.9 149.7c-1.3 6-1.9 12.1-1.9 18.2 0 45.9 35.1 83.6 80 87.7L96 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224.4c44.9-4.1 80-41.8 80-87.7 0-6.1-.6-12.2-1.9-18.2L223.9 14.3C223.1 6.2 216.2 0 208 0s-15.1 6.2-15.9 14.4L178.5 149.9c-.6 5.7-5.4 10.1-11.1 10.1-5.8 0-10.6-4.4-11.2-10.2L143.9 14.6C143.2 6.3 136.3 0 128 0s-15.2 6.3-15.9 14.6L99.8 149.8c-.5 5.8-5.4 10.2-11.2 10.2-5.8 0-10.6-4.4-11.1-10.1L63.9 14.4zM448 0C432 0 320 32 320 176l0 112c0 35.3 28.7 64 64 64l32 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-448c0-17.7-14.3-32-32-32z"></path></svg></i>
                    </div>
                    <p class="text-gray-500 font-medium mb-2">No food logged today</p>
                    <p class="text-gray-400 text-sm mb-4">Start tracking your nutrition by logging meals or scanning products</p>
                    <div class="flex justify-center gap-3">
                        <a href="#meals" class="browsebtn inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all">
                            <i data-fa-i2svg=""><svg class="svg-inline--fa fa-plus" data-prefix="fas" data-icon="plus" role="img" viewBox="0 0 448 512" aria-hidden="true" data-fa-i2svg=""><path fill="currentColor" d="M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z"></path></svg></i>
                            Browse Recipes
                        </a>
                        <a href="/products"scanbtn class="nav-link inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
                            <i data-fa-i2svg=""><svg class="svg-inline--fa fa-barcode" data-prefix="fas" data-icon="barcode" role="img" viewBox="0 0 448 512" aria-hidden="true" data-fa-i2svg=""><path fill="currentColor" d="M32 32C14.3 32 0 46.3 0 64L0 448c0 17.7 14.3 32 32 32s32-14.3 32-32L64 64c0-17.7-14.3-32-32-32zm88 0c-13.3 0-24 10.7-24 24l0 400c0 13.3 10.7 24 24 24s24-10.7 24-24l0-400c0-13.3-10.7-24-24-24zm72 32l0 384c0 17.7 14.3 32 32 32s32-14.3 32-32l0-384c0-17.7-14.3-32-32-32s-32 14.3-32 32zm208-8l0 400c0 13.3 10.7 24 24 24s24-10.7 24-24l0-400c0-13.3-10.7-24-24-24s-24 10.7-24 24zm-96 0l0 400c0 13.3 10.7 24 24 24s24-10.7 24-24l0-400c0-13.3-10.7-24-24-24s-24 10.7-24 24z"></path></svg></i>
                            Scan Product
                        </a>
                    </div>
                </div>`;
        }

    });

});
 let browsebtn=document.querySelector(".browsebtn");

let scanbtn=document.querySelector(".scanbtn");


loggeditems.addEventListener("click", function (e) {

    if (e.target.closest(".browsebtn")) {

        productssection.classList.add("hidden");
        mealdetails.classList.add("hidden");
        foodlogsection.classList.add("hidden");

        searchfilterssection.classList.remove("hidden");
        mealcategoriessection.classList.remove("hidden");
        allrecipessection.classList.remove("hidden");

        firstnavbtn.classList.add("bg-emerald-50", "text-emerald-700");
        firstnavbtn.classList.remove("text-gray-600", "hover:bg-gray-50");

        secondnavbtn.classList.remove("bg-emerald-50", "text-emerald-700");
        secondnavbtn.classList.add("text-gray-600", "hover:bg-gray-50");

        thirdnavbtn.classList.remove("bg-emerald-50", "text-emerald-700");
        thirdnavbtn.classList.add("text-gray-600", "hover:bg-gray-50");

        headingone.innerHTML = "Meals & Recipes";
        tagline.innerHTML = "Discover delicious and nutritious recipes tailored for you";
    }


    if (e.target.closest(".scanbtn")) {
 secondnavbtn.classList.remove("text-gray-600","hover:bg-gray-50");
  secondnavbtn.classList.add("bg-emerald-50","text-emerald-700");
  allrecipessection.classList.add("hidden");
  mealcategoriessection.classList.add("hidden");
  searchfilterssection.classList.add("hidden");
  productssection.classList.remove("hidden");
  foodlogsection.classList.add("hidden");
firstnavbtn.classList.remove("bg-emerald-50","text-emerald-700");
firstnavbtn.classList.add("text-gray-600");
thirdnavbtn.classList.remove("bg-emerald-50","text-emerald-700");
thirdnavbtn.classList.add("text-gray-600","hover:bg-gray-50");
 headingone.innerHTML="Product Scanner";
  tagline.innerHTML="Search packaged foods by name or barcode";
  mealdetails.classList.add("hidden");
     
    }

});

/////display
function displaydata(){
  let itemsbox="";
  for(let n=0;n<recipearr.length;n++)
{
  itemsbox+=`<div class="flex items-center justify-between bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-all">
                        <div class="flex items-center gap-4">
                            <img src="${recipearr[n].thumbnail}" alt="${recipearr[n].name}" class="w-14 h-14 rounded-xl object-cover">
                            <div>
                                <p class="font-semibold text-gray-900">${recipearr[n].name}</p>
                                <p class="text-sm text-gray-500">
                                     serving
                                    <span class="mx-1">•</span>
                                    <span class="text-emerald-600">Recipe</span>
                                </p>
                                <p class="text-xs text-gray-400 mt-1">${time}</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-4">
                            <div class="text-right">
                                <p class="text-lg font-bold text-emerald-600">${recipearr[n].calories}</p>
                                <p class="text-xs text-gray-500">kcal</p>
                            </div>
                            <div class="hidden md:flex gap-2 text-xs text-gray-500">
                                <span class="px-2 py-1 bg-blue-50 rounded">${recipearr[n].protein}g P</span>
                                <span class="px-2 py-1 bg-amber-50 rounded">${recipearr[n].carbs}g C</span>
                                <span class="px-2 py-1 bg-purple-50 rounded">${recipearr[n].fat}g F</span>
                            </div>
                            <button onclick="deletebtn(${n})"  class="remove-foodlog-item text-gray-400 hover:text-red-500 transition-all p-2">
                                <i data-fa-i2svg=""><svg class="svg-inline--fa fa-trash-can" data-prefix="fas" data-icon="trash-can" role="img" viewBox="0 0 448 512" aria-hidden="true" data-fa-i2svg=""><path fill="currentColor" d="M136.7 5.9C141.1-7.2 153.3-16 167.1-16l113.9 0c13.8 0 26 8.8 30.4 21.9L320 32 416 32c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 8.7-26.1zM32 144l384 0 0 304c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-304zm88 64c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24zm104 0c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24zm104 0c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24z"></path></svg></i>
                            </button>
                        </div>
                    </div>`

}
loggeditems.innerHTML=itemsbox;
 



}








let removeButtons = document.querySelectorAll('.remove-foodlog-item');

removeButtons.forEach((button, index) => {
  button.addEventListener('click', function () {
    
    recipearr.splice(index, 1);

    
    localStorage.setItem('recipe', JSON.stringify(recipearr));

    
    displaydata();
  });
});


function clearAllRecipes() {
  recipearr = [];
  localStorage.setItem("recipe", JSON.stringify(recipearr));
  displaydata();
}


















        Swal.close();
      });

      const input = document.querySelector("#meal-servings");
      document.querySelector("#increase-servings").addEventListener("click",function (){
        input.value = (parseFloat(input.value) || 1) + 0.5;
      });
      document.querySelector("#decrease-servings").addEventListener("click",function (){
        if (parseFloat(input.value) > 0.5) {
          input.value = (parseFloat(input.value) || 1) - 0.5;
        }
      });
    }
 
  });
});

         






         

     
// youtubevideo
let youtube=getiddata.result.youtube;
videoyoutube.src=youtube.replace("watch?v=","embed/");



            }
            catch(err)
            {

            }
            
        
         })



    }

}

clickallrecipiesbtn();





allCuisines.addEventListener("click",function(){
displayrecipies();







})
    } catch (err) {
        console.log(err);
    }
}

getRandomMeals();










let navlink=document.querySelectorAll(".nav-link");
for(let y=0;y<navlink.length;y++)
{
  navlink[y].addEventListener("click",function(){

  })
}











   








let area=[];
// areas
// api get all areas button
async function internationalcuisines()
{
try
{
let response=await fetch("https://nutriplan-api.vercel.app/api/meals/areas");
let getfiltermeals=await response.json();
 console.log(getfiltermeals);
 for(let i=0;i<interCuisines.length;i++)
 {

 interCuisines[i].innerHTML=getfiltermeals.results[i].name;
 area.push(getfiltermeals.results[i].name);


}
 console.log(area);
 FilterMealsbyArea();

}
catch(err)
{
    console.log(err);
}
}
internationalcuisines();



//put value in categories cards
// api get all categories

async function getcategories()
{

try{
let reaction=await fetch("https://nutriplan-api.vercel.app/api/meals/categories");
 let end=await reaction.json();
   
 
let categoryname="";

 for(let i=0;i<categorycard.length;i++)
 {
   // putting names in category
categorycard[i].querySelector("h3").innerHTML = end.results[i].name;

categoryname= end.results[i].name;
 
categorycard[i].addEventListener("click",async function(){
let categorybox=""

categoryname= end.results[i].name;

   let categoryapi=await fetch(`https://nutriplan-api.vercel.app/api/meals/filter?category=${categoryname}&page=1&limit=25`);
   let categoryoutput=await categoryapi.json();
   console.log("salmaaaaa",categoryoutput);
for(let j=0;j<categoryoutput.results.length;j++)
{
    if(categoryoutput.results[j].area==null)
    {
        categoryoutput.results[j].area="International";
       
    }
  counting.innerHTML=`Showing ${categoryoutput.results.length} ${categoryoutput.results[j].category} recipes`;
    categorybox=categorybox+`<div
              class="recipe-card bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group"
              data-meal-id="${categoryoutput.results[j].id}"
            >
              <div class="relative h-48 overflow-hidden">
                <img
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                src="${categoryoutput.results[j].thumbnail}"
                  alt="${categoryoutput.results[j].name}"
                  loading="lazy"
                />
               <div class="absolute bottom-3 left-3 flex gap-2">
  <span
    class="px-2 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold rounded-full text-gray-700 flex items-center gap-1"
  >
    <i class="fa-solid fa-utensils text-blue-500 text-[10px]"></i>
    ${categoryoutput.results[j].category}
  </span>

<span class="px-2 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold rounded-lg">
                            <i class="mr-1 text-blue-600" data-fa-i2svg=""><svg class="svg-inline--fa fa-globe" data-prefix="fas" data-icon="globe" role="img" viewBox="0 0 512 512" aria-hidden="true" data-fa-i2svg=""><path fill="currentColor" d="M351.9 280l-190.9 0c2.9 64.5 17.2 123.9 37.5 167.4 11.4 24.5 23.7 41.8 35.1 52.4 11.2 10.5 18.9 12.2 22.9 12.2s11.7-1.7 22.9-12.2c11.4-10.6 23.7-28 35.1-52.4 20.3-43.5 34.6-102.9 37.5-167.4zM160.9 232l190.9 0C349 167.5 334.7 108.1 314.4 64.6 303 40.2 290.7 22.8 279.3 12.2 268.1 1.7 260.4 0 256.4 0s-11.7 1.7-22.9 12.2c-11.4 10.6-23.7 28-35.1 52.4-20.3 43.5-34.6 102.9-37.5 167.4zm-48 0C116.4 146.4 138.5 66.9 170.8 14.7 78.7 47.3 10.9 131.2 1.5 232l111.4 0zM1.5 280c9.4 100.8 77.2 184.7 169.3 217.3-32.3-52.2-54.4-131.7-57.9-217.3L1.5 280zm398.4 0c-3.5 85.6-25.6 165.1-57.9 217.3 92.1-32.7 159.9-116.5 169.3-217.3l-111.4 0zm111.4-48C501.9 131.2 434.1 47.3 342 14.7 374.3 66.9 396.4 146.4 399.9 232l111.4 0z"></path></svg></i>
                          ${categoryoutput.results[j].area}
                            </span>

</div>
              </div>
              <div class="p-4">
                <h3
                  class="text-base font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors line-clamp-1"
                >
                  ${categoryoutput.results[j].name}
                </h3>
                <p class="text-xs text-gray-600 mb-3 line-clamp-2">
                    ${categoryoutput.results[j].instructions && categoryoutput.results[j].instructions[0] ? categoryoutput.results[j].instructions[0] : ""}
                    ${categoryoutput.results[j].instructions && categoryoutput.results[j].instructions[1] ? categoryoutput.results[j].instructions[1] : ""}
                </p>
                <div class="flex items-center justify-between text-xs">
                  <span class="font-semibold text-gray-900">
                    <i class="fa-solid fa-utensils text-emerald-600 mr-1"></i>
                      ${categoryoutput.results[j].category}
                  </span>
                  <span class="font-semibold text-gray-500">
                    <i class="fa-solid fa-globe text-blue-500 mr-1"></i>
                        ${categoryoutput.results[j].area}
                  </span>
                </div>
              </div>
            </div>  `

}

recipesGrid.innerHTML=categorybox;

// getting recipe by id/// 
let recipeId=""
let recipeCard =document.querySelectorAll(".recipe-card");
for(let k=0;k<recipeCard.length;k++)
{

recipeCard[k].addEventListener("click",async function getmealbyid()
{
   mealdetails.classList.remove("hidden");
searchfilterssection.classList.add("hidden");
mealcategoriessection.classList.add("hidden");
allrecipessection.classList.add("hidden");

recipeId=this.getAttribute("data-meal-id");
console.log(recipeId);
let getallIds=await fetch(`https://nutriplan-api.vercel.app/api/meals/${recipeId}`);
let IdOfMeals=await getallIds.json();
// nutrition
let body = {
  recipeName: IdOfMeals.result.name,
ingredients: IdOfMeals.result.ingredients.map(function(item) {
    return `${item.measure || ""} ${item.ingredient || ""}`.trim();
  })
};

let response = await fetch(
  "https://nutriplan-api.vercel.app/api/nutrition/analyze",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "vM89ff4XGH8CzZbOm23PpH6OdLDebKVO1QtS5r4k"
    },
    body: JSON.stringify(body)
  }
);


let nutritiondata = await response.json();


console.log("القيم الغذائية الجاية من السيرفر:", nutritiondata);


  x=nutritiondata.data.perServing;
 caloriesperserving.innerHTML=x.calories;
 totalcal.innerHTML=`Total:${nutritiondata.data.totals.calories} cal;`
proteinfacts.innerHTML=x.protein;
carbsfacts.innerHTML=x.carbs;
fatfacts.innerHTML=x.fat;
fiberfacts.innerHTML=x.fiber;
sugarfacts.innerHTML=x.sugar;






let tagsbox = "";

if(IdOfMeals.result.tags && Array.isArray(IdOfMeals.result.tags)) {
  for (let q = 0; q < IdOfMeals.result.tags.length; q++) {
      tagsbox += `
          <span class="px-3 py-1 bg-purple-500 text-white text-sm font-semibold rounded-full recipe-tag">
              ${IdOfMeals.result.tags[q]}
          </span>
      `;
  }
}

let categoryingredientsBox = "";

if(IdOfMeals.result.ingredients && Array.isArray(IdOfMeals.result.ingredients)) {
  for (let i = 0; i < IdOfMeals.result.ingredients.length; i++) {

      categoryingredientsBox += `
          <div class="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors">

              <input 
                  type="checkbox"
                  class="ingredient-checkbox w-5 h-5 text-emerald-600 rounded border-gray-300"
              />

              <span class="text-gray-700">

                  <span class="font-medium text-gray-900">
                      ${IdOfMeals.result.ingredients[i].measure || ""}
                  </span>

                  ${IdOfMeals.result.ingredients[i].ingredient || ""}

              </span>

          </div>
      `;
  }
}

let ingred=document.querySelector(".ingred");
 ingred.innerHTML= categoryingredientsBox;

let foodarea ="";

if (IdOfMeals.result.area!=null) {
 foodarea= `
  <span
  class="px-3 py-1 bg-blue-500 text-white text-sm font-semibold rounded-full food-area"
    >
  ${IdOfMeals.result.area}
  </span>`
}
let recipetag = "";

if(IdOfMeals.result.tags && Array.isArray(IdOfMeals.result.tags)) {
  for(let h=0;h<IdOfMeals.result.tags.length;h++ ) 
  {
        recipetag += `
          <span class="px-3 py-1 bg-purple-500 text-white text-sm font-semibold rounded-full recipe-tag">
              ${IdOfMeals.result.tags[h]}
          </span>
      `;
  }
}

let categarea="";
if(IdOfMeals.result.area!=null)
{
  categarea+=
  `<span
    class="px-3 py-1 bg-blue-500 text-white text-sm font-semibold rounded-full recipecountry"
    >
    ${IdOfMeals.result.area}
    </span>
    `
}

heroSection.innerHTML=
` <div>
  <div class="relative h-80 md:h-96">
              <img
                src="${IdOfMeals.result.thumbnail}"
                alt="${IdOfMeals.result.name}"
                class="w-full h-full object-cover"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
              ></div>
              <div class="absolute bottom-0 left-0 right-0 p-8">
                <div class="flex items-center gap-3 mb-3">
                  <span
                    class="px-3 py-1 bg-emerald-500 text-white text-sm font-semibold rounded-full"
                    >
                    ${IdOfMeals.result.category}
                    </span
                  >
                 
                 ${ categarea}
                  
                  ${recipetag}
         
                </div>
                <h1 class="text-3xl md:text-4xl font-bold text-white mb-2">
                 ${IdOfMeals.result.name || ""}
                </h1>
                <div class="flex items-center gap-6 text-white/90">
                  <span class="flex items-center gap-2">
                    <i class="fa-solid fa-clock"></i>
                    <span>30 min</span>
                  </span>
                  <span class="flex items-center gap-2">
                    <i class="fa-solid fa-utensils"></i>
                    <span id="hero-servings">${nutritiondata.data.servings || ""} servings</span>
                  </span>
                  <span class="flex items-center gap-2">
                    <i class="fa-solid fa-fire"></i>
                    <span id="hero-calories">${x.calories || ""} cal/serving</span>
                  </span>
                </div>
              </div>
            </div>
              

</div>`;





                 
//////////sweetalet
logmealbtn.addEventListener("click", function () {
  Swal.fire({
    width: "450px",
    showConfirmButton: false,
    showCloseButton: false,
    customClass: { popup: "!rounded-3xl" },
    html: `
    <div class="bg-white rounded-2xl p-6 max-w-md w-full mx-4">
                <div class="flex items-center gap-4 mb-6">
                    <img src="${IdOfMeals.result.thumbnail}" alt="${IdOfMeals.result.name}" class="w-16 h-16 rounded-xl object-cover">
                    <div>
                        <h3 class="text-xl font-bold text-gray-900">Log This Meal</h3>
                        <p class="text-gray-500 text-sm">${IdOfMeals.result.name}</p>
                    </div>
                </div>
                
                <div class="mb-6">
                    <label class="block text-sm font-semibold text-gray-700 mb-2 text-left">Number of Servings</label>
                    <div class="flex items-center gap-3">
                        <button id="decrease-servings" class="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center">
                            <i class="text-gray-600" data-fa-i2svg=""><svg class="svg-inline--fa fa-minus" data-prefix="fas" data-icon="minus" role="img" viewBox="0 0 448 512" aria-hidden="true" data-fa-i2svg=""><path fill="currentColor" d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"></path></svg></i>
                        </button>
                        <input type="number" id="meal-servings" value="1" min="0.5" max="10" step="0.5" class="w-20 text-center text-xl font-bold border-2 border-gray-200 rounded-lg py-2">
                        <button id="increase-servings" class="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center">
                            <i class="text-gray-600" data-fa-i2svg=""><svg class="svg-inline--fa fa-plus" data-prefix="fas" data-icon="plus" role="img" viewBox="0 0 448 512" aria-hidden="true" data-fa-i2svg=""><path fill="currentColor" d="M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z"></path></svg></i>
                        </button>
                    </div>
                </div>
                
                
                <div class="bg-emerald-50 rounded-xl p-4 mb-6">
                    <p class="text-sm text-gray-600 mb-2 text-left">Estimated nutrition per serving:</p>
                    <div class="grid grid-cols-4 gap-2 text-center">
                        <div>
                            <p class="text-lg font-bold text-emerald-600" id="modal-calories">${x.calories}</p>
                            <p class="text-xs text-gray-500">Calories</p>
                        </div>
                        <div>
                            <p class="text-lg font-bold text-blue-600" id="modal-protein">${x.protein}</p>
                            <p class="text-xs text-gray-500">Protein</p>
                        </div>
                        <div>
                            <p class="text-lg font-bold text-amber-600" id="modal-carbs">${x.carbs}</p>
                            <p class="text-xs text-gray-500">Carbs</p>
                        </div>
                        <div>
                            <p class="text-lg font-bold text-purple-600" id="modal-fat">${x.fat}</p>
                            <p class="text-xs text-gray-500">Fat</p>
                        </div>
                    </div>
                </div>
                
                
                <div class="flex gap-3">
                    <button id="cancel-log-meal" class="flex-1 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all">
                        Cancel
                    </button>
                    <button id="confirm-log-meal" class="flex-1 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all">
                        <i class="mr-2" data-fa-i2svg=""><svg class="svg-inline--fa fa-clipboard-list" data-prefix="fas" data-icon="clipboard-list" role="img" viewBox="0 0 384 512" aria-hidden="true" data-fa-i2svg=""><path fill="currentColor" d="M311.4 32l8.6 0c35.3 0 64 28.7 64 64l0 352c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l8.6 0C83.6 12.9 104.3 0 128 0L256 0c23.7 0 44.4 12.9 55.4 32zM248 112c13.3 0 24-10.7 24-24s-10.7-24-24-24L136 64c-13.3 0-24 10.7-24 24s10.7 24 24 24l112 0zM128 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm32 0c0 13.3 10.7 24 24 24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-112 0c-13.3 0-24 10.7-24 24zm0 128c0 13.3 10.7 24 24 24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-112 0c-13.3 0-24 10.7-24 24zM96 416a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"></path></svg></i>
                        Log Meal
                    </button>
                </div>
            </div>
    `,
     didOpen: () => {
      document.querySelector("#cancel-log-meal").addEventListener("click", function() {
        
        Swal.close()
      } );
      document.querySelector("#confirm-log-meal").addEventListener("click",function ()  {
   
        let recipe = {
   ...IdOfMeals,
   name: IdOfMeals.result.name,
  thumbnail: IdOfMeals.result.thumbnail,
   calories: x.calories,
  protein: x.protein,
  carbs: x.carbs,
  fat: x.fat
};
    recipearr.push(recipe);
 console.log("Logged Meal:", recipearr);
 localStorage.setItem("recipe",JSON.stringify(recipearr));
displaydata()
console.log(recipearr);
let clearall=document.querySelector("#clear-foodlog");
clearall.style.display="block";
clearall.addEventListener("click", function () {

    Swal.fire({
        title: "Clear Today's Log?",
        text: "This will remove all logged food items for today",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, clear it!",
        cancelButtonText: "Cancel",
        confirmButtonColor: "#ef4444",
        cancelButtonColor: "#6b7280"
    }).then((result) => {

        if (result.isConfirmed) {
            clearAllRecipes();
            loggeditems.innerHTML=`<div class="text-center py-12">
                    <div class="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="text-3xl text-gray-300" data-fa-i2svg=""><svg class="svg-inline--fa fa-utensils" data-prefix="fas" data-icon="utensils" role="img" viewBox="0 0 512 512" aria-hidden="true" data-fa-i2svg=""><path fill="currentColor" d="M63.9 14.4C63.1 6.2 56.2 0 48 0s-15.1 6.2-16 14.3L17.9 149.7c-1.3 6-1.9 12.1-1.9 18.2 0 45.9 35.1 83.6 80 87.7L96 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224.4c44.9-4.1 80-41.8 80-87.7 0-6.1-.6-12.2-1.9-18.2L223.9 14.3C223.1 6.2 216.2 0 208 0s-15.1 6.2-15.9 14.4L178.5 149.9c-.6 5.7-5.4 10.1-11.1 10.1-5.8 0-10.6-4.4-11.2-10.2L143.9 14.6C143.2 6.3 136.3 0 128 0s-15.2 6.3-15.9 14.6L99.8 149.8c-.5 5.8-5.4 10.2-11.2 10.2-5.8 0-10.6-4.4-11.1-10.1L63.9 14.4zM448 0C432 0 320 32 320 176l0 112c0 35.3 28.7 64 64 64l32 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-448c0-17.7-14.3-32-32-32z"></path></svg></i>
                    </div>
                    <p class="text-gray-500 font-medium mb-2">No food logged today</p>
                    <p class="text-gray-400 text-sm mb-4">Start tracking your nutrition by logging meals or scanning products</p>
                    <div class="flex justify-center gap-3">
                        <a href="#meals" class="browsebtn inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all">
                            <i data-fa-i2svg=""><svg class="svg-inline--fa fa-plus" data-prefix="fas" data-icon="plus" role="img" viewBox="0 0 448 512" aria-hidden="true" data-fa-i2svg=""><path fill="currentColor" d="M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z"></path></svg></i>
                            Browse Recipes
                        </a>
                        <a href="/products"scanbtn class="nav-link inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
                            <i data-fa-i2svg=""><svg class="svg-inline--fa fa-barcode" data-prefix="fas" data-icon="barcode" role="img" viewBox="0 0 448 512" aria-hidden="true" data-fa-i2svg=""><path fill="currentColor" d="M32 32C14.3 32 0 46.3 0 64L0 448c0 17.7 14.3 32 32 32s32-14.3 32-32L64 64c0-17.7-14.3-32-32-32zm88 0c-13.3 0-24 10.7-24 24l0 400c0 13.3 10.7 24 24 24s24-10.7 24-24l0-400c0-13.3-10.7-24-24-24zm72 32l0 384c0 17.7 14.3 32 32 32s32-14.3 32-32l0-384c0-17.7-14.3-32-32-32s-32 14.3-32 32zm208-8l0 400c0 13.3 10.7 24 24 24s24-10.7 24-24l0-400c0-13.3-10.7-24-24-24s-24 10.7-24 24zm-96 0l0 400c0 13.3 10.7 24 24 24s24-10.7 24-24l0-400c0-13.3-10.7-24-24-24s-24 10.7-24 24z"></path></svg></i>
                            Scan Product
                        </a>
                    </div>
                </div>`;
        }

    });

});
 let browsebtn=document.querySelector(".browsebtn");

let scanbtn=document.querySelector(".scanbtn");


loggeditems.addEventListener("click", function (e) {

    if (e.target.closest(".browsebtn")) {

        productssection.classList.add("hidden");
        mealdetails.classList.add("hidden");
        foodlogsection.classList.add("hidden");

        searchfilterssection.classList.remove("hidden");
        mealcategoriessection.classList.remove("hidden");
        allrecipessection.classList.remove("hidden");

        firstnavbtn.classList.add("bg-emerald-50", "text-emerald-700");
        firstnavbtn.classList.remove("text-gray-600", "hover:bg-gray-50");

        secondnavbtn.classList.remove("bg-emerald-50", "text-emerald-700");
        secondnavbtn.classList.add("text-gray-600", "hover:bg-gray-50");

        thirdnavbtn.classList.remove("bg-emerald-50", "text-emerald-700");
        thirdnavbtn.classList.add("text-gray-600", "hover:bg-gray-50");

        headingone.innerHTML = "Meals & Recipes";
        tagline.innerHTML = "Discover delicious and nutritious recipes tailored for you";
    }


    if (e.target.closest(".scanbtn")) {
 secondnavbtn.classList.remove("text-gray-600","hover:bg-gray-50");
  secondnavbtn.classList.add("bg-emerald-50","text-emerald-700");
  allrecipessection.classList.add("hidden");
  mealcategoriessection.classList.add("hidden");
  searchfilterssection.classList.add("hidden");
  productssection.classList.remove("hidden");
  foodlogsection.classList.add("hidden");
firstnavbtn.classList.remove("bg-emerald-50","text-emerald-700");
firstnavbtn.classList.add("text-gray-600");
thirdnavbtn.classList.remove("bg-emerald-50","text-emerald-700");
thirdnavbtn.classList.add("text-gray-600","hover:bg-gray-50");
 headingone.innerHTML="Product Scanner";
  tagline.innerHTML="Search packaged foods by name or barcode";
  mealdetails.classList.add("hidden");
     
    }

});

/////display
function displaydata(){
  let itemsbox="";
  for(let n=0;n<recipearr.length;n++)
{
  itemsbox+=`<div class="flex items-center justify-between bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-all">
                        <div class="flex items-center gap-4">
                            <img src="${recipearr[n].thumbnail}" alt="${recipearr[n].name}" class="w-14 h-14 rounded-xl object-cover">
                            <div>
                                <p class="font-semibold text-gray-900">${recipearr[n].name}</p>
                                <p class="text-sm text-gray-500">
                                     serving
                                    <span class="mx-1">•</span>
                                    <span class="text-emerald-600">Recipe</span>
                                </p>
                                <p class="text-xs text-gray-400 mt-1">${time}</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-4">
                            <div class="text-right">
                                <p class="text-lg font-bold text-emerald-600">${recipearr[n].calories}</p>
                                <p class="text-xs text-gray-500">kcal</p>
                            </div>
                            <div class="hidden md:flex gap-2 text-xs text-gray-500">
                                <span class="px-2 py-1 bg-blue-50 rounded">${recipearr[n].protein}g P</span>
                                <span class="px-2 py-1 bg-amber-50 rounded">${recipearr[n].carbs}g C</span>
                                <span class="px-2 py-1 bg-purple-50 rounded">${recipearr[n].fat}g F</span>
                            </div>
                            <button onclick="deletebtn(${n})"  class="remove-foodlog-item text-gray-400 hover:text-red-500 transition-all p-2">
                                <i data-fa-i2svg=""><svg class="svg-inline--fa fa-trash-can" data-prefix="fas" data-icon="trash-can" role="img" viewBox="0 0 448 512" aria-hidden="true" data-fa-i2svg=""><path fill="currentColor" d="M136.7 5.9C141.1-7.2 153.3-16 167.1-16l113.9 0c13.8 0 26 8.8 30.4 21.9L320 32 416 32c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 8.7-26.1zM32 144l384 0 0 304c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-304zm88 64c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24zm104 0c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24zm104 0c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24z"></path></svg></i>
                            </button>
                        </div>
                    </div>`

}
loggeditems.innerHTML=itemsbox;
 



}








let removeButtons = document.querySelectorAll('.remove-foodlog-item');

removeButtons.forEach((button, index) => {
  button.addEventListener('click', function () {
    
    recipearr.splice(index, 1);

    
    localStorage.setItem('recipe', JSON.stringify(recipearr));

    
    displaydata();
  });
});


function clearAllRecipes() {
  recipearr = [];
  localStorage.setItem("recipe", JSON.stringify(recipearr));
  displaydata();
}


















        Swal.close();
      });

      const input = document.querySelector("#meal-servings");
      document.querySelector("#increase-servings").addEventListener("click",function (){
        input.value = (parseFloat(input.value) || 1) + 0.5;
      });
      document.querySelector("#decrease-servings").addEventListener("click",function (){
        if (parseFloat(input.value) > 0.5) {
          input.value = (parseFloat(input.value) || 1) - 0.5;
        }
      });
    }
 
  });
});


let recipeinstructionsid="";
if(IdOfMeals.result.instructions ) 
{
  for(let z=0;z<IdOfMeals.result.instructions.length;z++)
  {

  recipeinstructionsid+=`
                  <div
                    class="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <div
                      class="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold shrink-0 "
                    >
                      ${z+1}
                    </div>
                    <p class="text-gray-700 leading-relaxed pt-2 inst-p">
                    ${IdOfMeals.result.instructions[z]}
                    </p>
                    </div>
                  `
      

  }
}


 
  instructionsParagraph.innerHTML=recipeinstructionsid;


// youtube
if(IdOfMeals.result.youtube && typeof videoyoutube !== "undefined") {
  let youtube=IdOfMeals.result.youtube
  videoyoutube.src=youtube.replace("watch?v=","embed/");
}
})


}

})

 }
          
}
catch(err){
    console.log(err);
}

 }


getcategories();




















// meals by area
let mealsbyarea = [];

async function FilterMealsbyArea() {
    try {

        for (let i = 0; i < area.length; i++) {
            let reply = await fetch(
                `https://nutriplan-api.vercel.app/api/meals/filter?area=${area[i]}&page=1&limit=25`
            );

            mealsbyarea.push(await reply.json());

            console.log(mealsbyarea);
        }


        for (let i = 0; i < interCuisines.length; i++) {

            interCuisines[i].addEventListener("click", function () {
                if (mealsbyarea[i].results.length == 0) {
                    recipesGrid.innerHTML = "";
                    emptyrecipies.classList.remove("hidden");
                    counting.innerHTML = `Showing 0 recipes`;

                }
                else {
                    counting.innerHTML = `Showing ${mealsbyarea[i].results.length} recipes`;
                    emptyrecipies.classList.add("hidden");

                    let areabox = "";

                    for (let j = 0; j < mealsbyarea[i].results.length; j++) {

                        
                        let inst0 = mealsbyarea[i].results[j].instructions && mealsbyarea[i].results[j].instructions[0] ? mealsbyarea[i].results[j].instructions[0] : "";
                        let inst1 = mealsbyarea[i].results[j].instructions && mealsbyarea[i].results[j].instructions[1] ? mealsbyarea[i].results[j].instructions[1] : "";

                        areabox = areabox + `
            <div
            class="recipe-card bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group"
             data-meal-id="${mealsbyarea[i].results[j].id}"
                 >

             <div class="relative h-48 overflow-hidden">

                    <img
                    class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    src="${mealsbyarea[i].results[j].thumbnail}"
                     alt="${mealsbyarea[i].results[j].name}"
                    loading="lazy"
                        />

                    <div class="absolute bottom-3 left-3 flex gap-2">

                        <span class="px-2 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold rounded-full text-gray-700">
                         ${mealsbyarea[i].results[j].category}
                        </span>

                        <span class="px-2 py-1 bg-emerald-500 text-xs font-semibold rounded-full text-white">
                             ${mealsbyarea[i].results[j].area}
                    </span>

                                </div>
                            </div>

                            <div class="p-4">

                                <h3 class="text-base font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors line-clamp-1">
               ${mealsbyarea[i].results[j].name}
                                </h3>
                                <p class="text-xs text-gray-600 mb-3 line-clamp-2">
                                    ${inst0}
              ${inst1}
                                </p>

                                <div class="flex items-center justify-between text-xs">

                                    <span class="font-semibold text-gray-900">
                                        <i class="fa-solid fa-utensils text-emerald-600 mr-1"></i>
                                        ${mealsbyarea[i].results[j].category}
                                    </span>

                                    <span class="font-semibold text-gray-500">
                                        <i class="fa-solid fa-globe text-blue-500 mr-1"></i>
                                        ${mealsbyarea[i].results[j].area}
                                    </span>

                                </div>

                            </div>
                        </div>
                    `;
                    }

                    recipesGrid.innerHTML = areabox;
                    let recipeCard = document.querySelectorAll(".recipe-card");
                    for (let d = 0; d < recipeCard.length; d++) {
                        recipeCard[d].addEventListener("click", async function () {
                            mealdetails.classList.remove("hidden");
                            searchfilterssection.classList.add("hidden");
                            mealcategoriessection.classList.add("hidden");
                            allrecipessection.classList.add("hidden");
                            let interrecipeid = recipeCard[d].dataset.mealId;
                            let getrecipebyId = await fetch(`https://nutriplan-api.vercel.app/api/meals/${interrecipeid}`);
                            let databyid = await getrecipebyId.json()
                            console.log("Recipe ID:", interrecipeid);
                            console.log("Recipe by ID:", databyid);


                            let body = {
                                recipeName: databyid.result.name,
                                ingredients: databyid.result.ingredients.map(function (item) {
                                    return `${item.measure || ""} ${item.ingredient || ""}`.trim();
                                })
                            };

                            let response = await fetch(
                                "https://nutriplan-api.vercel.app/api/nutrition/analyze",
                                {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json",
                                        "x-api-key": "vM89ff4XGH8CzZbOm23PpH6OdLDebKVO1QtS5r4k"
                                    },
                                    body: JSON.stringify(body)
                                }
                            );


                            let nutritiondata = await response.json();


                            console.log("القيم الغذائية الجاية من السيرفر:", nutritiondata);

                            let x = nutritiondata.data.perServing;

                            caloriesperserving.innerHTML = x.calories;
                            totalcal.innerHTML = `Total: ${nutritiondata.data.totals.calories} cal;`
                            proteinfacts.innerHTML = x.protein;
                            carbsfacts.innerHTML = x.carbs;
                            fatfacts.innerHTML = x.fat;
                            fiberfacts.innerHTML = x.fiber;
                            sugarfacts.innerHTML = x.sugar;


                            let interbox = "";
                            let holder = "";

                            if (databyid.result.area != null) {
                                holder = `  <span
                    class="px-3 py-1 bg-blue-500 text-white text-sm font-semibold rounded-full recipecountry"
                    >
                    ${databyid.result.area}
                    </span>
                    `

                            }

                            // hero section
                            interbox += `<div class="relative h-80 md:h-96">
              <img
                src="${databyid.result.thumbnail}"
                alt="${databyid.result.name}"
                class="w-full h-full object-cover"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
              ></div>
              <div class="absolute bottom-0 left-0 right-0 p-8">
                <div class="flex items-center gap-3 mb-3">
                  <span
                    class="px-3 py-1 bg-emerald-500 text-white text-sm font-semibold rounded-full"
                    >
                   ${databyid.result.category}
                    </span
                  >
                
                ${holder}
                </div>
                <h1 class="text-3xl md:text-4xl font-bold text-white mb-2">
                 ${databyid.result.name}
                </h1>
                <div class="flex items-center gap-6 text-white/90">
                  <span class="flex items-center gap-2">
                    <i class="fa-solid fa-clock"></i>
                    <span>30 min</span>
                  </span>
                  <span class="flex items-center gap-2">
                    <i class="fa-solid fa-utensils"></i>
                    <span id="hero-servings">4${nutritiondata.data.servings} servings</span>
                  </span>
                  <span class="flex items-center gap-2">
                    <i class="fa-solid fa-fire"></i>
                    <span id="hero-calories">${x.calories} cal/serving</span>
                  </span>
                </div>
              </div>
            </div>`


                            heroSection.innerHTML = interbox;
                            logmealbtn.addEventListener("click", function () {
                                Swal.fire({
                                    width: "450px",
                                    showConfirmButton: false,
                                    showCloseButton: false,
                                    customClass: { popup: "!rounded-3xl" },
                                    html: `
    <div class="bg-white rounded-2xl p-6 max-w-md w-full mx-4">
                <div class="flex items-center gap-4 mb-6">
                    <img src="${databyid.result.thumbnail}" alt="${databyid.result.name}" class="w-16 h-16 rounded-xl object-cover">
                    <div>
                        <h3 class="text-xl font-bold text-gray-900 text-left">Log This Meal</h3>
                        <p class="text-gray-500 text-sm text-left">${databyid.result.name}</p>
                    </div>
                </div>
                
                <div class="mb-6">
                    <label class="block text-sm font-semibold text-gray-700 mb-2 text-left">Number of Servings</label>
                    <div class="flex items-center gap-3">
                        <button id="decrease-servings" class="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center">
                            <i class="text-gray-600" data-fa-i2svg=""><svg class="svg-inline--fa fa-minus" data-prefix="fas" data-icon="minus" role="img" viewBox="0 0 448 512" aria-hidden="true" data-fa-i2svg=""><path fill="currentColor" d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"></path></svg></i>
                        </button>
                        <input type="number" id="meal-servings" value="1" min="0.5" max="10" step="0.5" class="w-20 text-center text-xl font-bold border-2 border-gray-200 rounded-lg py-2">
                        <button id="increase-servings" class="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center">
                            <i class="text-gray-600" data-fa-i2svg=""><svg class="svg-inline--fa fa-plus" data-prefix="fas" data-icon="plus" role="img" viewBox="0 0 448 512" aria-hidden="true" data-fa-i2svg=""><path fill="currentColor" d="M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z"></path></svg></i>
                        </button>
                    </div>
                </div>
                
                
                <div class="bg-emerald-50 rounded-xl p-4 mb-6">
                    <p class="text-sm text-gray-600 mb-2 text-left">Estimated nutrition per serving:</p>
                    <div class="grid grid-cols-4 gap-2 text-center">
                        <div>
                            <p class="text-lg font-bold text-emerald-600" id="modal-calories">${x.calories}</p>
                            <p class="text-xs text-gray-500">Calories</p>
                        </div>
                        <div>
                            <p class="text-lg font-bold text-blue-600" id="modal-protein">${x.protein}</p>
                            <p class="text-xs text-gray-500">Protein</p>
                        </div>
                        <div>
                            <p class="text-lg font-bold text-amber-600" id="modal-carbs">${x.carbs}</p>
                            <p class="text-xs text-gray-500">Carbs</p>
                        </div>
                        <div>
                            <p class="text-lg font-bold text-purple-600" id="modal-fat">${x.fat}</p>
                            <p class="text-xs text-gray-500">Fat</p>
                        </div>
                    </div>
                </div>
                
                
                <div class="flex gap-3">
                    <button id="cancel-log-meal" class="flex-1 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all">
                        Cancel
                    </button>
                    <button id="confirm-log-meal" class="flex-1 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all">
                        <i class="mr-2" data-fa-i2svg=""><svg class="svg-inline--fa fa-clipboard-list" data-prefix="fas" data-icon="clipboard-list" role="img" viewBox="0 0 384 512" aria-hidden="true" data-fa-i2svg=""><path fill="currentColor" d="M311.4 32l8.6 0c35.3 0 64 28.7 64 64l0 352c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l8.6 0C83.6 12.9 104.3 0 128 0L256 0c23.7 0 44.4 12.9 55.4 32zM248 112c13.3 0 24-10.7 24-24s-10.7-24-24-24L136 64c-13.3 0-24 10.7-24 24s10.7 24 24 24l112 0zM128 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm32 0c0 13.3 10.7 24 24 24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-112 0c-13.3 0-24 10.7-24 24zm0 128c0 13.3 10.7 24 24 24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-112 0c-13.3 0-24 10.7-24 24zM96 416a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"></path></svg></i>
                        Log Meal
                    </button>
                </div>
            </div>
    `,
                          didOpen: () => {
      document.querySelector("#cancel-log-meal").addEventListener("click", function() {
        
        Swal.close()
      } );
      document.querySelector("#confirm-log-meal").addEventListener("click",function ()  {
   
        let recipe = {
   ...databyid,
   name: databyid.result.name,
  thumbnail: databyid.result.thumbnail,
   calories: x.calories,
  protein: x.protein,
  carbs: x.carbs,
  fat: x.fat
};
    recipearr.push(recipe);
 console.log("Logged Meal:", recipearr);
 localStorage.setItem("recipe",JSON.stringify(recipearr));
displaydata()
console.log(recipearr);
let clearall=document.querySelector("#clear-foodlog");
clearall.style.display="block";
clearall.addEventListener("click", function () {

    Swal.fire({
        title: "Clear Today's Log?",
        text: "This will remove all logged food items for today",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, clear it!",
        cancelButtonText: "Cancel",
        confirmButtonColor: "#ef4444",
        cancelButtonColor: "#6b7280"
    }).then((result) => {

        if (result.isConfirmed) {
            clearAllRecipes();
            loggeditems.innerHTML=`<div class="text-center py-12">
                    <div class="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="text-3xl text-gray-300" data-fa-i2svg=""><svg class="svg-inline--fa fa-utensils" data-prefix="fas" data-icon="utensils" role="img" viewBox="0 0 512 512" aria-hidden="true" data-fa-i2svg=""><path fill="currentColor" d="M63.9 14.4C63.1 6.2 56.2 0 48 0s-15.1 6.2-16 14.3L17.9 149.7c-1.3 6-1.9 12.1-1.9 18.2 0 45.9 35.1 83.6 80 87.7L96 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224.4c44.9-4.1 80-41.8 80-87.7 0-6.1-.6-12.2-1.9-18.2L223.9 14.3C223.1 6.2 216.2 0 208 0s-15.1 6.2-15.9 14.4L178.5 149.9c-.6 5.7-5.4 10.1-11.1 10.1-5.8 0-10.6-4.4-11.2-10.2L143.9 14.6C143.2 6.3 136.3 0 128 0s-15.2 6.3-15.9 14.6L99.8 149.8c-.5 5.8-5.4 10.2-11.2 10.2-5.8 0-10.6-4.4-11.1-10.1L63.9 14.4zM448 0C432 0 320 32 320 176l0 112c0 35.3 28.7 64 64 64l32 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-448c0-17.7-14.3-32-32-32z"></path></svg></i>
                    </div>
                    <p class="text-gray-500 font-medium mb-2">No food logged today</p>
                    <p class="text-gray-400 text-sm mb-4">Start tracking your nutrition by logging meals or scanning products</p>
                    <div class="flex justify-center gap-3">
                        <a href="#meals" class="browsebtn inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all">
                            <i data-fa-i2svg=""><svg class="svg-inline--fa fa-plus" data-prefix="fas" data-icon="plus" role="img" viewBox="0 0 448 512" aria-hidden="true" data-fa-i2svg=""><path fill="currentColor" d="M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z"></path></svg></i>
                            Browse Recipes
                        </a>
                        <a href="/products"scanbtn class="nav-link inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
                            <i data-fa-i2svg=""><svg class="svg-inline--fa fa-barcode" data-prefix="fas" data-icon="barcode" role="img" viewBox="0 0 448 512" aria-hidden="true" data-fa-i2svg=""><path fill="currentColor" d="M32 32C14.3 32 0 46.3 0 64L0 448c0 17.7 14.3 32 32 32s32-14.3 32-32L64 64c0-17.7-14.3-32-32-32zm88 0c-13.3 0-24 10.7-24 24l0 400c0 13.3 10.7 24 24 24s24-10.7 24-24l0-400c0-13.3-10.7-24-24-24zm72 32l0 384c0 17.7 14.3 32 32 32s32-14.3 32-32l0-384c0-17.7-14.3-32-32-32s-32 14.3-32 32zm208-8l0 400c0 13.3 10.7 24 24 24s24-10.7 24-24l0-400c0-13.3-10.7-24-24-24s-24 10.7-24 24zm-96 0l0 400c0 13.3 10.7 24 24 24s24-10.7 24-24l0-400c0-13.3-10.7-24-24-24s-24 10.7-24 24z"></path></svg></i>
                            Scan Product
                        </a>
                    </div>
                </div>`;
        }

    });

});
 let browsebtn=document.querySelector(".browsebtn");

let scanbtn=document.querySelector(".scanbtn");


loggeditems.addEventListener("click", function (e) {

    if (e.target.closest(".browsebtn")) {

        productssection.classList.add("hidden");
        mealdetails.classList.add("hidden");
        foodlogsection.classList.add("hidden");

        searchfilterssection.classList.remove("hidden");
        mealcategoriessection.classList.remove("hidden");
        allrecipessection.classList.remove("hidden");

        firstnavbtn.classList.add("bg-emerald-50", "text-emerald-700");
        firstnavbtn.classList.remove("text-gray-600", "hover:bg-gray-50");

        secondnavbtn.classList.remove("bg-emerald-50", "text-emerald-700");
        secondnavbtn.classList.add("text-gray-600", "hover:bg-gray-50");

        thirdnavbtn.classList.remove("bg-emerald-50", "text-emerald-700");
        thirdnavbtn.classList.add("text-gray-600", "hover:bg-gray-50");

        headingone.innerHTML = "Meals & Recipes";
        tagline.innerHTML = "Discover delicious and nutritious recipes tailored for you";
    }


    if (e.target.closest(".scanbtn")) {
 secondnavbtn.classList.remove("text-gray-600","hover:bg-gray-50");
  secondnavbtn.classList.add("bg-emerald-50","text-emerald-700");
  allrecipessection.classList.add("hidden");
  mealcategoriessection.classList.add("hidden");
  searchfilterssection.classList.add("hidden");
  productssection.classList.remove("hidden");
  foodlogsection.classList.add("hidden");
firstnavbtn.classList.remove("bg-emerald-50","text-emerald-700");
firstnavbtn.classList.add("text-gray-600");
thirdnavbtn.classList.remove("bg-emerald-50","text-emerald-700");
thirdnavbtn.classList.add("text-gray-600","hover:bg-gray-50");
 headingone.innerHTML="Product Scanner";
  tagline.innerHTML="Search packaged foods by name or barcode";
  mealdetails.classList.add("hidden");
     
    }

});

/////display
function displaydata(){
  let itemsbox="";
  for(let n=0;n<recipearr.length;n++)
{
  itemsbox+=`<div class="flex items-center justify-between bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-all">
                        <div class="flex items-center gap-4">
                            <img src="${recipearr[n].thumbnail}" alt="${recipearr[n].name}" class="w-14 h-14 rounded-xl object-cover">
                            <div>
                                <p class="font-semibold text-gray-900">${recipearr[n].name}</p>
                                <p class="text-sm text-gray-500">
                                     serving
                                    <span class="mx-1">•</span>
                                    <span class="text-emerald-600">Recipe</span>
                                </p>
                                <p class="text-xs text-gray-400 mt-1">${time}</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-4">
                            <div class="text-right">
                                <p class="text-lg font-bold text-emerald-600">${recipearr[n].calories}</p>
                                <p class="text-xs text-gray-500">kcal</p>
                            </div>
                            <div class="hidden md:flex gap-2 text-xs text-gray-500">
                                <span class="px-2 py-1 bg-blue-50 rounded">${recipearr[n].protein}g P</span>
                                <span class="px-2 py-1 bg-amber-50 rounded">${recipearr[n].carbs}g C</span>
                                <span class="px-2 py-1 bg-purple-50 rounded">${recipearr[n].fat}g F</span>
                            </div>
                            <button onclick="deletebtn(${n})"  class="remove-foodlog-item text-gray-400 hover:text-red-500 transition-all p-2">
                                <i data-fa-i2svg=""><svg class="svg-inline--fa fa-trash-can" data-prefix="fas" data-icon="trash-can" role="img" viewBox="0 0 448 512" aria-hidden="true" data-fa-i2svg=""><path fill="currentColor" d="M136.7 5.9C141.1-7.2 153.3-16 167.1-16l113.9 0c13.8 0 26 8.8 30.4 21.9L320 32 416 32c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 8.7-26.1zM32 144l384 0 0 304c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-304zm88 64c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24zm104 0c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24zm104 0c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24z"></path></svg></i>
                            </button>
                        </div>
                    </div>`

}
loggeditems.innerHTML=itemsbox;
 



}








let removeButtons = document.querySelectorAll('.remove-foodlog-item');

removeButtons.forEach((button, index) => {
  button.addEventListener('click', function () {
    
    recipearr.splice(index, 1);

    
    localStorage.setItem('recipe', JSON.stringify(recipearr));

    
    displaydata();
  });
});


function clearAllRecipes() {
  recipearr = [];
  localStorage.setItem("recipe", JSON.stringify(recipearr));
  displaydata();
}


















        Swal.close();
      });

      const input = document.querySelector("#meal-servings");
      document.querySelector("#increase-servings").addEventListener("click",function (){
        input.value = (parseFloat(input.value) || 1) + 0.5;
      });
      document.querySelector("#decrease-servings").addEventListener("click",function (){
        if (parseFloat(input.value) > 0.5) {
          input.value = (parseFloat(input.value) || 1) - 0.5;
        }
      });
    }

                                });
                            });


                            let recpiebyidingred = "";
                            let ingreddiv = document.querySelector(".ingreddiv");

                            if (databyid.result.ingredients) {
                                for (let h = 0; h < databyid.result.ingredients.length; h++) {
                                    recpiebyidingred +=
                                        `<div
           class="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors"
              >
            <input
              type="checkbox"
            class="ingredient-checkbox w-5 h-5 text-emerald-600 rounded border-gray-300"
            />
        <span class="text-gray-700">
            <span class="font-medium text-gray-900">${databyid.result.ingredients[h].measure || ""}</span> 
            ${databyid.result.ingredients[h].ingredient || ""}  
            </span>
              </div>`
                                }
                            }

                            if (ingreddiv) ingreddiv.innerHTML = recpiebyidingred;

                            let ingredlength = document.querySelector(".ingredlength");
                            if (ingredlength && databyid.result.ingredients) {
                                ingredlength.innerHTML = `${databyid.result.ingredients.length} items`;
                            }


                            // instructions
                            let areainstructions = "";
                            let instructionsParagraph = document.getElementById("instructionsParagraph") || document.querySelector(".instructionsParagraph");

                            if (databyid.result.instructions) {
                                for (let l = 0; l < databyid.result.instructions.length; l++) {
                                    areainstructions +=
                                        `<div
                    class="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <div
                      class="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold shrink-0 "
                    >
                      ${l + 1}
                    </div>
                    <p class="text-gray-700 leading-relaxed pt-2 inst-p">
                    ${databyid.result.instructions[l]}
                    </p>
                    </div>`
                                }
                            }

                            if (instructionsParagraph) instructionsParagraph.innerHTML = areainstructions;


                            // youtube
                            if (databyid.result.youtube && videoyoutube) {
                                let areayoutube = databyid.result.youtube;
                                videoyoutube.src = areayoutube.replace("watch?v=", "embed/");
                            }

                        })

                    }

                }


            });
        }

    } catch (err) {
        console.log(err);
    }
}

FilterMealsbyArea();







////////////////////////product scanner


let searcproducthbtn= document.querySelector("#search-product-btn");
let brandname="";
let productsearchinput=document.querySelector("#product-search-input");
 searcproducthbtn.addEventListener("click",async function getproduct() {
  try {
    let searchproductvalue=productsearchinput.value.toLowerCase();
    if (!searchproductvalue) 
      {
        return;
      }
    let getsearchingproduct = await fetch(`https://nutriplan-api.vercel.app/api/products/search?q=${searchproductvalue}&page=1&limit=24`);
   
    let getsearchdata = await getsearchingproduct.json();
    console.log("search product is", getsearchdata);
   let brandname="";
  let searchproduct = "";
for (let x = 0; x < getsearchdata.results.length; x++) {
brandname=getsearchdata.results[x].name.toLowerCase();
if(brandname.includes(searchproductvalue))
{
    if (
  getsearchdata.results[x].nutritionGrade != undefined &&
  getsearchdata.results[x].nutritionGrade.toLowerCase() != "unknown" &&
  getsearchdata.results[x].novaGroup != undefined 

      ) 
{
        

     searchproduct += `<div
                class="product-card bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group"
                data-barcode="${getsearchdata.results[x].barcode || ''}"
              >
                <div
                  class="relative h-40 bg-gray-100 flex items-center justify-center overflow-hidden"
                >
                  <img
                    class="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    src="${getsearchdata.results[x].image || ''}"
                    alt="${getsearchdata.results[x].name || ''}"
                    loading="lazy"
                  />

                  <!-- Nutri-Score Badge -->
                  <div
                    class="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded uppercase"
                  >
                    Nutri-Score ${getsearchdata.results[x].nutritionGrade}
                  </div>

                  <!-- NOVA Badge -->
                  <div
                    class="absolute top-2 right-2 bg-lime-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center"
                    title="NOVA 2"
                  >
                   ${getsearchdata.results[x].novaGroup} 
                  </div>
                </div>

                <div class="p-4">
                  <p
                    class="text-xs text-emerald-600 font-semibold mb-1 truncate"
                  >
                        ${getsearchdata.results[x].brand || ''} 
                  </p>
                  <h3
                    class="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-emerald-600 transition-colors"
                  >
                        ${getsearchdata.results[x].name || ''} 
                  </h3>

                  <div
                    class="flex items-center gap-3 text-xs text-gray-500 mb-3"
                  >
                    <span
                      ><i class="fa-solid fa-weight-scale mr-1"></i></span
                    >
                    <span
                      ><i class="fa-solid fa-fire mr-1"></i>${(getsearchdata.results[x].nutrients?.calories || 0).toFixed(1)} kcal/100g</span
                    >
                  </div>

                  <!-- Mini Nutrition -->
                  <div class="grid grid-cols-4 gap-1 text-center">
                    <div class="bg-emerald-50 rounded p-1.5">
                      <p class="text-xs font-bold text-emerald-700"> ${(getsearchdata.results[x].nutrients?.protein || 0).toFixed(1)} </p>
                      <p class="text-[10px] text-gray-500">Protein</p>
                    </div>
                    <div class="bg-blue-50 rounded p-1.5">
                      <p class="text-xs font-bold text-blue-700">${(getsearchdata.results[x].nutrients?.carbs || 0).toFixed(1)}</p>
                      <p class="text-[10px] text-gray-500">Carbs</p>
                    </div>
                    <div class="bg-purple-50 rounded p-1.5">
                      <p class="text-xs font-bold text-purple-700">${(getsearchdata.results[x].nutrients?.fat || 0).toFixed(1)}</p>
                      <p class="text-[10px] text-gray-500">Fat</p>
                    </div>
                    <div class="bg-orange-50 rounded p-1.5">
                      <p class="text-xs font-bold text-orange-700">${(getsearchdata.results[x].nutrients?.sugar || 0).toFixed(1)}</p>
                      <p class="text-[10px] text-gray-500">Sugar</p>
                    </div>
                  </div>
                </div>
              </div>`;
                 
     
      

      }
   
    }
    
    let productsGrid = document.querySelector("#products-grid");
    if (productsGrid) {
      productsGrid.innerHTML = searchproduct;
    }

    }
}
   catch (err) {
    console.log(err);
  }
})

// search by barcode
let barcodeinput=document.querySelector("#barcode-input");
let lookupbtn=document.querySelector("#lookup-barcode-btn");

 lookupbtn.addEventListener("click",async function getproductbycode() {
  try {
    
    let searchproductbycode=barcodeinput.value;
    if (!searchproductbycode) 
      {
        return;
      }
    let findProducts= await fetch(`
     
      https://nutriplan-api.vercel.app/api/products/barcode/${searchproductbycode}
      `);
    
    let getbarcodedata = await findProducts.json();
    console.log("tany search product is", getbarcodedata);
   let brandbarcode="";    
  let searchbarcode = "";

brandbarcode=getbarcodedata.result.barcode;

if(brandbarcode.includes(searchproductbycode))
{
    if (
 getbarcodedata .result.nutritionGrade != undefined &&
  getbarcodedata.result.nutritionGrade.toLowerCase() != "unknown" &&
  getbarcodedata.result.novaGroup != undefined 

      ) 
{
  
        

     searchbarcode = `<div
                class="product-card bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group"
                data-barcode="${getbarcodedata.result.barcode || ''}"
              >
                <div
                  class="relative h-40 bg-gray-100 flex items-center justify-center overflow-hidden"
                >
                  <img
                    class="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    src="${getbarcodedata.result.image || ''}"
                    alt="${getbarcodedata.result.name || ''}"
                    loading="lazy"
                  />

                  <!-- Nutri-Score Badge -->
                  <div
                    class="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded uppercase"
                  >
                    Nutri-Score ${getbarcodedata.result.nutritionGrade}
                  </div>

                  <!-- NOVA Badge -->
                  <div
                    class="absolute top-2 right-2 bg-lime-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center"
                    title="NOVA 2"
                  >
                   ${getbarcodedata.result.novaGroup} 
                  </div>
                </div>

                <div class="p-4">
                  <p
                    class="text-xs text-emerald-600 font-semibold mb-1 truncate"
                  >
                        ${getbarcodedata.result.brand || ''} 
                  </p>
                  <h3
                    class="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-emerald-600 transition-colors"
                  >
                        ${getbarcodedata.result.name || ''} 
                  </h3>

                  <div
                    class="flex items-center gap-3 text-xs text-gray-500 mb-3"
                  >
                    <span
                      ><i class="fa-solid fa-weight-scale mr-1"></i></span
                    >
                    <span
                      ><i class="fa-solid fa-fire mr-1"></i>${(getbarcodedata.result.nutrients?.calories || 0).toFixed(1)} kcal/100g</span
                    >
                  </div>

                  <!-- Mini Nutrition -->
                  <div class="grid grid-cols-4 gap-1 text-center">
                    <div class="bg-emerald-50 rounded p-1.5">
                      <p class="text-xs font-bold text-emerald-700"> ${(getbarcodedata.result.nutrients?.protein || 0).toFixed(1)} </p>
                      <p class="text-[10px] text-gray-500">Protein</p>
                    </div>
                    <div class="bg-blue-50 rounded p-1.5">
                      <p class="text-xs font-bold text-blue-700">${(getbarcodedata.result.nutrients?.carbs || 0).toFixed(1)}</p>
                      <p class="text-[10px] text-gray-500">Carbs</p>
                    </div>
                    <div class="bg-purple-50 rounded p-1.5">
                      <p class="text-xs font-bold text-purple-700">${(getbarcodedata.result.nutrients?.fat || 0).toFixed(1)}</p>
                      <p class="text-[10px] text-gray-500">Fat</p>
                    </div>
                    <div class="bg-orange-50 rounded p-1.5">
                      <p class="text-xs font-bold text-orange-700">${(getbarcodedata.result.nutrients?.sugar || 0).toFixed(1)}</p>
                      <p class="text-[10px] text-gray-500">Sugar</p>
                    </div>
                  </div>
                </div>
              </div>`;
                 

     

      }
      if (getbarcodedata.result)
         {
    showProductModal(getbarcodedata.result);
        }


      let datalist=document.querySelector("#products");
      
   
    }
    
    if (productsGrid)
      {
      productsGrid.innerHTML = searchbarcode;
    }
    if (productsGrid) {
    productsGrid.innerHTML = searchbarcode;

    let productCard = document.querySelector(".product-card");
     productCard.addEventListener("click", function () {
        showProductModal(getbarcodedata.result);
        
    });
}

    
      
    
  }
   catch (err) {
    console.log(err);
  }
})




function showProductModal(getbarcodedata) {
  Swal.fire({
    width: "750px",
    html: `
      <div class="p-6 text-left">
          <!-- Header -->
          <div class="flex items-start gap-6 mb-6">
              <div class="w-32 h-32 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0">
                  <img src="${getbarcodedata.image}" alt="${getbarcodedata.name}" class="w-full h-full object-contain">
              </div>
              <div class="flex-1">
                  <p class="text-sm text-emerald-600 font-semibold mb-1">${getbarcodedata.brand || ''}</p>
                  <h2 class="text-2xl font-bold text-gray-900 mb-2">${getbarcodedata.name}</h2>
                  <p class="text-sm text-gray-500 mb-3">430 g</p>
                  
                  <div class="flex items-center gap-3">
                      <div class="flex items-center gap-2 px-3 py-1.5 rounded-lg" style="background-color: #fecb0220">
                          <span class="w-8 h-8 rounded flex items-center justify-center text-white font-bold" style="background-color: #fecb02">
                              ${(getbarcodedata.nutritionGrade || '').toUpperCase()}
                          </span>
                          <div>
                              <p class="text-xs font-bold" style="color: #fecb02">Nutri-Score</p>
                              <p class="text-[10px] text-gray-600">Average</p>
                          </div>
                      </div>

                      <div class="flex items-center gap-2 px-3 py-1.5 rounded-lg" style="background-color: #e63e1120">
                          <span class="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold" style="background-color: #e63e11">
                              ${getbarcodedata.novaGroup || ''}
                          </span>
                          <div>
                              <p class="text-xs font-bold" style="color: #e63e11">NOVA</p>
                              <p class="text-[10px] text-gray-600">Ultra-processed</p>
                          </div>
                      </div>
                  </div>
              </div>
              <button class="close-product-modal text-gray-400 hover:text-gray-600">
                  <i class="text-2xl" data-fa-i2svg=""><svg class="svg-inline--fa fa-xmark" data-prefix="fas" data-icon="xmark" role="img" viewBox="0 0 384 512" aria-hidden="true"><path fill="currentColor" d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"></path></svg></i>
              </button>
          </div>
          
          <!-- Nutrition Facts -->
          <div class="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-5 mb-6 border border-emerald-200">
              <h3 class="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <i class="text-emerald-600" data-fa-i2svg=""><svg class="svg-inline--fa fa-chart-pie" data-prefix="fas" data-icon="chart-pie" role="img" viewBox="0 0 576 512" aria-hidden="true"><path fill="currentColor" d="M512.4 240l-176 0c-17.7 0-32-14.3-32-32l0-176c0-17.7 14.4-32.2 31.9-29.9 107 14.2 191.8 99 206 206 2.3 17.5-12.2 31.9-29.9 31.9zM222.6 37.2c18.1-3.8 33.8 11 33.8 29.5l0 197.3c0 5.6 2 11 5.5 15.3L394 438.7c11.7 14.1 9.2 35.4-6.9 44.1-34.1 18.6-73.2 29.2-114.7 29.2-132.5 0-240-107.5-240-240 0-115.5 81.5-211.9 190.2-234.8zM477.8 288l64 0c18.5 0 33.3 15.7 29.5 33.8-10.2 48.4-35 91.4-69.6 124.2-12.3 11.7-31.6 9.2-42.4-3.9L374.9 340.4c-17.3-20.9-2.4-52.4 24.6-52.4l78.2 0z"></path></svg></i>
                  Nutrition Facts <span class="text-sm font-normal text-gray-500">(per 100g)</span>
              </h3>
              
              <div class="text-center mb-4 pb-4 border-b border-emerald-200">
                  <p class="text-4xl font-bold text-gray-900">${getbarcodedata.nutrients.calories}</p>
                  <p class="text-sm text-gray-500">Calories</p>
              </div>
              
              <div class="grid grid-cols-4 gap-4">
                  <div class="text-center">
                      <div class="w-full bg-gray-200 rounded-full h-2 mb-2">
                          <div class="bg-emerald-500 h-2 rounded-full" style="width: 17.6%"></div>
                      </div>
                      <p class="text-lg font-bold text-emerald-600">${getbarcodedata.nutrients.protein}</p>
                      <p class="text-xs text-gray-500">Protein</p>
                  </div>
                  <div class="text-center">
                      <div class="w-full bg-gray-200 rounded-full h-2 mb-2">
                          <div class="bg-blue-500 h-2 rounded-full" style="width: 73.6%"></div>
                      </div>
                      <p class="text-lg font-bold text-blue-600">${getbarcodedata.nutrients.carbs}</p>
                      <p class="text-xs text-gray-500">Carbs</p>
                  </div>
                  <div class="text-center">
                      <div class="w-full bg-gray-200 rounded-full h-2 mb-2">
                          <div class="bg-purple-500 h-2 rounded-full" style="width: 7.38%"></div>
                      </div>
                      <p class="text-lg font-bold text-purple-600">${getbarcodedata.nutrients.fat}</p>
                      <p class="text-xs text-gray-500">Fat</p>
                  </div>
                  <div class="text-center">
                      <div class="w-full bg-gray-200 rounded-full h-2 mb-2">
                          <div class="bg-orange-500 h-2 rounded-full" style="width: 44.8%"></div>
                      </div>
                      <p class="text-lg font-bold text-orange-600">${getbarcodedata.nutrients.sugar}</p>
                      <p class="text-xs text-gray-500">Sugar</p>
                  </div>
              </div>
              
              <div class="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-emerald-200">
                  <div class="text-center">
                      <p class="text-sm font-semibold text-gray-900">2.0g</p>
                      <p class="text-xs text-gray-500">Saturated Fat</p>
                  </div>
                  <div class="text-center">
                      <p class="text-sm font-semibold text-gray-900">${getbarcodedata.nutrients.fiber || '0g'}</p>
                      <p class="text-xs text-gray-500">Fiber</p>
                  </div>
                  <div class="text-center">
                      <p class="text-sm font-semibold text-gray-900">0.22g</p>
                      <p class="text-xs text-gray-500">Salt</p>
                  </div>
              </div>
          </div>
          
          <!-- Additional Info -->
          <div class="bg-gray-50 rounded-xl p-5 mb-6">
              <h3 class="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <i class="text-gray-600" data-fa-i2svg=""><svg class="svg-inline--fa fa-list" data-prefix="fas" data-icon="list" role="img" viewBox="0 0 512 512" aria-hidden="true"><path fill="currentColor" d="M40 48C26.7 48 16 58.7 16 72l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24L40 48zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM16 232l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0z"></path></svg></i>
                  Ingredients
              </h3>
              <p class="text-sm text-gray-600 leading-relaxed">${getbarcodedata.ingredients || 'No ingredients listed.'}</p>
          </div>

          <div class="bg-red-50 rounded-xl p-5 mb-6 border border-red-200">
              <h3 class="font-bold text-red-700 mb-2 flex items-center gap-2">
                  <i data-fa-i2svg=""><svg class="svg-inline--fa fa-triangle-exclamation" data-prefix="fas" data-icon="triangle-exclamation" role="img" viewBox="0 0 512 512" aria-hidden="true"><path fill="currentColor" d="M256 0c14.7 0 28.2 8.1 35.2 21l216 400c6.7 12.4 6.4 27.4-.8 39.5S486.1 480 472 480L40 480c-14.1 0-27.2-7.4-34.4-19.5s-7.5-27.1-.8-39.5l216-400c7-12.9 20.5-21 35.2-21zm0 352a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm0-192c-18.2 0-32.7 15.5-31.4 33.7l7.4 104c.9 12.5 11.4 22.3 23.9 22.3 12.6 0 23-9.7 23.9-22.3l7.4-104c1.3-18.2-13.1-33.7-31.4-33.7z"></path></svg></i>
                  Allergens
              </h3>
              <p class="text-sm text-red-600">${getbarcodedata.allergens || 'None'}</p>
          </div>
          
          <!-- Actions -->
          <div class="flex gap-3">
              <button id="add-product-to-log" class="flex-1 py-3 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition-all" data-barcode="${getbarcodedata.barcode || ''}">
                  <i class="mr-2" data-fa-i2svg=""><svg class="svg-inline--fa fa-plus" data-prefix="fas" data-icon="plus" role="img" viewBox="0 0 448 512" aria-hidden="true"><path fill="currentColor" d="M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z"></path></svg></i>Log This Food
              </button>
              <button class="close-product-modal flex-1 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all">
                  Close
              </button>
          </div>
      </div>
    `,
    showConfirmButton: false,
    showCloseButton: false,
    customClass: {
      popup: "!rounded-3xl",
      closeButton: "!text-slate-400 hover:!text-slate-600 focus:!shadow-none",
    },
    didOpen: () => {
      // Close button event handlers
      document.querySelectorAll(".close-product-modal").forEach((btn) => {
        btn.addEventListener("click", () => Swal.close());
      });

      // Log Food action handler
      const logBtn = document.querySelector("#add-product-to-log");
      if (logBtn) {
        logBtn.addEventListener("click", function () {
          let recipe = {
            ...getbarcodedata,
            name: getbarcodedata.name,
            thumbnail: getbarcodedata.image,
            calories: getbarcodedata.nutrients.calories,
            protein: getbarcodedata.nutrients.protein,
            carbs: getbarcodedata.nutrients.carbs,
            fat: getbarcodedata.nutrients.fat,
          };

          recipearr.push(recipe);
          localStorage.setItem("recipe", JSON.stringify(recipearr));
          displaydata();

          let clearall = document.querySelector("#clear-foodlog");
          if (clearall) {
            clearall.style.display = "block";
          }

          Swal.close();
        });
      }
    },
  });
}

// Global deletion handler for item index
function deletebtn(index) {
  recipearr.splice(index, 1);
  localStorage.setItem("recipe", JSON.stringify(recipearr));
  displaydata();
}

function clearAllRecipes() {
  recipearr = [];
  localStorage.setItem("recipe", JSON.stringify(recipearr));
  displaydata();
}

function displaydata() {
  let itemsbox = "";
  for (let n = 0; n < recipearr.length; n++) {
    itemsbox += `
      <div class="flex items-center justify-between bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-all">
        <div class="flex items-center gap-4">
            <img src="${recipearr[n].thumbnail}" alt="${recipearr[n].name}" class="w-14 h-14 rounded-xl object-cover">
            <div>
                <p class="font-semibold text-gray-900">${recipearr[n].name}</p>
                <p class="text-sm text-gray-500">
                    serving <span class="mx-1">•</span> <span class="text-emerald-600">Recipe</span>
                </p>
            </div>
        </div>
        <div class="flex items-center gap-4">
            <div class="text-right">
                <p class="text-lg font-bold text-emerald-600">${recipearr[n].calories}</p>
                <p class="text-xs text-gray-500">kcal</p>
            </div>
            <div class="hidden md:flex gap-2 text-xs text-gray-500">
                <span class="px-2 py-1 bg-blue-50 rounded">${recipearr[n].protein}g P</span>
                <span class="px-2 py-1 bg-amber-50 rounded">${recipearr[n].carbs}g C</span>
                <span class="px-2 py-1 bg-purple-50 rounded">${recipearr[n].fat}g F</span>
            </div>
            <button onclick="deletebtn(${n})" class="remove-foodlog-item text-gray-400 hover:text-red-500 transition-all p-2">
                <i data-fa-i2svg=""><svg class="svg-inline--fa fa-trash-can" data-prefix="fas" data-icon="trash-can" role="img" viewBox="0 0 448 512" aria-hidden="true"><path fill="currentColor" d="M136.7 5.9C141.1-7.2 153.3-16 167.1-16l113.9 0c13.8 0 26 8.8 30.4 21.9L320 32 416 32c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 8.7-26.1zM32 144l384 0 0 304c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-304zm88 64c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24zm104 0c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24zm104 0c-13.3 0-24 10.7-24 24l0 192c0 13.3 10.7 24 24 24s24-10.7 24-24l0-192c0-13.3-10.7-24-24-24z"></path></svg></i>
            </button>
        </div>
      </div>`;
  }
  loggeditems.innerHTML = itemsbox;
}

//get product category
let productcatdisplay;
let arr=["snack","beverages","Breakfast","Desserts","Dairy"]
let productcategoriesbtn=document.querySelectorAll(".product-category-btn");
let catpname=""
for(let e=0;e<productcategoriesbtn.length;e++)
{
  productcategoriesbtn[e].addEventListener("click",async function getptcategory (){
 try{
let catpname=arr[e];
console.log(catpname);
let getproductsinfo=await fetch(`https://nutriplan-api.vercel.app/api/products/category/${catpname}`);
let getproductdata=await getproductsinfo.json();
console.log(getproductdata);
 if(getproductdata.results.length !=0)
{
for(let y=0;y<getproductdata.results.length;y++)
{
 
productcatdisplay +=`<div
                class="product-card bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group"
                data-barcode="${getproductdata.results[y].barcode || ''}"
              >
                <div
                  class="relative h-40 bg-gray-100 flex items-center justify-center overflow-hidden"
                >
                  <img
                    class="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    src="${getproductdata.results[y].image || ''}"
                    alt="${getproductdata.results[y].name || ''}"
                    loading="lazy"
                  />

                  <!-- Nutri-Score Badge -->
                  <div
                    class="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded uppercase"
                  >
                    Nutri-Score ${getproductdata.results[y].nutritionGrade}
                  </div>

                  <!-- NOVA Badge -->
                  <div
                    class="absolute top-2 right-2 bg-lime-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center"
                    title="NOVA 2"
                  >
                   ${getproductdata.results[y].novaGroup} 
                  </div>
                </div>

                <div class="p-4">
                  <p
                    class="text-xs text-emerald-600 font-semibold mb-1 truncate"
                  >
                        ${getproductdata.results[y].brand || ''} 
                  </p>
                  <h3
                    class="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-emerald-600 transition-colors"
                  >
                        ${getproductdata.results[y].name || ''} 
                  </h3>

                  <div
                    class="flex items-center gap-3 text-xs text-gray-500 mb-3"
                  >
                    <span
                      ><i class="fa-solid fa-weight-scale mr-1"></i></span
                    >
                    <span
                      ><i class="fa-solid fa-fire mr-1"></i>${(getproductdata.results[y].nutrients?.calories || 0).toFixed(1)} kcal/100g</span
                    >
                  </div>

                  <!-- Mini Nutrition -->
                  <div class="grid grid-cols-4 gap-1 text-center">
                    <div class="bg-emerald-50 rounded p-1.5">
                      <p class="text-xs font-bold text-emerald-700"> ${(getproductdata.results[y].nutrients?.protein || 0).toFixed(1)} </p>
                      <p class="text-[10px] text-gray-500">Protein</p>
                    </div>
                    <div class="bg-blue-50 rounded p-1.5">
                      <p class="text-xs font-bold text-blue-700">${(getproductdata.results[y].nutrients?.carbs || 0).toFixed(1)}</p>
                      <p class="text-[10px] text-gray-500">Carbs</p>
                    </div>
                    <div class="bg-purple-50 rounded p-1.5">
                      <p class="text-xs font-bold text-purple-700">${(getproductdata.results[y].nutrients?.fat || 0).toFixed(1)}</p>
                      <p class="text-[10px] text-gray-500">Fat</p>
                    </div>
                    <div class="bg-orange-50 rounded p-1.5">
                      <p class="text-xs font-bold text-orange-700">${(getproductdata.results[y].nutrients?.sugar || 0).toFixed(1)}</p>
                      <p class="text-[10px] text-gray-500">Sugar</p>
                    </div>
                  </div>
                </div>
              </div>`
  
  
  


}
productsGrid.innerHTML=productcatdisplay;

}
else
{
    productsGrid.innerHTML=`<div class="text-center">
    <div class="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
     <i class="text-3xl text-gray-400" data-fa-i2svg=""><svg class="svg-inline--fa fa-box-open" data-prefix="fas" data-icon="box-open" role="img" viewBox="0 0 640 512" aria-hidden="true" data-fa-i2svg=""><path fill="currentColor" d="M560.3 237.2c10.4 11.8 28.3 14.4 41.8 5.5 14.7-9.8 18.7-29.7 8.9-44.4l-48-72c-2.8-4.2-6.6-7.7-11.1-10.2L351.4 4.7c-19.3-10.7-42.8-10.7-62.2 0L88.8 116c-5.4 3-9.7 7.4-12.6 12.8L27.7 218.7c-12.6 23.4-3.8 52.5 19.6 65.1l33 17.7 0 53.3c0 23 12.4 44.3 32.4 55.7l176 99.7c19.6 11.1 43.5 11.1 63.1 0l176-99.7c20.1-11.4 32.4-32.6 32.4-55.7l0-117.5zm-240-9.8L170.2 144 320.3 60.6 470.4 144 320.3 227.4zm-41.5 50.2l-21.3 46.2-165.8-88.8 25.4-47.2 161.7 89.8z"></path></svg></i>
      </div>
      <p class="text-gray-500 text-lg mb-2">No products to display</p>
      <p class="text-gray-400 text-sm">Search for a product or browse by category</p>
      </div>`
}
 



}
catch(err)
{
console.log(err);
}
}); 
}

// food log
 let date= new Date();
 console.log(foodlogdate);
 foodlogdate.innerHTML=date.toLocaleDateString("en-US",{
  day:"long",
  month:"long",
  year:"numeric"
 })
 







   
  



