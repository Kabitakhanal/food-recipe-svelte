export async function initializer(){
    window.miniapp = new hamromini_sdkjs.MiniApp();
    try {
        //@ts-ignore
        const userDetail = await hamromini_sdkjs.initialize(
            "6d048a90-f08a-11ec-8e70-0242ac12004a",

          window.miniapp
        );

        return userDetail;
    }catch(err) {
      await new Promise((resolve) => setTimeout(resolve, 1000));

    }   
}



