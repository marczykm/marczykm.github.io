app.controller('ProjectsCtrl', function($scope, $routeParams){
    $scope.name = "ProjectsCtrl";
    $scope.params = $routeParams;

    $scope.projects = 
    [
        {
            name: 'Kredyt ratalny Euroraty',
            company: 'eurobank',
            hired: {from: '02.2016', to: 'now'},
            description: "",
            tools: 
            [
                'Java',
                'Spring',
                'angularJS',
                'JSP',
                'Hibernate',
                'JUnit',
                'WLS',
                'Maven',
                'GIT',
                'JIRA'
            ]
        },
        {
            name: 'FIS++',
            company: 'Capgemini',
            hired: {from: '09.2014', to: '01.2016'},
            description: "Application for managing production process in Volkswagen's plant.",
            tools: 
            [
                'Java',
                'Spring',
                'Hibernate',
                'JUnit',
                'Eclipse RCP',
                'Maven',
                'GIT',
                'Squish',
                'JIRA',
                'Confluence'
            ]
        },
        {
            name: 'Cogitatus',
            company: 'Elektronika i Telematyka Drogowa',
            hired: {from: '10.2013', to: '04.2014'},
            description: 'Application that manages Intelligent Transportation System for public transport provider in Wrocław.',
            tools: 
            [
                'Java',
                'EJB 3.0',
                'JSF/Primefaces',
                'Javascript/jQuery',
                'HTML',
                'SVN',
                'Ubuntu',
                'bash'
            ]
        }
    ];
});
