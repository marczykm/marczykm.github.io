app.controller('EducationCtrl', function($scope, $routeParams) {
    $scope.name = "EducationCtrl";
    $scope.params = $routeParams;

    $scope.schools = [
        {
            name: 'Technical University of Wrocław',
            degree: "Bachelor of Engineering",
            department: 'Computer Science',
            years: '2009-2013'
        }
    ];
 })
