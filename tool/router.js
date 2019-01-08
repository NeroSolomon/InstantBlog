
const db = require('./db.js');

exports.showIndex = (req, res) => {
  res.render('index');
};

exports.doLogin = (req, res) => {
  db.find({
    userName: req.body.userName,
    password: req.body.password
  }, 'loginMes', (err, result) => {
    if (err) throw err;

    if (result.length) {
      res.send({
        'code': 200,
        'msg': 'success',
        'data': null
      })
    } else {
      res.send({
        'code': 403,
        'msg': 'Have no this user',
        'data': null
      })
    }
  })
}

exports.showRegister = (req, res) => {
  res.render('register');
};

exports.signUp = (req, res) => {
  db.find({
    userName: req.body.userName
  }, 'loginMes', (err, result) => {
    if (err) throw err;

    if (result.length) {
      res.send({
        'code': 403,
        'msg': 'This user name is already exist!',
        'data': null
      });
    } else {
      db.insertOne({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password
      }, 'loginMes');

      res.send({
        'code': 200,
        'msg': 'ok',
        'data': null
      });
    }
  });
};