#!/bin/sh
#cd projects/forms/
#npm version patch
#cd ../..
ng build forms --prod
cd dist/forms
npm publish
