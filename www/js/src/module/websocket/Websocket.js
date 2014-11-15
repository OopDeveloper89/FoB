Ext.define("FoB.module.websocket.Websocket", {
	singleton : true,
	
	config : {
		host : null,
		port : null,
		connection : null,
		messageHandler : null
	},
	
	/**
	 * @constructor
	 * @author oopdeveloper
	 */
	constructor : function() {
		this.setMessageHandler(Ext.create("FoB.websocket.MessageHandler"));
		this.setHost("fob.dev");
		this.setPort(1414);
	},
	
	/**
	 * @public
	 * @author oopdeveloper
	 */
	open : function() {
		var that = this;
		var deferred = new $.Deferred();
		
		var url = "ws://" + that.getHost() + ":" + that.getPort();

		that.setConnection(new WebSocket(url));
		
		that.getConnection().onopen = function(e) {
			console.log("Connection established!");
			deferred.resolve(that);
		};

		that.getConnection().onmessage = function(e) {
			that.getMessageHandler().handle(JSON.parse(e.data));
		};
		
		return deferred.promise();
	},
	
	/**
	 * @public
	 * @author oopdeveloper
	 * @param {string} commandName
	 * @param {string} methodName
	 * @param {object} parameters
	 */
	send : function(commandName, methodName, parameters) {
		var json = {
			"command" : commandName,
			"method" : methodName,
			"parameters" : parameters
		}
		
		this.getConnection().send(JSON.stringify(json));
	}
});