var Users = require('../models/users');

exports.allUsers = function(req,res){
  Users.allUsers(function(err, docs){
    if(err){
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(docs);
  })
}

exports.findUserById = function(req, res){
  Users.findUserById(req.params.id, function(err, doc){
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(doc);
  })
}
exports.createUser = function(req, res){
  var user = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone
  };
  Users.createUser(user, function(err, result){
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(user);
  })
}
exports.changeUser = function(req, res){
  Users.changeUser(req.params.id, req.body, function(err, result){
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.sendStatus(200);;
  })
}

exports.deleteUser = function(req, res){
  Users.deleteUser(req.params.id, function(err, result){
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.sendStatus(200);;
  })
}
//
// exports.userFriends = function(req, res){
//   let temp;
//   let ids = [];
//   Users.findMessage(req.params.id, function(err, doc){
//
//
//     if (err) {
//       console.log(err);
//       return res.sendStatus(500);
//     }
//     temp = doc;
//
//     console.log(temp);
//     let count=0;
//     for(let mes of temp){
//       ids[count]= mes.senderId;
//       count++;
//     }
//
//     for (var i = 0; i < ids.length; i++) {
//       for (var j = 0; j < ids.length; j++) {
//         if(i==j){
//           continue;
//         }
//         if(ids[i] == ids[j]){
//           delete ids[j];
//         }
//       }
//     }
//
//     Users.findUsers(ids, function(err, doc){
//
//       if (err) {
//         console.log(err);
//         return res.sendStatus(500);
//       }
//       res.send(doc);
//     });
//
//
//   })
//
// }

// controllers of messages

exports.allMessages = function(req,res){
  Users.allMessages(function(err, docs){
    if(err){
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(docs);
  })
}

exports.findMessageById = function(req, res){
  Users.findMessageById(req.params.id, function(err, doc){
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(doc);
  })
}
exports.createMessage = function(req, res){
  var user = {
    senderId: req.body.senderId,
    receiverId: req.body.receiverId,
    text: req.body.text
  };
  Users.createMessage(user, function(err, result){
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(user);
  })
}
exports.changeMessage = function(req, res){
  Users.changeMessage(req.params.id, req.body, function(err, result){
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.sendStatus(200);;
  })
}

exports.deleteMessage = function(req, res){
  Users.deleteMessage(req.params.id, function(err, result){
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.sendStatus(200);;
  })
}
