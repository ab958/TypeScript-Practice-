import express,{Request,Response} from "express";
const router = express.Router()
import { User } from "../model/userModel"; 


router.get("/",async(req:Request ,res: Response)=>{
    const usr:any = await User.find();
    res.send(usr)
})

router.get("/:id",async(req : Request,res:Response)=>{
    const usr:any = await User.findById(req.params.id)
    res.send(usr)
})

router.put("/:id",async(req:Request,res:Response)=>{
    const usr:any = await User.findById(req.params.id)
    if(usr){
        usr.name = req.body.name || usr.name,
        usr.age = req.body.age || usr.age
    }
    await usr.save()
    res.send(usr)
})

router.delete("/:id",async(req:Request,res:Response)=>{
    const usr:any = await User.remove({_id:req.params.id})
    res.send(usr)
})

router.post("/",async(req:Request,res:Response)=>{
    const usr:any = new User({
        name : req.body.name,
        age : req.body.age
    })
    await usr.save()
    res.send(usr)
})


export {router as userRouter}