#!/bin/sh
cd lib || exit
npm version "$2"-alpha."$3"
cd ..
npm i -g @angular/cli
npm i
npm run build:forms:prod
cd dist/@lab900/forms || exit
npm config set -- '//registry.npmjs.org/:_authToken' "$1"
npm publish
