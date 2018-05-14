window.onload = function(){
    function toggleMenu(e) {
        if(button.className.indexOf('enable') !== -1) {
            disabled(button);
            var menuImages = menu.getElementsByTagName('span');
            if(button.className.indexOf('is-active') !== -1) {
                button.classList.remove('is-active');
                hideMenu(menuImages);
            } else {
                button.classList.add('is-active');
                showMenu(menuImages);
            }
        } else {
            return;
        }
    }

    function disabled(elem) {
        elem.classList.remove('enable');
        elem.classList.add('disable');
    }

    function enabled(elem) {
        elem.classList.remove('disable');
        elem.classList.add('enable');
    }

    function hideMenuElement (elem, winHeight) {
        elem.style.clip = "rect(" + winHeight + "px auto " + winHeight + "px 0px)";
    }

    function showMenuElement(elem, winHeight) {
        elem.style.clip = "rect(0px auto " + winHeight + "px 0px)";
    }

    function resetMenuElement(collection) {
        for(var i = 0; i < collection.length; i++) {
            collection[i].style.clip = "rect(0px auto 0px 0px)";
        }
    }

    function hideMenu(collection) {
        var ind = 0,
            windowHeight = window.innerHeight,
            interval = setInterval(function() {
                if(ind < collection.length) {
                    hideMenuElement(collection[ind], windowHeight);
                    ind += 1;
                } else {
                    setTimeout(function(){
                        resetMenuElement(collection);
                    }, 400);
                    setTimeout(function(){
                        enabled(button);
                    }, 800);
                    clearInterval(interval);
                }
            }, 80);
    }

    function showMenu(collection) {
        var ind = 0,
            windowHeight = window.innerHeight,
            interval = setInterval(function() {
                if(ind < collection.length) {
                    showMenuElement(collection[ind], windowHeight);
                    ind += 1;
                } else {
                    setTimeout(function(){
                        enabled(button);
                    }, 400);
                    clearInterval(interval);
                }
            }, 80);
    }

    var button = document.getElementsByClassName('main-nav-toggle')[0],
        menu = document.getElementsByClassName('main-navigation')[0];
    button.addEventListener('click', toggleMenu);
};


