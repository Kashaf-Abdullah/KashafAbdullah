import userModel from "../models/user.js";
class userController {
    static getAllDoc = async (req, res) => {
        try {
            const result = await userModel.find()
            res.send(result);
        }
        catch (error) {
            console.log(error)
        }
    }

}

export default userController;