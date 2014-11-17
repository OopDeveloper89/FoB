// Define the namespace
var UIB = {};

/**
 * Represents a container.
 */
UIB.Container = function() {

    this.classList = ["container"];

    this.contentList = [];

    this.addClass = function(cls) {
        this.classList.push(cls);
    };

    this.addContent = function(content) {
        this.contentList.push(content);
    };

    this.render = function () {
        var output = '<div class="' + this.getClassListOutput() + '">';
        for (var i = 0; i < this.contentList.length; i++) {
            output += this.contentList[i].render();
        }
        output += '</div>';
        return output;
    };

    this.getClassListOutput = function() {
        return this.classList.join(" ");
    };
};

/**
 * Represents a panel.
 */
UIB.Panel = function() {
    this.classList = ["panel panel-default"];

    this.render = function() {
        var output = '<div class="' + this.getClassListOutput() + '">';
        output += '<div class="panel-body">';

        for (var i = 0; i < this.contentList.length; i++) {
            output += this.contentList[i].render();
        }
        output += '</div>'; // panel body close tag
        output += '</div>';

        return output;
    };
};
UIB.Panel.prototype = new UIB.Container();

/**
 * Represents a html output.
 */
UIB.HtmlOutput = function(output) {
    this.render = function() {
        return output;
    };
};