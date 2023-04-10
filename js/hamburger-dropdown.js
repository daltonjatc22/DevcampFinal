let dropDownButton = document.getElementById("drop-down-button");
let dropDownContents = document.getElementById("hamburger-dropdown-contents-wrapper");

let dropDownIsOpen = false;
dropDownContents.style.right = "-100%"; // backup

dropDownButton.onclick = function(){
    if(dropDownIsOpen){
        dropDownContents.style.right = "-100%"; // backup
    }else {
        dropDownContents.style.right = "0%";
    }

    dropDownIsOpen = !dropDownIsOpen;

}