import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from './modules/material.module';

@NgModule({
    declarations: [
      HeaderComponent,
      FooterComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule
  
    ],
    providers: [],
    bootstrap: [ CommonModule]
  })
export class SharedModule {}