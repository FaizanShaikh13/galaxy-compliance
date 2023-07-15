import {
  Component,
  OnInit,
  Renderer2,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { link } from 'fs';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit, AfterViewInit {
  centered = true;

  testimonials: any = [];
  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    public dialog: MatDialog
  ) {}

  accordionData = [
    {
      num: '01',
      title: 'Creation of new account at GHAD portal of Saudi FDA',
      desc: `<p class="pb-6">
      The establishment or manufacturer or Authorized Representative who wishes to deal and place the IVDs & MDs in the Kingdom of Saudi Arabia market must have this account.
      </p>
  `,
      linkText: `<span>For more information, visit - <a target="_blank" href="https://ghad.sfda.gov.sa/en" class="underline text-[#2D6BD9]">https://ghad.sfda.gov.sa/en </a></span>`,
      // a: ` http://ghad.sfda.gov.sa/en `,
      // atag:` <a href="https://ghad.sfda.gov.sa/en ">https://ghad.sfda.gov.sa/en </a>`
    },
    {
      num: '02',
      title: 'Creation/Renewal of Medical Device Establishment License (MDEL)',
      desc: `<p class="pb-6">
      The establishment or Authorized Representative who wishes to deal and place the IVDs & MDs in the Kingdom of Saudi Arabia market must possess Medical Device Establishment License (MDEL). 
      
      
  </p><p class="pb-6">This can be applied after creating a GHAD account.</p>`,

      a: `https://sfda.gov.sa/system/files/2021/user-guideforMedical-lincenseImporter_en.pdf`,
      link: `MDEL License Sample`,
    },
    {
      num: '03',
      title: 'Creation/Renewal of Medical Device Warehouse License',
      desc: `
      <p class="pb-6">
      The establishment or Authorized Representative who wishes to deal and place the IVDs & MDs in the Kingdom of Saudi Arabia market must have a Medical Device Warehouse which has to be licensed by Saudi FDA.
  </p>
      `,
      link: `Medical Device Warehouse License Sample`,
    },
    {
      num: '04',
      title: 'Authorized Representative License - New/Renew',
      desc: `
      <p class="pb-6">
      Every foreign legal manufacturer should appoint a local Saudi establishment as their Authorized Representative by signing an Authorized Representative agreement with the validity of at least one year and should achieve Authorized Representative License by uploading it at Saudi FDA’s portal GHAD.
      </p>
   
      
      `,
      link: `Authorized Representative License Sample`,
      link2: true,
    },
    {
      num: '05',
      title: 'Medical Device Marketing Authorization (MDMA)',
      desc: `
      <p class="pb-6">
      Without possessing the valid MDMA, Legal manufacturer/Authorized Representative can not place any IVDs/MDs in the Saudi market. </p><p class="pb-6">
After achieving the Authorized Representative License, the legal manufacturer should register their product under Saudi FDA through their Authorized Representative by sharing the PDFs of technical files of their product which Authorized Representative will upload at GHAD through a proper MDMA application and after paying the prescribed fees to Saudi FDA, they will study the technical files and if the uploaded technical files comply with Saudi FDA’s criteria, they will approve & issue the MDMA certificate with certain expiry date. After achieving MDMA, legal manufacturer will be able to export their product to Saudi Arabia.

</p>
 
      
      `,
      link2: true,
      link: `MDMA License Sample`,
    },
    {
      num: '06',
      title:
        'Medical Device Importing License for RUO, General Lab, Demo, Evaluation & Water Distillation units',
      desc: `
      <p class="pb-6">
      These items need an Import Permit from Saudi FDA prior to arriving in Saudi Arabia. The Import Permit has to be applied through the GHAD system of Saudi FDA; it needs a few technical documents in pdf from the legal manufacturer.
      </p>
      `,
    },
    {
      num: '07',
      title: 'Classification',
      desc: `
      <p class="pb-6">
      There are items used in Hospital labs, General Labs, Research Labs; if any establishment wishes to deal with such items, they must get classified under Saudi FDA Classification System.
</p>`,
      a: `http://pcs.sfda.gov.sa/Default.En.aspx `,
    },
    {
      num: '08',
      title:
        'Low Risk Med. Dev. Registration for Class 1 non-sterile, non-measurable',
      desc: '<p>This activity is optional, and Saudi FDA has the right to accept the request; otherwise, Saudi FDA will direct the request for MDMA.</p>',
    },
    {
      num: '09',
      title:
        'National Centre for Med. Dev. Reporting NCMDR (Post Market Services)',
      desc: ` <p class="pb-6">
      The National Center for Medical Devices Reporting (NCMDR) is devoted to receiving any adverse event reports and recalls about any medical devices from healthcare facilities as well as manufacturers all around KSA, studying them and working together with manufacturers and suppliers to take the right action and assuring the proper safe performance. NCMDR also aims to cooperate with the other international safety alert reporting centers to exchange reports received about medical devices used anywhere.
</p>`,
      a: ` https://ncmdr.sfda.gov.sa/AboutNCMDR.aspx `,
    },

    {
      num: '10',
      title:
        'MOI approvals via SFDA for the list of chemicals specified by MOI',
      desc: `<p class="">
      There are Two Lists from MOI (Ministry of Interior) of Saudi Arabia that have some hazardous chemicals which are used in the formulas of IVDs, Lab reagents such types of products must get the approval prior through GHAD and from MOI (Ministry of Interior) of Saudi Arabia to import the shipment in Saudi Arabia.      
      </p>
`,
    },
    {
      num: '11',
      title:
        'Train in-house regulatory staff of the company for all the activities listed above',
      desc: '<p>Complete Training will be given to the in-house regulatory staff of the company for all the activities listed above via Zoom, MS Teams live on SFDA’s GHAD system case by case.</p>',
    },
  ];

  ngOnInit(): void {
    this.testimonials = [
      {
        id: 1,
        data: `<div class="flex-col justify-between items-center gap-3">
      <img src="../../../assets/images/“.png" class="mb-9" alt="" />
      <div class="flex lg:flex-row flex-col  justify-between items-center gap-3">
        <div class="xl:w-[45%] lg:w-[55%] text-black-404 text-2xl font-medium">
          <ul>
            <li class="mb-7 text-[22px] text-black-404 lg:text-2xl font-bold">
              Experienced & Reliable Team Player
            </li>
            <div class="text-lg text-justify">
              <li class="mb-4">
                Shaker S. Mohammad is one of the outstanding members of
                Abdulla Fouad Medical Supplies and Service Co. Saudi Arabia
                team.
              </li>
              <li class="mb-4">
                He is very experienced in the registration processes of In
                Vitro Diagnostic Devices & Medical Devices with Saudi FDA.
              </li>
              <li class="mb-4">
                He worked with me from 2009 to 2022 as SFDA & Compliance
                Manager, during this period he trained, lead the regulatory
                team, established the department, and achieve successful
                registrations of world's best 75 IVDD & Medical Device
                suppliers and their 2,500 products with Saudi FDA.
              </li>
              <li class="mb-7">
                I can surely vouch for his credibility in this field, I hope
                he thrives in his new endeavour.
              </li>
            </div>
            <li class="mb-2 text-[#170F49] text-lg font-semibold">
              Mr. Hussein Fares
            </li>
            <li class="text-[#6F6C90] text-lg">
              CEO at Abdulla Fouad Medical Supplies and Service Co. Saudi
              Arabia
            </li>
          </ul>
          <!-- <div class="flex justify-start gap-4 m-auto pt-7">
            <button
              mat-stroked-button
              color="primary"
              class="font-urbanist font-bold text-base !text-primary rounded light-blue-bg px-6 py-3 h-12 w-[167px]"
            >
              <mat-icon class="mr-2">call</mat-icon>
              <span> Contact Us </span>
            </button>
            <button
              mat-stroked-button
              color="primary"
              class="font-urbanist font-bold text-base !text-[#fff] bg-[#03A2B5] px-6 py-3 h-12 w-[203px]"
            >
              <mat-icon class="mr-2">date_range</mat-icon>
              <span> Book a Meeting </span>
            </button>
          </div> -->
        </div>
        <div class="max-w-[570px] h-max-[410px]">
          <img src="../../../assets/images/testimonials.png" alt="" class="hidden sm:block"/>
          <img src="../../../assets/images/testimonials_mobile.png" alt="" srcset="" class="block sm:hidden w-full"/>
        </div>
      </div>
    </div>`,
      },
      {
        id: 2,
        data: `<div class="flex-col justify-between items-center gap-3">
      <div class="flex lg:flex-row flex-col  justify-between items-center gap-3">
        <div class="text-black-404 text-2xl font-medium">
          <ul>
            <li class="mb-7 text-[22px] text-black-404 lg:text-2xl font-bold">
            A few words on Shaker :
            </li>
            <div class="text-lg text-justify">
              <li class="mb-4">
              Shaker was one of the dedicated staff in AFMS taking the responsibility of the task till its 100% satisfactory execution. The task he does requires full attention since there is always rejection costing money from the regulatory even for a negligible mistake. He is very organized with administrative skill which can be seen from his every e-mail the way that he drafts.  He gives an appropriate subject for the email and he will insist with everyone to follow the same e-mail till the task is completed. I am sure, those he dealt with the overseas companies might have learned those good process from him.  He worked very hard for AFMS, it’s not at all easy to work from the scratch to the level we all see now with regards to SFDA registration.  When he joined AFMS he knew nothing as regards to SFDA registration process, but he learned himself and the situation got made with SFDA for other suppliers in the Kingdom  ‘ IF ANYHING WANTS TO KNOW MORE, APPROACH ABDULLA FOUAD’ and we become as refence in the market. The one of the best quality he has, he reads each and every points, underline and work with it, he will never skip any points that he wants to transmit to the suppliers and make it very well documented.

              </li>
              <li class="mb-7">
              I wish him all the best for his decision to be a self-employed as this itself proves how confident he was with the task given to him.
              </li>
            </div>
            <li class="mb-2 text-[#170F49] text-lg font-semibold">
            Sadiq Omar
            </li>
            <li class="text-[#6F6C90] text-lg">
            Purchasing Manager at Abdulla Fouad Group
            </li>
          </ul>
          <!-- <div class="flex justify-start gap-4 m-auto pt-7">
            <button
              mat-stroked-button
              color="primary"
              class="font-urbanist font-bold text-base !text-primary rounded light-blue-bg px-6 py-3 h-12 w-[167px]"
            >
              <mat-icon class="mr-2">call</mat-icon>
              <span> Contact Us </span>
            </button>
            <button
              mat-stroked-button
              color="primary"
              class="font-urbanist font-bold text-base !text-[#fff] bg-[#03A2B5] px-6 py-3 h-12 w-[203px]"
            >
              <mat-icon class="mr-2">date_range</mat-icon>
              <span> Book a Meeting </span>
            </button>
          </div> -->
        </div>
       
      </div>
    </div>`,
      },
    ];
  }

  ngAfterViewInit(): void {
    const element =
      this.elementRef.nativeElement.querySelector('.dynamic-content');

    this.renderer.listen(element, 'click', (event: Event) => {
      this.handleClick(event);
    });
  }

  handleClick(event: any) {
    console.log(event, 'event--------------');
  }

  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }

  calendly: any;

  bookMeeting() {
    this.calendly = document.getElementsByClassName('calendly-badge-content');

    for (var i = 0; i < this.calendly.length; i++) {
      this.calendly[i].click();
    }
  }

  openDialog(id: any) {
    const data: any = {
      '02': '../../../assets/our-service-images/Medical Device Establishment License.png',
      '03': '../../../assets/our-service-images/Medical Device Warehouse License.png',
      '04': '../../../assets/our-service-images/Authorized Representative License.png',
      '05': '../../../assets/our-service-images/Medical Device Marketing Authorization (1).png',
    };

    const img = data[id];

    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        img,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialog2(id: any) {
    const data: any = {
      '04': '../../../assets/our-service-images/Authorized Representative License_2.png',
      '05': '../../../assets/our-service-images/Medical Device Marketing Authorization (2).png',
    };

    const img = data[id];

    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        img,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  scrollToBottom() {
    const element = document.getElementById('footer');
    console.log(element);
    element?.scrollIntoView({ behavior: 'smooth' });
  }
}

// @Component({
//   selector: 'dialog-content-example-dialog',
//   templateUrl: 'dialog-content-example-dialog.html',
// })
// export class DialogContentExampleDialog {}
