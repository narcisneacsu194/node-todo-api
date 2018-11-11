const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5be84b9220b07a3e1a5723de1';
var id = '5be6aeaf33440c500bf426b0';
User.findById(id).then((user) => {
  if(!user){
    return console.log('User not found.');
  }

  console.log(JSON.stringify(user, undefined, 2));
}).catch((err) => {
  console.log(err);
});

// if(!ObjectID.isValid(id)){
  // console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// })

// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((err) => console.log(err));
