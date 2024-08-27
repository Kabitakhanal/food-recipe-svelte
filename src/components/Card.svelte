<script>

  import {Link} from "svelte-navigator";
  import { SINGLERECIPE } from "../Routing/routes";
  
  //prop
  export let recipe;
    
</script>

<Link to={SINGLERECIPE}/{recipe.idMeal}>
  <div class="relative h-[13.5rem] w-[10.5rem] rounded-md bg-gray-700 bg-cover bg-center shadow-lg font-display transition ease-in-out delay-100 hover:-translate-y-0.5 hover:scale-110 cursor-pointer" 
    style="background-image:url({recipe.strMealThumb});">
 
    <!-- Full Image Overlay -->
    <div class="absolute inset-0 bg-black bg-opacity-60 rounded-md hover:bg-opacity-20">

      <!-- Rating Badge -->
      <div class="absolute mx-1 my-1 top-0 right-0 w-[42px] h-5 bg-yellow-200 text-white text-xs flex items-center justify-center bg-opacity-75 rounded-md gap-1">
        <i class="fa-solid fa-star fa-xs text-orange-400"></i>
        <p>4.0</p>
      </div>

      <!-- Text Content -->
      <div class="absolute bottom-2 mx-2 text-white">
        <div class="font-bold text-md text-shadow-lg">{recipe.strMeal}</div>
        <p class="text-[10px] text-shadow-lg">By Chef John</p>
      </div>
    </div>
    
  </div>
</Link>  



