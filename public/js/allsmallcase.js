// let mainCont = document.getElementById('mainCont');
if(localStorage.getItem('data_clicked')===null){
    localStorage.setItem('data_clicked',JSON.stringify([]));
}

// // Debouncing functionality
let timeoutForDeb;
let inp_sear = document.getElementById('inp_search');
inp_sear.addEventListener('keyup',appendSuggestion);
let suggBox = document.getElementById('inp_sugg_box');

function appendSuggestion(){
    if(timeoutForDeb){
        clearTimeout(timeoutForDeb);
    }
    if(suggBox.classList.contains('hidden')){
        suggBox.classList.remove('hidden');
    }
    let search = document.getElementById('inp_search').value;
    if(!search){
        suggBox.classList.add('hidden');
        return;
    }
    timeoutForDeb = setTimeout(() => {
        appendSearchRes(search);
    }, 600);
}

let appendSearchRes = async search=>{
    let res = await fetch('http://localhost:2000/smallcases/all');
    let realData =await res.json();

    allSmallcaseData = realData;
    suggBox.innerHTML = null;
    allSmallcaseData.forEach(element => {
        let {info:{name,shortDescription,imageUrl}} = element;
        if(startCharMatch(name,search)){
            let div = document.createElement('div');
            div.addEventListener('click',()=>{
                let elem = {...element};
                localStorage.setItem('cartcases',JSON.stringify(elem));
                window.location.href = 'top_100.html';
            })
            div.setAttribute('class','flex justify-between items-center text-small mb-1 cursor-pointer');
            let div2 = document.createElement('div');
            div2.setAttribute('class','text-blue-600 ml-5')
            let img = document.createElement('img');
            img.setAttribute('class','w-5 h-5');
            let nameOfCase = document.createElement('h1');
            nameOfCase.setAttribute('class','text-small font-semibold text-gray-500');
            let shortDesc = document.createElement('p');
            shortDesc.setAttribute('class','text-small')
            img.src = imageUrl;
            nameOfCase = `${name} : `;
            shortDesc = shortDescription;
            div2.append(nameOfCase,shortDesc);
            div.append(img,div2);
            let hr = document.createElement('hr');
            suggBox.append(div,hr);
        }
    });
}

let startCharMatch = (firStr,secStr)=>{
    for(let i=0; i<firStr.length && i<secStr.length; i++){
        if(firStr[i]!==secStr[i]){
            return false;
        }
    }
    return true;
}

// Sorting through backend


// By Investment Amount
function under(value){
    const myUrl = new URL(window.location.href);
    myUrl.searchParams.set("investmentrange", value);
    window.location.href = myUrl;
}

// By Volatility
function byRisk(level){
    const myUrl = new URL(window.location.href);
    myUrl.searchParams.set("volatility",level);
    window.location.href = myUrl;
}

// By Strategy
function byStrategy(strategy){
    const myUrl = new URL(window.location.href);
    myUrl.searchParams.set("strategy",strategy);
    window.location.href = myUrl;
}

// By Page
function prevPage(){
    const myUrl = new URL(window.location.href);
    let currPage = myUrl.searchParams.get("page") || 1;
    console.log(currPage);
    if(currPage<=1){
        currPage = 2;
    }
    myUrl.searchParams.set("page",+currPage-1);
    window.location.href = myUrl;
}

function nextPage(){
    const myUrl = new URL(window.location.href);
    let currPage = myUrl.searchParams.get("page") || 1;
    myUrl.searchParams.set("page",+currPage+1);
    window.location.href = myUrl;
}


// proceeding to search page

function showInDetail(elem){
     console.log(elem)
    let data_cart = JSON.parse(localStorage.getItem("data_clicked"));

    data_cart = [];

    data_cart.push(elem);

    localStorage.setItem("data_clicked",JSON.stringify(data_cart));
    
    window.location.assign("search");
}

function navbar(){
    return `
    <div class=" w-full h-16 border-b border-gray-400 flex"> 
       <div class="h-full flex ml-28 space-x-7">
           <div class=" h-full py-3">
               <img class="h-full" src="images/groww-logo.png">
           </div>
           <button onclick="window.location.href = 'http://localhost:2000/growDashboard'" class="text-gray-600 text-sm">Dashboard</button>
           <button onclick="window.location.href = 'http://localhost:2000/discover'" class="text-gray-600 text-sm">Discover</button>
           <button onclick="window.location.href = 'http://localhost:2000/create'" class="text-gray-600 text-sm">Create</button>
       </div>
       <div class="h-full flex ml-auto mr-28 space-x-7">
           <button class="text-gray-600 text-sm" onclick="window.location.href ='http://localhost:2000/watchlists'">Watchlist</button>
           <button class="text-gray-600 text-sm" onclick="window.location.href ='http://localhost:2000/investments'">Investments</button>
           <button><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600 text-sm" viewBox="0 0 20 20" fill="currentColor">
               <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
             </svg></button>
           <button><svg xmlns="http://www.w3.org/2000/svg" onclick="show()" class="h-5 w-5 text-gray-600 text-sm" viewBox="0 0 20 20" fill="currentColor">
               <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
             </svg></button> 
           <button onclick="logout()" class="rounded text-md text-gray-600 font-medium pb-2 border border-blue-500 px-2 h-7 mt-4 hover:text-blue-600">Log-out</button> 
       </div>
   </div>
   `
}

function footer(){
    return `
    <div class=" w-full h-44 bg-gray-100 mt-20">
        <div class="w-full h-20 flex ">
            <div class="mt-5 ml-20"> 
                <p class="text-gray-600">© Powered by smallcase Technologies Pvt. Ltd. Email us at groww-help@smallcase.com</p>
            </div>
            <div class="ml-auto space-x-12 mr-20 mt-5">
                <button class="text-gray-600">Help</button>
                <button class="text-gray-600">Disclimer</button>
                <button class="text-gray-600">More</button>
            </div>
        </div>
            <div class="ml-20"> 
                <img class="h-10 p-1" src="./images/groww-logo.png">
                <p class="text-gray-600">NSE & BSE – SEBI Reg. No.: INZ0123456789 |  CDSL - SEBI Reg. No.: IN-Dk-117-2019</p>
            </div> 
    </div>`
}


function logout() {
    localStorage.removeItem("login_detail");
    window.location.href="http://localhost:2000/home"
}


let gnavbar_div = document.getElementById("gnavbar")

gnavbar_div.innerHTML = navbar(); 

let footer_div = document.getElementById("footer");

footer_div.innerHTML = footer(); 

