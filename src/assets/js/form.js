;(function($) {
    $(".wd-form__select-menu").selectmenu({
        classes: {
            "ui-selectmenu-menu": "wd-form__select-list",
            "ui-selectmenu-button": "wd-form__select-btn",
            "ui-selectmenu-icon": "wd-form__select-icon",
        }
    });
    $(document).ready(function(){
        $('.wd-form__load-input').change(function () {
            $('.wd-form__load--subtitle').text(this.files.length + " file(s) selected");
        });
    });
})(jQuery);