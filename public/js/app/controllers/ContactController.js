module.exports = function ($rootScope, $log, $window, $scope, $http) {
	$scope.submit = function(){
		if($scope.form.$invalid){
			return;
		}
		$http.post('/api/contact',$scope.contact).success(function(result,status){
			if(result.success)
				$scope.submitted = true;
			else
				$scope.showErrorMessage = true;
		});
	}
};
