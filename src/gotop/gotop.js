
var gotop = (function () {
    function getScrollTop() {
        return window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
    }
    function getClientWidth() {
        return document.documentElement.clientWidth;
    }
    var onScroll = function (callback, delay) {
        var scheduled = false;
        delay = delay || 100;
        document.addEventListener('scroll', function () {
            if (!scheduled) {
                scheduled = true;
                setTimeout(function () {
                    callback.call(this);
                    scheduled = false;
                }, delay);
            }
        });
    }
    return function (selector) {
        var gotop = document.querySelector(selector);
        gotop.addEventListener("click", function (e) {
            e.preventDefault();
            var scroll = getScrollTop();
            // var speed = getClientWidth() >= 1025 ? 0.85 : 0.65;
            // var delay = getClientWidth() >= 1025 ? 25 : 100;
            var speed = 0.85;
            var delay = 25;
            setTimeout(function () {
                scroll = Math.floor(scroll * speed);
                document.documentElement.scrollTop = document.body.scrollTop = scroll;
                if (scroll > 0) {
                    setTimeout(arguments.callee, delay);
                }
            }, delay);
        });
        onScroll(function () {
            var scroll = getScrollTop();
            if (scroll < 200) {
                gotop.className = gotop.className.replace(' show', '');
            } else {
                if (gotop.className.indexOf('show') === -1) {
                    gotop.className = gotop.className + ' show';
                }
            }
        });
    }
})();