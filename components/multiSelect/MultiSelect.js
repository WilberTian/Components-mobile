define([
	'jquery',
	'../Component',
	'../Utils',
	'text!./MultiSelect.ejs'
], function($, Component, Utils, ejsTpl){
	MultiSelect._model = {
		options: [],
		selected: []
	};

	MultiSelect._view = {
		template: ejsTpl,
		events: {
			'click .C_MultiSelect_Item': 'selectItemClick_event'
		}
	};

	MultiSelect._messages = {
		MULTISELECT_CLICK: 'MULTISELECT_CLICK'
	};

	function MultiSelect(options) {
		Component.apply(this, arguments || {});
	}

	Utils.inherit(MultiSelect, Component);

	MultiSelect.prototype.selectItemClick_event = function(e) {
		var selected = this.model.selected.slice();

		var selectedValue = $(e.currentTarget).data('value');

		var idx = selected.indexOf(selectedValue);
		if(idx > -1) {
			selected.splice(idx, 1);
		} else {
			selected.push(selectedValue);
		}

		this.updateModel({
			selected: selected
		});

		this.msgBus.publish('MULTISELECT_CLICK', e);
	}

	return MultiSelect;
});
