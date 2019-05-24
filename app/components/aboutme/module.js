

var JSONController = function($scope){
    let student = {
    firstName: "Venkat",
    LastName:"Dasri",
    Email : "S533489@nwmissouri.edu",
    message:"hello world"
    }
    $scope.Student = student;  
}

angular.module("myApp").controller("JSONController",JSONController);