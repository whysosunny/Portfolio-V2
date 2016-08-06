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

var data = {
    q: {
        sound: new Howl({
            urls: ['sounds/bubbles.mp3']
        }),
        color: '#1abc9c'
    },
    w: {
        sound: new Howl({
            urls: ['sounds/clay.mp3']
        }),
        color: '#2ecc71'
    },
    e: {
        sound: new Howl({
            urls: ['sounds/confetti.mp3']
        }),
        color: '#3498db'
    },
    r: {
        sound: new Howl({
            urls: ['sounds/corona.mp3']
        }),
        color: '#9b59b6'
    },
    t: {
        sound: new Howl({
            urls: ['sounds/dotted-spiral.mp3']
        }),
        color: '#34495e'
    },
    y: {
        sound: new Howl({
            urls: ['sounds/flash-1.mp3']
        }),
        color: '#16a085'
    },
    u: {
        sound: new Howl({
            urls: ['sounds/flash-2.mp3']
        }),
        color: '#27ae60'
    },
    i: {
        sound: new Howl({
            urls: ['sounds/flash-3.mp3']
        }),
        color: '#2980b9'
    },
    o: {
        sound: new Howl({
            urls: ['sounds/glimmer.mp3']
        }),
        color: '#8e44ad'
    },
    p: {
        sound: new Howl({
            urls: ['sounds/moon.mp3']
        }),
        color: '#2c3e50'
    },
    a: {
        sound: new Howl({
            urls: ['sounds/pinwheel.mp3']
        }),
        color: '#f1c40f'
    },
    s: {
        sound: new Howl({
            urls: ['sounds/piston-1.mp3']
        }),
        color: '#e67e22'
    },
    d: {
        sound: new Howl({
            urls: ['sounds/piston-2.mp3']
        }),
        color: '#e74c3c'
    },
    f: {
        sound: new Howl({
            urls: ['sounds/prism-1.mp3']
        }),
        color: '#95a5a6'
    },
    g: {
        sound: new Howl({
            urls: ['sounds/prism-2.mp3']
        }),
        color: '#f39c12'
    },
    h: {
        sound: new Howl({
            urls: ['sounds/prism-3.mp3']
        }),
        color: '#d35400'
    },
    j: {
        sound: new Howl({
            urls: ['sounds/splits.mp3']
        }),
        color: '#1abc9c'
    },
    k: {
        sound: new Howl({
            urls: ['sounds/squiggle.mp3']
        }),
        color: '#2ecc71'
    },
    l: {
        sound: new Howl({
            urls: ['sounds/strike.mp3']
        }),
        color: '#3498db'
    },
    z: {
        sound: new Howl({
            urls: ['sounds/suspension.mp3']
        }),
        color: '#9b59b6'
    },
    x: {
        sound: new Howl({
            urls: ['sounds/timer.mp3']
        }),
        color: '#34495e'
    },
    c: {
        sound: new Howl({
            urls: ['sounds/ufo.mp3']
        }),
        color: '#16a085'
    },
    v: {
        sound: new Howl({
            urls: ['sounds/veil.mp3']
        }),
        color: '#27ae60'
    },
    b: {
        sound: new Howl({
            urls: ['sounds/wipe.mp3']
        }),
        color: '#2980b9'
    },
    n: {
        sound: new Howl({
            urls: ['sounds/zig-zag.mp3']
        }),
        color: '#8e44ad'
    },
    m: {
        sound: new Howl({
            urls: ['sounds/moon.mp3']
        }),
        color: '#2c3e50'
    }
}

var circles = [];

function onKeyDown(event) {
    if(data[event.key]) {
        var maxPoint = new Point(view.size.width, view.size.height);
        var randomPoint = Point.random();
        var point = maxPoint * randomPoint;
        var path = new Path.Circle({
            center: new Point(point),
            radius: 500
        });
        path.fillColor = data[event.key].color;
        data[event.key].sound.play();
        circles.push(path);
    }
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
        circles[i].fillColor.hue+=1;
        circles[i].scale(0.9);
    }
}

