<script>
  import { Link, useNavigate } from "svelte-navigator";
  import { socialLogin } from "../socialLogin";
  import Input from "../components/Input.svelte";
  import { validateEmail } from "../utils/validateEmail";
  import { validatePassword } from "../utils/validatePassword";
  
  const navigate = useNavigate();
  
  // States
  let values = {
    email: "",
    password: ""
  };
  
  let errors = {...values}

  //helpers

  const handleValidation = () => {
    errors.email = "";
    errors.password = "";

    let {email, password} = values
      
    if(!email){
        errors.email = "Please enter your email"
    } else {
        errors.email = validateEmail(email)
      }

    if(!password){
        errors.password = "Please enter your password"
    } else {
        errors.password = validatePassword(password)
      }

  }

  const handleSubmit = () => {
    handleValidation();
    const hasError = Object.values(errors).some((item) => item !== "");

    if (!hasError) {
      handleLogin();
    }
  };

  function handleLogin() {
    socialLogin().then(() => {
      navigate("/allrecipe");
    });
  }

</script>
  
<section class="bg-gray-50 min-h-screen flex items-center justify-center">
  <div class="bg-gray-100 flex rounded-2xl md:shadow-lg lg:shadow-lg max-w-3xl p-5 mx-2">
    <div class="sm:w-1/2 p-8">
      <h2 class="text-2xl font-bold font-display text-primary">Welcome back!</h2>
      <p class="text-sm font-display text-slate-500 mt-2">Login to continue</p>
  
      <form on:submit|preventDefault={handleSubmit} class="font-body flex flex-col gap-3 mt-4">
        <div>
          <Input
            type="text"
            id="email"
            bind:value={values.email}
            placeholder="Email"
          />
          {#if errors.email}
          <span class="error text-red-600 text-xs">{errors.email}</span>
          {/if}
        </div>
  
        <div>
          <Input
            type="password"
            id="password"
            bind:value={values.password}
            placeholder="Password"
          />
          {#if errors.password}
          <span class="error text-red-600 text-xs">{errors.password}</span>
          {/if}
        </div>
  
        <button class="bg-secondary hover:bg-primary text-white mt-2 pt-2 pb-2 rounded" type="submit">
          Login
        </button>
      </form>
  
      <div class="mt-5 grid grid-cols-3 items-center text-gray-400">
        <hr class="border-gray-400" />
        <p class="text-center text-sm">OR</p>
        <hr class="border-gray-400" />
      </div>
  
      <button
        on:click={handleLogin}
        class="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center gap-2">
      
        <i class="fa-brands fa-google"></i>
        <p class="text-center text-slate-600">Login with Google</p>
      </button>
  
      <hr class="border-gray-400 mt-5" />
      <div class="flex justify-between mt-5">
        <p class="text-slate-500">Don't have an account?</p>
        <Link to="/signup">
          <span class="font-bold text-primary">Register</span>
        </Link>
      </div>
    </div>
  
    <div class="w-1/2 sm:block hidden">
      <img
        class="rounded-2xl"
        src="https://media.istockphoto.com/id/480391616/photo/chopping-food-ingredients.jpg?s=612x612&w=0&k=20&c=ofjaHMXEz_CtWzO3q1fN45Yf0Rwl4TcqxZXPSPF9_FU="
        alt=""
      />
    </div>
  </div>
</section>
  



