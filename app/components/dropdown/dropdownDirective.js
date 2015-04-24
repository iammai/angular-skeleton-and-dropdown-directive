Application.Directives.directive("dropdownMenu", function() {
    return {
        restrict: "E",
        templateUrl: "app/components/dropdown/dropdown-menu.html",
        controller: function() {
            this.selectItem = function(value, $event){
                alert(value); //ewww! Hate alerts but we're required to use it in this example! we also console log which is more gentle for debugging
                console.log(value);
            };
            this.selectSubItem = function(value, $event){
                alert(value);
                console.log(value);
                $event.stopPropagation();
            };
            this.selectSub2Item = function(value, $event){
                alert(value);
                console.log(value);
                $event.stopPropagation();
            };
        },
        controllerAs: "dropdown"
    };
});