<script>

  import {useNavigate} from "svelte-navigator";
  import { ALLRECIPE, LOGIN } from "../Routing/routes";

  //states
  const navigate=useNavigate();
  let user= JSON.parse(localStorage.getItem("mini-app-profile"))

  //helpers
  function handleClick(){ 
    if(user){
      navigate(ALLRECIPE)
    }
    else{
      navigate(LOGIN)
    }
  }
   
</script>

<div class="h-screen  font-display bg-cover bg-center flex flex-col items-center justify-center" style="background-image: url('https://img.freepik.com/free-photo/raw-chicken-breast-dark-background_1220-2990.jpg?w=1380&t=st=1723088680~exp=1723089280~hmac=423e0b74a226defaedb9ba1af4eb31575f194538c951ecaf9f0a41de7a43e8f3');">
    <h1 class="text-white text-5xl md:text-6xl lg:text-7xl font-bold">Welcome to Our Site</h1>
    <h2 class="text-white text-2xl md:text-3xl lg:text-4xl mt-4">Explore thousands of amazing recepies</h2>
    <button on:click={handleClick}
      class="mt-8 px-6 py-3  bg-yellow-500 text-white text-xl rounded-lg inline-flex items-center justify-center gap-2 hover:bg-lime-700">
      Get Started
      <i class="fa-solid fa-arrow-right "></i>
    </button>
</div>
