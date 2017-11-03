console.log('script running')

let hiddenElements = document.getElementsByClassName('fade-in');

for (let i = 0; i < hiddenElements.length; i++) {
    console.log(i + " " + $(hiddenElements[i]).position().top);
}

hiddenElements[0].style.opacity = 1.0;

window.onscroll = function () {
    let scrollY = window.scrollY;
    console.log($(hiddenElements[1]).height());
    for (let i = 1; i < hiddenElements.length; i++) {
        if (scrollY > $(hiddenElements[i]).offset().top - $(hiddenElements[i]).height() - 20) {
            hiddenElements[i].style.opacity = 1.0;
        }
        else{
            hiddenElements[i].style.opacity = 0;
        }
    }
};