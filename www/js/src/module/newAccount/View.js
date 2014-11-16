Ext.define("FoB.module.newAccount.View", {
   extend : "Ext.Container",

    config : {
      //  html : templates["newAccount_form"].render()
    },

    initialize : function() {
        var container = new UIB.Container();
        container.addContent(new UIB.Panel());
        this.setHtml(container.render());
    }
});