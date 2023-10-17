import {Request,Response, Router}from "express"

const router = Router()
router.get("/", (resquest: Request, response: Response)=>{
    return response.json({ok:true})
}
)

export {router}