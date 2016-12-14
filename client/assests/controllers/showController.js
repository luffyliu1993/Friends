app.controller("showController",["$scope","friendsFactory","$location","$routeParams", function($scope, friendsFactory,$location,$routeParams){
    $scope.friend = {};
    var getFriend = function(){
        friendsFactory.getFriend($routeParams.id, function(data){
            $scope.friend = data;
            $scope.friend.birthday = new Date($scope.friend.birthday);
        });
    };
    getFriend();
}]);

console.log("showController");
