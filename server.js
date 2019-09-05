const express = require('express')
const userRouter = require('./routes/portal/user')
const recipeRouter = require('./routes/portal/recipe')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/user', userRouter);
app.use('/recipe', recipeRouter);

app.listen("3300", ()=>{
    console.log("server running on port 3300");
})