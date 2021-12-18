
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


async function appendnifty(){
 let data = await fetch(`https://www.nseindia.com/api/chart-databyindex?index=NIFTY%20FINANCIAL%20SERVICES&indices=true&preopen=true`)
 let {closePrice} = await data.json();
 // console.log(res)
 document.querySelector('.nifty').textContent = closePrice;

}

appendnifty();