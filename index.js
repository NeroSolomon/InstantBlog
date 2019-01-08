const path = require('path');
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();
const router = require('./tool/router.js');

/*global
  __dirname
*/

// 设置模板引擎
app.set('view engine', 'ejs');

// 设置模板读取位置
app.set('views', (__dirname + '/dist/views').split(path.sep).join('/'));

// 设置静态文件夹
app.use(express.static('./dist/global'));

// 使用express-session
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

// 使用body-parser中间件
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 首页
app.get('/', router.showIndex);

// 登录
app.post('/login', router.doLogin);

// 注册页
app.get('/register', router.showRegister);

// 提交注册表单
app.post('/sign-up', router.signUp);

// 创建一个http服务
const server = require('http').createServer(app);
// const io = require('socket.io')(server);

// 监听3000端口
server.listen(3000);