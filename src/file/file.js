function fileNavbar(setting) {
    setting = setting || {};

    // expand
    var toggle = document.querySelector('.file-navbar-toggle');
    var expand = document.querySelector('.file-navbar-expand');
    if (toggle && expand) {
        toggle.addEventListener('click', function (e) {
            e.stopPropagation();
            if (!toggle.classList.contains('open')) {
                toggle.classList.add('open');
                expand.classList.add('open');
            }
            else {
                toggle.classList.remove('open');
                expand.classList.remove('open');
            }
        });
    }
    
    // hover
    var enableHover = setting.enableHover || false;
    if (enableHover) {
        var warp = document.querySelector('.file-navbar-title-warp');
        var navbarTitle = document.querySelector('.file-navbar-title');
        var navbarTitleOver = document.querySelector('.file-navbar-title-over');
        navbarTitle.addEventListener('mouseover', function () {
            warp.classList.add('hover');
        });
        navbarTitleOver.addEventListener('mouseleave', function () {
            warp.classList.remove('hover');
        });
    }

    // image over
    function onToggle() {
        navbar.classList.toggle('over');
    }
    var enableImageOver = setting.enableImageOver || false;
    if (enableImageOver) {
        var navbar = document.querySelector('.file-navbar');
        var images = document.querySelectorAll('.file-image-block');
        for (var i = 0; i < images.length; i++) {
            var item = images[i];
            item.classList.add('over');
            item.addEventListener('click', onToggle);
        }
        onToggle();
    }

    // text over
    var enableTextOver = setting.enableTextOver || false;
    if (enableTextOver) {
        var navbar = document.querySelector('.file-navbar');
        var text = document.querySelector('.file-text-content');
        text.classList.add('over');
        onToggle();
        text.addEventListener('click', onToggle);
    }
}

var onTextThemeButtonChange = (function() {
    var prev = null;
    return function(newTheme) {
        var themeButton = document.querySelector('.text-theme-button');
        if (prev) {
            themeButton.classList.remove(prev);
        }
        themeButton.classList.add(newTheme);
        prev = newTheme;
    };
})();