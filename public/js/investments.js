let MyInvestment_box = document.getElementById("MyInvestment")

if(localStorage.getItem("login_detail") == null) {
    window.location.href = "http://localhost:2000/home";
}

if(localStorage.getItem("newlyLogged")==null){
    localStorage.setItem("newlyLogged", JSON.stringify([]));
    setTimeout(() => {
        location.reload();
    },500);
}

const {token,user} = JSON.parse(localStorage.getItem("login_detail"));

MyInvestment();

if(localStorage.getItem("myInvestment") == null) {
    // redirect to invalid token page 
}

else {
    let myInvestments = JSON.parse(localStorage.getItem("myInvestment"));
    console.log(myInvestments);
    
    if(myInvestments.investments.length == 0) {
        // show big image on watchlist or message that nothing in wishlist
    }
    
    myInvestments.investments.forEach(el => {

        let {info: {name,shortDescription,imageUrl},stats:{minSipAmount, ratios:{cagr3y}}} = el;
        let div = document.createElement('div');
        div.setAttribute('class','grid grid-cols-2 hover:bg-gray-100 cursor-pointer rounded border-b-2 mb-5 border-gray-400');
        let div_L = document.createElement(`div`);
        div_L.classList.add('flex')
        let div_R = document.createElement(`div`);
        div_R.setAttribute('class','m-5 h-12 flex gap-5 justify-between items-end');
        let div_i = document.createElement(`div`);
        div_i.setAttribute('class',"m-5 flex");
        let img = document.createElement('img');
        img.setAttribute("class","w-20 h-20 rounded");
        let div_info = document.createElement(`div`);
        div_info.classList.add("ml-10")
        let head = document.createElement('h1');
        head.setAttribute("class"," text-2xl font-bold")
        let para = document.createElement('p');
        para.setAttribute("class","text-gray-700 text-lg font-medium")
        img.src = imageUrl;
        head.innerHTML = name;
        para.innerHTML = shortDescription;
        div_info.append(head,para);
        div_i.append(img,div_info);
        div_L.append(div_i);

        // right

        let div_r1 = document.createElement(`div`);
        let div_r2 = document.createElement(`div`);
        let div_r3 = document.createElement(`div`);

        let head1 = document.createElement('h1');
        let para1 = document.createElement('p');
        head1.setAttribute("class","text-gray-600 text-lg")
        head1.innerHTML = "Min Amount";
        para1.setAttribute("class","text-md");
        para1.innerHTML = minSipAmount

        let head2 = document.createElement("h1");
        let para2 = document.createElement('p')

        head2.setAttribute('class',"text-gray-600 text-lg");
        head2.innerHTML = "3Y CAGR";
        para2.setAttribute("class","text-md");
        para2.innerHTML = `${(cagr3y * 100).toFixed(2)} %`;

        let btn = document.createElement('button');
        btn.onclick = ()=>{
            searchData(JSON.stringify(el));
        }
        btn.innerHTML = "Invest Now";
        btn.setAttribute('class',"transition-all duration-150 transform hover:-translate-y-0.5  hover:shadow-lg bg-green-400 cursor-pointer select-none rounded px-20 py-3 font-medium text-white")

        div_r1.append(head1,para1);
        div_r2.append(head2,para2);
        div_r3.append(btn)

        div_R.append(div_r1,div_r2,div_r3);

        div.append(div_L,div_R);
        MyInvestment_box.append(div);

    })

}

async function MyInvestment(){
    try {
        const investment = await fetch(`http://localhost:2000/investments/${user._id}`,{
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          })
          if(investment.status != 200) {
            //   return res.json({status:"failed", message:"provide a valid token"})
            // redirect to invalid token page 
          }
          else {
              let data = await investment.json();
  
              console.log(data);
              localStorage.setItem("myInvestment", JSON.stringify(data));
  
          }
    } catch (e) {
        console.log(e.message);
        // return res.status(500).json({status: "failed", message:"Provide a valid token"})

        // redirect to invalid token page
    }
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


if(localStorage.getItem("data_clicked")== null){

    localStorage.setItem("data_clicked", JSON.stringify([]));
}

function searchData(elem){

    let data_cart = JSON.parse(localStorage.getItem("data_clicked"));

    data_cart = [];

    data_cart.push(elem);

    localStorage.setItem("data_clicked",JSON.stringify(data_cart));

    window.location.assign("http://localhost:2000/search");
}


function logout() {
    window.localStorage.clear();
    window.location.href="http://localhost:2000/home"
}


let gnavbar_div = document.getElementById("gnavbar")

gnavbar_div.innerHTML = navbar(); 

let footer_div = document.getElementById("footer");

footer_div.innerHTML = footer();  



