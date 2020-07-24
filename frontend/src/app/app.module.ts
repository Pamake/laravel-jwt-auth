import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CoreModule } from './modules/core/core.module';
import { AppComponent } from './app.component';
import { Auth } from './modules/core/interceptors/auth.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.modules';
import { AuthModule } from './pages/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    AuthModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Auth,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
