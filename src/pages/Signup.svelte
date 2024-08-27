<script>

    import { useNavigate } from "svelte-navigator";
    import Input from "../components/Input.svelte";
    import { validateEmail } from "../utils/validateEmail";
    import { validatePassword } from "../utils/validatePassword";
    
    const navigate = useNavigate();
   
    //states
    let values = {
        email: "",
        password: "",
        confirmPassword: "" }

    let errors = {...values}

    //helpers
    const handleValidation = () => {
      errors.email = "";
      errors.password = "";
      errors.confirmPassword = "";

      let {email, password, confirmPassword} = values
      
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

      if(!confirmPassword){
          errors.confirmPassword = "Please enter your password again"
      } else if (password !== confirmPassword) {
         errors.confirmPassword = "Password does not match"
      }

    }

    const handleSubmit = () => {
        handleValidation();
        const hasError = Object.values(errors).some((item) => item !== "");

        if (!hasError) {
          navigate("/login");
          alert(JSON.stringify(values))
        }
    };
 
</script>
  
<section class="bg-gray-50 min-h-screen flex items-center justify-center">
  <div class="bg-gray-100 flex rounded-2xl md:shadow-lg lg:shadow-lg max-w-3xl p-5 mx-2">
    <!--Image section-->
    <div class="w-1/2 sm:block hidden">
      <img class="rounded-2xl  " src="https://media.istockphoto.com/id/480391616/photo/chopping-food-ingredients.jpg?s=612x612&w=0&k=20&c=ofjaHMXEz_CtWzO3q1fN45Yf0Rwl4TcqxZXPSPF9_FU=" alt="">
    </div>
    
    <!--Form section-->
    <div class="sm:w-1/2 p-8" >
      <h2 class="text-3xl  font-bold font-display text-primary ">Registration Form</h2>
      <p class="text-sm  font-display text-slate-500 mt-2" >Create a new account</p>
  
      <form on:submit|preventDefault={handleSubmit} class="font-body flex flex-col gap-4 mt-4">
            
        <div>
          <Input type="text" id="email" bind:value={values.email} placeholder="Email"/>
          {#if errors.email}
            <span class="error text-red-600 text-xs">{errors.email}</span>
          {/if}
        </div>
                   
        <div>
          <Input type="password" id="password" bind:value={values.password} placeholder="Password"/>
          {#if errors.password}
          <span class="error text-red-600 text-xs">{errors.password}</span>
          {/if}
       </div>
  
        <div>
          <Input type="password" id="confirmPassword" bind:value={values.confirmPassword} placeholder="Confirm Password" />
          {#if errors.confirmPassword}
          <span class="text-red-600 text-xs">{errors.confirmPassword}</span>
          {/if}
        </div>
  
        <button on:click={handleSubmit} class="bg-secondary hover:bg-primary font-extrabold text-white mt-2 pt-2 pb-2 rounded"type="submit">Register</button>
         
      </form>
  
      <div class="mt-5 grid grid-cols-3 items-center text-gray-400">
        <hr class="border-gray-400">
        <p class="text-center text-sm">OR</p>
        <hr class="border-gray-400">
      </div>

      <p class=" mt-5 text-center text-slate-600 font-body text-sm">Already have an account?</p>
         
      <button on:click={() => navigate("/login")} class=" bg-secondary w-full  text-white  pt-2 pb-2 rounded flex justify-center items-center mt-5 hover:bg-primary">
        <i class="fa-solid fa-arrow-left"></i>
        <p class="text-center font-extrabold font-body ml-2">Back to Login</p>
      </button>
  
    </div>

  </div>
</section>
  