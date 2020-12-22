#!/bin/sh
cd projects/ui/
npm version minor
cd ../..
npm run build:ui:prod
cd dist/@lab900/ui
npm publish
