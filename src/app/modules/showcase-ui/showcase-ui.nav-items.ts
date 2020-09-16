import { NavItemGroup } from 'projects/ui/src/lib/nav-list/models/nav-item.model';

export const showcaseUiNavItems: NavItemGroup[] = [
  {
    label: 'Lab900 - UI',
    items: [
      {
        label: 'Components',
        children: [
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
            label: 'Moments',
            route: 'ui/moments',
          },
        ],
      },
    ],
  },
];
