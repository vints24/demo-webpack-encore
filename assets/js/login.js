require('../css/login.css');
const $ = require('jquery');

'use strict';

(function(window, $) {
    $(document).ready(function() {
        $('.js-recommended-login').on('click', '.js-show-login', function(e) {
            e.preventDefault();

            $('.js-recommended-login-details').toggle();
        });
        $('.js-show-login').tooltip();

        $('.js-login-field-email').on('keydown', function(e) {
            const $emailInput = $(e.currentTarget);
            // remove any existing warnings
            $('.login-long-email-warning').remove();

            import ('./Components/show_login_email_error')
                .then((ShowLoginEmailError) => {
                    ShowLoginEmailError.default($emailInput);
                })
            if ($emailInput.val().length >= 30) {
                const $warning = $('<div class="login-long-email-warning">This is a really long email - are you sure that is right?</div>');
                $emailInput.before($warning);
            }
        });
    });
})(window, jQuery);
