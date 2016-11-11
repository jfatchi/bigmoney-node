/* jshint esversion: 6 */
class RestClient {
	constructor(ssl=true, apiVersion='v1'){
		this.options = {
		  host: 'services.bigmoney.es',
		  port: 80,
		  method: 'POST',
			path: null
		};

		this.ssl = ssl;
		this.apiVersion = apiVersion;
		this.options.host = this.ssl !== true ? 'http://' + this.options.host : 'https://' + this.options.host;
		this.rest = require('restler');
	}

	call(method, params, cb){
		let url = `${this.options.host}/apibm/${this.apiVersion}${method}`;

		this.rest.post(url, {data: params}).on('complete',
		(data, response) => {
		  if (response && response.statusCode === 200) {
				if(cb) cb(JSON.parse(data));
		  }
			else{
				if(cb) cb({error:true, errorCode:'CONNECTION', msg:'No se pudo establecer la conexión con BigMoney'});
			}
		});
	}
}

module.exports = RestClient;
