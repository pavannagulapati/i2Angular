import {Component, ViewEncapsulation} from '@angular/core'
@Component({
  selector: 'app-Nested',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './nested.component.html',
  styleUrls: ['../app.component.css']
})
export class Nested {
  title = 'my-app';
} 