import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularAdminModule } from '../../projects/admin/src/lib/admin.module';
import { ModelDrivenFormsModule } from '../../projects/forms/src/lib/forms.module';

import { AppComponent } from './app.component';
import { AngularAdminShowcaseComponent } from './components/admin-showcase/admin-showcase.component';
import { FormsShowcaseComponent } from './components/forms-showcase/forms-showcase.component';

@NgModule({
  declarations: [AppComponent, AngularAdminShowcaseComponent, FormsShowcaseComponent],
  imports: [BrowserModule, AngularAdminModule, BrowserAnimationsModule, ModelDrivenFormsModule, MatTabsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
