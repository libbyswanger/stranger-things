import { Component, OnInit } from '@angular/core';
import { Light } from '../light';
import { LIGHTS } from '../light-data';

@Component({
  selector: 'app-lights',
  templateUrl: './lights.component.html',
  styleUrls: ['./lights.component.css']
})
export class LightsComponent implements OnInit {

  lights: Light[];

  constructor() { }

  ngOnInit() {
    this.lights = LIGHTS;
  }
}
