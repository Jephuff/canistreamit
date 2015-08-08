Can I Stream It Api
===================

A simple js wrapper for the can I stream it api

## Install 

```
npm i canistreamit
```

## Example

### Promise Chain
```js
var canistreamit = require('canistreamit');
canIStreamIt.search('evil dead')
	.then(function(results){
		return canIStreamIt.streaming(results[0]);
	})
	.then(function(result){
		console.log(result);
	})
```

### callbacks
```js
var canistreamit = require('canistreamit');
canistreamit.search('evil dead', function(results) {
	canIStreamIt.streaming(results[0], function(result) {
		console.log(result);
	})
})
```