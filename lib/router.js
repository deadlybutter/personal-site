const util = require('./util');
const page = require('./page');
const fileRoutes = require('../public/content/routes');

module.exports = router => {
  /**
   * Map given title to file path.
   * In the case of invalid title, route to 404.
   */
  router.get('/api/v1/route', (req, res) => {
    const title = req.query['title'];
    if (title in fileRoutes) {
      res.json({path: fileRoutes[title]});
      return;
    }

    res.json({path: fileRoutes['_404']});
  });

  /**
   * Handle all non API calls.
   * Returns the base static page.
   */
  router.get('/*', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(page.doc);
    res.end();
  });
}
