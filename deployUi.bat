cd projects/ui/
call npm version patch
cd ../..
call npm run build:ui:prod
cd dist/@lab900/ui
call npm publish
