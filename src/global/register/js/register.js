import '../sass/register.scss';

/*global
  $
*/

$(document).ready(() => {
  $('#signUpBtn').click(() => {
    console.log(123);
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