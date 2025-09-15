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

module.exports ={CretateUser,NewRead}