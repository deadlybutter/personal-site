// Get right content
// Insert into page

module.exports = router => {
  router.get('/*', (req, res) => {
    const path = req.path.slice(1, req.path.length);
    res.send(path);
  });
}
