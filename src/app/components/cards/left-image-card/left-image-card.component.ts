import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-left-image-card',
  templateUrl: './left-image-card.component.html',
  styleUrl: './left-image-card.component.scss'
})
export class LeftImageCardComponent {
  @Input()
  subtitle: string = "subtitle";
  @Input()
  title: string = "title";
  @Input()
  description: string = "description";
  @Input()
  button: string = "button";

  @Input()
  imgSrc1: string = "image 1 url";
  @Input()
  imgSrc2: string = "image 2 url";
  @Input()
  imgSrc3: string = "image 3 url";
}
