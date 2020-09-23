import { NavItemGroup } from 'projects/ui/src/lib/nav-list/models/nav-item.model';

export const showcaseAdminNavItems: NavItemGroup[] = [
  {
    label: 'Lab900 - Admin',
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
