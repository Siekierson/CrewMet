const express= require('express');
const cors=require('cors');
require('dotenv').config();
const mongoose= require('mongoose');
const app=express();
const port =process.env.PORT||5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true,useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open',function(){
    console.log('db connect')
})

const crewsRouter = require('./routes/crews');
const usersRouter = require('./routes/users');
const meetingsRouter = require('./routes/meetings');
const messagesRouter = require('./routes/messages');
app.use('/crews',crewsRouter);
app.use('/users',usersRouter);
app.use('/meetings',meetingsRouter);
app.use('/messages',messagesRouter)

app.listen(port,()=>console.log(`Server is listening at http://localhost:${port}`));