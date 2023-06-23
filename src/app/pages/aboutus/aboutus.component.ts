import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

  constructor() { }

  openPdf(val:number){
    switch(val){
      case 1:
        window.open("/assets/pdfs/UDI-Exp.Certificate_1993 To 2008.pdf", '_blank');
        break
      case 2:
        window.open("/assets/pdfs/Man of Div AFMS.pdf", '_blank');
        break
      case 3:
        window.open("/assets/pdfs/AFMS Ser.Cert 2009 to 2022.pdf", '_blank');
        break
      case 4:
        window.open("/assets/pdfs/SFDA Cert.pdf", '_blank');
        break
      case 5:
        window.open("/assets/pdfs/Service certificate_02-03-2009 to 02-06-2022.pdf", '_blank');
        break
      case 6:
        window.open("/assets/pdfs/Thermo App.Cert.pdf", '_blank');
        break     
    }
  }
  ngOnInit(): void {
  }

}
