import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FaceDetectionService } from '../services/face-detection.service';

@Component({
  selector: 'app-face-detection',
  templateUrl: './face-detection.component.html',
  styleUrls: ['./face-detection.component.scss']
})
export class FaceDetectionComponent implements OnInit {
  @Output() faceDetected = new EventEmitter<boolean>();
  private videoElement: HTMLVideoElement;

  constructor(private faceDetectionService: FaceDetectionService) {}

  ngOnInit(): void {
    this.videoElement = document.createElement('video');
    this.startFaceDetection();
  }

  private async startFaceDetection() {
    await this.faceDetectionService.initialize();
    this.faceDetectionService.startVideoStream(this.videoElement);

    this.faceDetectionService.detectFace(this.videoElement, (faceDetected) => {
      this.faceDetected.emit(faceDetected);
    });
  }

}
