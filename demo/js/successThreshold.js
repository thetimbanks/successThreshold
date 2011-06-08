$.ajaxPrefilter(function (options, originalOptions, jqXHR) {
    if (originalOptions.successThreshold && $.isFunction(originalOptions.success)) {
        var start, stop;
        options.beforeSend = function () {
            start = new Date().getTime();
            if ($.isFunction(originalOptions.beforeSend))
                originalOptions.beforeSend();
        };
        options.success = function (response) {
            var that = this, args = arguments;
            stop = new Date().getTime();

            function applySuccess() {
                originalOptions.success.apply(that, args);
            }

            var difference = originalOptions.successThreshold - (stop - start);
            if (difference > 0)
                setTimeout(applySuccess, difference);
            else
                applySuccess();
        };
    }
});