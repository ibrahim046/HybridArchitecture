import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit {
  imageSrc: string | ArrayBuffer | null = null;

  dragOverHandler(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    // Logique pour changer le style si nécessaire
  }

  dragLeaveHandler(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    // Logique pour réinitialiser le style si nécessaire
  }

  dropHandler(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer && event.dataTransfer.files.length) {
      this.validateAndPreviewImage(event.dataTransfer.files[0]);
    }
  }

  fileChangeHandler(event: any) {
    if (event.target.files && event.target.files.length) {
      this.validateAndPreviewImage(event.target.files[0]);
    }
  }

  validateAndPreviewImage(file: File) {
    if (file.size > 10485760) { // 10MB limit
      alert('File is too big!');
      return;
    }
    if (!file.type.match('image.*')) {
      alert('Only image files are allowed!');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      this.imageSrc = reader.result;
    };
    reader.readAsDataURL(file);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
