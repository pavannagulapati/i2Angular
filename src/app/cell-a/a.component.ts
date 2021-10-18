import {Component, ViewEncapsulation} from '@angular/core'
@Component({
  selector: 'app-A',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './a.component.html',
  styleUrls: ['../app.component.css']
})
export class A {
  title = 'my-app';
} 