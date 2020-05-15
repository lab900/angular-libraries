import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminModule } from '../../projects/admin/src/lib/admin.module';
import { FormsModule } from '../../projects/forms/src/lib/forms.module';

import { AppComponent } from './app.component';
import { FormsShowcaseComponent } from './components/forms-showcase/forms-showcase.component';
import { AdminShowcaseComponent } from './components/admin-showcase/admin-showcase.component';

@NgModule({
  declarations: [AppComponent, AdminShowcaseComponent, FormsShowcaseComponent],
  imports: [BrowserModule, AdminModule, BrowserAnimationsModule, FormsModule, MatTabsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
