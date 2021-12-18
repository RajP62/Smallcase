// let mainCont = document.getElementById('mainCont');
if(localStorage.getItem('data_clicked')===null){
    localStorage.setItem('data_clicked',JSON.stringify([]));
}
// let getSmallcases = async ()=>{
//     let data = await fetch(`http://localhost:2000/smallcases/all`);
//     let res = await data.json();
//     return res;
// }
// var allSmallcaseData;

// function appendAllSmallcase(){
//     getSmallcases().then((res)=>{
//         console.log(res);
//         allSmallcaseData = res;
//        res.forEach(element => {
//            let {info:{name,shortDescription,imageUrl},stats:{minInvestAmount,ratios:{cagr,riskLabel}},} = element;
//            let div = document.createElement('div');
//            div.addEventListener('click',()=>{
//             let elem = {...element};
//                 localStorage.setItem('cartcases',JSON.stringify(elem));
//                 window.location.href = 'top_100.html';
//             })
//            div.setAttribute('class','grid grid-cols-2 hover:bg-gray-100 cursor-pointer rounded');
//            let div1 = document.createElement('div');
//            div1.setAttribute('class','flex');
//            let div1_div1 = document.createElement('div');
//            let div1_div1_div1 = document.createElement('div');
//            // for first div
//            div1_div1.setAttribute('class','m-5 flex');
//            div1_div1_div1.setAttribute('class','ml-2');
//            let img1 = document.createElement('img');
//            let head1 = document.createElement('h1');
//            let para1 = document.createElement('p');
//            head1.setAttribute('class','text-sm font-semibold');
//            para1.setAttribute('class','text-small text-gray-700');
//            img1.setAttribute('class','w-12 h-12 rounded');
//            img1.alt = "Unable to load";
//            img1.src = imageUrl;
//            head1.textContent = name;
//            para1.textContent = shortDescription;
//            div1_div1_div1.append(head1,para1);
//            div1_div1.append(img1,div1_div1_div1);
           
//            div1.append(div1_div1);
//            // for second box 
//            let div2 = document.createElement('div');
//            let div2_div1 = document.createElement('div');
//            let div2_div2 = document.createElement('div');
//            let div2_div3 = document.createElement('div');
//            div2.setAttribute('class','m-5 h-12 flex gap-5 justify-between items-end');
//            let minAmtTxt = document.createElement('h1');
//            minAmtTxt.textContent = "Min. Amount";
//            minAmtTxt.setAttribute('class','text-gray-600 text-small');
//            let minAmt = document.createElement('p');
//            minAmt.textContent = `₹ ${minInvestAmount}`;
//            minAmt.setAttribute('class','text-sm');
//            div2_div1.append(minAmtTxt,minAmt);
//            let threeYCagrTxt = document.createElement('h1');
//            threeYCagrTxt.textContent = "3Y CAGR";
//            threeYCagrTxt.setAttribute('class','text-gray-600 text-small');
//            let threeYCagr = document.createElement('p');
//            threeYCagr.textContent = `${(cagr*100).toFixed(2)} %`;
//            threeYCagr.setAttribute('class',"text-green-500 text-sm font-semibold");
//            div2_div2.append(threeYCagrTxt,threeYCagr);
//            // for third box of div2
//            div2_div3.setAttribute('class','h-full');
//            let div2_div3_div1 = document.createElement('div');
//            div2_div3_div1.setAttribute('class','h-full flex items-center');
//            let btnVolatil = document.createElement('button');
//            btnVolatil.textContent = riskLabel;
//            btnVolatil.setAttribute('class','text-exsm border-gray-300 px-1 rounded border');
//            // content for btn volatility
//            let imgInBtnVol = document.createElement('img');
//            if(riskLabel==="Low Volatility"){
//                imgInBtnVol.src = "./images/risk_low.jpg";
//            }
//            else if(riskLabel==="Medium Volatility"){
//                imgInBtnVol.src = "./images/risk_mid.jpg";
//            }
//            else{
//                imgInBtnVol.src = "./images/risk_hi.jpg";
//            }
//            imgInBtnVol.setAttribute('class','w-4 inline');
//            let volText = document.createElement('p');
//            volText.textContent = riskLabel;
//            volText.setAttribute('class','inline text-small text-gray-600');
//            div2_div3_div1.append(imgInBtnVol,volText);
//            div2_div3.append(div2_div3_div1);
//            div2.append(div2_div1,div2_div2,div2_div3);
   
   
//            div.append(div1,div2);
//            // appending to the main container  
//            mainCont.append(div);
//        });
//    });
// }

// appendAllSmallcase();



// let rad = document.getElementById('radioIncludeNew');
// rad.addEventListener('click',consoleSom);
// function consoleSom(){
//     console.log(rad.value)
// }

// let sortByAmt = document.querySelectorAll('.sortByAmount');
// sortByAmt.forEach((el)=>{
//     el.addEventListener('click',()=>{
//         appendByAmount(el);
//     })
// });


// function appendByAmount(el){
//     mainCont.innerHTML = null;
//     if(el.value==="allAmount"){
//         appendAllSmallcase();
//         return;
//     }
//     allSmallcaseData.forEach(element=>{
//         let {info:{name,shortDescription,imageUrl},stats:{minInvestAmount,ratios:{cagr,riskLabel}},} = element;
//         if(minInvestAmount<=el.value){
//             let div = document.createElement('div');
//             div.addEventListener('click',()=>{
//                 let elem = {...element};
//                 localStorage.setItem('cartcases',JSON.stringify(elem));
//                 window.location.href = 'top_100.html';
//             })
//         div.setAttribute('class','grid grid-cols-2 hover:bg-gray-100 cursor-pointer rounded');
//         let div1 = document.createElement('div');
//         div1.setAttribute('class','flex');
//         let div1_div1 = document.createElement('div');
//         let div1_div1_div1 = document.createElement('div');
//         // for first div
//         div1_div1.setAttribute('class','m-5 flex');
//         div1_div1_div1.setAttribute('class','ml-2');
//         let img1 = document.createElement('img');
//         let head1 = document.createElement('h1');
//         let para1 = document.createElement('p');
//         head1.setAttribute('class','text-sm font-semibold');
//         para1.setAttribute('class','text-small text-gray-700');
//         img1.setAttribute('class','w-12 h-12 rounded');
//         img1.alt = "Unable to load";
//         img1.src = imageUrl;
//         head1.textContent = name;
//         para1.textContent = shortDescription;
//         div1_div1_div1.append(head1,para1);
//         div1_div1.append(img1,div1_div1_div1);
        
//         div1.append(div1_div1);
//         // for second box 
//         let div2 = document.createElement('div');
//         let div2_div1 = document.createElement('div');
//         let div2_div2 = document.createElement('div');
//         let div2_div3 = document.createElement('div');
//         div2.setAttribute('class','m-5 h-12 flex gap-5 justify-between items-end');
//         let minAmtTxt = document.createElement('h1');
//         minAmtTxt.textContent = "Min. Amount";
//         minAmtTxt.setAttribute('class','text-gray-600 text-small');
//         let minAmt = document.createElement('p');
//         minAmt.textContent = `₹ ${minInvestAmount}`;
//         minAmt.setAttribute('class','text-sm');
//         div2_div1.append(minAmtTxt,minAmt);
//         let threeYCagrTxt = document.createElement('h1');
//         threeYCagrTxt.textContent = "3Y CAGR";
//         threeYCagrTxt.setAttribute('class','text-gray-600 text-small');
//         let threeYCagr = document.createElement('p');
//         threeYCagr.textContent = `${(cagr*100).toFixed(2)} %`;
//         threeYCagr.setAttribute('class',"text-green-500 text-sm font-semibold");
//         div2_div2.append(threeYCagrTxt,threeYCagr);
//         // for third box of div2
//         div2_div3.setAttribute('class','h-full');
//         let div2_div3_div1 = document.createElement('div');
//         div2_div3_div1.setAttribute('class','h-full flex items-center');
//         let btnVolatil = document.createElement('button');
//         btnVolatil.textContent = riskLabel;
//         btnVolatil.setAttribute('class','text-exsm border-gray-300 px-1 rounded border');
//         // content for btn volatility
//         let imgInBtnVol = document.createElement('img');
//         if(riskLabel==="Low Volatility"){
//             imgInBtnVol.src = "./images/risk_low.jpg";
//         }
//         else if(riskLabel==="Medium Volatility"){
//             imgInBtnVol.src = "./images/risk_mid.jpg";
//         }
//         else{
//             imgInBtnVol.src = "./images/risk_hi.jpg";
//         }
//         imgInBtnVol.setAttribute('class','w-4 inline');
//         let volText = document.createElement('p');
//         volText.textContent = riskLabel;
//         volText.setAttribute('class','inline text-small text-gray-600');
//         div2_div3_div1.append(imgInBtnVol,volText);
//         div2_div3.append(div2_div3_div1);
//         div2.append(div2_div1,div2_div2,div2_div3);


//         div.append(div1,div2);
//         // appending to the main container  
//         mainCont.append(div);

//     }});
// }

// // Sorting by risk level
// let btnSortLow = document.getElementById('btnSortLowRisk');
// let btnSortMed = document.getElementById('btnSortMedRisk');
// let btnSortHigh = document.getElementById('btnSortHighRisk');
// btnSortLow.onclick = ()=>{
//     sortByRisk('Low Volatility')
// };
// btnSortMed.onclick = ()=>{
//     sortByRisk('Medium Volatility')
// };
// btnSortHigh.onclick = ()=>{
//     sortByRisk('High Volatility')
// };

// function sortByRisk(level){
//     mainCont.innerHTML = null;
//     allSmallcaseData.forEach(element=>{
//         let {info:{name,shortDescription,imageUrl},stats:{minInvestAmount,ratios:{cagr,riskLabel}},} = element;
//         if(riskLabel===level){
//             let div = document.createElement('div');
//             div.addEventListener('click',()=>{
//                 let elem = {...element};
//                 localStorage.setItem('cartcases',JSON.stringify(elem));
//                 window.location.href = 'top_100.html';
//             })
//         div.setAttribute('class','grid grid-cols-2 hover:bg-gray-100 cursor-pointer rounded');
//         let div1 = document.createElement('div');
//         div1.setAttribute('class','flex');
//         let div1_div1 = document.createElement('div');
//         let div1_div1_div1 = document.createElement('div');
//         // for first div
//         div1_div1.setAttribute('class','m-5 flex');
//         div1_div1_div1.setAttribute('class','ml-2');
//         let img1 = document.createElement('img');
//         let head1 = document.createElement('h1');
//         let para1 = document.createElement('p');
//         head1.setAttribute('class','text-sm font-semibold');
//         para1.setAttribute('class','text-small text-gray-700');
//         img1.setAttribute('class','w-12 h-12 rounded');
//         img1.alt = "Unable to load";
//         img1.src = imageUrl;
//         head1.textContent = name;
//         para1.textContent = shortDescription;
//         div1_div1_div1.append(head1,para1);
//         div1_div1.append(img1,div1_div1_div1);
        
//         div1.append(div1_div1);
//         // for second box 
//         let div2 = document.createElement('div');
//         let div2_div1 = document.createElement('div');
//         let div2_div2 = document.createElement('div');
//         let div2_div3 = document.createElement('div');
//         div2.setAttribute('class','m-5 h-12 flex gap-5 justify-between items-end');
//         let minAmtTxt = document.createElement('h1');
//         minAmtTxt.textContent = "Min. Amount";
//         minAmtTxt.setAttribute('class','text-gray-600 text-small');
//         let minAmt = document.createElement('p');
//         minAmt.textContent = `₹ ${minInvestAmount}`;
//         minAmt.setAttribute('class','text-sm');
//         div2_div1.append(minAmtTxt,minAmt);
//         let threeYCagrTxt = document.createElement('h1');
//         threeYCagrTxt.textContent = "3Y CAGR";
//         threeYCagrTxt.setAttribute('class','text-gray-600 text-small');
//         let threeYCagr = document.createElement('p');
//         threeYCagr.textContent = `${(cagr*100).toFixed(2)} %`;
//         threeYCagr.setAttribute('class',"text-green-500 text-sm font-semibold");
//         div2_div2.append(threeYCagrTxt,threeYCagr);
//         // for third box of div2
//         div2_div3.setAttribute('class','h-full');
//         let div2_div3_div1 = document.createElement('div');
//         div2_div3_div1.setAttribute('class','h-full flex items-center');
//         let btnVolatil = document.createElement('button');
//         btnVolatil.textContent = riskLabel;
//         btnVolatil.setAttribute('class','text-exsm border-gray-300 px-1 rounded border');
//         // content for btn volatility
//         let imgInBtnVol = document.createElement('img');
//         if(riskLabel==="Low Volatility"){
//             imgInBtnVol.src = "./images/risk_low.jpg";
//         }
//         else if(riskLabel==="Medium Volatility"){
//             imgInBtnVol.src = "./images/risk_mid.jpg";
//         }
//         else{
//             imgInBtnVol.src = "./images/risk_hi.jpg";
//         }
//         imgInBtnVol.setAttribute('class','w-4 inline');
//         let volText = document.createElement('p');
//         volText.textContent = riskLabel;
//         volText.setAttribute('class','inline text-small text-gray-600');
//         div2_div3_div1.append(imgInBtnVol,volText);
//         div2_div3.append(div2_div3_div1);
//         div2.append(div2_div1,div2_div2,div2_div3);


//         div.append(div1,div2);
//         // appending to the main container  
//         mainCont.append(div);
//         }
//     })
// }


// // Sort by investment strategy

// let sortByInvStrategy = document.querySelectorAll('.soryByInvStrategy');
// sortByInvStrategy.forEach(element => {
//     element.onclick = ()=>{
//         sortByInvStr(element.value);
//     };
// });
// function sortByInvStr(strategy){
//     mainCont.innerHTML = null;
//     allSmallcaseData.forEach(element=>{
//         let {info:{name,shortDescription,imageUrl,investmentStrategy},stats:{minInvestAmount,ratios:{cagr,riskLabel}},} = element;
//         investmentStrategy.forEach(({key})=>{
//         if(key===strategy){
//         let div = document.createElement('div');
//         div.addEventListener('click',()=>{
//             let elem = {...element};
//                 localStorage.setItem('cartcases',JSON.stringify(elem));
//                 window.location.href = 'top_100.html';
//         })
//         div.setAttribute('class','grid grid-cols-2 hover:bg-gray-100 cursor-pointer rounded');
//         let div1 = document.createElement('div');
//         div1.setAttribute('class','flex');
//         let div1_div1 = document.createElement('div');
//         let div1_div1_div1 = document.createElement('div');
//         // for first div
//         div1_div1.setAttribute('class','m-5 flex');
//         div1_div1_div1.setAttribute('class','ml-2');
//         let img1 = document.createElement('img');
//         let head1 = document.createElement('h1');
//         let para1 = document.createElement('p');
//         head1.setAttribute('class','text-sm font-semibold');
//         para1.setAttribute('class','text-small text-gray-700');
//         img1.setAttribute('class','w-12 h-12 rounded');
//         img1.alt = "Unable to load";
//         img1.src = imageUrl;
//         head1.textContent = name;
//         para1.textContent = shortDescription;
//         div1_div1_div1.append(head1,para1);
//         div1_div1.append(img1,div1_div1_div1);
        
//         div1.append(div1_div1);
//         // for second box 
//         let div2 = document.createElement('div');
//         let div2_div1 = document.createElement('div');
//         let div2_div2 = document.createElement('div');
//         let div2_div3 = document.createElement('div');
//         div2.setAttribute('class','m-5 h-12 flex gap-5 justify-between items-end');
//         let minAmtTxt = document.createElement('h1');
//         minAmtTxt.textContent = "Min. Amount";
//         minAmtTxt.setAttribute('class','text-gray-600 text-small');
//         let minAmt = document.createElement('p');
//         minAmt.textContent = `₹ ${minInvestAmount}`;
//         minAmt.setAttribute('class','text-sm');
//         div2_div1.append(minAmtTxt,minAmt);
//         let threeYCagrTxt = document.createElement('h1');
//         threeYCagrTxt.textContent = "3Y CAGR";
//         threeYCagrTxt.setAttribute('class','text-gray-600 text-small');
//         let threeYCagr = document.createElement('p');
//         threeYCagr.textContent = `${(cagr*100).toFixed(2)} %`;
//         threeYCagr.setAttribute('class',"text-green-500 text-sm font-semibold");
//         div2_div2.append(threeYCagrTxt,threeYCagr);
//         // for third box of div2
//         div2_div3.setAttribute('class','h-full');
//         let div2_div3_div1 = document.createElement('div');
//         div2_div3_div1.setAttribute('class','h-full flex items-center');
//         let btnVolatil = document.createElement('button');
//         btnVolatil.textContent = riskLabel;
//         btnVolatil.setAttribute('class','text-exsm border-gray-300 px-1 rounded border');
//         // content for btn volatility
//         let imgInBtnVol = document.createElement('img');
//         if(riskLabel==="Low Volatility"){
//             imgInBtnVol.src = "./images/risk_low.jpg";
//         }
//         else if(riskLabel==="Medium Volatility"){
//             imgInBtnVol.src = "./images/risk_mid.jpg";
//         }
//         else{
//             imgInBtnVol.src = "./images/risk_hi.jpg";
//         }
//         imgInBtnVol.setAttribute('class','w-4 inline');
//         let volText = document.createElement('p');
//         volText.textContent = riskLabel;
//         volText.setAttribute('class','inline text-small text-gray-600');
//         div2_div3_div1.append(imgInBtnVol,volText);
//         div2_div3.append(div2_div3_div1);
//         div2.append(div2_div1,div2_div2,div2_div3);


//         div.append(div1,div2);
//         // appending to the main container  
//         mainCont.append(div);
//         }
//     });
//     });
// }

// let btnClearAll = document.getElementById('btnClearall');
// btnClearAll.onclick = ()=>{
//     location.reload();
// }

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