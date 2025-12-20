function onNav() {
    var leftMenu = document.querySelector('.left-menu');
    var main = document.querySelector('.main');
    if (leftMenu.classList.contains('active')) {
        leftMenu.classList.remove('active');
        main.classList.remove('active');
    } else {
        leftMenu.classList.add('active');
        main.classList.add('active');
    }
}

function onNavOpen() {
    var leftMenu = document.querySelector('.left-menu');
    var leftMenuMask = document.querySelector('.left-menu-mask');
    if (leftMenu.classList.contains('open')) {
        leftMenu.classList.remove('open');
        leftMenuMask.classList.remove('open');
    } else {
        leftMenu.classList.add('open');
        leftMenuMask.classList.add('open');
    }
}

function onNavClose() {
    onNavOpen();
}

function selectMenu(val) {
    var items = document.querySelectorAll('.left-menu-item');
    for (var item of items) {
        if (item.getAttribute('select-val') === val) {
            if (!item.classList.contains('active')) {
                item.classList.add('active');
            }
        } else {
            item.classList.remove('active');
        }
    }
}

function selectSubMenu(val) {
    var items = document.querySelectorAll('.sub-menu-item');
    for (var item of items) {
        if (item.getAttribute('select-val') === val) {
            if (!item.classList.contains('active')) {
                item.classList.add('active');
            }
        } else {
            item.classList.remove('active');
        }
    }
}

var onThemeButtonChange = (function() {
    return function(newTheme) {
        var dark = document.querySelector('.theme-button-dark');
        var light = document.querySelector('.theme-button-light');
        if (newTheme === 'dark') {
            light.classList.remove('show');
            dark.classList.add('show');
        }
        else {
            light.classList.add('show');
            dark.classList.remove('show');
        }
    };
})();