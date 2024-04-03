import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-right-image-card',
  templateUrl: './right-image-card.component.html',
  styleUrl: './right-image-card.component.scss'
})
export class RightImageCardComponent {
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
