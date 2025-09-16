const UserModel=require("../Models/NewUserBooking")

const CretateUser=async (req,res)=>{
    const NewCreate=UserModel(req.body)
    const saveData=await NewCreate.save()
    if(NewCreate){
        res.send(saveData)
    }
}

const NewRead=async (req,res)=>{
    const ReadAll=await UserModel.find()
    if(ReadAll){
        res.send(ReadAll)
    }
}

const NewDelete = async (req, res) => {
    try {
        const result = await UserModel.deleteOne({ _id: req.params.id });

        if (result.deletedCount > 0) {
            res.send("Delete Successful");
        } else {
            res.status(404).send("No document found with that ID");
        }
    } catch (error) {
        res.status(500).send("Server error during deletion");
    }
};

module.exports ={CretateUser,NewRead,NewDelete}