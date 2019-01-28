// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed")
});

// Click on X to delete Todo
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).parent()
    });
    event.stopPropagation();
});

$("input[type = 'text']").on("keypress", function (event) {
    if (event.which === 13) {
        // grabing new todoText from input
        let todoText = $(this).val();
        $(this).val("");
        // create new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash-alt'></i></span> " + todoText + "</li>");
    }
});

$(".fa-plus").on("click", function(){
    $("input[type='text']").fadeToggle();
});