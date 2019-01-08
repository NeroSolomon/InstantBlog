import '../sass/index.scss';

/*global
$
*/
$(document).ready(function () {

  // 获取博客信息
  // $.ajax({
  //   url: '../../data/data.json',
  //   success: function (res) {
  //     console.log(res);
  //   }
  // });

  // login
  $('#loginBtn').click(() => {
    console.log(123);
    $.post('/login', {
      userName: $('#user-name').val(),
      password: $('#password').val()
    },
    (res) => {
      const { code } = res;
      if (code == 200) {
        window.location.href='/';
      }
    })
  })

});