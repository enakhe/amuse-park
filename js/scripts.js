$(document).ready(function() {
    $("#amuse-form").submit(function(e) {
        e.preventDefault();

        const name = $("#name").val();
        const height = parseInt($("#height").val());

        // If statement
        if (height <= 50) {

            $(".userName").text(name);

            $(".entryForm").fadeOut(500);
            $(".zero-fifty").fadeIn(500);

            $("#zero-fifty-back").click(function() {
                $(".zero-fifty").fadeOut(500);
                $(".entryForm").fadeIn(500);
            })
        }
    })
})