if (localStorage.getItem("login_detail") == null) {
  let div_login = document.getElementById("login_detail");
  let data = div_login.getAttribute("login_info");

  let { user, token } = JSON.parse(data);

  if (user == "user" || token == "token") {
    window.location.href = "https://smallcaseproject.herokuapp.com/login";
  }
  localStorage.setItem("login_detail", JSON.stringify({ user, token }));
  authenticate(token, user);
} else {
  let data = JSON.parse(localStorage.getItem("login_detail"));
  // console.log(data)
  let { user, token } = data;
  // console.log(token)
  authenticate(token, user);
}

async function authenticate(token, user) {
  const match = await fetch(
    "https://smallcaseproject.herokuapp.com/discover/auth",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (match.status != 200) {
    // invalid token
  }
}

$(".owl-carousel").owlCarousel({
  loop: false,
  margin: 35,
  nav: true,
  dots: false,
  stagePadding: 0,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 2,
    },
  },
});

// debouncing function
let allSmallcaseData;
let timeoutForDeb;
let inp_sear = document.getElementById("inp_search");
inp_sear.addEventListener("keyup", appendSuggestion);
let suggBox = document.getElementById("inp_sugg_box");

let getSmallcases = async () => {
  let data = await fetch(
    `https://smallcaseproject.herokuapp.com/smallcases/all`
  );
  let res = await data.json();
  console.log(res);
  return res;
};
getSmallcases().then((res) => {
  allSmallcaseData = res;
});

function appendSuggestion() {
  if (timeoutForDeb) {
    clearTimeout(timeoutForDeb);
  }
  if (suggBox.classList.contains("hidden")) {
    suggBox.classList.remove("hidden");
  }
  let search = document.getElementById("inp_search").value;
  if (!search) {
    suggBox.classList.add("hidden");
    return;
  }
  timeoutForDeb = setTimeout(() => {
    appendSearchRes(search);
  }, 600);
}

let appendSearchRes = (search) => {
  suggBox.innerHTML = null;
  allSmallcaseData.forEach((element) => {
    let {
      info: { name, shortDescription, imageUrl },
    } = element;
    if (startCharMatch(name, search)) {
      let div = document.createElement("div");
      div.setAttribute(
        "class",
        "flex justify-between items-center text-small mb-1 cursor-pointer"
      );
      div.onclick = function () {
        searchData(element);
      };

      let div2 = document.createElement("div");
      div2.setAttribute("class", "text-blue-600 ml-5");
      let img = document.createElement("img");
      img.setAttribute("class", "w-5 h-5");
      let nameOfCase = document.createElement("h1");
      nameOfCase.setAttribute(
        "class",
        "text-small font-semibold text-gray-500"
      );
      let shortDesc = document.createElement("p");
      shortDesc.setAttribute("class", "text-small");
      img.src = imageUrl;
      nameOfCase = `${name} : `;
      shortDesc = shortDescription;
      div2.append(nameOfCase, shortDesc);
      div.append(img, div2);
      let hr = document.createElement("hr");
      suggBox.append(div, hr);
    }
  });
};

let startCharMatch = (firStr, secStr) => {
  for (let i = 0; i < firStr.length && i < secStr.length; i++) {
    if (firStr[i] !== secStr[i]) {
      return false;
    }
  }
  return true;
};

// using local storage

if (localStorage.getItem("data_clicked") == null) {
  localStorage.setItem("data_clicked", JSON.stringify([]));
}

function searchData(elem) {
  let data_cart = JSON.parse(localStorage.getItem("data_clicked"));

  data_cart = [];

  data_cart.push(elem);

  localStorage.setItem("data_clicked", JSON.stringify(data_cart));

  window.location.assign("https://smallcaseproject.herokuapp.com/search");
}

function navbar() {
  return `
    <div class=" w-full h-16 border-b border-gray-400 flex"> 
       <div class="h-full flex ml-28 space-x-7">
           <div class=" h-full py-3">
               <img class="h-full" src="https://smallcaseproject.herokuapp.com/images/groww-logo.png">
           </div>
           <button onclick="window.location.href = 'https://smallcaseproject.herokuapp.com/growDashboard'" class="text-gray-600 text-sm">Dashboard</button>
           <button onclick="window.location.href = 'https://smallcaseproject.herokuapp.com/discover'" class="text-gray-600 text-sm">Discover</button>
           <button onclick="window.location.href = 'https://smallcaseproject.herokuapp.com/create'" class="text-gray-600 text-sm">Create</button>
       </div>
       <div class="h-full flex ml-auto mr-28 space-x-7">
           <button class="text-gray-600 text-sm" onclick="window.location.href ='https://smallcaseproject.herokuapp.com/watchlists'">Watchlist</button>
           <button class="text-gray-600 text-sm" onclick="window.location.href ='https://smallcaseproject.herokuapp.com/investments'">Investments</button>
           <button><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600 text-sm" viewBox="0 0 20 20" fill="currentColor">
               <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
             </svg></button>
           <button><svg xmlns="http://www.w3.org/2000/svg" onclick="show()" class="h-5 w-5 text-gray-600 text-sm" viewBox="0 0 20 20" fill="currentColor">
               <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
             </svg></button> 
           <button onclick="logout()" class="rounded text-md text-gray-600 font-medium pb-2 border border-blue-500 px-2 h-7 mt-4 hover:text-blue-600">Log-out</button> 
       </div>
   </div>
   `;
}

function footer() {
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
                <img class="h-10 p-1" src="https://smallcaseproject.herokuapp.com/images/groww-logo.png">
                <p class="text-gray-600">NSE & BSE – SEBI Reg. No.: INZ0123456789 |  CDSL - SEBI Reg. No.: IN-Dk-117-2019</p>
            </div> 
    </div>`;
}

if (localStorage.getItem("data_clicked") == null) {
  localStorage.setItem("data_clicked", JSON.stringify([]));
}

function searchData(elem) {
  let data_cart = JSON.parse(localStorage.getItem("data_clicked"));

  data_cart = [];

  data_cart.push(elem);

  localStorage.setItem("data_clicked", JSON.stringify(data_cart));

  window.location.assign("https://smallcaseproject.herokuapp.com/search");
}

function logout() {
  window.localStorage.clear();
  window.location.href = "https://smallcaseproject.herokuapp.com/home";
}

let gnavbar_div = document.getElementById("gnavbar");

gnavbar_div.innerHTML = navbar();

let footer_div = document.getElementById("footer");

footer_div.innerHTML = footer();

let EquityNGoldData = {
  _id: { $oid: "61bac637ac3fb3b355057460" },
  id: { $numberInt: "2" },
  info: {
    creator: "smallcaseHQ",
    owner: { name: "Abhishek Jadon" },
    tags: [],
    tier: null,
    created: "2007-06-29T00:00:00.000Z",
    uploaded: "2019-01-16T14:42:48.080Z",
    updated: "2021-09-30T00:00:00.000Z",
    name: "Equity & Gold",
    imageUrl:
      "https://assets.smallcase.com/images/smallcases/200/SCET_0005.png",
    shortDescription:
      "Create wealth with equities, stay protected with Gold. The sweet spot",
    type: "61ba366e57a8d26124e58ec5",
    publisher: "smallcaseHQ",
    publisherName: "Windmill Capital",
    nextUpdate: "2021-12-30T15:26:05.621Z",
    rebalanceSchedule: "quarterly",
    blogURL: null,
    lastRebalanced: "2021-09-30T00:00:00.000Z",
    slug: "equity-and-gold-SCET_0005",
    micrositeUrl: "https://smallcase.com/smallcase/equity-and-gold-SCET_0005",
    investmentStrategy: "Quantitative",
  },
  flags: {
    active: true,
    locked: false,
    private: false,
    historicalData: true,
    preferredSipType: "SHARES",
    blocked: false,
  },
  stats: {
    returns: {
      daily: { $numberDouble: "0.006214167298658022" },
      weekly: { $numberDouble: "0.008143749191263872" },
      monthly: { $numberDouble: "0.013218325821046475" },
      quarterly: { $numberDouble: "0.0892734255499376" },
      halfyearly: { $numberDouble: "0.16354769248149154" },
      yearly: { $numberDouble: "0.28461221116589874" },
      threeYear: { $numberDouble: "0.7323454190352293" },
      fiveYear: { $numberDouble: "0.7323454190352293" },
      sinceInception: { $numberDouble: "4.185429542798151" },
      sinceLaunch: { $numberInt: "0" },
    },
    indexValue: { $numberDouble: "518.6054203018869" },
    unadjustedIndex: { $numberDouble: "518.6054203018869" },
    divReturns: { $numberInt: "0" },
    lastCloseIndex: { $numberDouble: "518.5429542798151" },
    minInvestAmount: { $numberInt: "278" },
    ratios: {
      cagr: { $numberDouble: "0.2067105495162227" },
      momentumRank: { $numberInt: "1" },
      risk: { $numberDouble: "0.6511817540732995" },
      sharpe: { $numberDouble: "0.1874436301671989" },
      "52wHigh": { $numberDouble: "523.9763080680739" },
      "52wLow": { $numberDouble: "386.47736162382694" },
      divYield: { $numberInt: "0" },
      divYieldDifferential: { $numberDouble: "-1.41" },
      largeCapPercentage: { $numberInt: "70" },
      midCapPercentage: { $numberInt: "0" },
      pe: null,
      peDiscount: null,
      smallCapPercentage: { $numberInt: "0" },
      ema: { $numberDouble: "504.0975487507659" },
      momentum: { $numberInt: "-100" },
      lastCloseEma: { $numberDouble: "503.77293289630165" },
      sharpeRatio: { $numberDouble: "1.5718369476736977" },
      oneYearLiveHistory: true,
      riskLabel: "Low Volatility",
      cagrDuration: "3Y",
      cagr1y: { $numberDouble: "0.28461221116589885" },
      cagr3y: { $numberDouble: "0.30712346026933" },
    },
    minSipAmount: { $numberInt: "500" },
    minInvestAmountOverridden: false,
    recommendedBuyAmount: { $numberInt: "0" },
    launchDateIndex: { $numberInt: "100" },
  },
  benchmark: {
    id: ".NSEI",
    message: "As this smallcase mainly consists of large cap stocks",
    index: ".NIFTY100",
    msg: "As this smallcase mainly consists of large cap stocks",
  },
  scid: "SCET_0005",
  brokerMeta: { flags: { popular: { rank: { $numberInt: "3" } } } },
};

let topHundData = {
  _id: { $oid: "61bac637ac3fb3b35505746a" },
  id: { $numberInt: "12" },
  info: {
    creator: "smallcaseHQ",
    owner: { name: "Abhishek Jadon" },
    tags: [],
    tier: null,
    created: "2007-06-29T00:00:00.000Z",
    uploaded: "2019-01-21T14:39:59.352Z",
    updated: "2021-09-30T00:00:00.000Z",
    name: "Top 100 Stocks",
    imageUrl:
      "https://assets.smallcase.com/images/smallcases/200/SCET_0004.png",
    shortDescription:
      "India's most powerful companies in one portfolio. Solid stability",
    type: "61ba366e57a8d26124e58ec5",
    publisher: "smallcaseHQ",
    publisherName: "Windmill Capital",
    blogURL: null,
    nextUpdate: "2021-12-30T15:26:05.936Z",
    rebalanceSchedule: "quarterly",
    lastRebalanced: "2021-09-30T00:00:00.000Z",
    slug: "top-100-stocks-SCET_0004",
    micrositeUrl: "https://smallcase.com/smallcase/top-100-stocks-SCET_0004",
    investmentStrategy: "ESG",
  },
  flags: {
    active: true,
    locked: false,
    private: false,
    historicalData: true,
    preferredSipType: "SHARES",
    blocked: false,
  },
  stats: {
    returns: {
      daily: { $numberDouble: "0.01024398181790218" },
      weekly: { $numberDouble: "0.016572087901209002" },
      monthly: { $numberDouble: "0.009754625017973351" },
      quarterly: { $numberDouble: "0.11468703420499302" },
      halfyearly: { $numberDouble: "0.23322840168780193" },
      yearly: { $numberDouble: "0.5140053462152288" },
      threeYear: { $numberDouble: "0.7483558316504947" },
      fiveYear: { $numberDouble: "0.7483558316504947" },
      sinceInception: { $numberDouble: "4.241745618871348" },
      sinceLaunch: { $numberInt: "0" },
    },
    indexValue: { $numberDouble: "524.1052389794" },
    unadjustedIndex: { $numberDouble: "524.1052389794" },
    divReturns: { $numberInt: "0" },
    lastCloseIndex: { $numberDouble: "524.1745618871348" },
    minInvestAmount: { $numberInt: "1239" },
    ratios: {
      cagr: { $numberDouble: "0.2126524379125343" },
      risk: { $numberDouble: "0.8390663200927088" },
      sharpe: { $numberDouble: "0.16696168477917794" },
      momentumRank: { $numberInt: "1" },
      "52wHigh": { $numberDouble: "534.6046310602792" },
      "52wLow": { $numberDouble: "330.55387812410174" },
      divYield: { $numberInt: "0" },
      divYieldDifferential: { $numberDouble: "-1.41" },
      largeCapPercentage: { $numberInt: "100" },
      midCapPercentage: { $numberInt: "0" },
      pe: null,
      peDiscount: null,
      smallCapPercentage: { $numberInt: "0" },
      ema: { $numberDouble: "505.6476696649354" },
      momentum: { $numberInt: "-100" },
      lastCloseEma: { $numberDouble: "505.23133500841215" },
      sharpeRatio: { $numberDouble: "1.5492124316756402" },
      oneYearLiveHistory: true,
      riskLabel: "Medium Volatility",
      cagrDuration: "3Y",
      cagr1y: { $numberDouble: "0.5140053462152288" },
      cagr3y: { $numberDouble: "0.5071197306026933" },
    },
    minSipAmount: { $numberInt: "500" },
    minInvestAmountOverridden: false,
    recommendedBuyAmount: { $numberInt: "0" },
    launchDateIndex: { $numberInt: "100" },
  },
  benchmark: {
    id: ".NSEI",
    message: "As this smallcase mainly consists of large cap stocks",
    index: ".NIFTY100",
    msg: "As this smallcase mainly consists of large cap stocks",
  },
  scid: "SCET_0004",
  brokerMeta: { flags: { popular: { rank: { $numberInt: "17" } } } },
};


let globalData = {
    _id: { $oid: "61bac637ac3fb3b35505746a" },
    id: { $numberInt: "12" },
    info: {
      creator: "smallcaseHQ",
      owner: { name: "Abhishek Jadon" },
      tags: [],
      tier: null,
      created: "2007-06-29T00:00:00.000Z",
      uploaded: "2019-01-21T14:39:59.352Z",
      updated: "2021-09-30T00:00:00.000Z",
      name: "Global Opportunities",
      imageUrl:
        "https://assets.smallcase.com/images/smallcases/160/SCET_0014.png",
      shortDescription:
        "India's most powerful companies in one portfolio. Solid stability",
      type: "61ba366e57a8d26124e58ec5",
      publisher: "smallcaseHQ",
      publisherName: "Windmill Capital",
      blogURL: null,
      nextUpdate: "2021-12-30T15:26:05.936Z",
      rebalanceSchedule: "quarterly",
      lastRebalanced: "2021-09-30T00:00:00.000Z",
      slug: "top-100-stocks-SCET_0004",
      micrositeUrl: "https://smallcase.com/smallcase/top-100-stocks-SCET_0004",
      investmentStrategy: "ESG",
    },
    flags: {
      active: true,
      locked: false,
      private: false,
      historicalData: true,
      preferredSipType: "SHARES",
      blocked: false,
    },
    stats: {
      returns: {
        daily: { $numberDouble: "0.01024398181790218" },
        weekly: { $numberDouble: "0.016572087901209002" },
        monthly: { $numberDouble: "0.009754625017973351" },
        quarterly: { $numberDouble: "0.11468703420499302" },
        halfyearly: { $numberDouble: "0.23322840168780193" },
        yearly: { $numberDouble: "0.5140053462152288" },
        threeYear: { $numberDouble: "0.7483558316504947" },
        fiveYear: { $numberDouble: "0.7483558316504947" },
        sinceInception: { $numberDouble: "4.241745618871348" },
        sinceLaunch: { $numberInt: "0" },
      },
      indexValue: { $numberDouble: "524.1052389794" },
      unadjustedIndex: { $numberDouble: "524.1052389794" },
      divReturns: { $numberInt: "0" },
      lastCloseIndex: { $numberDouble: "524.1745618871348" },
      minInvestAmount: { $numberInt: "1239" },
      ratios: {
        cagr: { $numberDouble: "0.2126524379125343" },
        risk: { $numberDouble: "0.8390663200927088" },
        sharpe: { $numberDouble: "0.16696168477917794" },
        momentumRank: { $numberInt: "1" },
        "52wHigh": { $numberDouble: "534.6046310602792" },
        "52wLow": { $numberDouble: "330.55387812410174" },
        divYield: { $numberInt: "0" },
        divYieldDifferential: { $numberDouble: "-1.41" },
        largeCapPercentage: { $numberInt: "100" },
        midCapPercentage: { $numberInt: "0" },
        pe: null,
        peDiscount: null,
        smallCapPercentage: { $numberInt: "0" },
        ema: { $numberDouble: "505.6476696649354" },
        momentum: { $numberInt: "-100" },
        lastCloseEma: { $numberDouble: "505.23133500841215" },
        sharpeRatio: { $numberDouble: "1.5492124316756402" },
        oneYearLiveHistory: true,
        riskLabel: "Medium Volatility",
        cagrDuration: "3Y",
        cagr1y: { $numberDouble: "0.5140053462152288" },
        cagr3y: { $numberDouble: "0.5071197306026933" },
      },
      minSipAmount: { $numberInt: "500" },
      minInvestAmountOverridden: false,
      recommendedBuyAmount: { $numberInt: "0" },
      launchDateIndex: { $numberInt: "100" },
    },
    benchmark: {
      id: ".NSEI",
      message: "As this smallcase mainly consists of large cap stocks",
      index: ".NIFTY100",
      msg: "As this smallcase mainly consists of large cap stocks",
    },
    scid: "SCET_0004",
    brokerMeta: { flags: { popular: { rank: { $numberInt: "17" } } } },
  };

  let equityNDebtData = {
    _id: { $oid: "61bac637ac3fb3b35505746a" },
    id: { $numberInt: "12" },
    info: {
      creator: "smallcaseHQ",
      owner: { name: "Abhishek Jadon" },
      tags: [],
      tier: null,
      created: "2007-06-29T00:00:00.000Z",
      uploaded: "2019-01-21T14:39:59.352Z",
      updated: "2021-09-30T00:00:00.000Z",
      name: "Equity & Debt",
      imageUrl:
        "https://assets.smallcase.com/images/smallcases/160/SCET_0013.png",
      shortDescription:
        "India's most powerful companies in one portfolio. Solid stability",
      type: "61ba366e57a8d26124e58ec5",
      publisher: "smallcaseHQ",
      publisherName: "Windmill Capital",
      blogURL: null,
      nextUpdate: "2021-12-30T15:26:05.936Z",
      rebalanceSchedule: "quarterly",
      lastRebalanced: "2021-09-30T00:00:00.000Z",
      slug: "top-100-stocks-SCET_0004",
      micrositeUrl: "https://smallcase.com/smallcase/top-100-stocks-SCET_0004",
      investmentStrategy: "ESG",
    },
    flags: {
      active: true,
      locked: false,
      private: false,
      historicalData: true,
      preferredSipType: "SHARES",
      blocked: false,
    },
    stats: {
      returns: {
        daily: { $numberDouble: "0.01024398181790218" },
        weekly: { $numberDouble: "0.016572087901209002" },
        monthly: { $numberDouble: "0.009754625017973351" },
        quarterly: { $numberDouble: "0.11468703420499302" },
        halfyearly: { $numberDouble: "0.23322840168780193" },
        yearly: { $numberDouble: "0.5140053462152288" },
        threeYear: { $numberDouble: "0.7483558316504947" },
        fiveYear: { $numberDouble: "0.7483558316504947" },
        sinceInception: { $numberDouble: "4.241745618871348" },
        sinceLaunch: { $numberInt: "0" },
      },
      indexValue: { $numberDouble: "524.1052389794" },
      unadjustedIndex: { $numberDouble: "524.1052389794" },
      divReturns: { $numberInt: "0" },
      lastCloseIndex: { $numberDouble: "524.1745618871348" },
      minInvestAmount: { $numberInt: "1239" },
      ratios: {
        cagr: { $numberDouble: "0.2126524379125343" },
        risk: { $numberDouble: "0.8390663200927088" },
        sharpe: { $numberDouble: "0.16696168477917794" },
        momentumRank: { $numberInt: "1" },
        "52wHigh": { $numberDouble: "534.6046310602792" },
        "52wLow": { $numberDouble: "330.55387812410174" },
        divYield: { $numberInt: "0" },
        divYieldDifferential: { $numberDouble: "-1.41" },
        largeCapPercentage: { $numberInt: "100" },
        midCapPercentage: { $numberInt: "0" },
        pe: null,
        peDiscount: null,
        smallCapPercentage: { $numberInt: "0" },
        ema: { $numberDouble: "505.6476696649354" },
        momentum: { $numberInt: "-100" },
        lastCloseEma: { $numberDouble: "505.23133500841215" },
        sharpeRatio: { $numberDouble: "1.5492124316756402" },
        oneYearLiveHistory: true,
        riskLabel: "Medium Volatility",
        cagrDuration: "3Y",
        cagr1y: { $numberDouble: "0.5140053462152288" },
        cagr3y: { $numberDouble: "0.5071197306026933" },
      },
      minSipAmount: { $numberInt: "500" },
      minInvestAmountOverridden: false,
      recommendedBuyAmount: { $numberInt: "0" },
      launchDateIndex: { $numberInt: "100" },
    },
    benchmark: {
      id: ".NSEI",
      message: "As this smallcase mainly consists of large cap stocks",
      index: ".NIFTY100",
      msg: "As this smallcase mainly consists of large cap stocks",
    },
    scid: "SCET_0004",
    brokerMeta: { flags: { popular: { rank: { $numberInt: "17" } } } },
  };


let global = document.getElementById("global");
let equityNGold = document.getElementById("equityngold");
let equityNDebt = document.getElementById("equityndebt");
let top100 = document.getElementById("top100");

global.addEventListener("click", () => {
  searchData(globalData);
});

equityNGold.addEventListener("click", () => {
  searchData(EquityNGoldData);
});

equityNDebt.addEventListener("click", () => {
  searchData(equityNDebtData);
});

top100.addEventListener("click", () => {
  searchData(topHundData);
});
