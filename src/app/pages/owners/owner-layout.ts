import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-owner-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './owner-layout.html',
  styleUrls: ['./owner-layout.scss']
})
export class OwnerLayout {}
