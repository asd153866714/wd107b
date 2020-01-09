const Koa = require('koa');
const serve = require('koa-static')
const path = require('path')
const app = new Koa();

app.use(serve(path.join(__dirname,'/public')))

app.use(async function(ctx) { // 伺服器透過ctx回應瀏覽器的請求
    console.log('url=', ctx.url) // url 根目錄後的網址
    ctx.body="html"
  });


app.listen(3000);
console.log('server run at http://localhost:3000/')