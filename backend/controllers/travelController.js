const getTravel = (req,res) =>{
    res.json({message : "get all travel"})
}

const setTravel = (req,res) =>{
    if (!res.body.text) {
        res.status(400)
        throw new Error('error text required')
    }
    res.json({message : "add new travel"})
}

const updateTravel = (req,res) =>{
    res.json({message :` update travel with id ${req.params.id}`})
}

const deleteTravel = (req,res) =>{
    res.json({message : ` delete travel with id ${req.params.id}`})
}

module.exports = {
    getTravel,
    setTravel,
    updateTravel,
    deleteTravel
}