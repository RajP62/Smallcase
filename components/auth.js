let loginBox = ()=>{
    return `<div>
        <span class="float-right closeLoginCard"><svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-gray-600 cursor-pointer mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg></span>
        <h1 class="font-semibold m-3 text-xl">Login with your broker</h1>
        <p class="text-gray-500 m-3 text-sm">Choose a broker to start investing in smallcase seamlessly</p>
        <div id="loginBoxCont" class="broking_part m-3 grid grid-cols-3">
            <div class="logByPartners grid grid-rows-2 p-3 hover:bg-gray-50 items-center justify-center border border-gray-100 rounded cursor-pointer">
                    <img src="../images/groww.svg" class="w-6 block m-auto" alt="">
                    <p class="text-sm hover:text-blue-600 cursor-pointer font-semibold">Groww</p>
            </div>
            <div class="logByPartners grid grid-rows-2 p-3 hover:bg-gray-50 items-center justify-center border border-gray-100 rounded cursor-pointer">
                    <img src="../images/aliceblue.svg" class="w-6 block m-auto" alt="">
                    <p class="text-sm hover:text-blue-600 cursor-pointer font-semibold">Alice Blue</p>
            </div>
            <div class="logByPartners grid grid-rows-2 p-3 hover:bg-gray-50 items-center justify-center border border-gray-100 rounded cursor-pointer">
                    <img src="../images/fivepaisa.svg" class="w-4 block m-auto" alt="">
                    <p class="text-sm hover:text-blue-600 cursor-pointer font-semibold">5Paisa</p>
            </div>
            <div class="logByPartners grid grid-rows-2 p-3 hover:bg-gray-50 items-center justify-center border border-gray-100 rounded cursor-pointer cursor-pointer">
                    <img src="../images/angelbroking.svg" class="w-6 block m-auto" alt="">
                    <p class="text-sm hover:text-blue-600 cursor-pointer font-semibold">Angel One</p>
            </div>
            <div class="logByPartners grid grid-rows-2 p-3 hover:bg-gray-50 items-center justify-center border border-gray-100 rounded cursor-pointer">
                    <img src="../images/hdfc.svg" class="w-6 block m-auto" alt="">
                    <p class="text-sm hover:text-blue-600 cursor-pointer font-semibold">HDFC Sec</p>
            </div>
            <div class="logByPartners grid grid-rows-2 p-3 hover:bg-gray-50 items-center justify-center border border-gray-100 rounded cursor-pointer">
                    <img src="../images/kotak.svg" class="w-6 block m-auto" alt="">
                    <p class="text-sm hover:text-blue-600 cursor-pointer font-semibold">Kotak Sec</p>
            </div>
            <div class="logByPartners grid grid-rows-2 p-3 hover:bg-gray-50 items-center justify-center border border-gray-100 rounded cursor-pointer">
                    <img src="../images/upstox.svg" class="w-6 block m-auto" alt="">
                    <p class="text-sm hover:text-blue-600 cursor-pointer font-semibold">Upstox</p>
            </div>
            <div class="logByPartners grid grid-rows-2 p-3 hover:bg-gray-50 items-center justify-center border border-gray-100 rounded cursor-pointer">
                    <img src="../images/kite.svg" class="w-6 block m-auto" alt="">
                    <p class="text-sm hover:text-blue-600 cursor-pointer font-semibold">Zerodha</p>
            </div>
            <div class="logByPartners flex p-3 hover:bg-gray-50 items-center justify-center border border-gray-100 rounded cursor-pointer">
                    <p class="text-sm text-blue-600 cursor-pointer font-semibold">+5 More</p>
            </div>
        </div>
        <p class="text-sm m-3 text-center text-gray-600">————Don't have a broker account?———</p>
        <button id="btnGoTo" class="border border-blue-600 text-sm p-4 block m-auto w-4/5 text-blue-600 font-semibold mb-5 rounded">Open an account online</button>
    </div>

    <!-- Login box ends here -->`;
}

let signUpBox = ()=>{
    return `<div>
    <span id="closeSignup" class="float-right closeSignupBox"><svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-gray-600 cursor-pointer mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg></span>
      <div class="backInSignup w-5/5 border">
        <div class="w-3/5 mt-5"><h1 class="font-semibold m-3 text-xl">Start investing with india's largest brokerages</h1></div>
      </div>

    <p class="text-gray-900 mx-3 mt-2 mb-1 text-sm">Open a trading & demat account online</p>
    <div class="broking_part mx-3 w-5/5 items-center my-2 flex">
        <div class="flex  justify-center mr-1 cursor-pointer">
                <img src="../images/kite.svg" class="w-6 block m-auto" alt="">
                <p class="text-sm hover:text-blue-600 cursor-pointer">Zerodha</p>
        </div>
        <div class="flex justify-center mr-1 cursor-pointer">
                <img src="../images/fivepaisa.svg" class="w-6 block m-auto" alt="">
                <p class="text-sm hover:text-blue-600 cursor-pointer ">5paisa</p>
        </div>
        <div class="flex justify-center cursor-pointer">
                <img src="../images/iifl.svg" class="w-6 block m-auto" alt="">
                <p class="text-sm hover:text-blue-600 cursor-pointer">IIFL Sec</p>
        </div>
    </div>
    <h1 class="text-xl font-bold mb-3 mx-3 mt-1">Sign up</h1>
    <p class="mx-3 text-sm">Or check your application status</p>
    <input id="inp_name_signup" type="text" class="inpSignup mt-1 py-2 w-5/5 mx-3 mb-3 w-5/5 border-2 rounded border:bg-gray-800" placeholder="UserName">
    <input id="inp_email_signup" type="text" class="inpSignup w-5/5 py-2 mx-3 mb-3 w-5/5 border-2 rounded border:bg-gray-800" placeholder="Email">
    <input id="inp_pass_signup" type="text" class="inpSignup w-5/5 py-2 mx-3 mb-3 w-5/5 border-2 rounded border:bg-gray-800" placeholder="Password">
    <button id="btnSignUp" class="btnSignup rounded text-small p-3 font-bold bg-blue-600 w-4/5 mx-3 mb-5 text-white block">Continue</button>
</div>
<!-- Signup box ends here -->`;
}

let displayLogin = backCont=> {
    let loginBox = document.querySelector('.loginBox');
    let signupBox = document.querySelector('.signupBox');
    let btnSignUp = document.getElementById('btnSignUp');
    let allLoginParts = document.querySelectorAll('.logByPartners');
    allLoginParts.forEach(element=>{
        element.addEventListener('click',appendLoginOpt);
    })
    if(loginBox.classList.contains('hidden')){
        loginBox.classList.remove('hidden');
        backCont.setAttribute('style','filter: blur(5px)');
    }
    btnSignUp.onclick = event=>{
        event.preventDefault();
        let inp_name = document.getElementById('inp_name_signup').value;
        let inp_email = document.getElementById('inp_email_signup').value;
        console.log(typeof(inp_email.includes('@gmail.com')))
        let inp_pass = document.getElementById('inp_pass_signup').value;
        if(inp_name.length>2 && inp_email.includes('@gmail.com') && inp_pass.length>4){
            registerUser(inp_name,inp_email,inp_pass);
        }
        else if(inp_name.length<=3){
            alert('Username cannot be less than 3 digits');
        }
        else if(!inp_email.contains('@gmail.com')){
            alert('Valid email should contain @gmail.com');
        }
        else if(inp_pass.length<5){
            alert('Password minimum should be of 5 digits')
        }
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
        location.reload();
    });
    document.querySelector('.closeLoginCard').addEventListener('click',()=>{
        loginBox.classList.add('hidden');
        backCont.removeAttribute('style','filter');
        location.reload();
    });

    // func for reg user
    async function registerUser(name,email,pass){
        let userDet = {
            name,
            email,
            pass
        }
        userDet = JSON.stringify(userDet);

        try{
            fetch(`http://localhost:5000/api/userAuth`,{
                method:'POST',
                body:userDet,
                headers:{
                    'Content-Type':'application/json'
                }
            }).then(()=>{
                window.location.href = "../discover.html";
            })
        }
        catch(err){
            console.log(err);
        }
    }

    async function loginUser(mail,Password){
        try{
            let data = await fetch(`http://localhost:5000/api/userAuth`);
            let res = await data.json();
            var flagUserExist = false;
            res.forEach(element => {
                let {email,pass} = element;
                if(email===mail && pass===Password){
                    window.location.href = "../discover.html";
                    flagUserExist = true;
                }
            });
            if(!flagUserExist){
                alert('Invalid credentials');
            }
        }

        catch(err){
            console.log(err);
        }
    }

    function appendLoginOpt(){
        let LoginCont = document.getElementById('loginBoxCont');
        LoginCont.innerHTML = null;
        let div = document.createElement('div');
        let head = document.createElement('h1');
        head.classList.add('font-semibold','text-xl','text-blue-600','my-3');
        head.textContent = "Use your registered email and password";
        div.setAttribute('class','m-3');
        LoginCont.classList.remove('grid-cols-3','grid');
        let inp_email_log = document.createElement('input');
        inp_email_log.setAttribute('class','inpInLogin border border:gray-600 py-3 px-2 m-2 rounded text-sm');
        inp_email_log.type = "email";
        inp_email_log.placeholder = "Email";
        inp_email_log.id = "emailData_log"
        let inp_pass_log = document.createElement('input');
        inp_pass_log.type = "password";
        inp_pass_log.placeholder = "Password";
        inp_pass_log.id = "passData_log"
        inp_pass_log.setAttribute('class','inpInLogin border border:gray-600 py-3 px-2 m-2 rounded text-sm');
        let btnSubmit = document.createElement('button');
        // btnSubmit.id = "btnLoginUser";
        btnSubmit.addEventListener('click',()=>{
            let inpEmail = document.getElementById('emailData_log').value;
            let inpPass = document.getElementById('passData_log').value;
            if(inpEmail.includes('@gmail.com') && inpPass.length>4){
                loginUser(inpEmail,inpPass);
            }
            else if(!inpEmail.includes('@gmail.com')){
                alert('Email should contain @gmail.com');
            }
            else if(inpPass.length<5){
                alert('Password should be of minimum 5 characters');
            }
        })
        btnSubmit.setAttribute('class','bg-blue-600 mb-2 rounded text-white px-2 p-2 block m-auto text-xl font-bold');
        btnSubmit.innerHTML = "Submit";
        let hr1 = document.createElement('hr');
        div.append(head,inp_email_log,inp_pass_log,btnSubmit,hr1);
        LoginCont.append(div);
    }
}  

export {loginBox,signUpBox,displayLogin};