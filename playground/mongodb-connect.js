const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err){
  //     console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Narcis',
  //   age: 24,
  //   location: 'Bucharest'
  // }, (err, result) => {
  //   if(err){
  //     console.log('Unable to insert user', err);
  //   }else{
  //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  //   }
  // });

  db.close();

});
