import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterSectionComponent } from './footer-section/footer-section.component';
import { HeaderSectionComponent } from './header-section/header-section.component';
import { MaterialModule } from '../material/material.module';
import { SidebarModule } from 'primeng/sidebar';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [FooterSectionComponent, HeaderSectionComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SidebarModule,
    RouterModule
  ],
  exports:[FooterSectionComponent,HeaderSectionComponent]
})
export class ComponentsModule { }
