const express = require('express');
const app = express();
const port = process.env.port || 5000;
const cors = require('cors');

//middleware
app.use(cors());
app.use(express.json());

const chats = [{
    chat_id: 1,
    group: true,
    members_count: 4,
    members: ['karim', 'amzad', 'rafi', 'alif']

},
{
    chat_id: 2,
    group: false,
    members_count: 2,
    members: ['amzad', 'alif']

},
{
    chat_id: 3,
    group: true,
    members_count: 3,
    members: ['amzad', 'rafi', 'alif']

}]

app.get('/chat', (req, res) => {
    res.send(chats)
})



app.listen(port, () => {
    console.log('running port', port);
})