let getUsers = (req, res, next)=>{
    console.log("call get users api");    
    res.status(200).send(
        {
            status:1,            
            response:"call get user api"
        }
    );
}


let deleteUser = (req, res, next)=>{
    console.log(req,"call delete user api");
    res.status(200).send(
        {
            status:1,
            data: req.params.id,
            response:"call delete user api"
        }
    );
}


let createUser = (req, res, next)=>{
    console.log("call create user api");
    res.status(200).send(
        {
            status:1,
            data: req.body,
            response:"call create user api"
        }
    );

}


let updateUser = (req, res, next)=>{
    console.log("call update user api");
    res.status(200).send(
        {
            status:1,
            data: req.params,
            response:"call update user api"
        }
    );
}


module.exports = {
    getUsers:getUsers,
    deleteUser:deleteUser, 
    createUser:createUser,
    updateUser:updateUser
}