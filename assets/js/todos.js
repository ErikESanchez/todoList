// Check Off Specific Todos By Clicking
$("li").on("click", function () {
    $(this).toggleClass("completed")
});

// Click on X to delete Todo
$("span").on("click", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).parent()
    });
    event.stopPropagation();
});