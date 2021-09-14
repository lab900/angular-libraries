# Getting Started with Lab900 UI

This guide explains how to setup your Angular project to begin using Lab900 UI.

## Install

Install via npm package manager.

```bash
npm install --save @lab900/ui
```

## How to use

The library isn't a single module but multiple component modules.
If you want to use for example the Lab900TableModule you just import it in the module you need.

```ts
import { Lab900TableModule } from '@lab900/ui';

@NgModule({
  imports: [
    ...
    Lab900TableModule,
    ...
  ],
  bootstrap: [],
})
export class MyModule {}
```

## Styling

Include the library stylesheet in your scss file.

```scss
@import '~@lab900/ui/theming';

@include lab900-ui(YOUR_MATERIAL_THEME);
```

The lab900-ui mixin expects a [Material theme of config](https://material.angular.io/guide/theming).
