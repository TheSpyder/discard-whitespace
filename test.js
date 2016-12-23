var css = 'body { margin: 0 auto; } h2 { color: red; }';

var postcss = require('postcss');
var comments = require('postcss-discard-comments');

var output = postcss(comments()).process(css).css;
console.log(output);

if (output.indexOf('margin:0') > -1 || output.indexOf('color:red') > -1)
	console.error('spaces incorrectly removed');