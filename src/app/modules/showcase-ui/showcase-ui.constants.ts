import { ShowcaseConfigModel } from '../shared/models/showcase-config.model';
import { version } from 'projects/ui/package.json';

export const showcaseUiConfig: ShowcaseConfigModel = {
  title: 'ui.title',
  description: 'ui.description',
  homeRoute: 'ui',
  icon: 'widgets',
  version,
};
