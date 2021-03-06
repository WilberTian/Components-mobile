define([
	'jquery',
	'../../../Component',
	'../../../Utils',
	'text!./TouchListItem.ejs'
], function($, Component, Utils, ejsTpl){
	TouchListItem._model = {
		text: ''
	};

	TouchListItem._view = {
		template: ejsTpl,
		events: {
			'touchstart .C_ListItem': 'touchstart_event',
			'touchmove .C_ListItem': 'touchmove_event',
			'touchend .C_ListItem': 'touchend_event'
		}
	};

	function TouchListItem(options) {
		Component.apply(this, arguments || {});
	}

	Utils.inherit(TouchListItem, Component);

	TouchListItem.prototype.touchstart_event = function(e) {
		var self = this;
		e.preventDefault();
		
		self.touchStartX = e.targetTouches[0].pageX;
		self.touchElTranslateX = $(e.currentTarget).offset().left;
		self.touchmoved = false;
	}

	TouchListItem.prototype.touchmove_event = function(e) {
		var self = this;
		e.preventDefault();

		var touchMoveX = e.targetTouches[0].pageX;
		self.moveOffset = touchMoveX - self.touchStartX;
	
		if(self.touchElTranslateX < 0) {
			if(self.moveOffset > 0 && self.moveOffset < 120) {
				self.moveOffset -= 90;
				$(e.currentTarget).css('transform', 'translateX(' + self.moveOffset + 'px)');
			}
		} else {
			if(self.moveOffset < 0 && self.moveOffset > -120) {
				$(e.currentTarget).css('transform', 'translateX(' + self.moveOffset + 'px)');
			}
		}

		self.touchmoved = true;
	}

	TouchListItem.prototype.touchend_event = function(e) {
		var self = this;
		e.preventDefault();

		if (self.touchmoved) {
			if(self.moveOffset > -45) {
				$(e.currentTarget).css('transform', 'translateX(0px)');
				$(e.currentTarget).css('transition', '.5s');
			} else {
				$(e.currentTarget).css('transform', 'translateX(-90px)');
				$(e.currentTarget).css('transition', '.5s');
			}
		}
	}

	return TouchListItem;
});
