const util = require('./util');
const page = require('./page');
const fileRoutes = require('../public/content/routes');
const sortedByRecent = Object
  .keys(fileRoutes)
  .map(key => {
    return {
      url: key,
      path: fileRoutes[key].path,
      created: fileRoutes[key].created
    };
  })
  .filter(file => file.created)
  .sort((file1, file2) => {
    return new Date(file2.created).getTime() - new Date(file1.created).getTime();
  });

module.exports = router => {
  /**
   * Map given title to file path.
   * In the case of invalid title, route to 404.
   */
  router.get('/api/v1/route', (req, res) => {
    const title = req.query['title'];
    if (title in fileRoutes) {
      res.json({path: fileRoutes[title].path});
      return;
    }

    res.json({path: fileRoutes['_404'].path});
  });

  /**
   * Get most recent posts
   * In the case of invalid title, route to 404.
   */
  router.get('/api/v1/recent', (req, res) => {
    const amount = req.query['amount'] || 3;
    res.json(sortedByRecent.slice(0, amount));
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
