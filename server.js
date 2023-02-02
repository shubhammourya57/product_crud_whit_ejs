const express = require("express");
const bodyParser = require("body-parser")
const ejs = require("ejs")
const cookieParser =require('cookie-parser')
const mongoose = require("mongoose")
const path = require("path");
const session = require('express-session')
const mongoDBStore = require('connect-mongodb-session')(session)

const userRoutes = require("./routes/userRoutes")
const productRoutes = require("./routes/productRoutes")


const app = express()
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(bodyParser.json({type:'application/json'}));
app.use(express.json());
app.use(cookieParser());

var store = new mongoDBStore({
    uri: 'mongodb+srv://shubh:jaishriram@cluster0.kkc8rbl.mongodb.net/NODECURD?retryWrites=true&w=majority',
    collection: 'mySessions'
  });
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: store,
    // cookie: { secure: true }
  }))



app.set('view engine','ejs');
app.use('/uploads',express.static(path.join(__dirname, 'uploads')));

app.set('views',path.join(__dirname,'view'));

app.use("/", userRoutes)
app.use("/product", productRoutes)


mongoose.connect('mongodb+srv://shubh:jaishriram@cluster0.kkc8rbl.mongodb.net/NODECURD?retryWrites=true&w=majority')
.then(result=>{
    app.listen(4500)
    console.log("connected")
})
.catch(err=>console.log(err))