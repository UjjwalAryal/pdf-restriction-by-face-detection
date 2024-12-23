import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FaceDetectionService implements OnInit{
  private model: any;


  async ngOnInit(): Promise<void> {
    await this.loadModel();
  }

  private async loadModel() {
    // Load the MediaPipe face detection model
    this.model = await faceapi.nets.ssdMobilenetv1.loadFromUri('/assets/models');
    await faceapi.nets.faceLandmark68Net.loadFromUri('/models');
    await faceapi.nets.faceRecognitionNet.loadFromUri('/models');
  }

  public async detectFaces(videoElement: HTMLVideoElement): Promise<any[]> {
    const detections = await faceapi.detectAllFaces(videoElement, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceDescriptors();
    return detections;
  }
}
