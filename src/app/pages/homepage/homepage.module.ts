import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { MaterialModule } from 'src/app/material/material.module';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    HomepageComponent

  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    MaterialModule,
    CarouselModule,
    ButtonModule
    // ComponentsModule
  ]
})
export class HomepageModule { }
