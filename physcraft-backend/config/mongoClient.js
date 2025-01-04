const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://physcraft:physcraft@cluster0.jxr9c.mongodb.net/physcraft?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    await client.connect();
    
    // Create database if it doesn't exist
    const database = client.db("physcraft");
    
    // Create collection if it doesn't exist
    const applications = database.collection("applications");
    
    console.log("Connected successfully to MongoDB Atlas!");
    
    // Keep connection alive for application lifetime
    return database;
    
  } catch (error) {
    console.error('Connection error:', error);
    throw error;
  }
}

module.exports = { run };