const util = require('./util');

const PROD = process.env.NODE_ENV === 'production';

const scriptTags = [
  util.createScriptTag(PROD ? 'https://unpkg.com/react@15.3.2/dist/react.min.js' : 'https://unpkg.com/react@15.3.2/dist/react.js'),
  util.createScriptTag(PROD ? 'https://unpkg.com/react-dom@15.3.2/dist/react-dom.min.js' : 'https://unpkg.com/react-dom@15.3.2/dist/react-dom.js'),
  util.createScriptTag('/fetch.js'),
  util.createScriptTag(PROD ? '/main.min.js' : '/main.js'),
  util.createScriptTag(PROD ? '/components.min.js' : '/components.js')
].join('\n');

const metaTags = [
  util.createMetaTag([
    {
      name: 'charset',
      value: 'utf-8'
    }
  ]),
  util.createMetaTag([
    {
      name: 'http-equiv',
      value: 'X-UA-Compatible'
    },
    {
      name: 'content',
      value: 'IE=edge'
    }
  ]),
  util.createMetaTag([
    {
      name: 'name',
      value: 'viewport'
    },
    {
      name: 'content',
      value: 'width=device-width, initial-scale=1'
    }
  ])
].join('\n');

const styleTags = [
  util.createStyleTag('main.css')
].join('\n');

const header = `<head>${metaTags}\n${styleTags}</head>`;

module.exports = {
  doc: `<!DOCTYPE html>\n<html lang="en">\n${header}\n<body><div id="jsx-root"></div>${scriptTags}</body>\n</html>`,
}
