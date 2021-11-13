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

// setTimeout(() => {
   
//     var outer = document.createElement('div');
//     outer.classList.add("Intro__card__1VHo2","w-80");

//     var justouter = document.createElement('div');
//     justouter.classList.add("w-full","SmallcaseCard__container__2vRs","p-5","border-2","border-solid","rounded-md","SmallcaseCard__card-appear__3pHS7");

//     var intervalarrowbox = setInterval(() => {
//         justouter.classList.toggle("SmallcaseCard__card-disappear__3pHS7")
//     },500);

//     // intervalarrowbox;

//     var arrow = document.createElement('div');
//     arrow.classList.add("w-full","SmallcaseCard__arrow-right__34Mgt", "absolute");





// },1000)
var arrow_link = ["#","#"];

var images_arrow = ["../images/SCAW_0001.png","../images/SCNM_0007.png"];

var arrow_head = ["All Weather Investing","Brand Value"];

var arrow_content = ["Invest in India’s growing love for branded products","Build a foundation with a portfolio of equity, gold & fixed income ETFs"];

var arrow_value = ["6Y CAGR","3Y CAGR"];

var arrow_share = ["20.29 %","13.72 %"];

var couple = [
    "../images/couple.png",
    "../images/couple_2.png"
]

// ../images/SCAW_0001.png

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
    },5000)

    counter_arrow++;

    if(counter_arrow == arrow_share.length) {
        counter_arrow = 0;
    }

},6000);


setInterval(() => {

    arrow_box.classList.toggle("SmallcaseCard__card-disappear__3pHS7");

},6500);

