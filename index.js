const express = require('express')
const cors = require("cors");
const app = express()
const authRouter=require('./routes/auth')
const port =process.env.PORT || 8000;
require('./db');
app.use(express.json()); 
app.use(cors());
app.use('/api/auths',authRouter)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})  
 