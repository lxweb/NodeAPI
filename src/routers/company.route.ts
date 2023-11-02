// libs
import express from "express"

import { 
    getAllCompaniesWithEmployees, 
    getCompanyWithEmployeesByName
} from '../controllers/company.controller'

const router = express.Router()

router.get('/', getAllCompaniesWithEmployees)
router.get('/:name', getCompanyWithEmployeesByName)

export default router