/**
 * Created by aoyolo on 16/11/23.
 */
angular.module('myapp.controller',[])
.controller('MyliveController',function($scope,MyliveFactory,G){

    $scope.imgUrl = G.imgUrl;
    console.log('mylive')
    $scope.$on('updateMylive',function(){
        $scope.myliveData= MyliveFactory.getMyliveData()
        console.log($scope.myliveData);
    })
    var myliveData = MyliveFactory.getMylive()

}).controller('TravelController',function($scope){

    console.log('travel')

}).controller('PickedController',function($scope){

    console.log('picked')

}).controller('UserController',function($scope){

    console.log('user')

})