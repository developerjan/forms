'use strict';

/**
 * @ngdoc function
 * @name formApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the formApp
 */
angular.module('formApp')
    .controller('MainCtrl', function ($scope) {
        $scope.forms = [
            {
                name: "Contact Form",
                tags: ['azazaza', 'test', 'blablabla'],
                image: "https://app-futurama.emailmeform.com/external/img/library/3.Your-Knowledge-of-Geography.jpg"
            },
            {
                name: "Contact Form",
                tags: ['azazaza', 'test', 'blablabla'],
                image: "https://app-futurama.emailmeform.com/external/img/library/3.Your-Knowledge-of-Geography.jpg"
            },
            {
                name: "Contact Form",
                tags: ['azazaza', 'test', 'blablabla'],
                image: "https://app-futurama.emailmeform.com/external/img/library/3.Your-Knowledge-of-Geography.jpg"
            }

        ];

        $scope.formIndex = [
            "Contact Form",
            "Contact Form",
            "Contact Form"
        ]

        $scope.loadForms = function() {
            var last = $scope.forms[$scope.forms.length - 1];
            for(var i = 1; i <= 3; i++) {
                $scope.forms.push({
                    name: "Form" + i,
                    tags: ['azazaza', 'test', 'blablabla'],
                    image: "https://app-futurama.emailmeform.com/external/img/library/3.Your-Knowledge-of-Geography.jpg"
                });
                $scope.formIndex.push("Form" + i);
            }
        };

        //$scope.search = function(keyword) {
        //    console.debug($scope.formIndex);
        //    console.debug($scope.formIndex.indexOf());
        //}

});
