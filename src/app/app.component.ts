import { Component } from '@angular/core';
import { NavItemGroup } from 'projects/ui/src/lib/nav-list/models/nav-item.model';
@Component({
  selector: 'lab900-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public navItemsGroups: NavItemGroup[] = [
    {
      label: 'Lab900 - Forms',
      items: [
        {
          label: 'Components',
          children: [
            {
              label: 'Form container',
              route: 'forms/form-container',
            },
          ],
        },
        {
          label: 'Form Fields',
          children: [
            {
              label: 'Input & Textarea',
              route: 'forms/form-field-input',
            },
            {
              label: 'Repeater',
              route: 'forms/form-field-repeater',
            },
            {
              label: 'Datepicker',
              route: 'forms/form-field-datepicker',
            },
          ],
        },
      ],
    },
  ];

}
