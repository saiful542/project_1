const express = require('express');
const app = express();
const cors = require('cors')
const port = 5000;


app.use(cors())
app.use(express.json())

const users = [
    { name: 'gita', id: "21" },
    { name: 'mita', id: "22" },
    { name: 'fita', id: "28" },
    { name: 'lorme', id: "43" }
]
app.get('/', (req, res) => {
    res.send('hellow there ggg');
})
// app.get('/users',(req,res)=>{
//     res.send(users);
// })

//localhost:3000/users?search='mita'
//output of the console will be {search:'mita'}
//query returns an object
app.get('/users', (req, res) => {
    // console.log(req.query)
    // console.log(req.query.search)
    const search = req.query.search
    const result = users.filter(user => user.name.includes(search))
    if (search) {
        res.send(result)
    }
    else {
        res.send(users)
    }

})


app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})


//POST
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('hitting post', req.body)

    //res.send(JSON.stringify(newUser))   or
    res.json(newUser)

})



app.listen(port, () => {
    console.log('listening to port', port)
})