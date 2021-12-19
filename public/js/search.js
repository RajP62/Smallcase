
// make read more button
let moreText = document.getElementById("more");
moreText.style.display = "none";
let light = document.getElementById("light");
light.style.color="#78909C"

function readMore(){
    
    

    let btnText = document.getElementById("readMore_btn");

    if(moreText.style.display === "none"){

        moreText.style.display = "inline";
        btnText.innerHTML = "Hide";
        light.style.color = "#37474F"

    } else{
        light.style.color="#78909C"
        moreText.style.display = "none";
        btnText.innerHTML = "Read more"

    }
    
}
// read more button ends here

// making graph

let xValues = ["2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021"];
let yValues = [];


for( let i = 0 ; i < 30; i++){
    let val = Math.floor(100 + Math.random() * 900).toFixed(2);
    if(yValues.length < 12){
      if(val < 600){
        yValues.push(val);
      }
    } else if(yValues == 12){
      break;
    }
}

console.log(yValues);

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 50, max:600}}],
    }
  }
});

// chart ends here

let stockData = document.getElementById("stockdata");
stockData.innerText = "₹"+yValues[yValues.length-1];

//appending data using local storage

let cart_data = JSON.parse(localStorage.getItem("data_clicked"));
cart_data = [JSON.parse(cart_data[0])];

function append_local(){

  cart_data.forEach((data)=>{

    let img = document.getElementById("onlyImg");
    img.src = data.info.imageUrl;

    let title = document.getElementById("title");
    title.innerText = data.info.name;

    let cagr = document.getElementById("cagr");
    let change = data.stats.ratios.cagr;

    change = (change * 100).toFixed(2);

    cagr.innerText = change+"%";

    let min_invest = document.getElementById("min_amount");
    min_invest.innerText = "₹"+ data.stats.minInvestAmount;

    let description = document.getElementById("description");
    description.innerText = data.info.shortDescription;
  })
}

append_local();


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
  window.localStorage.clear();
  window.location.href="http://localhost:2000/home"
}


let gnavbar_div = document.getElementById("gnavbar")

gnavbar_div.innerHTML = navbar(); 

let footer_div = document.getElementById("footer");

footer_div.innerHTML = footer(); 


// watchlist


async function redirect(){
  let userDetail = JSON.parse(localStorage.getItem("login_detail"));
  let smallcase = JSON.parse(localStorage.getItem("data_clicked"));
  console.log(userDetail);
let {user,user:{_id,watchlist},token} = userDetail;
let {_id:id} = JSON.parse(smallcase);
watchlist.push(id);
console.log("watchlist", watchlist);
console.log("id",id, "_id",_id, "token",token);

  let response = await fetch(`http://localhost:2000/watchlists/${_id}`,{
      method:'PATCH',
      body:JSON.stringify(user),
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
}
  });
  if(response.status != 200){
    alert("Something went wrong");
  }
  else{
    let res = await response.json();
    userDetail = {user:res,token}
    console.log("res",res);
    let addToWatchElem = document.getElementById("addToWatch");
    addToWatchElem.innerText = "Added to watchList";
    addToWatchElem.classList.add("bg-gray-400","text-white");

  localStorage.setItem("login_detail", JSON.stringify(userDetail));
  }

} 


