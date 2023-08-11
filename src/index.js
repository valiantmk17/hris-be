require('dotenv').config()
const express = require('express')
const userRoute = require('./routes/users')
const employeeRoute = require('./routes/employee')
const authRoute = require('./routes/auth')
const hrRoute = require('./routes/hr')
const hdRoute = require('./routes/hd')
const leaveRoute = require('./routes/leave')
const middlewareLogs = require('./middleware/logs')
const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(middlewareLogs)


app.use("/users", userRoute);
app.use("/auth", authRoute);
app.use("/hr", hrRoute);
app.use("/hd", hdRoute);
app.use("/employee", employeeRoute);
app.use("/leave", leaveRoute);

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})