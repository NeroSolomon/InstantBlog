import '../sass/register.scss';

/*global
  $
*/

$('#registerForm').bootstrapValidator({
  live: 'disabled',
  submitButtons: '#signUpBtn',
  feedbackIcons: {//根据验证结果显示的各种图标
    valid: 'glyphicon glyphicon-ok',
    invalid: 'glyphicon glyphicon-remove',
    validating: 'glyphicon glyphicon-refresh'
  },
  fields: {
    userName: {
      validators: {
        notEmpty: {
          message: '请填写用户名'
        },
        stringLength: {
          min: 4,
          max: 12,
          message: '用户名必须大于等于4个字符，小于等于12个字符'
        }
      }
    },
    email: {
      validators: {
        notEmpty: {
          message: '请填写邮箱'
        },
        regexp: {
          regexp: /^\w+@[a-z0-9]+\.[a-z]{2,4}$/,
          message: '请填写正确的邮箱格式'
        }
      }
    },
    password: {
      validators: {
        notEmpty: {
          message: '请填写密码'
        }
      }
    },
    confirmPassword: {
      validators: {
        notEmpty: {
          message: '请确认密码'
        }
      }
    }
  }
});

$(document).ready(() => {
  $('#signUpBtn').click(() => {
    $('#registerForm').bootstrapValidator('validate');
    if ($('#registerForm').data('bootstrapValidator').isValid()) {
      $.post(
        '/sign-up',
        {
          userName: $('#userName').val(),
          email: $('#email').val(),
          password: $('#password').val()
        },
        (res) => {
          const { code } = res;
          if (code == 200) {
            $('.alert-success').eq(0).css('display', 'block');
            $('#signUpBtn').attr('disabled', 'true');
          }
        }
      );
    }
  });
});