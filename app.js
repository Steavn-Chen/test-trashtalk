const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

const port = 3080

app.engine('handlebars' , exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, (req,res) => {
  console.log(`trash-talk server on http://localhost:${port}`)

})