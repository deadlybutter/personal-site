./node_modules/.bin/babel ./public/js/main.js --presets babili --out-file ./public/release/main.min.js
./node_modules/.bin/babel ./public/js/components --presets babili --out-file ./public/release/components.min.js
node-sass --output-style compressed ./public/scss/main.scss -o ./public/release/
