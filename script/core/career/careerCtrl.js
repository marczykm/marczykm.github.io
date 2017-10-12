app.controller('CareerCtrl', function($scope, $routeParams){
    $scope.name = "CareerCtrl";
    $scope.params = $routeParams;

    $scope.jobs = [
        {
            position: 'Java Developer/Designer',
            company: 
            {
                name: 'eurobank', 
                city: 'Wrocław',
                country: 'Poland'
            },
            hired: 
            {
                from: '02.2016', 
                to: 'now'
            }
        },
        {
            position: 'Java Software Engineer',
            company: 
            {
                name: 'Capgemini', 
                city: 'Wrocław',
                country: 'Poland'
            },
            hired: 
            {
                from: '05.2014', 
                to: '01.2016'
            }
        },
        {
            position: 'Java Developer',
            company: 
            {
                name: 'Elektronika i Telematyka Drogowa', 
                city: 'Wrocław',
                country: 'Poland'
            },
            hired: 
            {
                from: '10.2013', 
                to: '04.2014'
            }
        },
        {
            position: 'Web Developer',
            company: 
            {
                name: 'IMT Lab', 
                city: 'Wrocław',
                country: 'Poland'
            },
            hired: 
            {
                from: '09.2012', 
                to: '09.2013'
            }
        }
    ];
});
