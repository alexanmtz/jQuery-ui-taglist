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
 *   jquery.ui.button.js
 * @example  
 * $(function(){
 *   $("input#tags").taglist();
 * });
 * @returns {Object} jQuery
 */

(function( $, undefined ) {
$.widget( "ui.taglist", {
	options: {
		buttonText: false
	},
	_create: function() {
		$('<a />',{
			'class' : 'jquery-ui-taglist-button',
			'href' : '#'
		}).insertAfter(this.element).button({
			icons: {
				primary: 'ui-icon-plus'
			}
		});;
	},
	destroy: function() {
		
	}
});

$.extend( $.ui.taglist, {
	version: "0.1"
});
})(jQuery);