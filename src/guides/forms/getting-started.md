# Getting Started with Lab900 Forms

This guide explains how to setup your Angular project to begin using Lab900 forms.

## Install

Install via npm package manager.

```bash
npm install --save @lab900/forms
```

## How to use

Import the `Lab900FormsModule` in your root module.

```ts
import { Lab900FormsModule } from '@lab900/forms';

@NgModule({
  imports: [
    ...
    NgxMaskModule.forRoot(),
    Lab900FormsModule.forRoot({
      formField: {
        appearance: 'outline', // optional, see below
      },
    }),
    ...
  ],
  bootstrap: [],
})
export class AppModule {}

```

You can overwrite the [MatFormFieldDefaultOptions](https://material.angular.io/components/form-field/api) in the `forRoot()` method.

```ts
FormModuleSettings = {
  formField: {
    appearance: 'standard', // default
    floatLabel: 'auto', // default
    hideRequiredMarker: false, // default
  },
};
```

Import the `Lab900FormsModule` in your child modules (where needed).

```ts
import { Lab900FormsModule } from '@lab900/forms';

@NgModule({
  imports: [
    ...
    Lab900FormsModule,
    ...
  ],
  bootstrap: [],
})
export class SharedModule {}
```

## Styling

Include the library stylesheet in your scss file.

```scss
@import '~@lab900/forms/theming';

@include lab900-forms(YOUR_MATERIAL_THEME);
```

The lab900-forms mixin expects a [Material theme of config](https://material.angular.io/guide/theming).
