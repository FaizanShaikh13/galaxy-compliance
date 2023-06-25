import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterSectionComponent } from './footer-section/footer-section.component';
import { HeaderSectionComponent } from './header-section/header-section.component';
import { MaterialModule } from '../material/material.module';
import { SidebarModule } from 'primeng/sidebar';
import { RouterModule } from '@angular/router';
import { DialogComponent } from './dialog/dialog.component';


@NgModule({
  declarations: [FooterSectionComponent, HeaderSectionComponent, DialogComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SidebarModule,
    RouterModule
  ],
  exports:[FooterSectionComponent,HeaderSectionComponent]
})
export class ComponentsModule { }
