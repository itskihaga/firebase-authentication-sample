import express from 'express'
import cors from 'cors'

const app: express.Express = express()

app.use(cors({ origin:'http://localhost:3000'}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const router: express.Router = express.Router()
router.get('/secret/user', (req:express.Request, res:express.Response) => {
  res.json({
    name:'[your name]',
    comment:'Welcome!!'
  })
})
app.use(router)

app.listen(8080,()=>{ console.log('Example app listening on port 8080!') })