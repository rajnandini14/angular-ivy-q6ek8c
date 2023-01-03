import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  dataDisplay: any;

  msgSendToParent: string;

  ngOnInit() {
    this.msgSendToParent = 'Hiii !!!!';
  }

  receiveDataInOnInit(P) {
    this.dataDisplay = P;
  }
}
