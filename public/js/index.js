let back = [
    "../images/back2.png",
    "../images/back.png",
];
let front = [
    "../images/front2.png",
    "../images/front.png",
]
let container = document.getElementById("intro_container_in");
let container2 = document.getElementById("intro_container_in2");
let interval;
function startSlideshow() {
    let counter = 0;
    container2.style.backgroundImage = `url(${front[counter]})`;
    container.style.backgroundImage = `url(${back[counter]})`;
    counter++;
    interval = setInterval(function () {
        if (counter == back.length || counter == front.length) {
            counter = 0;
        }
        container2.style.backgroundImage = `url(${front[counter]})`;
        container.style.backgroundImage = `url(${back[counter]})`;
        counter++;
    }, 6000);
}

startSlideshow();


var arrow_link = ["#", "#"];
var images_arrow = ["../images/SCAW_0001.png", "../images/SCNM_0007.png"];
var arrow_head = ["All Weather Investing", "Brand Value"];
var arrow_content = ["Invest in India’s growing love for branded products", "Build a foundation with a portfolio of equity, gold & fixed income ETFs"];
var arrow_value = ["6Y CAGR", "3Y CAGR"];
var arrow_share = ["20.29 %", "13.72 %"];
var couple = [
    "../images/couple.png",
    "../images/couple_2.png"
]


var coupleImage = document.getElementById("couple_img");
var arrow_box = document.getElementById("innerarrow_box");
var arrowLink = document.getElementById("arrowbox_link");
var arrowImage = document.getElementById("image_change_arrowbox");
var arrowHead = document.getElementById("arrowbox_head");
var arrowContent = document.getElementById("arrowbox_after_head");
var arrowValue = document.getElementById("arrowbox_value");
var arrowboxShare = document.getElementById("arrowbox_share");
var counter_arrow = 0;

setInterval(() => {
    coupleImage.classList.remove("hidden")

    arrow_box.classList.remove("hidden");

    coupleImage.src = `${couple[counter_arrow]}`;
    arrowLink.href = `${arrow_link[counter_arrow]}`;

    arrowImage.src = `${images_arrow[counter_arrow]}`;
    arrowHead.innerText = `${arrow_head[counter_arrow]}`;
    arrowContent.innerText = `${arrow_content[counter_arrow]}`;
    arrowValue.innerText = `${arrow_value[counter_arrow]}`;
    arrowbox_share.innerText = `${arrow_share[counter_arrow]}`;
    setTimeout(() => {
        coupleImage.classList.add("hidden")
        arrow_box.classList.add("hidden");
    }, 5000)
    counter_arrow++;
    if (counter_arrow == arrow_share.length) {
        counter_arrow = 0;
    }
}, 6000);

setInterval(() => {
    arrow_box.classList.toggle("SmallcaseCard__card-disappear__3pHS7");
}, 6500);



let loginBox = () => {
    return `<div>
        <span class="float-right closeLoginCard"><svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-gray-600 cursor-pointer mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg></span>
        <h1 class="font-semibold m-3 text-xl">Login with your broker</h1>
        <p class="text-gray-500 m-3 text-sm">Choose a broker to start investing in smallcase seamlessly</p>
        <div id="loginBoxCont" class="broking_part m-3 grid grid-cols-3">
            <div partner="Groww" class="logByPartners grid grid-rows-2 p-3 hover:bg-gray-50 items-center justify-center border border-gray-100 rounded cursor-pointer">
                    <img src="images/groww.svg" class="w-6 block m-auto" alt="">
                    <p class="text-sm hover:text-blue-600 cursor-pointer font-semibold">Groww</p>
            </div>
            <div partner="Alice Blue" class="logByPartners grid grid-rows-2 p-3 hover:bg-gray-50 items-center justify-center border border-gray-100 rounded cursor-pointer">
                    <img src="images/aliceblue.svg" class="w-6 block m-auto" alt="">
                    <p class="text-sm hover:text-blue-600 cursor-pointer font-semibold">Alice Blue</p>
            </div>
            <div partner="5Paisa" class="logByPartners grid grid-rows-2 p-3 hover:bg-gray-50 items-center justify-center border border-gray-100 rounded cursor-pointer">
                    <img src="images/fivepaisa.svg" class="w-4 block m-auto" alt="">
                    <p class="text-sm hover:text-blue-600 cursor-pointer font-semibold">5Paisa</p>
            </div>
            <div partner="Angel One" class="logByPartners grid grid-rows-2 p-3 hover:bg-gray-50 items-center justify-center border border-gray-100 rounded cursor-pointer cursor-pointer">
                    <img src="images/angelbroking.svg" class="w-6 block m-auto" alt="">
                    <p class="text-sm hover:text-blue-600 cursor-pointer font-semibold">Angel One</p>
            </div>
            <div partner="HDFC Sec" class="logByPartners grid grid-rows-2 p-3 hover:bg-gray-50 items-center justify-center border border-gray-100 rounded cursor-pointer">
                    <img src="images/hdfc.svg" class="w-6 block m-auto" alt="">
                    <p class="text-sm hover:text-blue-600 cursor-pointer font-semibold">HDFC Sec</p>
            </div>
            <div partner="Kotak Sec" class="logByPartners grid grid-rows-2 p-3 hover:bg-gray-50 items-center justify-center border border-gray-100 rounded cursor-pointer">
                    <img src="images/kotak.svg" class="w-6 block m-auto" alt="">
                    <p class="text-sm hover:text-blue-600 cursor-pointer font-semibold">Kotak Sec</p>
            </div>
            <div partner="Upstox" class="logByPartners grid grid-rows-2 p-3 hover:bg-gray-50 items-center justify-center border border-gray-100 rounded cursor-pointer">
                    <img src="images/upstox.svg" class="w-6 block m-auto" alt="">
                    <p class="text-sm hover:text-blue-600 cursor-pointer font-semibold">Upstox</p>
            </div>
            <div partner="Zerodha" class="logByPartners grid grid-rows-2 p-3 hover:bg-gray-50 items-center justify-center border border-gray-100 rounded cursor-pointer">
                    <img src="images/kite.svg" class="w-6 block m-auto" alt="">
                    <p class="text-sm hover:text-blue-600 cursor-pointer font-semibold">Zerodha</p>
            </div>
            <div partner="Nothing" class="logByPartners flex p-3 hover:bg-gray-50 items-center justify-center border border-gray-100 rounded cursor-pointer">
                    <p class="text-sm text-blue-600 cursor-pointer font-semibold">+5 More</p>
            </div>
        </div>
        <p class="text-sm m-3 text-center text-gray-600">————Don't have a broker account?———</p>
        <button id="btnGoTo" onclick="window.location.href = 'https://smallcaseproject.herokuapp.com/signup'" class="border border-blue-600 text-sm p-4 block m-auto w-4/5 text-blue-600 font-semibold mb-5 rounded">Open an account online</button>
    </div>

    <!-- Login box ends here -->`;
}


let displayLogin = backCont => {
    let loginBox = document.querySelector('.loginBox');
    let allLoginParts = document.querySelectorAll('.logByPartners');
    allLoginParts.forEach(element => {
        element.addEventListener('click', () => {
            
            let partner = element.getAttribute("partner");

            // let partner_url = element.getAttribute("")

            if(localStorage.getItem("partner") == null) {
                localStorage.setItem('partner',JSON.stringify(partner));
            }
            localStorage.setItem('partner',JSON.stringify(partner));


if(localStorage.getItem("login_detail") != null) {
    const login_detail = JSON.parse(localStorage.getItem("login_detail"));
    console.log(login_detail)
    if(partner == login_detail.user.partner) {
        window.location.href = "https://smallcaseproject.herokuapp.com/discover";
    }
    else {
              
        window.location.href = "https://smallcaseproject.herokuapp.com/login"

    }
    
}
else {
    window.location.href = "https://smallcaseproject.herokuapp.com/login"
}
        })
    })
    if (loginBox.classList.contains('hidden')) {
        loginBox.classList.remove('hidden');
        backCont.setAttribute('style', 'filter: blur(5px)');
    }
    document.querySelector('.closeLoginCard').addEventListener('click', () => {
        loginBox.classList.add('hidden');
        backCont.removeAttribute('style', 'filter');
        location.reload();
    });
}


let loginBtn = document.getElementById('btnLogin');
let backContainer = document.getElementById('intro_container');
//  login card & signup functionality
let login = document.getElementById('loginBox');
let signUp = document.getElementById('signUpBox');
loginBtn.addEventListener('click', () => {
    displayLogin(backContainer);
});

login.innerHTML = loginBox();

var userLogged = false;

let discSmallcase = document.getElementById('btnGoToSmallcase');

discSmallcase.addEventListener('click', () => {
    displayLogin(backContainer);
});


