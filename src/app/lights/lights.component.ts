import { Component, OnInit } from '@angular/core';
import { Light } from '../light';
import { LIGHTS } from '../light-data';

@Component({
  selector: 'st-lights',
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
