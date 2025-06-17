import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {LogoutButtonComponent} from '../../auth/logout/logout-button';

@Component({
  selector: 'app-vet-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, LogoutButtonComponent],
  templateUrl: './vet-layout.html',
  styleUrls: ['./vet-layout.scss']
})
export class VetLayout {}
