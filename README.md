Success Threshold jQuery Prefilter
==================================

This prefilter allows you to pass a value in milliseconds to an $.ajax call that will delay the execution of the success function.  Delaying the success function allows you to display some type of loading message for short $.ajax calls.

## Installation ##

Just copy the script into any js file that is included on all pages that need access to the prefilter.

## Usage ##

    $.ajax({
	    ...
	    successThreshold: 3000,
	    success: function() {
		    ...
	    }
	    ...
    });

The previous example will not run the success function until at least 3 seconds after the call has been made.  The amount of time the call takes is subtracted from the successThreshold option.  If the call took less than the threshold, the success function is delayed the difference.  If the call took longer than the threshold the success function is immediately fired.

## Demo ##

A demo and further explanation can be found on this [blog post](http://thetimbanks.com/2011/06/08/setting-a-threshold-on-jquery-ajax-callbacks-using-prefilters/)