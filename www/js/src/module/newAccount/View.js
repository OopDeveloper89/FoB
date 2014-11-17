Ext.define("FoB.module.newAccount.View", {
   extend : "Ext.Container",

    config : {
      //  html : templates["newAccount_form"].render()
    },

    initialize : function() {
        var panel = new UIB.Panel();
        panel.addContent(new UIB.HtmlOutput("Test"));

        var container = new UIB.Container();
        container.addContent(panel);
        this.setHtml(container.render());
    }
});