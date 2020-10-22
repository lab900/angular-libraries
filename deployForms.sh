#!/bin/sh
cd projects/forms/
npm version preminor --preid=beta
cd ../..
npm run build:forms:prod
cd dist/@lab900/forms
npm publish --tag beta
