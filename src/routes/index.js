import { Router } from "express"
const router = Router()

router.get('/',(req,res) => res.render('index', { title: 'Principal'}))
router.get('/exp',(req,res) => res.render('exp', { title: 'Experiencia'}))
router.get('/tools',(req,res) => res.render('tools', { title: 'Herramientas'}))
router.get('/contact',(req,res) => res.render('contact', { title: 'Contactenos'}))

export default router