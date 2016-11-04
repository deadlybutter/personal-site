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
    const renderedProperties = [];

    // Unfortunately using .map leaves a comma after each entry.
    properties.forEach((property) => {
      renderedProperties.push(`${property.name}="${property.value}"`);
    });

    return `<${name} ${renderedProperties.join(' ')}>${closer}`;
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
        value: 'stylesheet'
      },
      {
        name: 'type',
        value: 'text/css'
      },
      {
        name: 'href',
        value: url
      }
    ], false);
  }
}
