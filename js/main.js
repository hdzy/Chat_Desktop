const element = document.querySelectorAll('img')
let oldElement =1;
let activeChecker = document.getElementById("activeChecker");
let temp;

for (i=0; i<=7; i++) {
    element[i].addEventListener('click', addClassActive(i));
}

function addClassActive(getElem) {
    return function () {
        if (element[getElem]!==oldElement) {
            $(element[getElem]).addClass('active');
            $(element[oldElement]).removeClass('active');
            oldElement = getElem;
            switch (getElem) {
                case 1:
                    temp=63;
                    break;
                case 2:
                    temp=136;
                    break;
                case 3:
                    temp=208;
                    break;
                case 4:
                    temp=281;
                    break;
                case 5:
                    temp=354;
                    break;
                case 6:
                    temp=425;
                    break;
                case 7:
                    temp=498;
                    break;
            }
            activeChecker.style.top=temp+"px";
        }
    }
}