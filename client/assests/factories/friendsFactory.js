app.factory("friendsFactory", ["$http", function($http){
    var friends = [];
    var friend = {};
    function FriendsFactory(){
        //var _this = this;
        this.create = function(newFriend, callback){
            console.log(newFriend);
            $http.post("/friends", newFriend).then(function(returnedData){
                console.log(returnedData);
                if(typeof(callback) == "function"){
                    callback(returnedData.data);
                }
            });
        };
        this.update = function(newFriend, friendId, callback){
            $http.put("/friends/"+friendId, newFriend).then(function(returnedData){
                console.log(returnedData);
                if(typeof(callback) == "function"){
                    callback(returnedData.data);
                }
            });
        };
        this.index = function(callback){
            $http.get("/friends").then(function(returnedData){
                console.log(returnedData);
                friends = returnedData.data;
                callback(friends);
            });
        };
        this.delete = function(friendId){
            $http.delete("/friends/"+friendId).then(function(returnedData){
                console.log("delete: "+returnedData);
            });
        };
        this.show = function(friendId){
            $http.get("/friends/"+friendId).then(function(returnedData){
                console.log(returnedData);
                if(typeof(callback) == "function"){
                    callback(returnedData.data);
                }
            });
        };
        this.getFriends = function(callback){
            callback(friends);
        };
        this.getFriend = function(friendIndex,callback){
            callback(friends[friendIndex]);
        };
    }
    console.log(new FriendsFactory());
    return new FriendsFactory();
}]);
console.log("Friends Factory");
