const express = require('express')
const userRouter = require('./routes/user')
const flightRouter=require('./routes/flight')
require('./dbs/connection')

const app = express()
const port = process.env.PORT || 3000


app.use(express.json())
 app.use(userRouter)
app.use(flightRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})


