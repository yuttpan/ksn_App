angular.module('starter')


.controller('DspmCtrl', function($scope,$state,$http) {
 $http.get('http://118.175.76.244:81/ksn_hdc_api/dspm_main.php').success(function(result) {
      $scope.dspm = result;

      console.log($scope.dspm);

    });
});
