require('dotenv').config()
const express = require('express')
const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')
const hdRoute = require('./routes/hd')
const middlewareLogs = require('./middleware/logs')
const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(middlewareLogs)
// app.get('/:nama', (req, res) => {
//   let name = req.params.nama;
//   res.send('Hello Word!: '+name) 
// })

// app.post('/', (req, res) =>{
//   res.json({
//     name: "Tony",
//     email: "tony@email.com"
//   })
// })

app.use("/users", userRoute);
app.use("/auth", authRoute);
app.use("/hd", hdRoute);

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})