/**
 * Created by manny on 5/22/15.
 */
module.exports = function ($rootScope, $log, browserWidth) {
	return {
		restrict: 'A',
		scope: true,
		link: function (scope, elem, attrs) {
			scope.showMore = false;
			scope.readMore = function(){
				scope.showMore = true;
			};
			scope.close = function(){
				scope.showMore = false;
			};
		}
	}
};
