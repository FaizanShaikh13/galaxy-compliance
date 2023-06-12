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
        window.open("src/assets/pdfs/UDI-Exp.Certificate_1993 To 2008.pdf", '_blank');
        break
    }
  }
  ngOnInit(): void {
  }

}
