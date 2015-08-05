app.controller('HobbyCtrl', function($scope, $routeParams){
    $scope.name = "HobbyCtrl";
    $scope.params = $routeParams;
    $scope.schools = [
        {
            name: 'Home beer brewing'
        },
        {
            name: 'Home automation using Raspberry Pi, Arduino'
        },
        {
        	name: 'New technologies'
        }
    ];
});