import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminModule } from '../../projects/admin/src/lib/admin.module';
import { FormsModule } from '../../projects/forms/src/lib/forms.module';
import { DialogModule } from '../../projects/ui/src/lib/dialog/dialog.module';

import { AppComponent } from './app.component';
import { FormsShowcaseComponent } from './components/forms-showcase/forms-showcase.component';
import { AdminShowcaseComponent } from './components/admin-showcase/admin-showcase.component';
import { MatButtonModule } from '@angular/material/button';
import { UiShowcaseComponent } from './components/ui-showcase/ui-showcase.component';
import { AlertModule } from '../../projects/ui/src/lib/alert/alert.module';

@NgModule({
  declarations: [AppComponent, AdminShowcaseComponent, FormsShowcaseComponent, UiShowcaseComponent],
  imports: [
    BrowserModule,
    AdminModule,
    BrowserAnimationsModule,
    FormsModule.forRoot(),
    MatTabsModule,
    MatButtonModule,
    DialogModule,
    AlertModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
