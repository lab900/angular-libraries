import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Lab900FormsModule } from '../../projects/forms/src/lib/forms.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './modules/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    TranslateModule.forRoot(),
    MarkdownModule.forRoot(),
    Lab900FormsModule.forRoot({
      formField: {
        appearance: 'outline',
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
