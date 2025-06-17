import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {LogoutButtonComponent} from '../../auth/logout/logout-button';

@Component({
  selector: 'app-owner-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, LogoutButtonComponent],
  templateUrl: './owner-layout.html',
  styleUrls: ['./owner-layout.scss']
})
export class OwnerLayout {}
