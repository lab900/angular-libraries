import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
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
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MergingTranslateLoader } from './utils/merging-translate-loader';
import { HttpClient } from '@angular/common/http';

export function TranslationLoaderFactory(http: HttpClient) {
  return new MergingTranslateLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent, AdminShowcaseComponent, FormsShowcaseComponent, UiShowcaseComponent],
  imports: [
    BrowserModule,
    AdminModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatTabsModule,
    MatButtonModule,
    MatSelectModule,
    DialogModule,
    AlertModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: TranslationLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: 'en',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
