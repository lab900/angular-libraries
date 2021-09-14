import { NavItemGroup } from '@lab900/ui';
import { showcaseFormsConfig } from './showcase-forms.constants';

export const showcaseFormsNavItems: NavItemGroup[] = [
  {
    label: showcaseFormsConfig?.title,
    items: [
      {
        label: 'label.guides',
        children: [
          {
            label: 'label.getting-started',
            route: 'forms/getting-started',
          },
          {
            label: 'Create dynamic forms',
            route: 'forms/form-container',
          },
          {
            label: 'Conditional Forms',
            route: 'forms/conditional-forms',
          },
        ],
      },
      {
        label: 'forms.form-fields',
        children: [
          {
            label: 'Autocomplete',
            route: 'forms/form-field-autocomplete',
          },
          {
            label: 'Input & Textarea',
            route: 'forms/form-field-input',
          },
          {
            label: 'Radio Buttons',
            route: 'forms/form-field-radio-buttons',
          },
          {
            label: 'Button Toggle',
            route: 'forms/form-field-button-toggle',
          },
          {
            label: 'Checkboxes',
            // route: 'forms/form-field-checkboxes',
          },
          {
            label: 'Select',
            route: 'forms/form-field-select',
          },
          {
            label: 'Range slider',
            route: 'forms/form-field-range-slider',
          },
          {
            label: 'Repeater',
            route: 'forms/form-field-repeater',
          },
          {
            label: 'Datepicker',
            route: 'forms/form-field-datepicker',
          },
          {
            label: 'File upload',
            route: 'forms/form-field-file-upload',
          },
          {
            label: 'Multi language',
            route: 'forms/form-field-multi-lang',
          },
        ],
      },
    ],
  },
];
