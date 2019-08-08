import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';

// Translation
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';

// Material Angular
import {
    MatToolbarModule,
    MatIconModule
} from '@angular/material';

const materialmModules = [
    MatToolbarModule,
    MatIconModule
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
