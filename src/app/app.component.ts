import { Component } from '@angular/core';
import { LIGHTS } from './light-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Stranger Webapps';
  lights = LIGHTS;
}
