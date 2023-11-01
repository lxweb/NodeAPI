// libs
import express from "express"

const router = express.Router()

router.get('/', (_, res) => {
    // console.log(req, res)
    res.send('employees')
})

export default router