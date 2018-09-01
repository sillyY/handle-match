# handle-match
A small module to handle matching functions

## Example
```
var match = require('handle-match');
var data = ['1111', 'aaaa','2222'];

function test1(data) {
    console.log(`${data} is number`);
}
function test2(data) {
    console.log(`${data} is letter`);
}

var map  = new Map();
map.set(/\d/, test1);
map.set(/[a-zA-Z]/, test2);

match(data, map);
// => 1111 is number
// => 2222 is number
// => aaaa is letter
```

## LICENSE [MIT](https://github.com/sillyY/handle-match/blob/master/LICENSE)