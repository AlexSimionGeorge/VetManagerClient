import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-vet-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './vet-layout.html',
  styleUrls: ['./vet-layout.scss']
})
export class VetLayout {}
