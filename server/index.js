const koa = require('koa')
const route = require('koa-route')
const cors = require('@koa/cors');
const accounts = require('./accounts')

const app = new koa()
const handle = fn => (ctx, ...args) => ctx.body = fn(...args)

app.use(cors())
app.use(route.get('/accounts', handle(accounts.fetch)))
app.use(route.get('/accounts/:id', handle(accounts.fetchById)))
app.use(route.post('/accounts', handle(accounts.create)))
app.use(route.put('/accounts', handle(accounts.update)))
app.use(route.patch('/accounts', handle(accounts.patch)))
app.use(route.delete('/accounts/:id', handle(accounts.remove)))

app.use(ctx => {
  ctx.body = 'hello'
})

app.listen(3001)
