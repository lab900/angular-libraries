import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularAdminModule } from '../../projects/angular-admin/src/lib/angular-admin.module';
import { AngularAdminShowcaseComponent } from './components/angular-admin-showcase/angular-admin-showcase.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AngularAdminShowcaseComponent
  ],
  imports: [
    BrowserModule,
    AngularAdminModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
