// for(var y=0; y<1000; y+=100) {
//     for(var x = 0; x<1000; x+=100) {
//         var newCircle = new Path.Circle(new Point(x,y),10);
//         newCircle.fillColor = "purple";
//     }
// }

// var maxHeight = $(window).height();
// var maxWidth = $(window).width();
// $(window).on("resize", function() {
//     maxHeight = $(window).height();
//     maxWidth = $(window).width();
//     console.log(view.size);
// });

function randomNumber(max) {
    return Math.floor(Math.random() * (max+1));
}

function randomColor() {
    return "rgb(" +randomNumber(255) +", " +randomNumber(255) +", " +randomNumber(255) +")";
}


// function generateCircles() {
//     for(var i = 0; i<100; i++) {
//         // var x = randomNumber()
//         new Path.Circle(new Point(randomNumber(maxWidth),randomNumber(maxHeight)), 20).fillColor =randomColor();
//     }
// }

var circles = [];

function onKeyDown(event) {
    var maxPoint = new Point(view.size.width, view.size.height);
    var randomPoint = Point.random();
    var point = maxPoint * randomPoint;
    // new Path.Circle(new Point(point), 20).fillColor = randomColor();
    var path = new Path.Circle({
        center: new Point(point),
        radius: 40,
        fillColor: randomColor()
    });
    circles.push(path);
    console.log(circles);
}

for(var i=0; i<200; i++) {
    var maxPoint = new Point(view.size.width, view.size.height);
    var randomPoint = Point.random();
    var point = maxPoint * randomPoint;
    // new Path.Circle(new Point(point), 20).fillColor = randomColor();
    var path = new Path.Circle({
        center: new Point(point),
        radius: 40,
        fillColor: randomColor()
    });
    circles.push(path);
}

function onFrame(evt) {
    for(var i=0; i<circles.length; i++) {
        circles[i].fillColor.hue+=5;
    }
}

