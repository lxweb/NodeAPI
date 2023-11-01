// libs
import express from "express"

import CompanyModel from "../models/company.model"

const router = express.Router()

router.get('/', async (_, res) => {
    const allCompanies = await CompanyModel.findAll()
    res.send(allCompanies)
})

export default router