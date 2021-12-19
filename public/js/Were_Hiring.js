function show(box){
    let array = ["product","product1","product2","product3","product4","product5","product6","product7","product8","product9"]
    array.forEach(function(pro){
        if(pro != box){
            let product = document.querySelector("."+pro);
            product.classList.add("hidden")
        }
    })
    let product = document.querySelector("."+box); 
    if(product.classList.contains("hidden")){
        product.classList.remove("hidden");
        product.classList.add("grid")
    } else {
        product.classList.remove("grid");
        product.classList.add("hidden")
    }
}