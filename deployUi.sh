#!/bin/sh
cd projects/ui/
npm version patch
cd ../..
ng build ui --prod
cd dist/ui
npm publish
