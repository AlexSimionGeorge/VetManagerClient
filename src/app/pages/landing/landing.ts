import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  templateUrl: './landing.html',
  imports: [
    RouterLink
  ],
  styleUrls: ['./landing.scss']
})
export class LandingComponent {}
