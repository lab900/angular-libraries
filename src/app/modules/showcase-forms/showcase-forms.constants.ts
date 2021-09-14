import { ShowcaseConfigModel } from '../shared/models/showcase-config.model';
import { version } from 'lib/package.json';

export const showcaseFormsConfig: ShowcaseConfigModel = {
  title: 'forms.title',
  description: 'forms.description',
  homeRoute: 'forms',
  icon: 'dynamic_form',
  version,
};
