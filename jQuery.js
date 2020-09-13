var gridLine = "<div class='square'></div>"
var gridSize = 16;

// Function to draw the screen
function draw() {
    for (var x = 0; x < gridSize; x++) {
        for (var i = 0; i < gridSize; i++) {
            $('#container').append(gridLine);
        }
        $("#container").append("<br>");
    }
}

// When the document is loaded - draw the screen
$(document).ready(draw());
changeColor();

// Draw a new screen based on user input (max 32)
$("#createNew").click(function () {
    if ($("#textBox").val() > 32) {
        gridSize = 32;
    } else {
        gridSize = $("#textBox").val()
    }
    $('#container').empty();
    draw(gridSize);
    changeColor();
    })

// Function to clear the boxes
$("#clear").click(function () {
    $(".square").removeClass("blue red yellow")
})

// Alternating colors red/blue/yellow
function changeColor() {
    $(".square").mouseenter(function () {
            switch ($(this).prop("class")) {
                case "square":
                    $(this).removeClass("white");
                    $(this).addClass("blue");
                    break;
                case "square blue":
                    $(this).removeClass("blue");
                    $(this).addClass("red");
                    break;
                case "square red":
                    $(this).removeClass("red");
                    $(this).addClass("yellow");
                    break;
                case "square yellow":
                    $(this).removeClass("yellow");
                    break;
                
            }
        })

    }