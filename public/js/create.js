let timerId;
function texttranform(){
    let pre=document.getElementById("performance");
    pre.style.textDecoration="none";
    pre.style.color="black";
    let similar=document.getElementById("similar");
    let text=document.getElementById("text");
    text.innerHTML=null;
    text.textContent="Add stocks to your smallcase to see similar stocks here";
    text.style.alignSelf="center"
    similar.style.color="blue";
    similar.style.textDecoration="underline"
}
function texttranform1(){
    let similar=document.getElementById("performance");
    let pre=document.getElementById("similar");
    pre.style.textDecoration="none";
    pre.style.color="black";
    let text=document.getElementById("text");
    text.innerHTML=null;
    text.textContent="Add at least 2 stocks to compare performance";
    text.style.alignSelf="center"
    similar.style.color="blue";
    similar.style.textDecoration="underline"
}
// function search(){
//     let input=document.getElementById("debounce").value;
//     console.log(input)
//     let result=document.getElementById("result");
//     result.innerHTML=null;
// }
// function debounce(func,delay){

//     if(timerId){
//         clearTimeout(timerId);
//     }
//     timerId= setTimeout(function(){
//          func();
//      },delay)
//  }
// function display(){
//     let result=document.getElementById("result");
//     result.style.visibility="visible"
// }



// debounceFuntionality
let getSmallcases = async ()=>{
    let data = await fetch(`http://localhost:2000/smallcases/all`);
    let res = await data.json();
    console.log(res)
    return res;
}
var allSmallcaseData;

getSmallcases().then(res=>{
    allSmallcaseData = res;
})

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

let appendSearchRes = search=>{
    suggBox.innerHTML = null;
    suggBox.style.display = "block";
    allSmallcaseData.forEach(element => {
        let {info:{name,shortDescription,imageUrl}} = element;
        if(startCharMatch(name,search)){
            let div = document.createElement('div');
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
            div.onclick=function (){
                display(element)
                };
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
let sum=0;
function display(element){
    suggBox.style.display = "none";
    let par1=document.getElementById("append");
    par1.innerHTML=null;
    let par2=document.getElementById("append2");
    par2.innerHTML=null;
    let main=document.getElementById("par");
    main.setAttribute('class','grid grid-cols-4 mt-16  w-3/5 ml-14 visible border-b-2 gap-4')
    let main1=document.getElementById("par1");
    main1.setAttribute('class','grid grid-cols-4 mt-10  w-3/5 ml-14 visible border-b-1 gap-4')
    let stock=document.createElement("div");
    stock.textContent=element.info.name;
    let price=document.createElement("div");
    price.textContent=element.stats.minInvestAmount
    let weight=document.createElement("div");
    weight.textContent="100";
    let min=document.createElement("div");
    min.textContent="1|100.00%"
    main1.append(stock,price,weight,min);

    let amount=document.getElementById("paise");
    sum+=+(element.stats.minInvestAmount);
    amount.textContent=`₹ ${sum}`;
    console.log(element)
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


function logout() {
    localStorage.removeItem("login_detail");
    window.location.href="http://localhost:2000/home"
}


let gnavbar_div = document.getElementById("gnavbar")

gnavbar_div.innerHTML = navbar(); 

