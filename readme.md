`npm i` as usual, then

Reproducing the problem:

`node test.js`

Demonstration that partial import v2 hides the issue:

* `grunt` (passes)
* `npm i postcss-partial-import@3`
* `grunt` (fails)