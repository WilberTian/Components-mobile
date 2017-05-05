define([
	'jquery',
	'../Component',
	'../Utils',
	'text!./Map.ejs',
	'async!baidumap'
], function($, Component, Utils, ejsTpl){

	Map._view = {
		template: ejsTpl
	};

	Map._messages = {};

	function Map(options) {
		Component.apply(this, arguments || {});
	}

	Utils.inherit(Map, Component);

	Map.prototype.afterMount = function(e) {
		require(['bdidumapconvertor'], function() {
			navigator.geolocation.getCurrentPosition(translatePoint); 
		});
	}

	function translatePoint(position){ 
		var currentLat = position.coords.latitude; 
		var currentLon = position.coords.longitude; 
		var gpsPoint = new BMap.Point(currentLon, currentLat); 
		BMap.Convertor.translate(gpsPoint, 0, initMap); 
	} 
	function initMap(point){ 
		//初始化地图 
		map = new BMap.Map("map-container"); 
		map.addControl(new BMap.NavigationControl()); 
		map.addControl(new BMap.ScaleControl()); 
		map.addControl(new BMap.OverviewMapControl()); 
		map.centerAndZoom(point, 15); 
		map.addOverlay(new BMap.Marker(point)) 
	} 

	return Map;
});
