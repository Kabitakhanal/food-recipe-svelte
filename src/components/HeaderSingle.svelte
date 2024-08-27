 <script>
    import {Link } from "svelte-navigator"
    import { ALLRECIPE } from "../Routing/routes";
 </script> 
  
  
  <!--Header-->
  <div class="flex justify-between  items-center w-full w-460px sm:w-[600px] md:w-[700px]  h-[60px]">
    <Link to={ALLRECIPE}>
      <i class="fa-solid fa-arrow-left fa-l text-primary "></i>
    </Link>
    <i class="fa-solid fa-bars fa-md cursor-pointer text-primary"></i>
  </div>