module.exports = function ($window) {
	return {
		/**
		 * @Converts a JSON object to a querystring
		 * @returns string
		 */
		 getBrowserWidth: function(){
			return angular.element($window).width();
		},
		isDesktop:function(){
			var width = this.getBrowserWidth();
			return  width > 1024;
		},
		isTabletLarge:function(){
			var width = this.getBrowserWidth();
			return  width <= 1024 && width > 768;
		},
		isTabletPortrait:function(){
			var width = this.getBrowserWidth();
			return  width <= 768 && width > 480;
		}
	};
};
