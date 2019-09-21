import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

/* App Root */
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


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
import { AuthModule } from '@app/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
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
    QuestionModule,
    AuthModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
