const express = require('express')
const servestatic = require('serve-static')
const path = require('path')
const { env } = require('process')

const app = express()
app.use('/',servestatic(path.join(__dirname,'/dist')))

app.listen(process.env.PORT || 8080)