Ext.application({
    name: "FoB",

    appFolder : "js/src",

    controllers : [
        "FoB.module.login.controller.LoginController",
        "FoB.module.home.controller.HomeController",
        "FoB.module.newAccount.Controller",
    ],

    launch: function() { }
});