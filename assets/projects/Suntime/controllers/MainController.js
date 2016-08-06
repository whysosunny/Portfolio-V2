var app = angular.module("suntime");
var MainController = function($scope, $interval) {

    $scope.clock = {
        time: Date.now(),
        interval: 1000
    };

    $interval(function() {
        $scope.clock.time = Date.now();
    }, $scope.clock.interval);



    $scope.showClock = function() {
        $scope.currentItem = "clock";
        $(".clock-btn").addClass("clicked");
        $(".timer-btn").removeClass("clicked");
        $(".alarm-btn").removeClass("clicked");

    };

    $scope.showTimer = function() {
        $scope.currentItem = "timer";
        $(".clock-btn").removeClass("clicked");
        $(".timer-btn").addClass("clicked");
        $(".alarm-btn").removeClass("clicked");
    };

    $scope.showAlarm = function() {
        $scope.currentItem = "alarm";
        $(".clock-btn").removeClass("clicked");
        $(".timer-btn").removeClass("clicked");
        $(".alarm-btn").addClass("clicked");
    };


    $scope.currentItem = "clock";
    $scope.showClock();
};

app.controller('MainController', MainController);