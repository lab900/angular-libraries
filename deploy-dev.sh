#!/bin/sh
cd lib
npm version prerelease --preid test
cd ..
npm run build:forms:prod
cd dist/@lab900/forms
npm publish
