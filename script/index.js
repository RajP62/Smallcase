$('.owl-carousel').owlCarousel({
    loop:false,
    margin:35,
    nav:true,
    dots:false,
    stagePadding:0,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:2
        }
    }
})


// debouncing function
let allSmallcaseData;
let timeoutForDeb;
let inp_sear = document.getElementById('inp_search');
inp_sear.addEventListener('keyup',appendSuggestion);
let suggBox = document.getElementById('inp_sugg_box');

let getSmallcases = async ()=>{
    let data = await fetch(`http://localhost:5000/api/allsmallcase`);
    let res = await data.json();
    console.log(res)
    return res;
}
getSmallcases().then(res=>{
    allSmallcaseData = res;
})


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
    allSmallcaseData.forEach(element => {
        let {info:{name,shortDescription,imageUrl}} = element;
        if(startCharMatch(name,search)){
            let div = document.createElement('div');
            div.setAttribute('class','flex justify-between items-center text-small mb-1 cursor-pointer');
            div.onclick = function(){
                searchData(element);
            }

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

// using local storage 

if(localStorage.getItem("data_clicked")== null){

    localStorage.setItem("data_clicked", JSON.stringify([]));
}

function searchData(elem){

    let data_cart = JSON.parse(localStorage.getItem("data_clicked"));

    data_cart = [];

    data_cart.push(elem);

    localStorage.setItem("data_clicked",JSON.stringify(data_cart));

    window.location.assign("search.html");
}