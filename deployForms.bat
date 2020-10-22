cd projects/forms/
call npm version preminor --preid=beta
cd ../..
call npm run build:forms:prod
cd dist/@lab900/forms
call npm publish
