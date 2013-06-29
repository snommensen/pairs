'use strict';

angular.module('pairingApp')
    .controller('ConfigCtrl', ['$scope', function ($scope) {
        $scope.teamMembers = [
            'snowman'
        ];
        $scope.addMember = function (newMember) {
            $scope.teamMembers.unshift(newMember);
        };
        $scope.removeMember = function (newMember) {
            var idx = $scope.teamMembers.indexOf(newMember);
            if (idx < 0 || idx > $scope.teamMembers.length - 1) {
                return;
            }
            $scope.teamMembers.remove(idx);
        };
    }]);
