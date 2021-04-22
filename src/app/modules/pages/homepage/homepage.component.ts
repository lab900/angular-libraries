import { Component } from '@angular/core';
import { showcaseUiConfig } from '../../showcase-ui/showcase-ui.constants';
import { showcaseFormsConfig } from '../../showcase-forms/showcase-forms.constants';
import { ShowcaseConfigModel } from '../../shared/models/showcase-config.model';

@Component({
  selector: 'lab900-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  public readonly sections: ShowcaseConfigModel[] = [
    showcaseFormsConfig,
    showcaseUiConfig,
    {
      title: 'common.title',
      icon: 'construction',
      description: 'common.description',
      disabled: true,
      homeRoute: '',
    },
  ];
}
