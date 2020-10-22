#!/bin/sh
cd projects/forms/
npm version prepatch --preid=beta
cd ../..
npm run build:forms:prod
cd dist/@lab900/forms
npm publish --tag beta
