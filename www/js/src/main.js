Ext.application({
    name: "FoB",

    appFolder : "js/src",

    requires : [
        "FoB.module.login.view.LoginView"
    ],

    /**
     * Main entry point of the app.
     *
     * @author kemal
     */
    launch: function() {
        var loginView = Ext.create("FoB.module.login.view.LoginView");
    }
});