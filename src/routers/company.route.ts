// libs
import express from "express"
import Models from '../models'
const router = express.Router()

router.get('/', async (_, res) => {
    const allCompanies = await Models.Company.findAll({
        include: 'employees',
      })
    res.status(200).send(allCompanies)
})

export default router