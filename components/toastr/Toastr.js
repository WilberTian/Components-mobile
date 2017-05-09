define([
	'jquery',
	'../Component',
	'../Utils',
	'text!./Toastr.ejs'
], function($, Component, Utils, ejsTpl){

	Toastr._model = {
		content: 'Please fill the content',
		timeout: 3000
	};

	Toastr._view = {
		template: ejsTpl
	};

	Toastr._style = {}

	Toastr._messages = {};

	function Toastr(options) {
		Component.apply(this, arguments || {});
	}

	Utils.inherit(Toastr, Component);

	Toastr.prototype.mount = function() {
		var $el = this.$el;

		this.$toastrItem = $(this.renderedComponent);
	    $el.append(this.$toastrItem);

	    this.afterMount();

	    return this;
	}

	Toastr.prototype.afterMount = function() {
		var self = this;

		if(this.model.timeout > 0) {
			this._autoCloseTimer = setTimeout(function(){
				self.$toastrItem.remove();
				clearTimeout(this._autoCloseTimer);

				self.scrollHelper.beforeClose();
			}, this.model.timeout);
		}

		self.scrollHelper = Utils.scrollHelper();
		self.scrollHelper.afterOpen();
	}

	return Toastr;
});
