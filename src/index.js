import express from "express"
import {dirname, join} from  'path'
import { fileURLToPath } from "url"
import indexRoutes from './routes/index.js'

const app = express()

dirname(fileURLToPath(import.meta.url))

const __dirname = dirname(fileURLToPath(import.meta.url))

console.log(__dirname, '/views')

app.set('views', join(__dirname, 'views'))

app.set('view engine', 'ejs')
app.use(indexRoutes)

app.use(indexRoutes)
app.use(express.static(join(__dirname,'public')))

app.set("views")

app.get('/',(req,res) => res.render('index'))
app.get('/exp',(req,res) => res.render('exp'))
app.get('/tools',(req,res) => res.render('tools'))
app.get('/contact',(req,res) => res.render('contact'))

app.listen(5000)
console.log("Server is listening on port", 5000)