var db = require('../db');
const ObjectID = require('mongodb').ObjectID;

exports.allUsers = function(cb){
  db.get().collection('users').find().toArray((err, docs)=>{
      cb(err, docs);
    });
}

exports.findUserById = function(id, cb){
  db.get().collection('users').findOne({_id: ObjectID(id)}, (err,doc)=>{
    cb(err, doc);
  })
}

exports.createUser = function(message, cb){
    db.get().collection('users').insert(message, (err, result)=>{
    cb(err, result);
  });
}

exports.changeUser = function(id, newData, cb){
  db.get().collection('users').update(
      { _id: ObjectID(id) },
      { $set: { name: newData.name,  email: newData.email, phone: newData.phone}},
      {
          upsert: false,
          multi: false
      },
      (err, result)=>{
          cb(err, result);
      }
  );
}

exports.deleteUser = function(id, cb){
  db.get().collection('users').deleteOne(
      { _id: ObjectID(id)},
      (err, result)=>{
          cb(err, result);
      }
  );
}
/*
exports.findMessage = function(id,cb){
  db.get().collection('messages')
  .find({receiverId : id})
    .toArray((err,doc)=>{
      cb(err, doc);
  })

}
exports.findUsers = function(ids, callback){
  db.get().collection('users')
  find({id:{$in:ObjectID([ids])}})
    .toArray((err,doc)=>{
      cb(err, docs);
  })
}
*/
//model.find({id:{$in:[ids]}})
exports.allMessages = function(cb){
  db.get().collection('messages').find().toArray((err, docs)=>{
      cb(err, docs);
    });
}

exports.findMessageById = function(id, cb){
  db.get().collection('messages').findOne({_id: ObjectID(id)}, (err,doc)=>{
    cb(err, doc);
  })
}

exports.createMessage = function(user, cb){
    db.get().collection('messages').insert(user, (err, result)=>{
    cb(err, result);
  });
}

exports.changeMessage = function(id, newData, cb){
  db.get().collection('messages').update(
      { _id: ObjectID(id) },
      { $set: { senderId: newData.senderId,  receiverId: newData.receiverId, text: newData.text}},
      {
          upsert: false,
          multi: false
      },
      (err, result)=>{
          cb(err, result);
      }
  );
}

exports.deleteMessage = function(id, cb){
  db.get().collection('messages').deleteOne(
      { _id: ObjectID(id)},
      (err, result)=>{
          cb(err, result);
      }
  );
}

//
// function getById(id) {
//   return db.get().collection('messages').find({receiverId : id})
//     .toArray((err,doc)=>{
//       return (err, doc);
//   })
// }
