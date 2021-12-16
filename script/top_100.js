
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

// Appending the values
let dataToDisplay = JSON.parse(localStorage.getItem('cartcases'));

{
let {info:{name,shortDescription,imageUrl},stats:{minInvestAmount,ratios:{cagr,riskLabel}},} = dataToDisplay;

let imgEl = document.getElementById('image');
let nameEl = document.getElementById('name');
let shortDescEl = document.getElementById('shortDesc');
let cagrEl = document.getElementById('cagr');
let volLevEl = document.getElementById('volatilityLev');
let minInvEl = document.getElementById('min_amount');
imgEl.setAttribute('src',imageUrl);
nameEl.textContent = name;
shortDescEl.textContent = shortDescription;
cagrEl.textContent = `${(cagr*100).toFixed(2)} %`;
volLevEl.textContent = riskLabel;
minInvEl.textContent = "₹ "+minInvestAmount;
}
