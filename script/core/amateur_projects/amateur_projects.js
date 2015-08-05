app.controller('AmateurProjectsCtrl', function($scope, $routeParams){
    $scope.name = "AmateurProjectsCtrl";
    $scope.params = $routeParams;
    $scope.hobbys = [
        {
            name: 'angular-blog',
            description: 'Blog management system using Spring Boot, Spring MVN, AngularJS, Hibernate, Twitter Bootstrap',
            link: 'https://github.com/marczykm/angular-blog'
        },
        {
            name: 'Portfolio/profile page',
            description: 'This page',
            link: 'https://github.com/marczykm/my_site'
        }
    ];
});