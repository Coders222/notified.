const http = require('http');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const dotenv = require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// Create an instance of the http server to handle HTTP requests
const documentRouter = require('./routes/documents')
const pendingRouter = require('./routes/pendings')
const registerRouter = require('./routes/registers')
app.use('/documents', documentRouter);
app.use('/pendings',pendingRouter);
app.use('/registers',registerRouter);
// Start the server on port 3000
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
