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

async function getAllUsers() {
  try {
    await client.connect();
    console.log('Connected correctly to server');
    const db = client.db(dbName);
    // Use the collection "users"
    const col = db.collection('users');
    const allUsers = await col.find({}).toArray();
    // Print to the console
    console.log('getAllUsers:');
    console.log(allUsers);
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}

async function insertUser(firstName, lastName) {
  const user = {
    firstName,
    lastName,
  };
  try {
    await client.connect();
    console.log('Connected correctly to server');
    const db = client.db(dbName);
    // Use the collection "users"
    const col = db.collection('users');
    // Insert user in collection
    const insertResult = await col.insertOne(user);
    console.log('Inserted user: ');
    console.log(insertResult.ops);
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}

insertUser('Test', 'User').catch(console.dir);

// getAllUsers().catch(console.dir);
