import { Component } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Clovis';
  title = 'Tour of Heroes'
}
