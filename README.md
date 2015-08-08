Can I Stream It Api
===================

A simple js wrapper for the can I stream it api

## Install 

```
npm i canIStreamIt
```

## Example

### Promise Chain
```js
var canIStreamIt = require('canIStreamIt');
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
canIStreamIt.search('evil dead', function(results) {
	canIStreamIt.streaming(results[0], function(result) {
		console.log(result);
	})
})
```