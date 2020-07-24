import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from '../user/user-profile/user-profile.component';
import { RegisterComponent } from './register/register.component';



const authRouteList: Routes = [
    
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'profile', component: UserProfileComponent }
    
  ];
  

export const authRouting = RouterModule.forChild(authRouteList);