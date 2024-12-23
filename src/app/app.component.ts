import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showPdf: boolean = false;
  title = 'face-detection-pdf-restriction';

  constructor(private faceDetectionService: FaceDetectionService) {
    this.faceDetectionService.faceDetected.subscribe(detected => {
      this.showPdf = detected;
  });
}
}