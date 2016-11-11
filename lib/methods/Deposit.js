/* jshint esversion: 6 */
class Deposit {
	constructor(bigMoney){
		this.BigMoney = bigMoney;
	}

	/**
	* Request a new deposit transaction
	*
	* @param float amount Amount
	* @param string commerceTID Transaction Id
	* @param string commerceUID User Id
	* @param function cb Callback
	*/
	request(amount, commerceTID, commerceUID, cb){
		this.BigMoney._restClient.call('/deposit/request', {
			auth: this.BigMoney.getApiKeys(),
			data: {
				amount: amount,
				tid: commerceTID,
				uid: commerceUID
			}
		},
		cb);
	}

	/**
	* Get the info of a given deposit transaction
	*
	* @param string commerceTID Commerce transaction Id
	* @param string bigMoneyTID BigMoney transaction Id
	* @param function cb Callback
	*/
	info(commerceTID, bigMoneyTID, cb){
		this.BigMoney._restClient.call('/deposit/info', {
			auth: this.BigMoney.getApiKeys(),
			data: {
				tid: commerceTID,
				bmtid: bigMoneyTID
			}
		},
		cb);
	}
}

module.exports = Deposit;
