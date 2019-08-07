import { NgModule } from '@angular/core';
import { AppHeaderComponent } from './app-header/app-header.component';

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
        AppHeaderComponent
    ],
    imports: [
        materialmModules
    ],
    exports: [
        materialmModules,
        AppHeaderComponent
    ]
})
export class SharedModule {}
