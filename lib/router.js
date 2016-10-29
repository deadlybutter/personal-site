const util = require('./util');

const CLIENT_LIB_REACT = 'https://unpkg.com/react@15.3.2/dist/react.js';
const CLIENT_LIB_REACT_MINIFIED = 'https://unpkg.com/react@15.3.2/dist/react.min.js';
const CLIENT_LIB_REACT_DOM = 'https://unpkg.com/react-dom@15.3.2/dist/react-dom.js';
const CLIENT_LIB_REACT_DOM_MINIFIED = 'https://unpkg.com/react-dom@15.3.2/dist/react-dom.min.js';
const CLIENT_LIB_MAIN = '/main.js';
const CLIENT_LIB_MAIN_MINIFIED = '/main.min.js';
const CLIENT_LIB_COMPONENTS = '/components.js';
const CLIENT_LIB_COMPONENTS_MINIFIED = '/components.min.js';

/**
 * Create the base markup to send downstream.
 *
 * @param  {object} content Content the client should render.
 * @return {string}         HTML5 Markup
 */
function formulateBasePage(content) {
  // Create default content script.
  const scripts = [`<script>window.content=${JSON.stringify(content)}</script>`];

  const prod = process.env.NODE_ENV === 'production';

  // Add React.
  scripts.push(util.createScriptTag(prod ? CLIENT_LIB_REACT_MINIFIED : CLIENT_LIB_REACT));
  scripts.push(util.createScriptTag(prod ? CLIENT_LIB_REACT_DOM_MINIFIED : CLIENT_LIB_REACT_DOM));

  // Add Application JS.
  scripts.push(util.createScriptTag(prod ? CLIENT_LIB_COMPONENTS_MINIFIED : CLIENT_LIB_COMPONENTS));
  scripts.push(util.createScriptTag(prod ? CLIENT_LIB_MAIN_MINIFIED : CLIENT_LIB_MAIN));

  // Create final markup.
  return `<!DOCTYPE html>\n<html lang="en">\n<body>\n${scripts.join('\n')}\n</body>\n</html>`;
}

module.exports = router => {
  router.get('/*', (req, res) => {
    const path = req.path.slice(1, req.path.length);
    //TODO: Get content for path.
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(formulateBasePage(path));
    res.end();
  });
}
