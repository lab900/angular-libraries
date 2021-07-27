#!/bin/sh
# Only use for manual deploys
cd lib/ || exit
npm version prerelease --preid alpha
cd ../
npm run build:forms:prod
cd dist/@lab900/forms || exit
npm publish
