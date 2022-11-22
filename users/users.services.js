const usersControllers = require('./users.controller');

const getAllUsers = (req, res) =>{
    const data = usersControllers.findAllUsers();
    res.status(200).json(data)
};

const getUserById = (req, res) =>{
    const id = req.params.id;
    const data = usersControllers.findUsersById(id);

    if(data){
        res.status(200).json(data)
    }else{
        res.status(404).json({messege: 'invalid id'})
    }
};

const postUser = (req, res)=>{
    const{first_name, last_name,email,password,birthday} = req.body;

    if(first_name && last_name && email && password && birthday){
        const data = usersControllers.createUser({first_name,last_name,email,password,birthday});
        res.status(201).json(data)
    } else{
        res.status(400).json({messege:'invalid data'})
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    postUser
}