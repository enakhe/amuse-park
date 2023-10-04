$(document).ready(function() {
    $("#amuse-form").submit(function(e) {
        e.preventDefault();

        const name = $("#name").val();
        const height = parseInt($("#height").val());

        // If statement for zero to fifty
        if (height <= 50) {
            $(".userName").text(name);

            $(".entryForm").fadeOut();
            $(".zero-fifty").fadeIn();

            $("#zero-fifty-back").click(function() {
                $(".zero-fifty").fadeOut();
                $(".entryForm").fadeIn();
            });
        }
    })
})