import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

/* Routing Module */
import { AppComponent } from './app.component';

// Material Angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

// Translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

/* Feature Modules */
import { SharedModule } from '@app/shared/shared.module';
import { QuestionModule } from '@app/question/question.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [HttpClient]
      }
    }),
    SharedModule,
    QuestionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
