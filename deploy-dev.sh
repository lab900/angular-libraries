#!/bin/sh
cd lib
npm version prerelease --preid test
cd ..
npm run build:forms:prod
cd dist/@lab900/forms
npm config set -- '//registry.npmjs.org/:_authToken' "$1"
npm publish
