Ext.define("FoB.module.newAccount.Controller", {
    extend: 'Ext.app.Controller',

    config: {
        routes: {
            'newAccount' : 'showForm'
        }
    },

    showForm : function() {
        var view = Ext.create("FoB.module.newAccount.View");
        Ext.Viewport.setActiveItem(view);
    }
});