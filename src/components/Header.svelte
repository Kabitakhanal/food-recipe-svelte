<script>
  
  import { navigate } from "svelte-navigator";
  import { socialLogout } from "../socialLogout";
  import { LOGIN } from "../Routing/routes";

  //props

  export let currentuser;
  export let userphoto;

  //helper

  function logout() {
    socialLogout().then(()=>{
      navigate(LOGIN);
      console.log('User logged out');
    })   
  }

</script>

<header class="relative flex items-center justify-between p-[10px]">
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
