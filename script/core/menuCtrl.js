app.controller('MenuCtrl', 
    function($scope, $mdSidenav, $mdUtil, $log){
        var hash_slash = '#/';

        $scope.menu = [
            {
                label: 'Home',
                url: hash_slash
            },
            {
                label: 'Education',
                url: hash_slash+'education'
            },
            {
                label: 'Career',
                url: hash_slash+'career'
            },
            {
                label: 'Projects',
                url: hash_slash+'projects'
            },
            {
                label: 'Hobby',
                url: hash_slash+'hobby'
            }//,
//            {
//                label: 'Amateur projects',
//                url: hash_slash+'amateur_projects'
//            }
        ];

        $scope.closeMenu = function () {
            $mdSidenav('left').close()
                .then(function () {
                    $log.debug("close LEFT is done");
                });
        };
    });
