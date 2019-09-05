import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Router module
import { RouterModule } from '@angular/router';

// Translation
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';

// Material Angular
import {
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatGridListModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatSnackBarModule,
    MatTabsModule
} from '@angular/material';

const materialModules = [
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatGridListModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatSnackBarModule,
    MatTabsModule
];

// Components
import { HeaderComponent } from './header/header.component';

// Interceptor
import { httpInterceptorProviders } from '../http-interceptors/index';

@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [
        CommonModule,
        materialModules,
        TranslateModule,
        HttpClientModule,
        RouterModule
    ],
    exports: [
        materialModules,
        TranslateModule,
        HttpClientModule,
        HeaderComponent
    ],
    providers: [
        httpInterceptorProviders
    ],
})
export class SharedModule { }
