require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const User = require('./schema'); 

const app = express();
app.use(express.json());


// mongoose.connect(process.env.MONGO_URL)
//     .then(() => console.log('Connected to MongoDB'))
//     .catch(err => console.error('Connection failed', err));

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

   
    if (!email) {
        return res.status(400).json({ error: 'Email cannot be empty' });
    }
    if (!password) {
        return res.status(400).json({ error: 'Password cannot be empty' });
    }


    try {
       if(email){

        return res.status(200).json({ message: 'Login successful' });}
    }catch (err) {
        return res.status(500).json({ error: 'Internal server error' });
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
