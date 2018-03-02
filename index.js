const postCssLess = require('postcss-less');
var postcss = require('postcss');
const less = `
.a{
  width:1rem;
  .b{
    height:1rem;
  }
}

`;
const _root = postCssLess.parse(less);
_root.replaceValues(/.?\d+px/, {
    fast: 'rem'
}, string => {
    return parseInt(parseFloat(string) / 640 * 750) + 'px';
});
postcss(require('./myplugin.js'))
    .process(less, {
        syntax: postCssLess
    })
    .then((result) => {
        console.log(result.content); // this will be value of `lessCode` without changing comments or mixins
    });
