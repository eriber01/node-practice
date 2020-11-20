const express = require('express')
const app = express()
const path = require('path')
const router = require('./routes/routes')
//settings 
app.set('port', 3001);

//views engine
app.set('views', path.join(__dirname + '/views'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs')
//middleware

//Routes

app.use(require('./routes/routes'))

//static files
app.use(express.static(path.join(__dirname + '/public')))

//listen the server

app.listen(app.get('port'), ()=>{
    console.log(`Escuchando en el puerto ${app.get('port')}`);
})