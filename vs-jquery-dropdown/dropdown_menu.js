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
            this.createMenuHtml();
            this.menuItems = $('div.unit');
            this.bindEvents();
        },

        //createMenuHtml appends the Dropdown HTML from the MENUJson, this is not needed if we simply know and place static html in index.html instead
        createMenuHtml: function() {
            for (var i in MENU) {
                var title = MENU[i].title;
                var mainBar = $("<div class='menu-item unit' data-title='" + title + "'>" + title + "</div>");
                this.menuSpace.append(mainBar);

                if (MENU[i].submenu && MENU[i].submenu !== null) {
                    mainBar.addClass('has-submenu');
                    for (var k in MENU[i].submenu) {
                        var title = MENU[i].submenu[k].title;
                        var subBar = $("<div class='submenu-item unit' data-title='" + title + "'>" + title + "</div>");
                        mainBar.append(subBar);


                        if (MENU[i].submenu[k].submenu && MENU[i].submenu[k].submenu !== null) {
                            subBar.addClass('has-sub2menu');
                            for (var j in MENU[i].submenu[k].submenu) {
                                var title = MENU[i].submenu[k].submenu[j].title
                                var sub2Bar = $("<div class='sub2menu-item unit' data-title='" + title + "'>" + title + "</div>");
                                subBar.append(sub2Bar);
                            }
                        }
                    }
                }
            }
        },

        bindEvents: function() {
            var self = this;
            self.menuItems.bind('click', function(event){
                //binds events to only the parent, not the children nodes
                if (event.target !== this) return;

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