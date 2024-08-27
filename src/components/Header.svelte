<script>
  import { onMount, onDestroy } from "svelte";
  import { navigate } from "svelte-navigator";
  import { socialLogout } from "../socialLogout";

  export let currentuser;
  export let userphoto;

  let showLogout = false;

 

  function logout() {
    socialLogout().then(()=>{
      navigate("/login");
      console.log('User logged out');

    })
    
  }

</script>

<header class="relative flex items-center justify-between">
  <div>
    <h1 class="md:text-2xl font-bold">Welcome back, {currentuser}</h1>
    <p class="text-gray-500 text-sm md:text-lg">Explore new recipes</p>
  </div>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <!-- svelte-ignore a11y-img-redundant-alt -->
  <div class="flex gap-2">      
    <div class="  w-[80px] bg-white rounded-lg p-1 logout-menu">
        <button
          on:click={logout}
          class="w-full text-sm font-bold bg-gray-100 text-center text-primary hover:bg-primary hover:text-white p-2 rounded"
        >
          Log Out
        </button>
      </div>
      <img
      src={userphoto}
      alt="User Photo"
      class="h-10 w-10 rounded-full object-cover user-photo"
     />


  </div>

</header>

<style>
  header {
    padding: 10px;
  }
</style>
