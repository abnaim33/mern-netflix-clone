const User = require("../models/UserModel")


module.exports.addToLikedMovies = async (req, res) => {
    try {
        const { email, data } = req.body
        console.log(email, 'user controllers')
        const user = await User.findOne({ email })
        console.log(user, 'user')
        if (user) {
            const { likedMovies } = user;
            const movieAlreadyLiked = likedMovies.find(({ id }) => (id === data.id))

            if (!movieAlreadyLiked) {
                await User.findByIdAndUpdate(user._id, {
                    likedMovies: [...user.likedMovies, data]
                }, {
                    new: true
                })
            } else return res.json({ msg: "movie already added to the list" })
        } else await User.create({ email, likedMovies: [data] })

        return res.json({ msg: "movie added successfully" })

    }
    catch (err) {
        return res.json({ msg: "Error adding movie" })
    }
}



module.exports.getLikedMovies = async (req, res) => {
    try {
        const { email } = req.params.id
        const user = User.findOne({ email })

        if (user) {
            res.json({ msg: "success", movies: user.likedMovies })
        } else return res.json({ msg: "User with this email can not be found" })

    } catch (err) {
        console.log(err)
        return res.json({ msg: "Error fetching movies" })
    }
}


module.exports.removeFromLikedMovies=async(req,res)=>{
    try{

const {email,movieId}=req.body
const user=await User.findOne({email})

if(user){
    const {likedMovies}=user;
    const movieIndex=likedMovies.findIndex(({id})=>id===movieId)
    if(!movieIndex)res.status(400).send({msg:"Movie not found"})


    likedMovies.slice(movieIndex,1)

  
            await User.findByIdAndUpdate(user._id, {
                likedMovies: [...user.likedMovies, data]
            }, {
                new: true
            })

}
    }catch(err){
        console.log(err)
        return res.json({msg:"error deleting movies"})
    }
}