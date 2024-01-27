import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { QRCodeModule } from 'angularx-qrcode';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, QRCodeModule],
  template: `
    <h1>Angular.dev</h1>
    <qrcode
      [qrdata]="'https://angular.dev/'"
      [width]="256"
      [errorCorrectionLevel]="'M'"
      [imageSrc]="'assets/angular-logo.png'"
      [imageWidth]="100"
      [imageHeight]="100"
    ></qrcode>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'qrCodeAngular';
}
