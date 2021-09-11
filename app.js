const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateTrashTalk = require('./generateTrashTalk')
const app = express()
const port = 3300
const personList = require('./tasker.json')
  

app.engine('handlebars' , exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index', { personList })
  // res.render('index')
})

app.post('/', (req, res) => {
  const options = req.body
  // console.log(options)
  const trashTalk = generateTrashTalk(options)
  res.render('index', { personList, trashTalk })
  // res.render('index', { trashTalk })
})

app.listen(port,() => {
  console.log(`trash-talk server on http://localhost:${port}`)

})