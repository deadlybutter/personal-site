mkdir public/release
cp node_modules/whatwg-fetch/fetch.js public/release
npm run build
if [[ -z "${PRODUCTION_ASSETS}" ]];
then
  {
    # npm run build watches for changes, so this kills it after the assets has def. finished building
    sleep 5s
    echo 'Done!'
    kill $$
  } &
  npm run build_dev;
fi
