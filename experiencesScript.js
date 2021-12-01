//Variable to keep track of the information being currently displayed
var currentIndex = 0;

//Constant array that keeps track of the title of the information
const titles = ["Programming Knowledge","Education","Work Experience"];

//Constant array that keeps track of the information displayed for each section of experience
const infoList = ["info1","info2","info3"];


//Makes sure that info2 and info3 are invisible when you first load the page
document.getElementById("info2").classList.toggle("fadeIn");
document.getElementById("info3").classList.toggle("fadeIn");
document.getElementById("experiences").style.paddingBottom = document.getElementById(infoList[currentIndex]).offsetHeight+"px";

//Updates the information displayed on the page to match the current index
let updateInfo = () => {
    document.getElementById(infoList[currentIndex]).classList.toggle("fadeIn");
    document.getElementById(infoList[currentIndex]).style.zIndex= "1";
    let heading = document.getElementById("infoHeading");
    heading.classList.toggle("fadeIn");
    setTimeout(() => {heading.textContent = titles[currentIndex];}, 500);
    setTimeout(() => {heading.classList.toggle("fadeIn");}, 500);
    document.getElementById("experiences").style.paddingBottom = document.getElementById(infoList[currentIndex]).offsetHeight+"px";
}



//Lets the user click the arrows on either side of the page to see what information is being presented
let changeIndex = (increment) => {
    document.getElementById(infoList[currentIndex]).classList.toggle("fadeIn");
    document.getElementById(infoList[currentIndex]).style.zIndex= "auto";
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