#!/bin/sh
cd projects/admin/
npm version patch
cd ../..
ng build admin --prod
cd dist/admin
npm publish
