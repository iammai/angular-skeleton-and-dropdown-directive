Application.Directives.directive("dropdownMenu", function() {
    return {
        restrict: "E",
        templateUrl: "app/components/dropdown/dropdown-menu.html",
        controller: function() {
            this.selectItem = function(value, $event){
                console.log(value);
            };
            this.selectSubItem = function(value, $event){
                console.log(value);
                $event.stopPropagation();
            };
            this.selectSub2Item = function(value, $event){
                console.log(value);
                $event.stopPropagation();
            };
        },
        controllerAs: "dropdown"
    };
});