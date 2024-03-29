import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
      ) {
        res.status(422).json({message: 'Invalid input.'})
        return;
      }
     
      const newMessage = {
        email,
        name,
        message
      };

let client;

      try {
     client = await MongoClient.connect(
          'mongodb+srv://paskaymmapaseka:DfvJsiL8zz5XC0rO@cluster0.x6dz9zx.mongodb.net/?retryWrites=true&w=majority');
      } catch (error) {
        res.status(500).json({message: 'Could not connect to database.'});
        return;
      }

      const db = client.db('my-site');

      try {
        const result = await db.collection('messsages'). insertOne(newMessage);
        newMessage.id = result.insertedId;
      } catch (error) {
        client.close();
        res.status(500).json({message: 'Storing message failed!'});
        return;
      }

      client.close();

      res
      .status(201)
      .json({message: 'Succesfully stored message!', message: newMessage});
 }
}
export default handler;
