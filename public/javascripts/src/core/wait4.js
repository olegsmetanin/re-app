function wait4(ObjName, msg) {
    return function (fn) {
        var counter = 0;

        function wait() {
            if (typeof window[ObjName] === 'undefined') {
                counter++;
                if (counter < 9) {
                    window.setTimeout(wait, 200 * Math.pow(2, counter));
                } else {
                    throw(msg);
                }
            } else {
                fn();
            }
        }

        wait();
    }
}

var wait4L = wait4('L', "Leaflet is not loaded!");

