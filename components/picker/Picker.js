define([
	'jquery',
	'../Component',
	'../Utils',
	'text!./Picker.ejs'
], function($, Component, Utils, ejsTpl){
	Picker._model = {
		options: [],
		selected: -1
	};

	Picker._view = {
		template: ejsTpl,
		events: {
			'click .cancel_btn': 'cancelClick_event',
			'click .ok_btn': 'okClick_event',
			'click .C_Picker_Item': 'pickerItemClick_event'
		}
	};

	Picker._messages = {
		PICKER_CANCEL: 'PICKER_CANCEL',
		PICKER_CONFIRM: 'PICKER_CONFIRM',
		PICKERITEM_CLICK: 'PICKERITEM_CLICK'
	};

	function Picker(options) {
		Component.apply(this, arguments || {});
	}

	Utils.inherit(Picker, Component);

	Picker.prototype.afterMount = function() {
		this.find('.C_Picker_container').addClass('animate-slide-up');

		this.scrollHelper = Utils.scrollHelper();
		this.scrollHelper.afterOpen();
	}

	Picker.prototype.cancelClick_event = function(e) {
		this.msgBus.publish('PICKER_CANCEL', e);
		this.scrollHelper.beforeClose();
		this.destory();
	}

	Picker.prototype.okClick_event = function(e) {
		this.scrollHelper.beforeClose();
		this.msgBus.publish('PICKER_CONFIRM', e);
	}

	Picker.prototype.pickerItemClick_event = function(e) {
		this.msgBus.publish('PICKERITEM_CLICK', e);
	}

	return Picker;
});
