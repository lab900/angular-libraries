import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularAdminModule } from '../../projects/angular-admin/src/lib/angular-admin.module';
import { ModelDrivenFormsModule } from '../../projects/model-driven-forms/src/lib/model-driven-forms.module';

import { AppComponent } from './app.component';
import { AngularAdminShowcaseComponent } from './components/angular-admin-showcase/angular-admin-showcase.component';
import { FormsShowcaseComponent } from './components/forms-showcase/forms-showcase.component';

@NgModule({
  declarations: [AppComponent, AngularAdminShowcaseComponent, FormsShowcaseComponent],
  imports: [BrowserModule, AngularAdminModule, BrowserAnimationsModule, ModelDrivenFormsModule, MatTabsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
