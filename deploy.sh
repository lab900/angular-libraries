#!/bin/sh
cd projects/angular-admin/
npm version patch
cd ../..
ng build angularAdmin --prod
cd dist/angular-admin
npm publish
