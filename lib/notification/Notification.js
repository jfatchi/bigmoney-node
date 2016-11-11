/* jshint esversion: 6 */
class Notification {
	constructor(bigMoney, inputJson){
		this.BigMoney = bigMoney;
		this.data = JSON.parse(inputJson);
	}

	/**
	* Get data of the current notification input
	*
	* @return object Input notification
	*/
	getData(){
		return this.data;
	}

	/**
	* Format notification data into valid response
	*/
	response(success=true){

	}

}

module.exports = Notification;
