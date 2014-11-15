Ext.define("FoB.module.template.TemplateAbstract", {

    /**
     * Creates the view.
     *
     * @author oopdeveloper
     * @return {string}
     */
    create : function() {
        var html = templates[this.TEMPLATE_NAME].render();
        $("body").append(html);
    }
});