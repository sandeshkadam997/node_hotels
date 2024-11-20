const express = require('express')
const app = express();
const db=require('./db.js');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Welcome to our Hotel');
})

const personRoutes=require('./routes/personRoutes');
const menuItemsRoutes=require('./routes/menuItemRoutes.js');

app.use('/person',personRoutes);
app.use('/menu',menuItemsRoutes)

app.listen(3000,()=>
    {console.log("server is running at port 3000")
})