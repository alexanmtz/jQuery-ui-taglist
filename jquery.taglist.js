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
		
	},
	_create: function() {
		var self = this;
		var container = $('<div></div>',{
			'class' : 'jquery-ui-taglist-container ui-widget'
		});
		this.element.wrap(container);
		$('<a />',{
			'class' : 'jquery-ui-taglist-button',
			'href' : '#',
			click: {}
		}).insertAfter(this.element).button({
			icons: {
				primary: 'ui-icon-plus'
			}
		});
		
	},
	addTag: function() {
		
	},
	destroy: function() {
		
	}
});

$.extend( $.ui.taglist, {
	version: "0.1"
});
})(jQuery);