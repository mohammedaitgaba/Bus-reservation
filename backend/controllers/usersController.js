const getUsers = (req,res)=>{
    res.json({message:'get users'})
}

const setUser = (req,res)=>{
    console.log(req.body);
    
    res.json({message:'add user!'})
}

module.exports = {
    getUsers,setUser
}