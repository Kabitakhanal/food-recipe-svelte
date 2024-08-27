export function socialLogin() {
      return window.miniapp.login().then(() => {
        console.log("Inside social login")
      });
    }