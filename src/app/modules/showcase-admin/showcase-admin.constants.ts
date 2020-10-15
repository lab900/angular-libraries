import { ShowcaseConfigModel } from '../shared/models/showcase-config.model';
import { version } from 'projects/admin/package.json';

export const showcaseAdminConfig: ShowcaseConfigModel = {
  title: 'Admin Library',
  icon: 'admin_panel_settings',
  description: 'Admin interfaces in a second.',
  version,
  homeRoute: 'admin',
};
