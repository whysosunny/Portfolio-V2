var list = $("ul");

list.on("click", "li", function() {
    $(this).toggleClass("done");
});

//Click on x to delete todo
list.on("click","span", function(event) {

    $(this).parent().fadeOut("500",function() {
        $(this).remove();
    });
    event.stopPropagation();
});

var inputBox = $("input[type='text']")

inputBox.keypress(function(event) {
    if(event.which === 13) {
        var todoText = $(this).val();
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " +todoText +"</li>");
        $(this).val("");
    }
});

var addBtn = $("h1 i");

addBtn.click(function() {
    if(inputBox.val() !== "") {
        var todoText = inputBox.val();
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " +todoText +"</li>");
        inputBox.val("");
    } else {
        inputBox.attr("placeholder","Type something here")
    }

});