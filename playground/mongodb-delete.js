const {MongoClient, ObjectID} = require('mongodb');
// const MongoClient = require('mongodb').MongoClient;



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');

  // db.collection('Todos').deleteMany({todo: 'wash car'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').deleteOne({todo: 'wash car'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // })

  // db.collection('Users').findOneAndDelete({name: 'Yohanan'}).then((result) => {
  //   console.log(result);
  // })

  db.collection('Users').deleteOne({_id: new ObjectID("59f88deefcefbe467636884d")}).then((result) => {
    console.log(result)
  });

  // db.close();
});
