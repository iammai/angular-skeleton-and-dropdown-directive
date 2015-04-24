Application.Directives.directive('myYoutube', function($sce) {
    return {
        restrict: 'EA',
        replace: true,
        template: '<div class="video-container"><iframe style="overflow:hidden;height:100%;width:100%" width="100%" height="100%" src="{{url}}" frameborder="0" allowfullscreen></iframe></div>',
        link: function ($scope) {
            $scope.$watch('code', function (newCode) {
                if (newCode) {
                    $scope.url = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + newCode + "?start=" + $scope.start);
                }
                else{
                    $scope.url = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + $scope.code + "?start=" + $scope.start);
                }
            });
            $scope.$watch('start', function (newStart) {
                if (newStart) {
                    $scope.url = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + $scope.code + "?start=" + newStart);
                }
                else{
                    $scope.url = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + $scope.code + "?start=" + $scope.start);
                }
            });
        }
    };
});
