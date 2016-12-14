var mongoose = require("mongoose");
var Friend = mongoose.model("Friend");

function FriendsController(){
    this.index = function(req, res){
        Friend.find({}, function(err, friendsData){
            if(err){
                console.log(err);
            }
            else{
                res.json(friendsData);
            }
        });
    };
    this.create = function(req, res){
        var friend = new Friend();
        friend.firstName = req.body.firstName;
        friend.lastName = req.body.lastName;
        //remember to handle the date
        friend.birthday = req.body.birthday;
        friend.save(function(err,friendsData){
            if(err){
                console.log(err);
            }
            else{
                res.json(friendsData);
            }
        });
    };
    this.update = function(req, res){
        Friend.update({_id:req.params.id},{$set:{firstName:req.body.firstName, lastName: req.body.lastName, birthday: req.body.birthday}}, function(err,friendsData){
            if(err){
                console.log(err);
            }
            else{
                res.json(friendsData);
            }
        });
    };
    this.delete = function(req, res){
        Friend.remove({_id:req.params.id}, function(err, friendsData){
            if(err){
                console.log(err);
            }
            else{
                res.json(friendsData);
            }
        });
    };
    this.show = function(req, res){
        Friend.find({_id : req.params.id}, function(err, friendsData){
            if(err){
                console.log(err);
            }
            else{
                res.json(friendsData);
            }
        });
    }
}

module.exports = new FriendsController();
console.log("controllers/friends.js");
