import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './pages/auth/register/register.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { UserProfileComponent } from './pages/user/user-profile/user-profile.component';

export const appRouteList: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'profile', component: UserProfileComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRouteList)
    ],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
