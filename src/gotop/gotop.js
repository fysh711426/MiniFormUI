
var gotop = (function () {
    function getScrollTop() {
        return window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
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
            // var scrollY = getScrollTop();
            // // var speed = getClientWidth() >= 1025 ? 0.85 : 0.65;
            // // var delay = getClientWidth() >= 1025 ? 25 : 100;
            // var speed = 0.85;
            // var delay = 25;
            // setTimeout(function () {
            //     scroll = Math.floor(scroll * speed);
            //     document.documentElement.scrollTop = document.body.scrollTop = scroll;
            //     if (scroll > 0) {
            //         setTimeout(arguments.callee, delay);
            //     }
            // }, delay);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        onScroll(function () {
            var scrollY = getScrollTop();
            if (scrollY < 200) {
                gotop.classList.remove('show');
            } else {
                gotop.classList.add('show');
            }
        });
    }
})();