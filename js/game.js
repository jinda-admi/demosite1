let scope = document.getElementById("scope")
let chicken = document.getElementById('chicken')
let scoreBoard = document.getElementById('score')
let continueBtn = document.getElementById('continueBtn')
let gameContainer = document.getElementsByClassName('game-wrapper')


let score = 0;
document.body.addEventListener("mousemove", (event) => {
    let x = event.clientX;
    let y = event.clientY;
    console.log(x, y)
    scope.style.left = (x - 400) + 'px';
    scope.style.top = (y - 450) + 'px';
})

chicken.addEventListener("click", () => {
    chicken.style.display = "none"
    let randomChickenPos = (Math.random() * 80) + 10
    chicken.style.left = randomChickenPos + "%";
    chicken.style.display = "block";
    score++;
    scoreBoard.innerHTML = score;
    if (score > 0) {
        continueBtn.style.display = "block"
        continueBtn.classList.add("fade-in")
    }
})

chicken.addEventListener("animationiteration", (event) => {
    randomChickenPos = (Math.random() * 80) + 10
    chicken.style.left = randomChickenPos + "%";
})

document.body.addEventListener("click", () => {
    scope.classList.add('gun-shoot')
    new Audio("../assets/gunshot.mp3").play();
    setTimeout(() => {
        scope.classList.remove("gun-shoot")
    }, 500);
})