$(document).ready(function() {
    $("#entry").submit(function(e) {
        e.preventDefault();

        const age = parseInt($("#age").val());

        if (age < 21) {
            $(".message").fadeIn();
            $(".drink").fadeOut();
        } else {
            $(".message").fadeOut();
            $(".drink").fadeIn();
        }
    })
})