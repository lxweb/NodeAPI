// libs
import express from "express"

import { 
    getAllCompaniesWithEmployees, 
    getCompanyWithEmployeesByName,
    createCompany
} from '../controllers/company.controller'

const router = express.Router()

router.get('/', getAllCompaniesWithEmployees)
router.get('/:name', getCompanyWithEmployeesByName)
router.post('/', createCompany)

export default router