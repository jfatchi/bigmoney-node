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
		let keys = this.BigMoney.getApiKeys();

		var crypto = require('crypto');
		var shasum = crypto.createHash('sha1');
		shasum.update(keys.mid+keys.mkey);

		let response = {
			success: success,
			data: this.data,
			signature: shasum.digest('hex')
		};

		return JSON.stringify(response);
	}
}

module.exports = Notification;
