# bigmoney-node
BigMoney package for Node

Example usage
-------------
```javascript
let BigMoney = require('bigmoney-node');

let Bmoney = new BigMoney('YOUR_SECRET_MID','YOUR_SECRET_MKEY');

// Create a new BigMoney Deposit
Bmoney.Deposit().request(10, 23, 123, result => {
	// Handle result
	console.log(result);
});
```
