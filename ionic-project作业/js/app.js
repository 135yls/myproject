/**
 * Created by aoyolo on 16/11/23.
 */
angular.module('myapp',['ionic','myapp.controller','myapp.config','myapp.dummyDataService'])
    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: 'templates/tabs.html'
            })

            .state('tab.mylive', {
                url: '/mylive',
                views: {
                    'tab-mylive': {
                        templateUrl: 'templates/mylive.html',
                        controller: 'MyliveController'
                    }
                }
            })

            .state('tab.travel', {
                url: '/travel',
                views: {
                    'tab-travel': {
                        templateUrl: 'templates/travel.html',
                        controller: 'TravelController'
                    }
                }
            })

            .state('tab.picked', {
                url: '/picked',
                views: {
                    'tab-picked': {
                        templateUrl: 'templates/picked.html',
                        controller: 'PickedController'
                    }
                }
            })

            .state('tab.user', {
                url: '/user',
                views: {
                    'tab-user': {
                        templateUrl: 'templates/user.html',
                        controller: 'UserController'
                    }
                }
            });

        $urlRouterProvider.otherwise('/tab/mylive');
    })
