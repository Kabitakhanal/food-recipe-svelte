<script>
// @ts-nocheck

  import { onMount } from "svelte";
  import NavigationConfig from "./Routing/NavigationConfig.svelte";

  let categories=[];

  // Fetching category names
  //mount
  onMount(async () => {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    const data = await response.json();
    categories = data.categories;
    console.log(categories)
  });
  
</script>

<NavigationConfig {categories} />

  