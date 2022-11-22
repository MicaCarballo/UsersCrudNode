const usersCrudDB = [];
let id = 1;

const findAllUsers = () => {
    return usersCrudDB
};

const findUsersById = (id) => {
const user = usersCrudDB.find(item => item.id == id);
    return user;

};

const createUser = (data) =>{
    const newUser = {
        id : id++,
        first_name: data.first_name,
	last_name: data.last_name,
	email: data.email,
	password: data.password,
	birthday: data.password
}
usersCrudDB.push(newUser);
return newUser;
}


module.exports = {
    findAllUsers,
    findUsersById,
    createUser
}