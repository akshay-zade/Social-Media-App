const UserModel = require('../Model/userModel.js') ;

 const registerUser = async (req,res) => {
      const {username , password , firstname , lastname} = req.body ;

      const newUser = new UserModel({
        username , password , firstname , lastname
      })

      try {
        await newUser.save()
        res.status(200).json(newUser)
      } catch (error) {
        res.status(500).json({message:error.message})
      }
}

const signupUser = async(req,res) => {
  const {username , pawword} = req.body;
}

module.exports = {
    registerUser ,
    signupUser ,
}