import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminModule } from '../../projects/admin/src/lib/admin.module';
import { FormsModule } from '../../projects/forms/src/lib/forms.module';
import { ImageUploaderModule } from '../../projects/image-uploader/src/lib/image-uploader.module';
import { AlertModule } from '../../projects/ui/src/lib/alert/alert.module';
import { DialogModule } from '../../projects/ui/src/lib/dialog/dialog.module';

import { AppComponent } from './app.component';
import { AdminShowcaseComponent } from './components/admin-showcase/admin-showcase.component';
import { FormsShowcaseComponent } from './components/forms-showcase/forms-showcase.component';
import { ImageShowcaseComponent } from './components/image-showcase/image-showcase.component';
import { UiShowcaseComponent } from './components/ui-showcase/ui-showcase.component';

@NgModule({
  declarations: [AppComponent, AdminShowcaseComponent, FormsShowcaseComponent, UiShowcaseComponent, ImageShowcaseComponent],
  imports: [
    BrowserModule,
    AdminModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTabsModule,
    MatButtonModule,
    DialogModule,
    AlertModule,
    ImageUploaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
