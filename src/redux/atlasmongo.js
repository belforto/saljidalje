const {
  Stitch,
  RemoteMongoClient,
  AnonymousCredential
} = require('mongodb-stitch-browser-sdk');

const client = Stitch.initializeDefaultAppClient('saljidaljeserver-krkzo');

const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-saljidalje').db('saljidalje');



module.exports = {
  fetchDatabase: function (key, value) {
    console.log("22222")
    client.auth.loginWithCredential(new AnonymousCredential()).then(user =>
     
      db.collection('clothes').find().asArray()
    ).then(docs => {
      console.log("Found docs", docs)
      console.log("[MongoDB Stitch] Connected to Stitch")
      return docs;
    }).catch(err => {
      console.error(err)
    });

  }
};
