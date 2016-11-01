module.exports = {
  /**
   * Create an HTML tag.
   * @param  {string} name       Name of tag.
   * @param  {array} properties  Array containing properties to set.
   *                             Item format should be {name: '', value: ''}.
   * @param  {bool} closeTag     Shoud this tag have a closing tag?
   * @return {string}            HTML tag.
   */
  createTag: function(name, properties, closeTag) {
    const closer = closeTag ? `</${name}>` : '';
    return `<${name} ${properties.map(property => `${property.name}="${property.value}"`)}>${closer}`;
  },

  /**
   * Create an HTML script tag for the given src param.
   * @param  {string} src URL source.
   * @return {string}     HTML Script tag
   */
  createScriptTag: function (src) {
    return this.createTag('script', [{name: 'src', value: src}], true);
  },

  /**
   * Create an HTML meta tag for the given properties.
   * @param  {array} properties  Array containing properties to set.
   *                             Item format should be {name: '', value: ''}.
   * @return {string}            HTML Meta tag.
   */
  createMetaTag: function (properties) {
    return this.createTag('meta', properties, false);
  },

  /**
   * Create an HTML link tag for the given stylesheet url.
   * @param  {string} url URL to stylesheet.
   * @return {string}     HTML Link tag.
   */
  createStyleTag: function (url) {
    return this.createTag('link', [
      {
        name: 'rel',
        value: url
      }
    ], false);
  }
}
