angular.module('starter')


.controller('DspmCtrl', function($scope,$state,$http) {
 $http.get('http://118.175.76.244:81/ksn_hdc_api/dspm_main.php').success(function(result) {
      $scope.dspm = result;

      console.log($scope.dspm);

    });

     $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];

})


.controller('DspmPcuCtrl', function($scope,$state,$stateParams,$http) {
var hospcode = $stateParams ;
      console.log(hospcode);

    $http.get('http://118.175.76.244:81/ksn_hdc_api/dspm_detail.php?hospcode='+ hospcode ).success(function(result) {
      $scope.dspm = result;


      console.log($scope.dspm);

    });


});
