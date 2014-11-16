Ext.define("FoB.module.login.view.LoginView", {
    extend : "Ext.Container",
    xtype : "loginview",

    config : {
        html: templates["login_form"].render()
    }
});