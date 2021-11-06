let loginBox = document.querySelector('.loginBox');
let main_cont =document.querySelector('.mainContentDiv');

async function getTrendingData() {
    try {
        let body = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=0f2fb6533d144f24a288ed58d4ef8244`);
        let res = await body.json();
        return res;
    }
    catch (err) {
        console.log("error: ", err)
    }
}
getTrendingData().then(({ articles }) => {
    console.log(articles)
    appendFirstBox(articles);
});

function appendFirstBox(articles) {
    // appending first box
    {
        let { urlToImage, description, content } = articles[0];
        let firOfFirBox = document.getElementById(`newsBox-one`);
        let img = document.createElement('img');
        img.alt = "Unable to load";
        let ins_small_txt = document.createElement('p');
        ins_small_txt.textContent = "inside smallcase";
        ins_small_txt.setAttribute('class', 'text-small text-blue-600 my-2 cursor-pointer')
        let desc = document.createElement('h1');
        desc.setAttribute('class', 'font-bold my-2 cursor-pointer hover:text-blue-600')
        let cont = document.createElement('p');
        img.src = urlToImage;
        img.setAttribute('class', 'w-5/5 cursor-pointer');
        desc.textContent = description;
        cont.setAttribute('class', 'text-gray-500 cursor-pointer')
        cont.textContent = content;
        firOfFirBox.append(img, ins_small_txt, desc, cont);
    }

    // appending different boxes in second box
    {
        let { urlToImage, description } = articles[1];
        let firOfSecBox = document.getElementById('firBoxOfSec');
        let img1 = document.createElement('img');
        img1.alt = "Unable to load";
        ins_small_txt = document.createElement('p');
        ins_small_txt.textContent = "inside smallcase";
        ins_small_txt.setAttribute('class', 'text-small text-blue-600 my-3 cursor-pointer');
        let desc2 = document.createElement('h1');
        img1.src = urlToImage;
        img1.setAttribute('class', 'w-5/5 cursor-pointer')
        desc2.textContent = description;
        desc2.setAttribute('class', 'font-bold text-xs my-3 cursor-pointer hover:text-blue-600 text-xs');
        firOfSecBox.append(img1, ins_small_txt, desc2);
    }

    {
        let { urlToImage, description } = articles[2];
        let secOfSecBox = document.getElementById('secBoxOfSec');
        let img1 = document.createElement('img');
        img1.alt = "Unable to load";
        ins_small_txt = document.createElement('p');
        ins_small_txt.textContent = "inside smallcase";
        ins_small_txt.setAttribute('class', 'text-small text-blue-600 my-3 cursor-pointer');
        let desc2 = document.createElement('h1');
        img1.src = urlToImage;
        img1.setAttribute('class', 'w-5/5 cursor-pointer')
        desc2.textContent = description;
        desc2.setAttribute('class', 'font-bold text-xs my-3 hover:text-blue-600 cursor-pointer cursor-pointer');
        secOfSecBox.append(img1, ins_small_txt, desc2);
    }

    let secondBox = document.getElementById('newsBox-two');

    for (let i = 3; i < 7; i++) {
        let { description } = articles[i];
        let div = document.createElement('div');
        let ins_small_txt = document.createElement('p');
        ins_small_txt.textContent = "inside smallcase";
        ins_small_txt.setAttribute('class', 'text-small text-blue-600 my-3 cursor-pointer');
        let desc = document.createElement('h1');
        desc.textContent = description;
        desc.setAttribute('class', 'font-bold text-xs cursor-pointer hover:text-blue-600 text-xs');
        div.append(ins_small_txt, desc);
        secondBox.append(div);
    }

    // Appending the second box
    for (let i = 7; i < 13; i++) {
        let div = document.createElement('div');
        let { urlToImage, description, content } = articles[i];
        let secBoxNews = document.getElementById(`second-box-news`);
        let img = document.createElement('img');
        img.alt = "Unable to load";
        let desc = document.createElement('h1');
        desc.setAttribute('class', 'font-bold my-2 cursor-pointer hover:text-blue-500 text-xs');
        let cont = document.createElement('p');
        img.src = urlToImage;
        img.setAttribute('class', 'w-5/5 cursor-pointer h-2/5');
        desc.textContent = description;
        cont.setAttribute('class', 'text-gray-500 cursor-pointer text-sm')
        cont.textContent = content;
        div.append(img,desc,cont)
        secBoxNews.append(div);
    }

}

let collection_cards = document.querySelector(`.collectionBoxOpener`);
collection_cards.addEventListener('click',toggleCardsDiv);

function toggleCardsDiv(){
    let cards_div = document.querySelector(`.collection_cards`);
    if(cards_div.classList.contains('hidden')){
        cards_div.classList.remove('hidden');
        cards_div.classList.add('grid');
    }
    else{
        cards_div.classList.remove('grid');
        cards_div.classList.add('hidden');
    }
}

// click listener to cards in collection box
// for first card
{
let card = document.querySelector(`.firCard_collection`);
card.setAttribute('onmouseover','displayCardDet()');
card.setAttribute('onmouseout','displayCardDef()');
let firBox = document.querySelector(`.firCard_collection div`);
let sec_box = document.querySelector(`.altBox_firCard`);

function displayCardDet(){
    console.log("In the div");
    firBox.classList.add('hidden');
    sec_box.classList.remove('hidden');
}

function displayCardDef(){
    firBox.classList.remove('hidden');
    sec_box.classList.add('hidden');
}
}
// for second card
{
let card = document.querySelector(`.secCard_collection`);
card.setAttribute('onmouseover','displaySecCardDet()');
card.setAttribute('onmouseout','displaySecCardDef()');
let firBox = document.querySelector(`.secCard_collection div`);
let sec_box = document.querySelector(`.altBox_secCard`);

function displaySecCardDet(){
    firBox.classList.add('hidden');
    sec_box.classList.remove('hidden');
}

function displaySecCardDef(){
    firBox.classList.remove('hidden');
    sec_box.classList.add('hidden');
}
}
// for third card
{
let card = document.querySelector(`.thiCard_collection`);
card.setAttribute('onmouseover','displayThiCardDet()');
card.setAttribute('onmouseout','displayThiCardDef()');
let firBox = document.querySelector(`.thiCard_collection div`);
let sec_box = document.querySelector(`.altBox_thiCard`);


function displayThiCardDet(){
    firBox.classList.add('hidden');
    sec_box.classList.remove('hidden');
}

function displayThiCardDef(){
    firBox.classList.remove('hidden');
    sec_box.classList.add('hidden');
}
}
// for fourth card
{
let card = document.querySelector(`.fourCard_collection`);
card.setAttribute('onmouseover','displayFourCardDet()');
card.setAttribute('onmouseout','displayFourCardDef()');
let firBox = document.querySelector(`.fourCard_collection div`);
let sec_box = document.querySelector(`.altBox_fourCard`);


function displayFourCardDet(){
    firBox.classList.add('hidden');
    sec_box.classList.remove('hidden');
}

function displayFourCardDef(){
    firBox.classList.remove('hidden');
    sec_box.classList.add('hidden');
}
}

// debouncing in search bar in navbar
let inp = document.querySelector('.inpBox-nav');
let navBtn = document.getElementById('btnInNav');
let postWRepInNav = document.querySelector('.pw_r_txtNav');
let div_res = document.querySelector('.displaySearchRes');
let interval_deb;

inp.addEventListener('click',()=>{
    // div_res.classList.remove('hidden');
    navBtn.classList.add('hidden');
    postWRepInNav.classList.add('hidden');
    inp.classList.remove('w-10');
    inp.classList.add('w-52');  
});
inp.addEventListener('keyup',showSuggestion);

document.querySelector(`.mainContentDiv`).addEventListener('click',()=>{
    if(inp.classList.contains('w-52')){
        div_res.classList.add('hidden');
        navBtn.classList.remove('hidden');
        postWRepInNav.classList.remove('hidden');
        inp.classList.remove('w-52');
        inp.classList.add('w-10');
    }
    if(!loginBox.classList.contains('hidden')){
        loginBox.classList.add('hidden');
        main_cont.removeAttribute('style','filter');
    }
});

function showSuggestion(){
    if(interval_deb){
        clearInterval(interval_deb);
    }
    if(div_res.classList.contains('hidden')){
        div_res.classList.remove('hidden');
    }
    let search = document.querySelector('.inpBox-nav').value;
    if(search===''){
        div_res.classList.add('hidden');
        return;
    }
    interval_deb = setTimeout(() => {
        getSearchData(search)
    }, 600);
}


function appendSearchData(articles){
    div_res.innerHTML = null;
    console.log("new api request")
    articles.forEach(({urlToImage,title}) => {
        let div = document.createElement('div');
        div.setAttribute('class','bg-white rounded font-semibold flex overflow-hidden m-1 cursor-pointer');
        let img = document.createElement('img');
        img.setAttribute('class','w-20 m-2');
        img.src = urlToImage;
        img.alt = "Unable to load";
        let para = document.createElement('p');
        para.textContent = title
        para.setAttribute('class','p-5 font-bold');
        div.append(img,para);
        div_res.append(div);
    });
}
async function getSearchData(search){
    try{
        let data = await fetch(`https://newsapi.org/v2/everything?q=${search}&sortBy=popularity&apiKey=0f2fb6533d144f24a288ed58d4ef8244`);
        let {articles} = await data.json();
        appendSearchData(articles);
    }
    catch(err){
        console.log("err",err);
    }
    
}

// navBtn onclick just for checking login card
navBtn.addEventListener('click',displayLogin);
console.log(main_cont)
function displayLogin(){
    if(loginBox.classList.contains('hidden')){
        loginBox.classList.remove('hidden');
        main_cont.setAttribute('style','filter: blur(5px)');
    }
}

document.querySelector('.closeLoginCard').addEventListener('click',()=>{
    loginBox.classList.add('hidden');
    main_cont.removeAttribute('style','filter');
})