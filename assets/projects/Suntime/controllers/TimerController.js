var app = angular.module("suntime");

var TimerController = function($scope, $interval) {
    var countdownInterval = null;
    $scope.buttonStatus = "Start";

    function refactorDigits(num) {
        var str = String(num);
        if(str.length <2) {
            return "0" +str;
        }
        return str;
    }

    function resetTimer() {
        $scope.timerDone = false;
        $scope.timerActive = false;
        $scope.timerHrs = undefined;
        $scope.timerMin = undefined;
        $scope.timerSec = undefined;
        var form = $("form");
        form[0].reset();
        form[1].reset();
        $scope.buttonStatus = "Start"
    }

    function exitFunction() {
        $scope.timerDone = true;
        $scope.buttonStatus = "Reset";
    }

    console.log($scope.one);

    
    $scope.startTimer= function(hrs,min,sec) {
        $scope.hours = refactorDigits($scope.timerHrs? $scope.timerHrs : 0);
        $scope.minutes = refactorDigits($scope.timerMin? $scope.timerMin: 0);
        $scope.seconds = refactorDigits($scope.timerSec? $scope.timerSec: 0);
        $scope.timerActive = true;

        function checkSec(hrs,min,sec) {
            if(sec>0) {

                countdownInterval = $interval(function() {
                    sec = sec-1;
                    $scope.seconds = refactorDigits(sec);
                    if(sec === 0) {
                        checkMin(hrs,min,sec);
                    }
                },1000);
            } else {
                checkMin(hrs,min,sec);
            }
        }

        function checkMin(hrs,min,sec) {
            if(min>0) {
                min= min-1;
                $scope.minutes = refactorDigits(min);
                sec =60;
                checkSec(hrs,min,sec);
            } else {
                checkHrs(hrs,min,sec);
            }
        }

        function checkHrs(hrs,min,sec) {
            if(hrs>0) {
                hrs=hrs-1;
                $scope.hours = refactorDigits(hrs);
                min=60;
                checkMin(hrs,min,sec);
            } else {
                $interval.cancel(countdownInterval);
                console.log("Timer done!");
                exitFunction();
            }
        }

        if($scope.buttonStatus ==="Start") {
            if($scope.hours>0 || $scope.minutes>0 || $scope.seconds>0) {
                $scope.error = "";
                checkSec(hrs,min,sec);
                $scope.buttonStatus = "Stop"
            } else {
                $scope.timerActive = false;
                $scope.error = "Invalid Entry";
            }
        } else if($scope.buttonStatus === "Stop") {
            $interval.cancel(countdownInterval);
            $scope.buttonStatus = "Reset";
        } else if($scope.buttonStatus === "Reset") {
            resetTimer();
        }

    };


    
    
};

app.controller("TimerController", TimerController);