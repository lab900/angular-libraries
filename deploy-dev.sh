#!/bin/sh
npm install -g @angular/cli
cd lib || exit
npm version prerelease --preid test
cd ..
npm run build:forms:prod
cd dist/@lab900/forms || exit
npm config set -- '//registry.npmjs.org/:_authToken' "$1"
npm publish
