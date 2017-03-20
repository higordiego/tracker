const express = require('express')
const path = require('path')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const http = require('http')

const mongo = require('./_config/mongodb')

const app = express();


app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

require('./routes')(app)



app.set('port', (process.env.PORT || 3000));

const server = http.createServer(app)

const io = require('socket.io')(server)


