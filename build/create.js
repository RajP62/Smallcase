function texttranform(){
    let pre=document.getElementById("performance");
    pre.style.textDecoration="none";
    pre.style.color="black";
    let similar=document.getElementById("similar");
    let text=document.getElementById("text");
    text.innerHTML=null;
    text.textContent="Add stocks to your smallcase to see similar stocks here";
    text.style.alignSelf="center"
    similar.style.color="blue";
    similar.style.textDecoration="underline"
}
function texttranform1(){
    let similar=document.getElementById("performance");
    let pre=document.getElementById("similar");
    pre.style.textDecoration="none";
    pre.style.color="black";
    let text=document.getElementById("text");
    text.innerHTML=null;
    text.textContent="Add at least 2 stocks to compare performance";
    text.style.alignSelf="center"
    similar.style.color="blue";
    similar.style.textDecoration="underline"
}