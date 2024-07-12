document.addEventListener('DOMContentLoaded', (event) => {

    const mainImage = document.getElementById('main-image');

    function changeImage(newSrc) {
        mainImage.src = newSrc;
    }


    document.getElementById('card1').addEventListener('click', () => changeImage('image.png'));
    document.getElementById('card2').addEventListener('click', () => changeImage('image2.jpg'));
    document.getElementById('card3').addEventListener('click', () => changeImage('image3.jpg'));
}); 
function highlightDot(dotNumber, dotWidths, dotHeights) {

    var dots = document.querySelectorAll('.dots img');


    for (var i = 0; i < dots.length; i++) {
        dots[i].src = 'blackdot.png';
        dots[i].style.width = dotWidths[i] + 'px';
        dots[i].style.height = dotHeights[i] + 'px';
    }


    dots[dotNumber - 1].src = 'colordot.png';
}

$(document).ready(function () {
    $(".contact-btn").click(function () {
        $(".contact").toggle();
    });
    $(".close-btn").click(function () {
        $(".contact").hide();
    });
});