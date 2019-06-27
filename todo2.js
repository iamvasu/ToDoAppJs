var myApp = angular
                 .module('myModule', [])
                 .controller('myController', ['$scope', function($scope) {
    $scope.todos = [];

    $scope.newField = {};

    $scope.addTodo = function() {
        $scope.todos.push({text:$scope.todoText, done:false});
        $scope.todoText = '';
    };

   

    $scope.remove = function(){
        $scope.todos.splice(this.$index, 1);
    };

    $scope.editing = false;

    $scope.change = function(field){
        $scope.editing = true;
        $scope.newField = angular.copy(field);
    }

    $scope.save = function(index) {
        $scope.todos[$scope.editing] = $scope.todos;
        $scope.editing = false;      
    };

    $scope.cancel = function(index) {
        $scope.todos[$scope.editing] = $scope.newField;
        $scope.editing = false;      
    };



}]);