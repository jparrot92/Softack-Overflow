import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';

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

const materialmModules = [
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

@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [
        materialmModules,
        TranslateModule,
        HttpClientModule,
    ],
    exports: [
        HeaderComponent
    ]
})
export class SharedModule {}
