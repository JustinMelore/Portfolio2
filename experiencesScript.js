//Variable to keep track of the information being currently displayed
var currentIndex = 0;

//Constant array that keeps track of the title of the information
const titles = ["Programming Knowledge","Education","Work Experience"];

//Updates the information displayed on the page to match the current index
let updateInfo = () => {
    let heading = document.getElementById("infoHeading");
    heading.classList.toggle("fadeIn");
    setTimeout(() => {heading.textContent = titles[currentIndex];}, 500);
    setTimeout(() => {heading.classList.toggle("fadeIn");}, 500);
}

updateInfo();

//Lets the user click the arrows on either side of the page to see what information is being presented
let changeIndex = (increment) => {
    switch(currentIndex+increment) {
        case 3:
            currentIndex=0;
            break;
        case -1:
            currentIndex=2;
            break;
        default:
            currentIndex+=increment;
    }
    updateInfo();
}