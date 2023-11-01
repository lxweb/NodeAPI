// libs
import express from 'express'
import morgan from 'morgan'

// routes
import companyRouter from '../routers/company.route'
import employeesRouter from '../routers/employees.route'

const API_PREFIX = '/api/v1' // Here we can implement semantic versioning

const app = express()
app.use(morgan('dev'))
app.use(express.json())

app.use(`${API_PREFIX}/company`, companyRouter)
app.use(`${API_PREFIX}/employees`, employeesRouter)

app.get('/ping', (_, res) => {
    console.log('Ping!')
    res.send('pong')
})

export default app