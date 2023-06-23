import { Component, OnInit,Renderer2,ElementRef, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit, AfterViewInit {
  centered = true;

  testimonials:any = []
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  accordionData = [
    {
      num: '01',
      title: 'Creation of new account at GHAD portal of Saudi FDA',
      desc: `<p class="pb-6">
    The establishment or manufacturer or Authorized Representative who
    wish to deal and place the IVDs & amp; MDs in the Kingdom of Saudi
    Arabia market must have this account.
  </p>
  <p>For more information, visit - <span class="text-[#2D6BD9]"> https://ghad.sfda.gov.sa/en </span></p>
  `,
    },
    {
      num: '02',
      title: 'Creation/Renewal of Medical Device Establishment License (MDEL)',
      desc: `<p class="pb-6">
      The establishment or Authorized Representative who wish to deal and place the IVDs &amp; MDs in the Kingdom of Saudi Arabia market must poses Medical Device Establishment License (MDEL).
      
      
  </p><p class="pb-6">This can be applied after creating GHAD account. </p>
  <p class="pb-6 text-[#2D6BD9]">https://sfda.gov.sa/system/files/2021/user-guideforMedical-lincenseImporter_en.pdf </p>
  <p> <span class="text-[#2D6BD9]">      MDEL License Sample
  </span></p>`,
    },
    {
      num: '03',
      title: 'Creation/Renewal of Medical Device Warehouse License',
      desc: `
      <p class="pb-6">
      The establishment or Authorized Representative who wish to deal and place the IVDs & MDs in the Kingdom of Saudi Arabia market must have Medical Device Warehouse which has to be licensed by Saudi FDA.
      
  </p>
  <p> <span class="text-[#2D6BD9]"> Medical Device Warehouse License Sample </span></p>
      `,
    },
    {
      num: '04',
      title: 'Authorized Representative License - New/Renew',
      desc: `
      <p class="pb-6">
      Every foreign legal manufacturer should appoint local Saudi establishment as their Authorized Representative by signing Authorized Representative agreement with validity of at least one year and should achieve Authorized Representative License by uploading it at Saudi FDA’s portal GHAD.
  </p>
  <p> <span class="text-[#2D6BD9]"> Authorized Representative License Sample </span></p>
      
      `,
    },
    {
      num: '05',
      title: 'Medical Device Marketing Authorization (MDMA)',
      desc: `
      <p class="pb-6">
      Without possessing the valid MDMA, Legal manufacturer/Authorized Representative can not place any IVDs/MDs in the Saudi market. </p><p class="pb-6">
After achieving the Authorized Representative License, the legal manufacturer should register their product under Saudi FDA through their Authorized Representative by sharing the PDFs of technical files of their product which Authorized Representative will upload at GHAD through a proper MDMA application and after paying the prescribed fees to Saudi FDA, they will study the technical files and if the uploaded technical files comply with Saudi FDA’s criteria, they will approve & issue the MDMA certificate with certain expiry date. After achieving MDMA, legal manufacturer will be able to export their product to Saudi Arabia.

</p>
  <p> <span class="text-[#2D6BD9]"> MDMA License Sample </span></p>
      
      `,
    },
    {
      num: '06',
      title: 'Medical Device Importing License for RUO, General Lab, Demo, Evaluation & Water Distillation units',
      desc: `
      <p class="pb-6">
      These items needs Import Permit from Saudi FDA prior to arrive in the Saudi Arabia. The Import Permit has to be applied through the GHAD system of Saudi FDA, it need few technical documents in pdf from legal manufacturer.</p>
      `,
    },
    {
      num: '07',
      title: 'Classification',
      desc: `
      <p class="pb-6">
      There are items used in Hospital labs, General Labs, Research Labs, if, any establishment wish to deal with such items, must get classified them under Saudi FDA Classification System
     
</p>
  <p> <span class="text-[#2D6BD9]">  http://pcs.sfda.gov.sa/Default.En.aspx </span></p>
      `,
    },
    {
      num: '08',
      title: 'Low Risk Med. Dev. Registration for Class 1 non-sterile, non-measurable',
      desc: '<p>This activity is optional and Saudi FDA have right to accept the request else, Saudi FDA will direct the request for MDMA.</p>',
    },
    {
      num: '09',
      title: 'National Centre for Med. Dev. Reporting NCMDR (Post Market Services)',
      desc: ` <p class="pb-6">
      The National Center for Medical Devices Reporting (NCMDR) is devoted to receive any adverse event reports and recalls about any medical devices from healthcare facilities as well as manufacturer all around KSA, studying them and working together with manufacturers and suppliers to take the right action and assuring the proper safe performance. NCMDR also aims to cooperate with the other international safety alert reporting centers to exchange reports received about medical devices used anywhere.
     
</p>
  <p> <span class="text-[#2D6BD9]">   https://ncmdr.sfda.gov.sa/AboutNCMDR.aspx </span></p>`,
    },
    {
      num: '10',
      title: 'MOI approvals via SFDA for the list of chemicals specified by MOI',
      desc: `<p class="">
      There are Two Lists from MOI (Ministry of Interior) of Saudi Arabia has some hazardous chemicals which are used in the formulae of IVDs, Lab reagents such types of products must get the approval prior through GHAD and from MOI (Ministry of Interior) of Saudi Arabia to import the shipment in Saudi Arabia.
</p>
`,
    },
    {
      num: '11',
      title: 'Train in-house regulatory staff of the company for all the activities listed above',
      desc: '<p>A complete Training will be given to the in-house regulatory staff of the company for all the activities listed above via Zoom, MS Teams live on SFDA’s GHAD system case by case.</p>',
    },
  ];

  ngOnInit(): void {
    this.testimonials = [{
      id:1,
      data:`<div class="flex-col justify-between items-center gap-3">
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
    </div>`
    }]
   }

   ngAfterViewInit(): void {
    const element = this.elementRef.nativeElement.querySelector('.dynamic-content');

    this.renderer.listen(element, 'click', (event: Event) => {
      this.handleClick(event);
    });
   }

   handleClick(event:any){
      console.log(event,"event--------------");
      
   }


   visible: boolean = false;

    showDialog() {
        this.visible = true;
    }

    calendly:any

    bookMeeting() {
      this.calendly = document.getElementsByClassName('calendly-badge-content');
  
      for (var i = 0; i < this.calendly.length; i++) {
        this.calendly[i].click();
      }
    }
}
