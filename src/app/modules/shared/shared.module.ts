import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { FormsModule } from 'projects/forms/src/lib/forms.module';

import { ExampleViewerComponent } from './components/example-viewer/example-viewer.component';

const material = [
  MatCardModule,
  MatButtonModule,
  MatTabsModule,
  MatIconModule,
  FlexLayoutModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
];

@NgModule({
  declarations: [ExampleViewerComponent],
  exports: [ExampleViewerComponent, FormsModule, ...material],
  imports: [CommonModule, FormsModule, ...material],
})
export class SharedModule {}
