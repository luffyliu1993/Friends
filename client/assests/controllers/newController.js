app.controller("newController", ["$scope", "friendsFactory", "$location", function($scope, friendsFactory,$location){
    $scope.friends = [];
    $scope.friend = {};
    function setFriends(data){
        $scope.friends = data;
    }
    var index = function(){
        friendsFactory.index(setFriends);
    };
    index();
    $scope.create = function(){
        friendsFactory.create($scope.friend, setFriends);
        console.log($scope.friends);
        $location.url("/");
    };

}]);

console.log("newController");
