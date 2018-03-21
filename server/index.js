const Koa = require('koa')
const Router = require('koa-router')
const body = require('koa-bodyparser')
const convertedBody = require('koa-convert')(body())
const services = require('../src')

const app = new Koa()
const router = new Router()

services(router)

app
  .use(convertedBody)
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(process.env.PORT || 3000)