//database//react/node>>post and get users

const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectId
require('dotenv').config();

//middleware
app.use(cors());
app.use(express.json());


// const uri = "mongodb+srv://saiful542:01537231282@cluster0.k5nvb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.k5nvb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

console.log(uri)
//connection with db with async 
//**async fun declare>>try and finally>>client connect>>db crate>>collection create>>create some data>>insert data to database>>finally client close>>outside the fun call the fun and catch */
async function run() {
    try {
        await client.connect();
        const database = client.db('dataBase_name');
        const dbCollection = database.collection('users');

        //GET API
        app.get('/users', async (req, res) => {
            const cursor = dbCollection.find({})

            const count = await cursor.count();             //   limited data load
            const page = req.query.page;
            const size = parseInt(req.query.size);
            let users;
            if (page) {
                users = await cursor.skip(page * size).limit(size).toArray();

            }
            else {
                users = await cursor.toArray();
            }
            res.send({
                users,
                count
            });

            console.log(req.query);
        })
        //GET API




        //POST API
        app.post('/users', async (req, res) => {
            const newUser = req.body;
            const result = await dbCollection.insertOne(newUser)
            console.log('hey connected to post', req.body);
            res.send(result)
        })
        //POST api




        //DELETE API
        app.delete('/users/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) }
            const result = await dbCollection.deleteOne(query)
            console.log('deleting', id)
            res.json(result)
        })
        //DELETE API



        //UPDATE API
        app.get('/users/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) }
            const user = await dbCollection.findOne(query)
            console.log(id, 'update')
            res.json(user)
        })



        //**update user */
        app.put('/users/:id', async (req, res) => {
            const id = req.params.id;
            const updatedUser = req.body;
            const filter = { _id: ObjectId(id) }
            const options = { upsert: true }
            const updateDoc = {
                $set: {
                    name: updatedUser.name,
                    email: updatedUser.email

                }

            }
            const result = await dbCollection.updateOne(filter, updateDoc, options)
            console.log(id, 'update user')
            res.json(result)
        })
        //**update user */
        //UPDATE API


    }
    finally {
        // await client.close();
    }
}
run().catch(console.dir)









//connection with db without async 
// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     const user ={name:'candle',file:'32',email:"asasa@gmail.com"}
//     collection.insertOne(user)
//     .then(()=>{
//         console.log('success')
//     })
//     console.log('hitting db')
//     // client.close();
// });






app.get('/', (req, res) => {
    res.send("this is node")
})

app.listen(port, () => {
    console.log('listening', port)

})
