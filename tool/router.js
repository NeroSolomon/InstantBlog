
const db = require('./db.js');

exports.showIndex = (req, res)=> {
  res.render('index');
};

exports.showRegister = (req, res)=> {
  res.render('register');
};

exports.signUp = (req, res)=> {
  db.insertOne({
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password
  }, 'loginMes');
  res.send(200);
};