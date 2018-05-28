app.controller('FooterCtrl', function($scope, $timeout, $mdBottomSheet){
    $scope.bottomSheetItems = [
        {
            icon: 'img/icon/linkedin.svg',
            label: 'LinkedIn',
            url: 'https://pl.linkedin.com/pub/marcin-marczyk/59/884/a64',
            color: '#0097B9',
            tooltip: 'check me on LinkedId'
        },
        {
            icon: 'img/icon/github.svg',
            label: 'GitHub',
            url: 'https://github.com/marczykm?tab=repositories',
            color: '#777777',
            tooltip: 'check my projects on GitHub'
        },
        {
            icon: 'img/icon/mail.svg',
            label: 'Email',
            url: 'mailto:m.l.marczyk@gmail.com',
            color: '#4AB367',
            tooltip: 'send me an email'
        },
       {
           icon: 'img/icon/cv.svg',
           label: 'CV EN',
           url: 'https://docs.google.com/document/d/1ZBwZfXk3G7Yh1WNxf6S0PnlCA7hWKi4Ne4d8PgSqWKg/edit?usp=sharing',
           color: '#FFB404',
           tooltip: 'get my CV'
       },
       {
           icon: 'img/icon/cv.svg',
           label: 'CV PL',
           url: 'https://docs.google.com/document/d/1wUyfOCbgq6Hx1Wn6roAbovOZRkfhvWIp__OQsuB6LlQ/edit?usp=sharing',
           color: '#FFB404',
           tooltip: 'get my CV'
       },
    ];

    $scope.showGridBottomSheet = function($event) {
        $mdBottomSheet.show({
            templateUrl: 'script/core/bottom-sheet-grid-template.html',
            controller: 'FooterCtrl',
            targetEvent: $event
        });
    };

    $scope.redirect = function(url){
        var win = window.open(url, '_blank');
        win.focus();
    }
});