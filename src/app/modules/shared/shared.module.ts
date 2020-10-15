import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';

import { Lab900FormsModule } from 'projects/forms/src/lib/forms.module';
import { Lab900NavListModule } from 'projects/ui/src/lib/nav-list/nav-list.module';
import { Lab900PageHeaderModule } from 'projects/ui/src/lib/page-header/page-header.module';

import { ExampleViewerComponent } from './components/example-viewer/example-viewer.component';
import { ShowcasePageComponent } from './components/showcase-page/showcase-page.component';
import { ComponentLoaderDirective } from './directives/component-loader.directive';
import { ShowcaseHomeComponent } from './components/showcase-home/showcase-home.component';
import { MarkdownPageComponent } from './components/markdown-page/markdown-page.component';
import { TranslateModule } from '@ngx-translate/core';

const material = [MatCardModule, MatButtonModule, MatTabsModule, MatIconModule, FlexLayoutModule, MatToolbarModule, MatSidenavModule];

@NgModule({
  declarations: [ExampleViewerComponent, ShowcasePageComponent, ComponentLoaderDirective, ShowcaseHomeComponent, MarkdownPageComponent],
  exports: [
    ExampleViewerComponent,
    ShowcasePageComponent,
    ShowcaseHomeComponent,
    MarkdownPageComponent,
    Lab900FormsModule,
    Lab900NavListModule,
    ...material,
  ],
  imports: [
    CommonModule,
    Lab900FormsModule,
    Lab900NavListModule,
    Lab900PageHeaderModule,
    MarkdownModule,
    RouterModule,
    ...material,
    TranslateModule,
  ],
})
export class SharedModule {}
