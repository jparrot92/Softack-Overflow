import { NgModule } from '@angular/core';

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

@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [
        materialModules,
        TranslateModule,
        HttpClientModule,
    ],
    exports: [
        materialModules,
        TranslateModule,
        HttpClientModule,
        HeaderComponent
    ]
})
export class SharedModule { }
