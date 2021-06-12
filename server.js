const express = require('express');
const connectDB = require('./DB/Connection');
const app = express();

const userRoute = require('./route/User');
const bodyParser = require('body-parser');
const cors = require('cors');

// database connection
connectDB();

// 50 Mbyte limit for json data
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

// cors options
app.options('*', cors());
app.use(cors({
    origin: "*",
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'PUT'],
    allowedHeaders: 'Content-Type,Authorization,Origin,X-Requested-with,Accept'
}));

// routes
app.use('/api/users', userRoute);
app.use('/', (req, res) => {
    res.send("server is running!")
})

// port to run
const port = process.env.port || 4000;

app.listen(port, () => console.log("Server started"))
