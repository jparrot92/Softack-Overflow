import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Share module
import { SharedModule } from '@app/shared/shared.module';

// Routing auth
import { AuthRoutingModule } from './auth-routing.modules';

// Form module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Angular Moment
import { MomentModule } from 'ngx-moment';

// Components auth
import { SigninScreenComponent } from './signin-screen/signin-screen.component';
import { SignupScreenComponent } from './signup-screen/signup-screen.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MomentModule
  ],
  declarations: [
    SigninScreenComponent,
    SignupScreenComponent
  ]
})
export class AuthModule { }
