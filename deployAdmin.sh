#!/bin/sh
cd projects/admin/
npm version patch
cd ../..
npm run build:admin:prod
cd dist/@lab900/admin
npm publish
