import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {
  private loadImageSource = new BehaviorSubject<string | null>(null);
  loadImage$ = this.loadImageSource.asObservable();

  constructor() { }

  setLoadImage(imageURL: string | null): void {
    this.loadImageSource.next(imageURL);
  }

}
