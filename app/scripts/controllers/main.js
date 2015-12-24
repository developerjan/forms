'use strict';

/**
 * @ngdoc function
 * @name formApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the formApp
 */
angular.module('formApp')
    .controller('MainCtrl', function ($scope, $http) {
        $scope.forms = [];

        var page = 0;
        var wait = false;

        $scope.getFormData = function(after){
            if (wait) return;
            wait = true;
            $http.get('https://www.reddit.com/r/gadgets.json?limit=5&after=' + after.id).success(function(posts){

                var postings = posts.data.children;
                for(var index = 0; index < postings.length; ++index){
                    var post = postings[index];
                    $scope.forms.push({
                        id: 't3_' + post.data.id,
                        name: post.data.title,
                        tags: ['azazaza', 'test', 'blablabla'],
                        image: "https://app-futurama.emailmeform.com/external/img/library/3.Your-Knowledge-of-Geography.jpg"
                    });
                }
                wait = false;
            });
        };

        $scope.getFormData(0);

        $scope.formIndex = [
            "Contact Form",
            "Contact Form",
            "Contact Form"
        ];

        $scope.doSearch = function(keyword){

            $scope.search = keyword;
        };
        $scope.doSearchByObj = function(obj){
            if(obj != undefined)
                $scope.search = obj.title;
        };

        $scope.loadForms = function() {
            var last = {id: "first"};

            if($scope.forms.length > 0){
                last = $scope.forms[$scope.forms.length - 1];
            }
            $scope.getFormData(last);
        };


});
