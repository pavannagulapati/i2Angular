import {Component, ViewEncapsulation} from '@angular/core'
@Component({
  selector: 'app-B',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './b.component.html',
  styleUrls: ['../app.component.css']
})
export class B {
  title = 'my-app';
} 