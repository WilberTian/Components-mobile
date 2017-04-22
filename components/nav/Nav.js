define([
	'jquery',
	'../Component',
	'../Utils',
	'text!./Nav.ejs'
], function($, Component, Utils, ejsTpl){
	Nav._model = {
		navItems: []
	};

	Nav._view = {
		template: ejsTpl,
		events: {
			'click .C_Nav_Item': 'navItemClick_event'
		}
	};

	Nav._messages = {
		NAV_ITEM_CLICK: 'NAV_ITEM_CLICK'
	};

	function Nav(options) {
		Component.apply(this, arguments || {});
	}

	Utils.inherit(Nav, Component);

	Nav.prototype.navItemClick_event = function(e) {
		this.msgBus.publish('NAV_ITEM_CLICK', e);
	}

	return Nav;
});
