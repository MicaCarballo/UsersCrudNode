const express = require('express');

const port = 9000;
const app = express();

app.use(express.json());

app.get('/', (req,res)=>{
    res.json({messege: 'ok'})
})



/*{
	id: 1,
	first_name: 'string',
	last_name: 'string',
	email: 'string',
	password: 'string',
	birthday: 'YYYY/MM/DD'
} 

 rutas= /users /users/:id */
 
 const userRouter = require('./users/users.router');
 app.use('/', userRouter);











app.listen(port, ()=>{
    console.log(`server started at port ${port}`)
});