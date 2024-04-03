import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-image-text-card',
  templateUrl: './image-text-card.component.html',
  styleUrl: './image-text-card.component.scss'
})
export class ImageTextCardComponent {

  @Input()
  image: string = "./assets/horizontal-octopus.webp";
  @Input()
  title: string = "Title";
  @Input()
  description: string = "Description goes here. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A blanditiis consectetur culpa. Animi atque consequatur exercitationem expedita incidunt modi necessitatibus, nesciunt, officiis praesentium, quos sequi suscipit totam ullam vel veniam!";
  @Input()
  url: string = "";

}
