cd projects/forms/
call npm version patch
cd ../..
call npm run build:forms:prod
cd dist/@lab900/forms
call npm publish
