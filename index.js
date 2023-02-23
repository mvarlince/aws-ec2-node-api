import express from 'express'
import cors from 'cors'
import 'dotenv/config'

const app = express()
app.use(cors())
app.use(express.json())

app.listen('4040', () => console.log('listening on port 4040'))

app.get('/', (req, res) => res.send('Api working') )

