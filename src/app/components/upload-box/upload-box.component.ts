import { Component } from '@angular/core';
import {ImageServiceService} from "../../services/image-service.service";

@Component({
  selector: 'app-upload-box',
  templateUrl: './upload-box.component.html',
  styleUrl: './upload-box.component.scss'
})
export class UploadBoxComponent {

  constructor(private imageService: ImageServiceService) {}

  onChange(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageService.setLoadImage(reader.result as string);
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

}
