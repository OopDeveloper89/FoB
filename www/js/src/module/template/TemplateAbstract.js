Ext.define("FoB.module.template.TemplateAbstract", {

    /**
     * Creates the view.
     *
     * @author kemal
     * @return {string}
     */
    create : function() {
        var html = templates[this.TEMPLATE_NAME].render();
        $("body").append(html);
    }
});