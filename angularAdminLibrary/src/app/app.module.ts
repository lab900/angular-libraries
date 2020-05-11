import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularAdminModule } from '../../projects/angular-admin/src/lib/angular-admin.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularAdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
