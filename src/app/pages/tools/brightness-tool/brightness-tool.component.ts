import { Component } from '@angular/core';
import {ImageServiceService} from "../../../services/image-service.service";
// import {  } from 'sharp';

@Component({
  selector: 'app-brightness-tool',
  templateUrl: './brightness-tool.component.html',
  styleUrl: './brightness-tool.component.scss'
})
export class BrightnessToolComponent {
  imageURL: string | null = null;
  isImageLoaded: boolean = false;

  constructor(private imageService: ImageServiceService) {}

  ngOnInit(): void {
    this.imageService.loadImage$.subscribe((imageURL) => {
      if (imageURL == null) return;
      console.log("aqui")
      this.imageURL = imageURL;
      this.isImageLoaded = true;
    });
  }

}
