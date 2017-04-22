define([
	'jquery',
	'../Component',
	'../Utils',
	'text!./Select.ejs'
], function($, Component, Utils, ejsTpl){
	Select._model = {
		options: [],
		selected: -1
	};

	Select._view = {
		template: ejsTpl,
		events: {
			'click .C_Select_Item': 'selectItemClick_event'
		}
	};

	Select._messages = {
		SELECT_CLICK: 'SELECT_CLICK'
	};

	function Select(options) {
		Component.apply(this, arguments || {});
	}

	Utils.inherit(Select, Component);

	Select.prototype.selectItemClick_event = function(e) {
		this.updateModel({
			selected: $(e.currentTarget).data('value')
		});

		this.msgBus.publish('SELECT_CLICK', e);
	}

	return Select;
});
