const express =require('express');
const { authRouter } = require('./router/authRoute');
const databaseconnect = require('./config/dataBaseConfig');

const app =express();
databaseconnect();
app.use(express.json())
app.use('/api/auth',authRouter)

app.use('/',(req,res)=>{
    res.status(200).json({
        data: "jwt_auth sever"
    })
});
module.exports =app;