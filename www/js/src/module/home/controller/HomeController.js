Ext.define("FoB.module.home.controller.HomeController", {
    extend: 'Ext.app.Controller',
    requires : [
    ],

    config: {
        refs : {
            loginview : 'loginview'
        },
        routes: {
            'home' : 'show',
        }
    },

    show : function() {
        var view = Ext.create("FoB.module.home.view.HomeView");
        Ext.Viewport.setActiveItem(view);
    }
});