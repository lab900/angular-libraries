import { NavItemGroup } from 'projects/ui/src/lib/nav-list/models/nav-item.model';
import { showcaseAdminConfig } from './showcase-admin.constants';

export const showcaseAdminNavItems: NavItemGroup[] = [
  {
    label: showcaseAdminConfig?.title,
    items: [
      {
        label: 'Components',
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
