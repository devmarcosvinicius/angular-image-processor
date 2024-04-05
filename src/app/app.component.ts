import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'image-processor-angular-new';
  file: File | null = null;
  imageUrl: string | null = null;
  cropData: any = {};

  constructor(private http: HttpClient) {}

  onFileChange(event: any) {
    this.file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageUrl = e.target.result;
    };
    reader.readAsDataURL(this.file!);
  }

  cropImage() {
    if (!this.cropData.x || !this.cropData.y || !this.cropData.width || !this.cropData.height) {
      alert('Please select a crop area.');
      return;
    }

    const formData = new FormData();
    formData.append('image', this.file!);
    formData.append('x', this.cropData.x);
    formData.append('y', this.cropData.y);
    formData.append('width', this.cropData.width);
    formData.append('height', this.cropData.height);

    this.http.post<any>('http://localhost:5000/crop_image', formData).subscribe((response) => {
      this.imageUrl = URL.createObjectURL(response);
    });
  }
}
