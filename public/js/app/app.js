// angular app reference must be a tier 1 name, non namespaced, for `ngmin` to work correctly
//var app = angular.module('portfolio', ['ngTouch']).run(function ($rootScope) {
var app = angular.module('portfolio', ['ngTouch','duScroll']).run(function ($rootScope) {
	$rootScope.currentLanguage = "english";

	$rootScope.goToUrl = function(url,target){
		if(target == 'blank')
			window.open(url);
		else
			window.location = url;
	}
});
