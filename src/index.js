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

app.set("views")

app.get('/',(req,res) => res.render('index'))
app.get('/about',(req,res) => res.render('about'))
app.get('/contact',(req,res) => res.render('contact'))

app.listen(3000)
console.log("Server is listening on port", 3000)