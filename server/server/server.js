require('dotenv').config()
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connection = require('./database/connection');

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(cookieParser())

app.use('/api/user', require('./routes/UserRoutes'))
app.use('/api/patient', require('./routes/PatientRoutes'))
app.use('/api/drug', require('./routes/DrugRoutes'))
app.use('/api/temperature', require('./routes/TemperatureRoutes'))

connection()

app.listen(process.env.PORT, () => console.log(`Server is listening on port: http://localhost:${process.env.PORT}`))