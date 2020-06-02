const { MongoClient } = require('mongodb');
require('dotenv').config();

const dbProject = process.env.REACT_APP_DBPROJECT;
const dbName = process.env.REACT_APP_DBNAME;
const dbUser = process.env.REACT_APP_DBUSER;
const dbPass = process.env.REACT_APP_DBPASS;

const uri = `mongodb+srv://${dbUser}:${dbPass}@${dbProject}.mongodb.net/test?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    await client.connect();
    console.log('Connected correctly to server');
    const db = client.db(dbName);
    // Use the collection "users"
    const col = db.collection('users');
    const myDoc = await col.findOne();
    // Print to the console
    console.log(myDoc);
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
