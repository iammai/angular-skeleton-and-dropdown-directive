var MENU = [
  {
    'title': 'Item 1',
    'submenu': null
  },
  {
    'title': 'Item 2',
    'submenu': null
  },
  {
    'title': 'Item 3',
    'submenu': [
      {
        'title': 'Sub 1',
        'submenu': null
      },
      {
        'title': 'Sub 2',
        'submenu': null
      },
      {
        'title': 'Sub 3',
        'submenu': [
          {
            'title': 'SubSub 1',
            'submenu': null
          },
          {
            'title': 'SubSub 2',
            'submenu': null
          },
          {
            'title': 'SubSub 3',
            'submenu': null
          },
        ]
      }
    ]
  }
];

(function() {

    var Menu = {
        init: function() {
            this.menuSpace = $('#menu-space');
            this.menuItems = $('div.unit');
            this.bindEvents();
        },

        bindEvents: function() {
            var self = this;
            self.menuItems.bind('click', function(event){
                event.stopPropagation();

                var unit = $(event.target);
                self.displayAlert(unit.attr('data-title'));
            });
        },

        displayAlert: function(displayText) {
            alert(displayText); // Alerts! Bad form! Eep! console.log is much more kind.
            console.log(displayText);
        }


    }

    Menu.init();
}());