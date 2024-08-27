<script>
    import {Link} from "svelte-navigator"
    import { ALLRECIPE } from "../Routing/routes";
    const imageURL= "https://www.publicdomainpictures.net/pictures/250000/nahled/erorr.jpg"
</script>

<div class="flex min-w-screen min-h-screen justify-center items-center">
  <div class="min-w-[400px] min-h-[300px] p-4  rounded-lg items-center justify-center flex gap-4 font-display" >    
    <div class="flex flex-col items-center justify-center gap-4">
    <p class="text-red-700 font-bold text-3xl text-center">No recipe to display!</p> 
   <Link to={ALLRECIPE}>
     <button class="flex gap-2 items-center justify-between p-3  sm:p-4 text-white text-sm sm:text-xl rounded-lg bg-primary hover:bg-secondary">
      <i class="fa-solid fa-arrow-left"></i>
      <p>Back to All Recipes</p>
     </button>
   </Link>
  </div>
  <img src={imageURL} alt="" class="w-[300px] h-[300px] rounded-full"/>
</div>
</div>
