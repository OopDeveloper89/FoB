Ext.define("FoB.module.login.controller.LoginController", {
    extend: 'Ext.app.Controller',
    requires : [
    ],

    config: {
        routes: {
            '' : 'showLoginForm',
        }
    },

    showLoginForm : function() {
        var view = Ext.create("FoB.module.login.view.LoginView");
        Ext.Viewport.setActiveItem(view);

        ko.applyBindings(this);
    },

    redirectToNewAccount : function() {
        this.redirectTo("newAccount");
    }
});