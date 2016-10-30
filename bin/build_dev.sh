./node_modules/.bin/babel ./public/js/main.js --watch --source-maps --out-file ./public/release/main.js &
./node_modules/.bin/babel ./public/js/components/ --watch --source-maps --out-file ./public/release/components.js &
node-sass --output-style compressed ./public/scss/main.scss --watch ./public/scss -o ./public/release/
