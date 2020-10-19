import { NavItemGroup } from 'projects/ui/src/lib/nav-list/models/nav-item.model';
import { showcaseAdminConfig } from './showcase-admin.constants';

export const showcaseAdminNavItems: NavItemGroup[] = [
  {
    label: showcaseAdminConfig?.title,
    items: [
      {
        label: 'label.guides',
        children: [
          {
            label: 'label.getting-started',
            route: 'admin/getting-started',
          },
        ],
      },
      {
        label: 'label.components',
        children: [
          {
            label: 'Admin page',
            route: 'admin/admin-page',
          },
          {
            label: 'Translatable admin page',
            route: 'admin/translatable-admin-page',
          },
        ],
      },
    ],
  },
];
