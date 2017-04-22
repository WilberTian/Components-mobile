define([
	'jquery',
	'../../../Component',
	'../../../Utils',
	'text!./TextListItem.ejs'
], function($, Component, Utils, ejsTpl){
	TextListItem._model = {
		text: ''
	};

	TextListItem._view = {
		template: ejsTpl,
		events: {
			'click .C_ListItem': 'listItemClick_event'
		}
	};

	TextListItem._messages = {
		LISTITEM_CLICK: 'LISTITEM_CLICK'
	};

	function TextListItem(options) {
		Component.apply(this, arguments || {});
	}

	Utils.inherit(TextListItem, Component);

	TextListItem.prototype.listItemClick_event = function(e) {
		this.msgBus.publish('LISTITEM_CLICK', e);
	}

	return TextListItem;
});
