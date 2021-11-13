
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
console.log(cart_data);

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