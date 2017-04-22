define([
	'jquery',
	'../Component',
	'../Utils',
	'text!./Cell.ejs'
], function($, Component, Utils, ejsTpl){
	Cell._model = {
		cellItems: []
	};

	Cell._view = {
		template: ejsTpl,
		events: {
			'click .C_Cell_Item': 'navItemClick_event'
		}
	};

	Cell._messages = {
		CELL_ITEM_CLICK: 'CELL_ITEM_CLICK'
	};

	function Cell(options) {
		Component.apply(this, arguments || {});
	}

	Utils.inherit(Cell, Component);

	Cell.prototype.navItemClick_event = function(e) {
		this.msgBus.publish('CELL_ITEM_CLICK', e);
	}

	return Cell;
});
