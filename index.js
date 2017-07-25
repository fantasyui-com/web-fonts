const postcss = require('postcss');

module.exports = postcss.plugin('web-fonts', function plugin(options) {
  return function (css) {
    options = options || {};
    css.prepend({ name: 'import', params: options.import });

    css.append(`${options.selector} { font-family: ${options.family}; }`);
  }
});
