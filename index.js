var temp = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("slides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    temp++;
    if (temp > x.length) {
        temp = 1
    }
    x[temp - 1].style.display = "block";
    setTimeout(carousel, 3000);
}

