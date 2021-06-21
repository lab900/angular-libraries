#!/bin/sh
cd lib/
npm version prerelease --preid alpha
cd ..
npm run build:forms:prod
cd dist/@lab900/forms
npm publish
