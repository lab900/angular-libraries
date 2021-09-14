# Creating dynamic forms

This guide explains how to create dynamic forms with Lab900 forms.\
Don't know how to import the library? View the ['Getting started'](forms/getting-started) guide.

## 1. Define your form schema

A form schema is what is used to build the form fields.

```ts
import { Form, EditType } from '@lab900/forms';

export const myFormSchema: Form = {
  title: 'My form title', // optional
  readonly: false, // optional
  fields: [
    {
      title: 'name',
      attribute: 'name',
      editType: EditType.Input,
    },
    {
      title: 'firstname',
      attribute: 'firstname',
      editType: EditType.Input,
    },
    ...
  ]
}
```

### Different field types

| EditType                                                         | Description                                            |
| ---------------------------------------------------------------- | ------------------------------------------------------ |
| `EditType.Checkbox`                                              | Checkbox field                                         |
| [`EditType.TextArea`](forms/form-field-input)                    | Texarea field                                          |
| [`EditType.Date`](forms/form-field-datepicker)                   | Date picker                                            |
| [`EditType.DateRange`](forms/form-field-datepicker)              | Date range picker                                      |
| [`EditType.DateTime`](forms/form-field-datepicker)               | Date time range picker                                 |
| `EditType.Wysiwyg`                                               | Wysiwyg editor                                         |
| `EditType.Image`                                                 | Image uploader                                         |
| `EditType.Input`                                                 | Input fielder (text, number, email, phone or password) |
| `EditType.File`                                                  | File uploader                                          |
| `EditType.Select`                                                | Selection field                                        |
| [`EditType.Repeater`](forms/form-field-repeater)                 | Repeatable fields (FormArrays)                         |
| [`EditType.RadioButtons`](forms/form-field-radio-buttons)        | Radio buttons                                          |
| [`EditType.RangeSlider`](forms/form-field-range-slider)          | Range slider                                           |
| `EditType.Row`                                                   | For columns or nested FormGroups                       |
| [`EditType.Autocomplete`](forms/form-field-autocomplete)         | Input fields with autocomplete                         |
| [`EditType.AutocompleteMultiple`](forms/form-field-autocomplete) | ?                                                      |
| [`EditType.ButtonToggle`](forms/form-field-button-toggle)        | Radio buttons that are styled as buttons,              |
| `EditType.Icon`                                                  | ?                                                      |

### Readonly mode

When setting the `readonly` property to `true` the form will render a static view of the data.

## 2. Add lab900-form

Add the `<lab900-form>` to your component template and bind a schema to it.
You can also pass a data object to fill the form inputs.

```html
<lab900-form [schema]="myFormSchema" [data]="myFormData"> </lab900-form>
```
