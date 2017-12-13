import { Component, OnInit } from '@angular/core';
import { Light } from '../light'
import { Input } from '@angular/core';
import { setTimeout } from 'timers-browserify';

@Component({
  selector: 'st-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.css']
})
export class LightComponent implements OnInit {

  @Input() light:Light;
  
  constructor() {
   }

  ngOnInit() {
  }

  registerKeyDown(key:string) {
    if (this.light.letter == key.toUpperCase()) {
      this.light.on = true;
      setTimeout(() => {
        this.light.on = false;
      }, 500);
    }
  }
}
