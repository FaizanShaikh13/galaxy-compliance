import { Location } from '@angular/common';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.scss']
})
export class HeaderSectionComponent implements OnInit {

  sidebarVisible:boolean = false
  route: string = "";
  constructor(location: Location, router: Router,private elementRef: ElementRef, private renderer: Renderer2) {
    router.events.subscribe((val) => {

    
      console.log("isme aaya",location.path());
    
        if(location.path() == ""){
          this.isHomepage = true
          console.log(this.isHomepage,"------------");
        }else {
          this.isHomepage = false
        }
    });
  }
  isHomepage:Boolean = false
  ngOnInit(): void {
  
    
  }
  calendly:any
  bookMeeting() {
    this.calendly = document.getElementsByClassName('calendly-badge-content');

    for (var i = 0; i < this.calendly.length; i++) {
      this.calendly[i].click();
    }
  }

  scrollToBottom() {
    const element = document.getElementById('footer');
    console.log(element)
    element?.scrollIntoView({ behavior: 'smooth' });
  }

}
