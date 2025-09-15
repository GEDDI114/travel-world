const express=require("express")
const UserController=require("../controller/UserController")

const router=express.Router()
router.post("/user",UserController.CretateUser)
router.get("/readUser",UserController.NewRead)
module.exports=router