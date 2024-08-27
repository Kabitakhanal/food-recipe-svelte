<script>

  import { onMount } from "svelte";
  import Card from "../components/Card.svelte";
  import Header from "../components/Header.svelte";
  import Loader from "../components/Loader.svelte";
  
  // Prop

  export let categories = [];
  
  // States
    
  let filteredRecipes = [];
  let categoryRecipes = {};
  let searchTerm = "";
  let activeCategory = "Beef"; 
  let loading = true;
  let categoryLoading = false; 
  let user={};
  let currentuser="";
  let userphoto="";
  
  user = JSON.parse(localStorage.getItem("mini-app-profile"))
  currentuser= user.user_profile.display_name
  userphoto=user.user_profile.photo_url
    
  //helpers 

  async function fetchInitialRecipes() {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef`);
    const data = await response.json();
    categoryRecipes["Beef"] = data.meals;
    filteredRecipes = data.meals; // Initialize filteredRecipes with Beef category
    loading = false;
  }
  
  async function fetchCategoryRecipes(category) {
    if (!categoryRecipes[category]) {
      categoryLoading = true; 
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
      const data = await response.json();
      categoryRecipes[category] = data.meals; // Store recipes for the selected category
      categoryLoading = false; 
    }
    return categoryRecipes[category];
  }
  
  function filterRecipes() {
    if (searchTerm) {
      filteredRecipes = categoryRecipes[activeCategory].filter(recipe =>
        recipe.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      filteredRecipes = categoryRecipes[activeCategory];
    }
  }
  
  function clearSearch() {
    searchTerm = "";
    filterRecipes();
  }

  //mount
  
  onMount(async () => {
    await fetchInitialRecipes();
  });

</script>
  
<main class="space-y-6 p-4 font-display">
  
  <Header {currentuser} {userphoto}/>

  <div class="relative">
    <input
      type="text"
      bind:value={searchTerm}
      on:input={filterRecipes}
      class="w-full py-2 px-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
      placeholder="Search for recipes..."
    />
    {#if searchTerm}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <i class="fa-solid fa-xmark absolute right-4 top-3 cursor-pointer text-gray-600" on:click={clearSearch}></i>
    {:else}
      <i class="fa-solid fa-magnifying-glass absolute right-4 top-3 text-gray-600"></i>
    {/if}
  </div>
  
  <!-- Categories -->
  <div class="flex space-x-4 overflow-x-auto pb-2 no-scrollbar">
    {#each categories as category}
      <button
        class="py-2 px-4 whitespace-nowrap font-bold rounded-lg {category.strCategory === activeCategory ? 'bg-primary text-white' : 'bg-gray-100 text-primary'}"
        on:click={async () => {
          if (activeCategory !== category.strCategory) {
            activeCategory = category.strCategory;
            filteredRecipes = await fetchCategoryRecipes(activeCategory);
            searchTerm = "";
          }
        }}
      >
        {category.strCategory}
      </button>
    {/each}
  </div>
  
  {#if loading || categoryLoading}
    <div class="flex justify-center items-center h-[500px]">
      <Loader/>
    </div>
  {:else}
    <!-- recipe count -->
    {#if !searchTerm}
      <div class="flex flex-col justify-center items-center">
        <p class="text-gray-500 mb-4">
          Showing {filteredRecipes.length} {filteredRecipes.length === 1 ? "recipe" : "recipes"} for {activeCategory}
        </p>
      </div>
    {/if}
      
    <!-- recipes grid -->
    <div class="flex justify-center items-center">
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mb-8 justify-evenly justify-items-center content-evenly items-center max-w-screen-lg mx-4 gap-4">
        {#each filteredRecipes as recipe}
          <Card {recipe}/> 
        {/each}
      </div>
    </div>
  {/if}
</main>
  
<style>
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
</style>
  