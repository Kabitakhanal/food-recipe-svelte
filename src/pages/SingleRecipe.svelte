<script>
  
  import { useParams, Link } from "svelte-navigator";
  import { onMount } from "svelte";
  import Loader from "../components/Loader.svelte";
  import HeaderSingle from "../components/HeaderSingle.svelte";
  import NoRecipe from "../components/NoRecipe.svelte";

  // states
  
  const params = useParams();
  const mealID= $params.id;
  let single={};
  let videoID="";
  let activeIngredients= true;
  let allIngredients = [];
  let procedure="";
  let steps=[];
  let ingredientCount=0;
  let noRecipeErr = "";
 
  //helpers

  function getVideoID(){
    videoID = single.strYoutube.substring(32);
  }

  function getSteps(){
    procedure=single.strInstructions;
    let proceduresteps= procedure.split(/(?<=\.)\s*|\n/);
    steps = proceduresteps.filter(procedure => procedure!="" && procedure.length>2);
  }

  function toggleView(){
    activeIngredients =!activeIngredients;
  }

  function getIngredients() {
    for (let i = 1; i <= 20; i++) {
      const ingredient = single[`strIngredient${i}`];
      const measure = single[`strMeasure${i}`];
      if (ingredient) {
        allIngredients.push({
        ingredient: ingredient,
        measure: measure
        });
        ingredientCount++;
      }
    }
  }

// mount
  
  onMount(async () => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`);
      const data = await response.json();
      single = data.meals[0];
      getVideoID();
      getIngredients();
      getSteps(); 
    } catch (error) {
      noRecipeErr = error     
    } 
  });

</script>

<main class="flex flex-col  items-center min-h-screen pb-10">
  {#if noRecipeErr}
  <NoRecipe/>
  {/if}
  {#if single.idMeal}
  
    <div class="flex flex-col  gap-6 w-[460px] sm:w-[600px] md:w-[700px] items-center min-h-screen  ">
      <HeaderSingle/>
     <!--Recipe Video-->
      <div>
        <iframe
          class="w-[460px] h-[250px] sm:w-[600px] sm:h-[300px] md:w-[700px] md:h-[300px]"
          src="https://www.youtube.com/embed/{videoID}"
          title="Recepie video">
        </iframe> 
      </div>

      <!--Recipe details-->
      <div class= " flex justify-between w-full font-display">
        <h1 class="font-bold w-1/2 md:text-xl text-primary ">{single.strMeal}</h1>
        <p class="text-slate-400  text-md md:text-lg">{single.strArea}</p>
      </div>

      <!--User details-->
      <div class="flex justify-between items-center w-full font-display">
        <div class="flex gap-3 items-center ">
          <img src="https://cdn.pixabay.com/photo/2016/12/19/21/36/woman-1919143_1280.jpg" alt="" class="h-10 w-10 rounded-full object-cover"/>
          <div class="text-slate-400 text-sm">
            <p>John Doe</p>
            <span> 
              <i class="fa-solid fa-location-dot text-primary"></i>
              Location
            </span>  
          </div> 
        </div>
        <div>
          <button class="bg-primary rounded w-[100px] text-[1rem] font-medium py-[5px] text-white hover:bg-secondary">Follow</button>
        </div>      
      </div>

      <!--Toggle between Ingredients and Procedure-->
      <div class="flex gap-2 justify-between w-full">
        <button on:click={toggleView} class="bg-primary w-full rounded py-[6px] text-white font-medium font-display transtion transition-colors duration-300 ease-in-out {activeIngredients? 'bg-primary text-white' : 'bg-slate-300'  }">Ingredients</button>
        <button  on:click={toggleView} class="bg-primary w-full rounded py-[6px] text-white font-medium font-display transtion transition-colors duration-300 ease-in-out {!activeIngredients? 'bg-primary text-white' : 'bg-slate-300'  }">Procedure</button>
      </div>

      <!--Show Ingredients and Procedure-->
       
      {#if activeIngredients}
      <div  class="flex justify-between w-full items-center ">
        <div class="flex items-center gap-2 text-slate-400 text-sm">
          <i class="fa-solid fa-bowl-food text-primary"></i>
          <p>1 serve</p>
        </div> 
        <p class="text-slate-400 text-sm">{ingredientCount} Items</p>
      </div>

      {#each allIngredients as item} 
        <div  class="flex font-display justify-between items-center  w-full px-4 py-2 rounded text-gray-500 hover:bg-slate-200 hover:text-gray-700 bg-slate-100">
          <div class="flex items-center gap-4">
            <img class="h-10 w-10 rounded object-cover"src="https://www.themealdb.com/images/ingredients/{item.ingredient}-Small.png" alt="">
            <p>{item.ingredient}</p>
          </div>
          <div>        
            <p>{item.measure}</p>          
          </div>
        </div>
      {/each}
        
      {:else}
      <div class="flex justify-between w-full items-center ">
        <div class="flex items-center gap-2 text-slate-400 text-sm">
          <i class="fa-solid fa-bowl-food text-primary"></i>
          <p>1 serve</p>
        </div>       
        <p class="text-slate-400 text-sm">{steps.length} Steps</p>
      </div>

      {#each steps as step, index}
      <div class="w-full px-4 py-2 text-xs font-display rounded text-gray-500 hover:bg-slate-200 hover:text-gray-700 bg-slate-100">
        <h1 class="font-bold text-slate-800">Step {index+1}</h1>
        <p>{step}</p> 
      </div>
      {/each}

      {/if}  
    </div>  
    
  {:else if !noRecipeErr}
  <Loader/>

  {/if}
</main>