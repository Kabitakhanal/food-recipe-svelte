import './app.css'
import App from './App.svelte'
import { initializer } from './configs/initializer';

const loadScript = () => {
  const script = document.createElement("script");
  script.type = "text/javascript";
  // script.src = globalConfig.miniAppUrl;
  script.src="https://mini-app-sdk.hamrostack.com/main-dev.js"
  script.async = true;
  document.body.appendChild(script);
  script.onload = () => {
   initializer().then((res)=>{
    
   })
   console.log("i am heres");
   
  };
  script.onerror = (e) => {
    console.log(e);
  };
};

loadScript()

const app = new App({
  target: document.getElementById('app'),
})

export default app
