import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { MaterialModule } from 'src/app/material/material.module';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [
    HomepageComponent

  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    MaterialModule,
    CarouselModule,
    ButtonModule,
    DialogModule,
    // ComponentsModule
  ]
})
export class HomepageModule { }
