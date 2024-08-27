<script>
  import { Router, Route, Link } from "svelte-navigator";
  import { LANDING, LOGIN, SIGNUP, ALLRECIPE, SINGLERECIPE } from "./routes"
  import Landing from "../pages/Landing.svelte";
  import Signup from "../pages/Signup.svelte";
  import Single from "../pages/SingleRecipe.svelte";
  import All from "../pages/AllRecipes.svelte";
  import Login from "../pages/Login.svelte";
  //prop
  export let categories = []

</script>

<Router>
    <Route path={LANDING} primary={false}><Landing/></Route>
    <Route path={SIGNUP} primary={false}><Signup/></Route>
    <Route path={ALLRECIPE} primary={false}><All {categories}/></Route>
    <Route path={`${SINGLERECIPE}/:id`} primary={false}><Single/></Route>
    <Route path={LOGIN} primary={false}><Login/></Route>
</Router>
  
    


