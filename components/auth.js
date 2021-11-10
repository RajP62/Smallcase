let loginBox = ()=>{
    return `<div>
        <span class="float-right closeLoginCard"><svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-gray-600 cursor-pointer mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg></span>
        <h1 class="font-semibold m-3 text-xs">Login with your broker</h1>
        <p class="text-gray-500 m-3 text-exsm">Choose a broker to start investing in smallcase seamlessly</p>
        <div class="broking_part m-3 grid grid-cols-3">
            <div class="grid grid-rows-2 p-3 hover:bg-gray-50 items-center justify-center border border-gray-100 rounded cursor-pointer">
                    <img src="./images/groww.svg" class="w-4 block m-auto" alt="">
                    <p class="text-small hover:text-blue-600 cursor-pointer font-semibold">Groww</p>
            </div>
            <div class="grid grid-rows-2 p-3 hover:bg-gray-50 items-center justify-center border border-gray-100 rounded cursor-pointer">
                    <img src="./images/aliceblue.svg" class="w-4 block m-auto" alt="">
                    <p class="text-small hover:text-blue-600 cursor-pointer font-semibold">Alice Blue</p>
            </div>
            <div class="grid grid-rows-2 p-3 hover:bg-gray-50 items-center justify-center border border-gray-100 rounded cursor-pointer">
                    <img src="./images/fivepaisa.svg" class="w-4 block m-auto" alt="">
                    <p class="text-small hover:text-blue-600 cursor-pointer font-semibold">5Paisa</p>
            </div>
            <div class="grid grid-rows-2 p-3 hover:bg-gray-50 items-center justify-center border border-gray-100 rounded cursor-pointer cursor-pointer">
                    <img src="./images/angelbroking.svg" class="w-4 block m-auto" alt="">
                    <p class="text-small hover:text-blue-600 cursor-pointer font-semibold">Angel One</p>
            </div>
            <div class="grid grid-rows-2 p-3 hover:bg-gray-50 items-center justify-center border border-gray-100 rounded cursor-pointer">
                    <img src="./images/hdfc.svg" class="w-4 block m-auto" alt="">
                    <p class="text-small hover:text-blue-600 cursor-pointer font-semibold">HDFC Sec</p>
            </div>
            <div class="grid grid-rows-2 p-3 hover:bg-gray-50 items-center justify-center border border-gray-100 rounded cursor-pointer">
                    <img src="./images/kotak.svg" class="w-4 block m-auto" alt="">
                    <p class="text-small hover:text-blue-600 cursor-pointer font-semibold">Kotak Sec</p>
            </div>
            <div class="grid grid-rows-2 p-3 hover:bg-gray-50 items-center justify-center border border-gray-100 rounded cursor-pointer">
                    <img src="./images/upstox.svg" class="w-4 block m-auto" alt="">
                    <p class="text-small hover:text-blue-600 cursor-pointer font-semibold">Upstox</p>
            </div>
            <div class="grid grid-rows-2 p-3 hover:bg-gray-50 items-center justify-center border border-gray-100 rounded cursor-pointer">
                    <img src="./images/kite.svg" class="w-4 block m-auto" alt="">
                    <p class="text-small hover:text-blue-600 cursor-pointer font-semibold">Zerodha</p>
            </div>
            <div class=" flex p-3 hover:bg-gray-50 items-center justify-center border border-gray-100 rounded cursor-pointer">
                    <p class="text-small text-blue-600 cursor-pointer font-semibold">+5 More</p>
            </div>
        </div>
        <p class="text-small m-3 text-center text-gray-600">————Don't have a broker account?———</p>
        <button id="btnGoTo" class="border border-blue-600 text-small block m-auto w-4/5 text-blue-600 font-semibold mb-5 rounded">Open an account online</button>
    </div>

    <!-- Login box ends here -->`;
}

let signUpBox = ()=>{
    return `<div>
    <span class="float-right closeSignupBox"><svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-gray-600 cursor-pointer mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg></span>
      <div class="backInSignup w-5/5 border">
        <div class="w-3/5 mt-5"><h1 class="font-semibold m-3 text-sm">Start investing with india's largest brokerages</h1></div>
      </div>

    <p class="text-gray-900 mx-3 mt-2 mb-1 text-exsm">Open a trading & demat account online</p>
    <div class="broking_part mx-3 mb-14 w-5/5 items-center flex">
        <div class="flex  justify-center mr-1 cursor-pointer">
                <img src="./images/kite.svg" class="w-2 block m-auto" alt="">
                <p class="text-small hover:text-blue-600 cursor-pointer">Zerodha</p>
        </div>
        <div class="flex justify-center mr-1 cursor-pointer">
                <img src="./images/fivepaisa.svg" class="w-2 block m-auto" alt="">
                <p class="text-small hover:text-blue-600 cursor-pointer ">5paisa</p>
        </div>
        <div class="flex justify-center cursor-pointer">
                <img src="./images/iifl.svg" class="w-2 block m-auto" alt="">
                <p class="text-small hover:text-blue-600 cursor-pointer">IIFL Sec</p>
        </div>
    </div>
    <h1 class="text-base font-semibold mx-3">Sign up</h1>
    <p class="mx-3 text-small">Or check your application status</p>
    <h1 class="text-small font-semibold mx-3 my-2">Email Id</h1>
    <input type="text" class="inpSignup w-5/5 mx-3 mb-3 w-5/5 border-2 rounded border:bg-gray-800">
    <button class="btnSignup rounded text-small p-3 font-bold bg-blue-600 w-4/5 mx-3 mb-5 text-white block">Continue</button>
</div>
<!-- Signup box ends here -->`;
}

let displayLogin = backCont=> {
    let loginBox = document.querySelector('.loginBox');
    let signupBox = document.querySelector('.signupBox');
    if(loginBox.classList.contains('hidden')){
        loginBox.classList.remove('hidden');
        backCont.setAttribute('style','filter: blur(5px)');
    }
    document.getElementById('btnGoTo').addEventListener('click',()=>{
        loginBox.classList.add('hidden');
        signupBox.classList.remove('hidden');
    });
    document.querySelector('.closeSignupBox').addEventListener('click',()=>{
        if(!signupBox.classList.contains('hidden')){
            signupBox.classList.add('hidden');
            backCont.removeAttribute('style','filter');
        }
    });
    document.querySelector('.closeLoginCard').addEventListener('click',()=>{
        loginBox.classList.add('hidden');
        backCont.removeAttribute('style','filter');
    });
    document.querySelector('.btnSignup').addEventListener('click',()=>{
        window.location.href = "#";
        // write location of discover and specifically in collection
    });
}  

export {loginBox,signUpBox,displayLogin};