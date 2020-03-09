$("#burger-button").click(() => {
    $("#burger-menu").slideDown("fast");
    document.body.classList.add("no-scroll");
    $("#burger-button").hide();
    $("#close-burger-button").show();
});
$("#close-burger-button").click(() => {
    $("#burger-menu").slideUp("fast");
    document.body.classList.remove("no-scroll");
    $("#burger-button").show();
    $("#close-burger-button").hide();
});
