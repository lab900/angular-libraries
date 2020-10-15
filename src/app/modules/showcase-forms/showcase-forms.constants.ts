import { ShowcaseConfigModel } from '../shared/models/showcase-config.model';
import { version } from 'projects/forms/package.json';

export const showcaseFormsConfig: ShowcaseConfigModel = {
  title: 'Forms Library',
  description: 'Create dynamic reactive forms.',
  homeRoute: 'forms',
  icon: 'dynamic_form',
  version,
};
