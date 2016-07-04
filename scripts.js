$(".overlay").hover(function() {
    $(this).children().show();
}, function() {
    $(this).children().hide();
});

$(".intro > h3 > a"). click(function() {
    $(".intro-box").slideToggle();
    if(this.innerText === "+") {
        this.innerText = "-";
    } else {
        this.innerText = "+";
    }
});