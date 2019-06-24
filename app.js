const Koa = require('koa');
const Router = require('koa-router');
const mime = require('mime');
const fs = require('fs-extra');
const Path = require('path');

const app = new Koa();
const router = new Router();

// 处理首页
router.get(/(^\/index(.html)?$)|(^\/$)/, async (ctx, next) => {
    ctx.type = mime.getType('.html');

    const content = await fs.readFile(Path.resolve(__dirname, './public/index.html'), 'UTF-8');
    ctx.body = content;

    await next();
});

// 处理 css 文件
router.get(/\S*\.css$/, async (ctx, next) => {
    const { response , path } = ctx;
    ctx.type = mime.getType(path);
	response.set('expires', new Date(Date.now() + 2 * 60 * 10000).toString());
    const content = await fs.readFile(Path.resolve(__dirname, "public/"+path), 'UTF-8');
    ctx.body = content;
    await next();
});

// 处理 js 文件
router.get(/\S*\.js$/, async (ctx, next) => {
    const { response , path } = ctx;
    ctx.type = mime.getType(path);
    response.set('expires', new Date(Date.now() + 2 * 60 * 10000).toString());
    const content = await fs.readFile(Path.resolve(__dirname, "public/"+path), 'UTF-8');
    ctx.body = content;
    await next();
});

app
    .use(router.routes())
    .use(router.allowedMethods());


app.listen(3000);
process.on('unhandledRejection', (err) => {
    console.error('有 promise 没有 catch', err);
});