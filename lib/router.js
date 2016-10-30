const util = require('./util');

const CLIENT_LIB_REACT = 'https://unpkg.com/react@15.3.2/dist/react.js';
const CLIENT_LIB_REACT_MINIFIED = 'https://unpkg.com/react@15.3.2/dist/react.min.js';
const CLIENT_LIB_REACT_DOM = 'https://unpkg.com/react-dom@15.3.2/dist/react-dom.js';
const CLIENT_LIB_REACT_DOM_MINIFIED = 'https://unpkg.com/react-dom@15.3.2/dist/react-dom.min.js';
const CLIENT_LIB_MAIN = '/main.js';
const CLIENT_LIB_MAIN_MINIFIED = '/main.min.js';
const CLIENT_LIB_COMPONENTS = '/components.js';
const CLIENT_LIB_COMPONENTS_MINIFIED = '/components.min.js';

const TEST_CONTENT = util.testContent;

/**
 * Create an HTML header for the given title.
 * @param  {string} title   Title of the page.
 * @return {string}
 */
function formulateHeader(title, scripts) {
  return `<head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${title}</title><link rel="stylesheet" href="main.css"></head>`;
}

/**
 * Create all of the script tags required for this environment.
 * @return {array} scripts script tags
 */
function formulateScripts() {
  const scripts = [];
  const prod = process.env.NODE_ENV === 'production';

  // Add React.
  scripts.push(util.createScriptTag(prod ? CLIENT_LIB_REACT_MINIFIED : CLIENT_LIB_REACT));
  scripts.push(util.createScriptTag(prod ? CLIENT_LIB_REACT_DOM_MINIFIED : CLIENT_LIB_REACT_DOM));

  // Add Application JS.
  scripts.push(util.createScriptTag(prod ? CLIENT_LIB_COMPONENTS_MINIFIED : CLIENT_LIB_COMPONENTS));
  scripts.push(util.createScriptTag(prod ? CLIENT_LIB_MAIN_MINIFIED : CLIENT_LIB_MAIN));

  return scripts;
}

/**
 * Create the base markup to send downstream.
 *
 * @param  {object} content Content the client should render.
 * @return {string}         HTML5 Markup
 */
function formulateBasePage(content) {
  // Create default content script.
  const scripts = [`<script>window.content=${JSON.stringify(content)}</script>`].concat(formulateScripts());
  const header = formulateHeader(content.title);

  // Create final markup.
  return `<!DOCTYPE html>\n<html lang="en">\n${header}\n<body><div id="jsx-root"></div>${scripts.join('\n')}</body>\n</html>`;
}

module.exports = router => {
  router.get('/*', (req, res) => {
    const path = req.path.slice(1, req.path.length);
    //TODO: Get content for path.
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(formulateBasePage(TEST_CONTENT));
    res.end();
  });
}
