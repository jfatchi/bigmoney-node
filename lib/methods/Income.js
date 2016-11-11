/* jshint esversion: 6 */
class Income {
	constructor(bigMoney){
		this.BigMoney = bigMoney;
	}

	/**
	 * Request a new reconciliation transfer
	 *
	 * @param float amount Amount requested
	 */
	request(dni, commerceUID, cb){
		this.BigMoney._restClient.call('/income/request', {
			auth: this.BigMoney.getApiKeys(),
			data: {
				amount: amount
			}
		},
		cb);
	}

}

module.exports = Income;
