const express = require('express')
const expHbs = require('express-handlebars')
const path = require('path')

const mainRoute = require('./routes/main')
const userRoute = require('./routes/user')
const findRoute = require('./routes/find')
const usersRoute = require('./routes/users')
const deleteRoute = require('./routes/delete')
const categoryRoute = require('./routes/category')
const recordRoute = require('./routes/record')


const hbs = expHbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

const app = express()

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'pages')

app.use(express.static(path.resolve(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))

app.use('/', mainRoute)
app.use('/user', userRoute)
app.use('/find', findRoute)
app.use('/users', usersRoute)
app.use('/delete', deleteRoute)
app.use('/category', categoryRoute)
app.use('/record', recordRoute)

function start() {
    const PORT = process.env.PORT || 3000
    app.listen(PORT, () => {
        console.log(`Server is running on port : ${PORT}`)
    })
}

start()