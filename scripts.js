/**
 * Created by cwklausing on 12/8/15.
 */
    //This is an angular module.
var app = angular.module('myApp', []);

//this is a controller. You can apply it anywhere. Can make different
//controllers for different areas of the application

app.controller('connortroller', function($scope){
    $scope.person = {firstname: 'Connor', lastname: 'Klausing'};
    $scope.count = 0;
    $scope.clickName = "Big Lebowski Characters";
    $scope.changeName = function(){
        if($scope.count > 2) {
            $scope.count = 1;
        } else {
            $scope.count++;
        }
        if ($scope.count%3 === 0) {
            $scope.clickName = "John Goodman";
        } else if ($scope.count%3 === 1) {
            $scope.clickName = "Jeff Bridges";
        } else if ($scope.count%3 === 2) {
            $scope.clickName = "Steve Buscemi";
        }
    };
    $scope.classList = [{name: "Connor"}, {name: "Brandi"}, {name: "Amanda"}, {name: "John"}];
});