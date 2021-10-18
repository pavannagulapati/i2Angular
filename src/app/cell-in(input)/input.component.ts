import {Component, ViewEncapsulation} from '@angular/core'
@Component({
  selector: 'app-Input',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './input.component.html',
  styleUrls: ['../app.component.css']
})
export class Input {
  title = 'my-app';
} 