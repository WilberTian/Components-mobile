define([
	'jquery',
	'../Component',
	'../Utils',
	'text!./List.ejs'
], function($, Component, Utils, ejsTpl){
	List._model = {
		listItems: []
	};

	List._view = {
		template: ejsTpl
	};

	List._messages = {};

	function List(options) {
		Component.apply(this, arguments || {});
	}

	Utils.inherit(List, Component);

	List.prototype.afterMount = function() {
		var self = this;

		self.model.listItems.forEach(function(listItem) {
			self.find('.C_List').append(listItem.$el);
		});
	}

	return List;
});
