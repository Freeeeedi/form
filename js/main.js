"use strict"

$(document).ready(function () {
    $(document).on('click', '.form__submit', function (e) {
        let data = $('.form').serialize(),
            key = $('.form input#key'),
            password = $('.form input#new_password'),
            passwordAgree = $('.form input#password_agree');
        $('.text-error').css('display', 'none');
        e.preventDefault();
        if (password.val().length < 6) {
            password.closest('.form__input-container').find('p.text-error').css('display', 'block');
        }
        if (password.val() !== passwordAgree.val()) {
            passwordAgree.closest('.form__input-container').find('p.text-error').css('display', 'block');
        }
        $.ajax({
            method: 'post',
            url: '/ajax_handler/check_form.php',
            data: data,
            dataType: 'html',
            success: function (res) {
                if (res == 'error_key') {
                    key.closest('.form__input-container').find('p.text-error').css('display', 'block');
                } else if (res == 'success') {
                    $('.popup__form-container').html('<div class="text-success"><p>Пароль успешно изменен!</p></div>');
                }
            }
        });
    })
});