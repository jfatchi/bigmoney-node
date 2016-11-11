/* jshint esversion: 6 */
class Withdraw {
	constructor(bigMoney){
		this.BigMoney = bigMoney;
	}

	/**
	* Request a new withdraw transaction
	*
	* @param string dni User DNI
	* @param string uid User Id
	* @param function cb Callback
	*/
	request(dni, commerceUID, cb){
		this.BigMoney._restClient.call('/withdraw/request', {
			auth: this.BigMoney.getApiKeys(),
			data: {
				dni: dni,
				uid: commerceUID
			}
		},
		cb);
	}

	/**
	* Send new withdraw transaction
	*
	* @param string commerceTID Transaction Id
	* @param string commerceUID User Id
	* @param string dni DNI of the user
	* @param float amount Withdrawal amount
	* @param function cb Callback
	*/
	send(commerceTID, commerceUID, dni, amount, cb){
		this.BigMoney._restClient.call('/withdraw/send', {
			auth: this.BigMoney.getApiKeys(),
			data: {
				tid: commerceTID,
				uid: commerceUID,
				dni: dni,
				amount: amount
			}
		},
		cb);
	}
}

module.exports = Withdraw;
