import { NavItemGroup } from 'projects/ui/src/lib/nav-list/models/nav-item.model';
import { showcaseUiConfig } from './showcase-ui.constants';

export const showcaseUiNavItems: NavItemGroup[] = [
  {
    label: showcaseUiConfig?.title,
    items: [
      {
        label: 'label.guides',
        children: [
          {
            label: 'label.getting-started',
            route: 'ui/getting-started',
          },
        ],
      },
      {
        label: 'label.components',
        children: [
          {
            label: 'Buttons',
            route: 'ui/buttons',
          },
          {
            label: 'Nav List',
            route: 'ui/nav-list',
          },
          {
            label: 'Data List',
            route: 'ui/data-list',
          },
          {
            label: 'Sharing',
            route: 'ui/sharing',
          },
          {
            label: 'Alerts',
            route: 'ui/alerts',
          },
          {
            label: 'Table',
            route: 'ui/table',
          },
          {
            label: 'Page header',
            route: 'ui/page-header',
          },
          {
            label: 'Merger',
            route: 'ui/merger',
          },
        ],
      },
    ],
  },
];
