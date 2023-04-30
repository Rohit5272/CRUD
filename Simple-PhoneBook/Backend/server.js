const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')

// Database Connection
const mongoose = require('mongoose')
const DBURL = "mongodb://0.0.0.0:27017/DB"
mongoose.connect(DBURL,{useNewUrlParser : true})
        .then(() => {
            console.log("Connected to the database");
        })
        .catch(err => {
            console.log("Cannot connect database" + err);
        })

mongoose.Promise = global.Promise
app.use(bodyParser.json())
app.use(express.urlencoded({extended:true}))
app.use(cors());
app.use('*',cors())

// simple route
app.get('/',(req,res) => {
      res.send('welcome')
})

require('./routes/student.routes')(app)

app.listen(3000,() => {
      console.log('Server is running on port 3000');
})