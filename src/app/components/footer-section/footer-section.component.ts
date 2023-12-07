import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Location } from '@angular/common';
@Component({
  selector: 'app-footer-section',
  templateUrl: './footer-section.component.html',
  styleUrls: ['./footer-section.component.scss'],
})
export class FooterSectionComponent implements OnInit {
  currentRoute: any = null;
  contents: any = {};
  isHomepage:boolean = false
  constructor( location: Location,public router: Router, private messageService: MessageService) {
    router.events.subscribe((val) => {
    
      if(location.path() == ""){
        this.isHomepage = true
      }else {
        this.isHomepage = false
      }
  });
  }

  ngOnInit(): void {
    // this.initContents();
    // this.detectRouteChange();
    
  }
  calendly: any;
  bookMeeting() {
    this.calendly = document.getElementsByClassName('calendly-badge-content');

    for (var i = 0; i < this.calendly.length; i++) {
      this.calendly[i].click();
    }
  }
  detectRouteChange(): void {
  }

  copied(){
    this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
  }
  copyText(text:string){
    navigator.clipboard.writeText(text).catch(() => {
      console.error("Unable to copy text");
    });
    this.copied()
  }

  initContents(): void {
  }
}
