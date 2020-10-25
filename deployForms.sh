#!/bin/sh
cd projects/forms/
npm version 2.2.0-beta.6
cd ../..
npm run build:forms:prod
cd dist/@lab900/forms
npm publish --tag beta
