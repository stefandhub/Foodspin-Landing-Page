var leftButton = document.getElementById("left__button");
var rightButton = document.getElementById("right__button");
var wheel = document.getElementById("wheel");
var spinSectionBackground = document.getElementsByClassName("wheel__section");
var dishInfo = document.getElementsByClassName("dish__info");
var selectedDish = document.getElementsByClassName("dish__image");
var color = "#" + "EAFFE2"
leftButton.addEventListener("click", leftArrow);
rightButton.addEventListener("click", rightArrow ); 



//creare una funzione che al click di uno dei due bottoni:
function leftArrow () {
    changeDishImageBack();
    rotationRight();

}

function rightArrow () {
    changeDishImageForward();
    rotationLeft();
    
}

//Changes image and relative description, and adds the animations classes
var i = 0;
function changeDishImageForward() {
    i++
    if (i >= selectedDish.length){
        i = 0;
    } 
    for (let index = 0; index < selectedDish.length; index++) {
        selectedDish[index].classList.add("display__modifier");
        selectedDish[index].classList.add("dish__animation");
        dishInfo[index].classList.add("display__modifier");
        dishInfo[index].classList.add("dish__info__animation");
    }
    //changes color of circle DA SISTEMARE
    for (let index = 0; index <= 4; index++) {
        var circleColor = document.getElementsByClassName("wheel__section");
        if (circleColor[0].style.background == "lightgreen") {
            circleColor[0].style.background = "#FFEEDE"
        } else {circleColor[0].style.background = "lightgreen"}
    }
    selectedDish[i].classList.remove("display__modifier");
    dishInfo[i].classList.remove("display__modifier");

}


function changeDishImageBack() {
    i--
    if (i < 0){
        i = 4;
    }
    for (let index = 0; index < selectedDish.length; index++) {
        selectedDish[index].classList.add("display__modifier");
        selectedDish[index].classList.add("dish__animation");
        dishInfo[index].classList.add("display__modifier");
        dishInfo[index].classList.add("dish__info__animation");
    }
    //changes color of circle DA SISTEMARE (METODO NON CORRETTO E PER DI PIU' NON FUNZIONANTE CON IL COLORE GIUSTO)
    for (let index = 0; index <= 4; index++) {
        var circleColor = document.getElementsByClassName("wheel__section");
        if (circleColor[0].style.background == "lightgreen") {
            circleColor[0].style.background = "#FFEEDE"
        } else {circleColor[0].style.background = "lightgreen"}
    }
    selectedDish[i].classList.remove("display__modifier");
    dishInfo[i].classList.remove("display__modifier");
}

//rotates the wheel to right
var rotation = 0;
function rotationRight() {
    //declare angle of the rotation
    var deg = 36;
    //increase the angle of rotation each click by 36 degrees
    rotation = rotation + deg;
    //wheel.style.transform = rotate("rotation" + "deg")
    wheel.style.transform =`rotate(${rotation}deg)`;
    
}
//rotates the wheel to left
function rotationLeft() {
    var deg = 36;
    rotation = rotation - deg;
    //wheel.style.transform = rotate("rotation" - "deg")
    wheel.style.transform =`rotate(${rotation}deg)`;
}


/*var test = document.getElementsByClassName("main__section__info")
var test1 = 0;
function changeColor() {
    let i = 0;
    i++;
    if (test[i].classList === ("dish__info display__modifier")) {
        document.getElementsByClassName("wheel__section")[0].style.background = "orange";
    } else {document.getElementsByClassName("wheel__section")[0].style.background = "green"; }*/
