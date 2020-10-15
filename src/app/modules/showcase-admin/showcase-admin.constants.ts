import { ShowcaseConfigModel } from '../shared/models/showcase-config.model';
import { version } from 'projects/admin/package.json';

export const showcaseAdminConfig: ShowcaseConfigModel = {
  title: 'admin.title',
  icon: 'admin_panel_settings',
  description: 'admin.description',
  version,
  homeRoute: 'admin',
};
