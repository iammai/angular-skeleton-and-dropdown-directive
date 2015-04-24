Application.Directives.directive("gamePanels", function() {
    return {
        restrict: "E",
        templateUrl: "app/components/panel/game-panels.html",
        controller: function() {
            this.tab = 1;

            this.selectTab = function(newValue){
                this.tab = newValue;
            };

            this.isSelected = function(tabName){
                return this.tab === tabName;
            };
        },
        controllerAs: "panel"
    };
});