let back = [
    "../images/back.png",
    "../images/back2.png",
];

let front = [
    "../images/front.png",
    "../images/front2.png",
]

let container = document.getElementById("intro_container_in");
let container2 = document.getElementById("intro_container_in2");
let interval;
function startSlideshow() {
    let counter = 0;
    container2.style.backgroundImage = `url(${front[counter]})`;
    container.style.backgroundImage = `url(${back[counter]})`;
    counter++;


    interval = setInterval(function () {
        if (counter == back.length || counter == front.length) {
            counter = 0;
        }

        container2.style.backgroundImage = `url(${front[counter]})`;
        container.style.backgroundImage = `url(${back[counter]})`;
        counter++;

    }, 5000);
}

startSlideshow();

