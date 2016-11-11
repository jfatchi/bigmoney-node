/* jshint esversion: 6 */
const RestClient = require('./connection/RestClient');
const Deposit = require('./methods/Deposit');
const Withdraw = require('./methods/Withdraw');
const Income = require('./methods/Income');
const Notification = require('./notification/Notification');

class BigMoney {
	constructor(mid, mkey){
		this._mid = mid;
		this._mkey = mkey;

		this._restClient = new RestClient();
	}

	setApiMid(mid){
		this._mid = mid;
	}

	setApiMkey(mkey){
		this._mkey = mkey;
	}

	getApiKeys(){
		return {
			mid: this._mid,
			mkey: this._mkey
		};
	}

	Deposit(){
		return new Deposit(this);
	}

	Withdraw(){
		return new Withdraw(this);
	}

	Notification(inputJSON=null){
		return new Notification(this, inputJSON);
	}
}

module.exports = BigMoney;
