## Creating a new library

1) from the folder /:
ng generate library AngularAdmin

--> This will create the library on /projects/angular-admin

2) update /projects/angular-admin/tslint.json:
directive-selector and component-selector: replace lib to lab900

3)
update /projects/angular-admin/package.json to look similar to this:

```
{
  "name": "@lab900/angular-admin",
  "version": "0.0.1",
  "peerDependencies": {
    "@angular/common": "^9.1.6",
    "@angular/core": "^9.1.6",
    "tslib": "^1.10.0"
  },
  "repository": {
    "type": "git",
    "url": "git://github.com/lab900/angular-libraries.git"
  }
}
````
4) Add the file /projects/angular-admin/.npmrc

with content:
```
registry=https://npm.pkg.github.com/lab900
```

## Publishing the library
1) Create a personal access token
    https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line

2) Use your token to sign into npm
    ```
    npm login --scope=@lab900 --registry=https://npm.pkg.github.com
    ```
    (use the token when it asks for your password)

  
The next steps are also executed when running the script /deploy.sh

3) from /projects/angular-admin/
    ```
    npm version patch       --> 0.0.2
    npm version minor       --> 0.1.0
    npm version major       --> 1.0.0
    ```

4) build the library you want to publish
(from /projects/angular-admin/ or from root)
    ```
    ng build angularAdmin --prod
    ```

5) publish the library
    from /dist/angular-admin:
    ```
    npm publish
    ```

## using the library
    
    npm install @lab900/angular-admin@0.1.2
    or
    npm install @lab900/angular-admin@latest
    