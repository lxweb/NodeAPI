// libs
import express from "express"

import EmployeesModel from "../models/employees.model"
const router = express.Router()

router.get('/', async (_, res) => {
    const allEmployees = await EmployeesModel.findAll()
    res.send(allEmployees)
})

export default router