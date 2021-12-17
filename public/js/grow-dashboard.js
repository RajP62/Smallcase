import navbar from "./gnavbar/gnavbar.js"; 
let gnavbar_div = document.getElementById("gnavbar")

gnavbar_div.innerHTML = navbar(); 

import footer from "./gnavbar/gfooter.js"; 
let footer_div = document.getElementById("footer")

footer_div.innerHTML = footer(); 


async function appendnifty(){
 let data = await fetch(`https://www.nseindia.com/api/chart-databyindex?index=NIFTY%20FINANCIAL%20SERVICES&indices=true&preopen=true`)
 let {closePrice} = await data.json();
 // console.log(res)
 document.querySelector('.nifty').textContent = closePrice;

}

appendnifty();