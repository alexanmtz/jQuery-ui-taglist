/**
 *
 * @name taglist
 * @namespace jQuery
 * @author Alexandre Magno (http://blog.alexandremagno.net)
 * @version 0.1
 * @description jQuery UI widget to handle tags
 * @requires
 *   jquery.ui.core.js
 *   jquery.ui.widget.js
 * @example  
 * $(function(){
 *   $("input#tags").taglist();
 * });
 * @returns {Object} jQuery
 */

(function( $, undefined ) {
$.widget( "ui.taglist", {
	options: {
		
	},
	_create: function() {
		$('<a href="#" class="jquery-ui-taglist-button">link</a>').insertAfter(this.element);
	},
	destroy: function() {
		
	}
});

$.extend( $.ui.taglist, {
	version: "0.1"
});
})(jQuery);