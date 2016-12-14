app.controller("indexController",["$scope", "friendsFactory", "$location", function($scope, friendsFactory, $location){
    $scope.friends = [];
    //$scope.friend = {};
    function setFriends(data){
        $scope.friends = data;
    }
    var index = function(){
        friendsFactory.index(setFriends);
    };
    index();
    $scope.delete = function(friendId){
        friendsFactory.delete(friendId);
        //$location.url("/");
    };
}]);
