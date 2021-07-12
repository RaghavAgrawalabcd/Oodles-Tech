const dotenv = require('dotenv')
const express = require('express');
const app = express();

dotenv.config({ path: './config.env' })
require('./db/connection')
app.use(express.json())
app.use(require('./router/auth'))
const PORT = process.env.PORT

app.listen(PORT)