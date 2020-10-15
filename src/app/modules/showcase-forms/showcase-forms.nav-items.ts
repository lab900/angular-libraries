import { NavItemGroup } from 'projects/ui/src/lib/nav-list/models/nav-item.model';
import { showcaseFormsConfig } from './showcase-forms.constants';

export const showcaseFormsNavItems: NavItemGroup[] = [
  {
    label: showcaseFormsConfig?.title,
    items: [
      {
        label: 'Guides',
        children: [
          {
            label: 'Getting started',
            route: 'forms/getting-started',
          },
        ],
      },
      {
        label: 'Components',
        children: [
          {
            label: 'Form Container',
            route: 'forms/form-container',
          },
        ],
      },
      {
        label: 'Form Fields',
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
            // route: 'forms/form-field-select',
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
            // route: 'forms/form-field-file-upload',
          },
          {
            label: 'Wysiwyg editor',
            // route: 'forms/form-field-wysiwyg',
          },
        ],
      },
    ],
  },
];
