import '../sass/register.scss';

/*global
  $
*/

$(document).ready(() => {
  $('#signUpBtn').click(() => {
    $.post(
      '/sign-up',
      {
        userName: $('#userName').val(),
        email: $('#email').val(),
        password: $('#password').val()
      },
      (res) => {
        console.log(res);
      }
    );
  });
});