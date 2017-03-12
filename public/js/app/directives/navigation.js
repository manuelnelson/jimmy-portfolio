/**
 * Created by manny on 5/22/15.
 */
module.exports = function ($rootScope, $log, $window, $document) {
	return {
		restrict: 'A',
		scope: true,
		link: function (scope, elem, attrs) {
			scope.showMenu = false;
			scope.toggleMenu = function(callback){
				scope.showMenu = !scope.showMenu;
				if(callback)
					callback();
			}
			scope.offset = attrs.offset || 0;
			scope.scrollTo = function (divName) {
				scope.showMenu = !scope.showMenu;
				var scrollElement = angular.element(document.getElementById(divName));
    			$document.scrollToElement(scrollElement, scope.offset, 800);
			};
		}
	};
};
