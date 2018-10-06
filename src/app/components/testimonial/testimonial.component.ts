import {Component} from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  
})
export class TestimonialComponent {
  selected = 0;
  hovered = 0;
  readonly = false;
}
