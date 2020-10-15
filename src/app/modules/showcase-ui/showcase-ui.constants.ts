import { ShowcaseConfigModel } from '../shared/models/showcase-config.model';
import { version } from 'projects/ui/package.json';

export const showcaseUiConfig: ShowcaseConfigModel = {
  title: 'UI Library',
  description: 'A set of useful UI components',
  homeRoute: 'ui',
  icon: 'widgets',
  version,
};
