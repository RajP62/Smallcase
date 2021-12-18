
if (localStorage.getItem("details")==null){

    localStorage.setItem("details", JSON.stringify([]));
}

function send_data(){

    let name = document.getElementById("name").value;
    let amount = document.getElementById("amount").value;

    let data = {
        userName:name,
        investedAmount:amount
    }

    let detail_cart = JSON.parse(localStorage.getItem("details"));

    detail_cart.push(data);

    localStorage.setItem("details", JSON.stringify(detail_cart));

    window.location.href = "congrats.html";
}


