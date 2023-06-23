import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-footer-section',
  templateUrl: './footer-section.component.html',
  styleUrls: ['./footer-section.component.scss'],
})
export class FooterSectionComponent implements OnInit {
  currentRoute: any = null;
  contents: any = {};
  constructor(public router: Router) {}

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
    // this.router.events.subscribe((event) => {
    //   // event instanceof NavigationStart ||
    //   // event instanceof NavigationEnd
    //   if (event instanceof NavigationEnd) {
    //     this.currentRoute = event.url;
    //   }
    // });
  }

  initContents(): void {
    // this.contents = {
    //   '/': {
    //     banner: {
    //       content: [`Interested in what we're building?`],
    //       cta: {
    //         content: `Learn more`,
    //       },
    //     },
    //   },
    //   '/investors': {
    //     banner: {
    //       content: [`Interested in learning more about our growth plans?`],
    //       cta: {
    //         content: `Book a meeting`,
    //       },
    //     },
    //   },
    //   '/services': {
    //     banner: {
    //       content: [`Interested in how we can meet your business needs?`],
    //       cta: {
    //         content: `Book a meeting`,
    //       },
    //     },
    //   },
    //   '/technology': {
    //     banner: {
    //       content: [`Interesting in learning more?`],
    //       cta: {
    //         content: `Book a meeting`,
    //       },
    //     },
    //   },
    //   '/about-us': {
    //     banner: {
    //       content: [
    //         `Interested in our broadband-broadcast technology and growth plans?`,
    //       ],
    //       cta: {
    //         content: `Book a meeting`,
    //       },
    //     },
    //   },
    //   '/resources': {
    //     banner: {
    //       content: [
    //         `We're disrupting the broadband Internet landscape.`,
    //         `Want to learn more?`,
    //       ],
    //       cta: {
    //         content: `Book a meeting`,
    //       },
    //     },
    //   },
    //   '/contact-us': {
    //     banner: {
    //       content: [`Interested in Ruralink?`, `Book a meeting with us now!`],
    //       cta: {
    //         content: `Book a meeting`,
    //       },
    //     },
    //   },
    // };
  }
}
