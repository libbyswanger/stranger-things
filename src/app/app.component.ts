import { Component } from '@angular/core';
import { LIGHTS } from './light-data';

@Component({
  selector: 'st-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Stranger Webapps';
  lights = LIGHTS;
}
