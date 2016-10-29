module.exports = {
  /**
   * Create an HTML script tag for the given src param.
   * @param  {string} src URL source.
   * @return {string}     HTML Script tag
   */
  createScriptTag: function (src) {
    return `<script src=${src}></script>`;
  }
}
