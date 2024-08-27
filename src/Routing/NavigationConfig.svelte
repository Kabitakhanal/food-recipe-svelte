<script>
  import { Router, Route, Link } from "svelte-navigator";
  import Landing from "../pages/Landing.svelte";
  import Signup from "../pages/Signup.svelte";
  import Single from "../pages/SingleRecipe.svelte";
  import All from "../pages/AllRecipes.svelte";
  import Login from "../pages/Login.svelte";
  //prop
  export let categories = []

</script>

<Router>
    <Route path="/" primary={false}><Landing/></Route>
    <Route path="/signup" primary={false}><Signup/></Route>
    <Route path="/allrecipe" primary={false}><All {categories}/></Route>
    <Route path="/single/:id" primary={false}><Single/></Route>
    <Route path="/login" primary={false}><Login/></Route>
</Router>
  
    


