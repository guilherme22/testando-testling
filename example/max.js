var maxBy = require('../testeUm.js');
var n = maxBy([9,3,4], function (x) { return x % 3 });
console.log(n);